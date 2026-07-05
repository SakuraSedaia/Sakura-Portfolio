export const URL_PREFIXES: Record<string, string> = {
  "/": "/", // Local Link, used for internal Domain Routing
  "projects://": "/projects",
  "wiki://": "https://wiki.sakura-sedaia.com",
  "store://": "https://store.sakura-sedaia.com",
};

/**
 * Resolves a path with a prefix to a full URL or internal path.
 * If the path starts with a key in URL_PREFIXES, it replaces it with the corresponding value.
 * It also ensures a proper slash separation if needed.
 */
export function resolvePrefix(path: string): string {
  for (const [prefix, replacement] of Object.entries(URL_PREFIXES)) {
    if (path.startsWith(prefix)) {
      const rest = path.slice(prefix.length);

      // If rest is empty, just return the replacement
      if (!rest) return replacement;

      // Special handling for the local "/" prefix to avoid double slashes or unnecessary logic
      if (prefix === "/" && replacement === "/") {
        return path;
      }

      // Ensure slash separation between replacement and rest
      const needsSlash = !replacement.endsWith("/") && !rest.startsWith("/");
      const hasDoubleSlash = replacement.endsWith("/") && rest.startsWith("/");

      if (hasDoubleSlash) {
        return replacement + rest.slice(1);
      }
      
      return replacement + (needsSlash ? "/" : "") + rest;
    }
  }
  return path;
}
