# Subdomain Route Groups Plan

This plan captures a possible future consolidation where route groups in this
portfolio app are served from dedicated subdomains. It is intentionally deferred:
`wiki.sakura-sedaia.com` and `projects.sakura-sedaia.com` are currently separate
repositories and codebases.

## Current State

- `sakura-sedaia.com` serves the main portfolio routes, including `/about`,
  `/contact`, and `/commissions`.
- `wiki.sakura-sedaia.com` is currently deployed from a separate wiki codebase.
- `projects.sakura-sedaia.com` is currently deployed from a separate projects
  codebase.
- This repository already has partial support for subdomain-aware routing:
  - `src/utils/url-prefixer.ts` maps `wiki://` and `projects://` links to their
    public subdomains.
  - `src/utils/route-parser.ts` can detect route-group subdomains under
    `sakura-sedaia.com`.
  - `src/routes/wiki/` exists as an in-repo route group, but it should not be
    treated as the canonical wiki deployment while the separate wiki repository
    remains active.

## Future Goal

If the wiki and projects codebases are merged into this SolidStart app, route
groups can become canonical subdomain sections:

- `/wiki/...` becomes `https://wiki.sakura-sedaia.com/...`.
- `/projects/...` becomes `https://projects.sakura-sedaia.com/...`.
- Top-level pages such as `/about` remain on `https://sakura-sedaia.com/about`.

The path-based route groups can remain as internal implementation routes, while
Vercel host-based rewrites expose the cleaner subdomain URLs publicly.

## Recommended Deployment Shape

Use one Vercel project for the consolidated app and attach all relevant domains:

- `sakura-sedaia.com`
- `www.sakura-sedaia.com`
- `wiki.sakura-sedaia.com`
- `projects.sakura-sedaia.com`

Add host-based rewrites in `vercel.json`:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "rewrites": [
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "wiki.sakura-sedaia.com"
        }
      ],
      "destination": "/wiki/:path*"
    },
    {
      "source": "/:path*",
      "has": [
        {
          "type": "host",
          "value": "projects.sakura-sedaia.com"
        }
      ],
      "destination": "/projects/:path*"
    }
  ]
}
```

Once the subdomains are canonical, add permanent redirects from the root-domain
path groups:

```json
{
  "redirects": [
    {
      "source": "/wiki/:path*",
      "has": [
        {
          "type": "host",
          "value": "sakura-sedaia.com"
        }
      ],
      "destination": "https://wiki.sakura-sedaia.com/:path*",
      "permanent": true
    },
    {
      "source": "/projects/:path*",
      "has": [
        {
          "type": "host",
          "value": "sakura-sedaia.com"
        }
      ],
      "destination": "https://projects.sakura-sedaia.com/:path*",
      "permanent": true
    }
  ]
}
```

## Vercel Integration Instructions

Use this sequence when the new consolidated structure is ready to become
canonical in Vercel.

### 1) Canonical Project Setup

- Use one Vercel project connected to this repository and production branch.
- Keep the root domain (`sakura-sedaia.com`) healthy on production first.
- Do not enable migration redirects yet.

### 2) Domain Attachment

In `Project Settings -> Domains`, attach all required hosts:

- `sakura-sedaia.com`
- `www.sakura-sedaia.com`
- `wiki.sakura-sedaia.com`
- `projects.sakura-sedaia.com`

Wait until each domain reports `Valid Configuration` before moving forward.

### 3) DNS Mapping

- Configure apex/root according to current Vercel apex guidance.
- Configure `www`, `wiki`, and `projects` as CNAMEs to the Vercel alias target
  shown in project settings.
- Confirm each host resolves to the same Vercel project deployment.

### 4) Host Rewrite Activation

- Add the `rewrites` block below in `vercel.json`.
- Deploy to preview, then production.
- Verify:
  - `https://wiki.sakura-sedaia.com/<path>` serves `/wiki/<path>` content.
  - `https://projects.sakura-sedaia.com/<path>` serves `/projects/<path>` content.

### 5) Redirect Cutover (After Parity Only)

Enable the `redirects` block only after wiki/projects parity is complete and
canonical metadata/sitemap logic has been updated.

- Before this point, keep path groups on root domain functional for migration.
- After this point, canonicalize:
  - `https://sakura-sedaia.com/wiki/<path>` -> `https://wiki.sakura-sedaia.com/<path>`
  - `https://sakura-sedaia.com/projects/<path>` -> `https://projects.sakura-sedaia.com/<path>`

### 6) Preview and Production Validation

- Validate all four hosts on preview deployments for each release.
- Validate final behavior in production:
  - host rewrites return expected content and status codes.
  - redirects return permanent 301 responses only after cutover.
- Re-run sitemap submission after canonical domain changes.

### 7) Rollback Strategy

- Fast rollback: remove permanent redirects and redeploy.
- Keep host rewrites in place so subdomains continue serving mapped route groups.
- Use Vercel logs to confirm host/path behavior during rollback verification.

## Code Changes Needed Before Consolidation

1. Decide whether the wiki and projects repositories should be merged into this
   app or kept as independent Vercel projects.
2. If merging, port the canonical wiki and projects routes into `src/routes/`.
3. Add or update route-group manifests for `wiki` and `projects`.
4. Update metadata generation so canonical URLs use the correct subdomain for
   each route group instead of always resolving against `sakura-sedaia.com`.
5. Update sitemap generation to emit URLs for all canonical domains, or split
   sitemaps per subdomain if that becomes easier to maintain.
6. Keep `wiki://` and `projects://` prefixes as the preferred internal link
   style for cross-section links.
7. Verify Vercel redirects and rewrites with production-like preview domains
   before making permanent redirects live.

## Notes

- Do not apply the Vercel rewrite plan while the wiki and projects subdomains
  are still served by separate repositories.
- Until consolidation happens, this portfolio app should continue linking to
  `wiki.sakura-sedaia.com` and `projects.sakura-sedaia.com` as external sites.
- The existing in-repo `src/routes/wiki/` pages can still be useful as a staging
  area or future migration target, but they should not silently replace the
  standalone wiki deployment.
