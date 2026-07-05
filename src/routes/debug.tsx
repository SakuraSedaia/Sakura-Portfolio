import { For, createMemo } from "solid-js";
import { Meta, Title } from "@solidjs/meta";
import { routesManifest, type RouteGroup } from "~/utils/routes";

interface RouteGroupSnapshot {
  name: string;
  basePath: string;
  routeCount: number;
}

function getRouteGroups() {
  return Object.entries(routesManifest)
    .filter(
      ([name, value]) =>
        name !== "$schema" &&
        typeof value === "object" &&
        value !== null &&
        "routes" in value,
    )
    .map(([name, value]) => {
      const group = value as RouteGroup;

      return {
        name,
        basePath:
          group.basePath === undefined || group.basePath.length === 0
            ? "/"
            : `/${group.basePath.replace(/^\/+/, "")}`,
        routeCount: group.routes.length,
      } satisfies RouteGroupSnapshot;
    });
}

const currentState = [
  "sakura-sedaia.com serves portfolio routes such as /about, /contact, and /commissions.",
  "wiki.sakura-sedaia.com is currently deployed from a separate wiki codebase.",
  "projects.sakura-sedaia.com is currently deployed from a separate projects codebase.",
  "This app still keeps wiki:// and projects://-aware URL prefix behavior for cross-section links.",
];

const futureGoal = [
  "If wiki and projects are merged into this SolidStart app, route groups can become canonical subdomain sections.",
  "Public URLs would resolve as `https://wiki.sakura-sedaia.com/...` and `https://projects.sakura-sedaia.com/...`.",
  "Top-level portfolio pages such as `/about` remain canonical on `https://sakura-sedaia.com/about`.",
];

const implementationSteps = [
  "Decide whether wiki and projects should be merged into this repository or remain independent Vercel projects.",
  "If merged, port the canonical wiki and projects routes into `src/routes`.",
  "Add or update route-group manifests for wiki and projects.",
  "Update metadata generation so canonical URLs use route-group subdomains.",
  "Update sitemap generation to emit canonical domain URLs (or split by subdomain).",
  "Keep wiki:// and projects:// as preferred internal cross-section link prefixes.",
  "Verify rewrites and redirects in production-like previews before permanent redirects go live.",
];

const notes = [
  "Do not apply host rewrites while wiki and projects are still served by separate repositories.",
  "Until consolidation, this app should keep linking to wiki and projects as external deployments.",
  "In-repo route groups can still act as migration staging areas without replacing standalone deployments.",
];

export default function HomeRoute() {
  const routeGroups = createMemo(getRouteGroups);

  return (
    <main class={"route-groups-page"}>
      <Title>Subdomain Route Groups Plan | Sedaia Designs</Title>
      <Meta
        name={"description"}
        content={
          "Implementation plan for consolidating wiki and projects route groups into canonical subdomain deployments."
        }
      />

      <section class={"route-groups-page__hero"}>
        <p class={"route-groups-page__eyebrow"}>Planning Page</p>
        <h1>Subdomain Route Groups</h1>
        <p>
          This page mirrors the current consolidation plan and keeps route-group
          data visible while the navigation rebuild is still in progress.
        </p>
      </section>

      <section class={"route-groups-page__section"}>
        <h2>Route Manifest Snapshot</h2>
        <p>
          The routes JSON is still active and will be used again when grouped
          navigation is rebuilt.
        </p>
        <div class={"route-groups-page__manifest-grid"}>
          <For each={routeGroups()}>
            {(group) => (
              <article class={"route-groups-page__manifest-card"}>
                <h3>{group.name}</h3>
                <p>
                  Base Path: <code>{group.basePath}</code>
                </p>
                <p>
                  Routes: <strong>{group.routeCount}</strong>
                </p>
              </article>
            )}
          </For>
        </div>
      </section>

      <section class={"route-groups-page__section"}>
        <h2>Current State</h2>
        <ul>
          <For each={currentState}>{(item) => <li>{item}</li>}</For>
        </ul>
      </section>

      <section class={"route-groups-page__section"}>
        <h2>Future Goal</h2>
        <ul>
          <For each={futureGoal}>{(item) => <li>{item}</li>}</For>
        </ul>
      </section>

      <section class={"route-groups-page__section"}>
        <h2>Recommended Deployment Shape</h2>
        <p>Use one Vercel project with host-based rewrites for:</p>
        <ul>
          <li>
            <code>sakura-sedaia.com</code>
          </li>
          <li>
            <code>www.sakura-sedaia.com</code>
          </li>
          <li>
            <code>wiki.sakura-sedaia.com</code>
          </li>
          <li>
            <code>projects.sakura-sedaia.com</code>
          </li>
        </ul>
      </section>

      <section class={"route-groups-page__section"}>
        <h2>Implementation Steps Before Consolidation</h2>
        <ol>
          <For each={implementationSteps}>{(item) => <li>{item}</li>}</For>
        </ol>
      </section>

      <section class={"route-groups-page__section"}>
        <h2>Notes</h2>
        <ul>
          <For each={notes}>{(item) => <li>{item}</li>}</For>
        </ul>
      </section>
    </main>
  );
}
