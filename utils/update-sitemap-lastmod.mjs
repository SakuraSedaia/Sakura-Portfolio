#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import {
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

const SOURCE_EXTENSIONS = [
  ".tsx",
  ".ts",
  ".jsx",
  ".js",
  ".mjs",
  ".cjs",
  ".json",
  ".md",
  ".mdx",
];
const repoRoot = execFileSync("git", ["rev-parse", "--show-toplevel"], {
  encoding: "utf8",
}).trim();

function runGit(args) {
  try {
    return execFileSync("git", args, {
      cwd: repoRoot,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return "";
  }
}

function toPosix(value) {
  return value.split(path.sep).join("/");
}

function toRepoPath(value) {
  return toPosix(path.relative(repoRoot, value));
}

function isSourceFile(value) {
  return SOURCE_EXTENSIONS.includes(path.extname(value));
}

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, "utf8"));
}

function collectFiles(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const fullPath = path.join(directory, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) return collectFiles(fullPath);
    return [fullPath];
  });
}

function resolveImport(fromFile, specifier) {
  if (!specifier.startsWith(".") && !specifier.startsWith("~/")) return null;

  const basePath = specifier.startsWith("~/")
    ? path.join(srcDirectory, specifier.slice(2))
    : path.resolve(path.dirname(fromFile), specifier);

  if (existsSync(basePath) && statSync(basePath).isFile()) return basePath;

  for (const extension of SOURCE_EXTENSIONS) {
    const filePath = `${basePath}${extension}`;
    if (existsSync(filePath)) return filePath;
  }

  if (existsSync(basePath) && statSync(basePath).isDirectory()) {
    for (const extension of SOURCE_EXTENSIONS) {
      const indexPath = path.join(basePath, `index${extension}`);
      if (existsSync(indexPath)) return indexPath;
    }
  }

  return null;
}

function collectDependencies(entryFile, seen = new Set()) {
  const repoPath = toRepoPath(entryFile);
  if (seen.has(repoPath) || !existsSync(entryFile) || !isSourceFile(entryFile))
    return seen;

  seen.add(repoPath);

  const source = readFileSync(entryFile, "utf8");
  const imports = source.matchAll(
    /(?:import|export)\s+(?:[^"'()]*?\s+from\s+)?["']([^"']+)["']|import\(\s*["']([^"']+)["']\s*\)/g,
  );

  for (const match of imports) {
    const importedFile = resolveImport(entryFile, match[1] ?? match[2]);
    if (importedFile) collectDependencies(importedFile, seen);
  }

  return seen;
}

function routePathFromFile(filePath) {
  const relativePath = toPosix(path.relative(routesDirectory, filePath));
  const extension = path.extname(relativePath);
  const withoutExtension = relativePath.slice(0, -extension.length);
  const segments = withoutExtension.split("/");

  if (
    segments.some(
      (segment) => segment.startsWith("[") || segment.startsWith("("),
    )
  ) {
    return null;
  }

  const routeSegments = segments.filter((segment) => segment !== "index");
  return routeSegments.length === 0 ? "/" : `/${routeSegments.join("/")}`;
}

function gitLastModified(files) {
  const dates = files
    .map((file) => runGit(["log", "-1", "--format=%cs", "--", file]))
    .filter(Boolean)
    .sort();

  return dates.at(-1);
}

function formatSitemap(routes) {
  const entries = routes
    .map(
      ({ url, lastmod }) => `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`,
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

const srcDirectory = path.join(repoRoot, "src");
const routesDirectory = path.join(srcDirectory, "routes");
const sitemapPath = path.join(repoRoot, "public", "sitemap.xml");
const packageJson = readJson(path.join(repoRoot, "package.json"));
const siteUrl = packageJson.homepage.replace(/\/$/, "");
const today = new Date().toISOString().slice(0, 10);
const stagedFiles = new Set(
  runGit(["diff", "--cached", "--name-only", "--diff-filter=ACMRT"])
    .split("\n")
    .filter(Boolean),
);

const routes = collectFiles(routesDirectory)
  .filter((file) => [".tsx", ".ts", ".jsx", ".js"].includes(path.extname(file)))
  .map((file) => {
    const routePath = routePathFromFile(file);
    if (!routePath) return null;

    const dependencies = [...collectDependencies(file)];
    const hasStagedDependency = dependencies.some((dependency) =>
      stagedFiles.has(dependency),
    );
    const lastmod = hasStagedDependency
      ? today
      : (gitLastModified(dependencies) ?? today);

    return {
      path: routePath,
      url: `${siteUrl}${routePath === "/" ? "/" : routePath}`,
      lastmod,
    };
  })
  .filter(Boolean)
  .sort((first, second) => {
    if (first.path === "/") return -1;
    if (second.path === "/") return 1;
    return first.path.localeCompare(second.path);
  });

writeFileSync(sitemapPath, formatSitemap(routes), "utf8");

console.log(`Updated public/sitemap.xml with ${routes.length} routes.`);
