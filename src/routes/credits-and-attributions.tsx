import Metadata from "~/components/meta/metadata";
import Header from "~/components/sections/global/header";
import { Link } from "~/components/routing/link";
import IconBundle from "~/components/graphics/icon-bundle";

const CODEBERG_REPO_BASE_URL =
  "https://codeberg.org/SakuraSedaia/Sakura-Portfolio/src/branch/portfolio-v3-ts";
const CODEBERG_VECTORS_URL = `${CODEBERG_REPO_BASE_URL}/public/images/vectors`;
const CODEBERG_FONTS_URL = `${CODEBERG_REPO_BASE_URL}/public/fonts/google`;
const CODEBERG_OFL_URL = `${CODEBERG_REPO_BASE_URL}/public/fonts/OFL.txt`;

export default function CreditsAndAttributions() {
  return (
    <main class={"route__credits-and-attributions"}>
      <Metadata
        title={"Credits and Attributions | Sedaia Designs"}
        description={
          "Credits and attributions for the core technologies, libraries, icon sets, and other external assets used by Sedaia Designs."
        }
        url={"/credits-and-attributions"}
      />

      <Header
        title={"Credits and Attributions"}
        description={
          <p>
            This page credits the major technologies and external assets used
            across Sedaia Designs.
          </p>
        }
        class={"index__header"}
      />

      <section class={"credits-and-attributions__section"}>
        <h2 id={"creditsCoreTech"}>Core Technologies</h2>
        <ul class={"credits-and-attributions__list"}>
          <li>
            <strong>SolidStart / SolidJS</strong>: Application framework and UI
            runtime.{" "}
            <Link path={"https://start.solidjs.com"}>start.solidjs.com</Link>
          </li>
          <li>
            <strong>TypeScript</strong>: Strongly typed language tooling for the
            project codebase.{" "}
            <Link path={"https://www.typescriptlang.org"}>
              typescriptlang.org
            </Link>
          </li>
          <li>
            <strong>Vite</strong>: Build tooling and development server.{" "}
            <Link path={"https://vitejs.dev"}>vitejs.dev</Link>
          </li>
          <li>
            <strong>PNPM</strong>: Package management and dependency
            installation. <Link path={"https://pnpm.io"}>pnpm.io</Link>
          </li>
          <li>
            <strong>SCSS (Sass)</strong>: Stylesheet preprocessor used for
            modular styling.{" "}
            <Link path={"https://sass-lang.com"}>sass-lang.com</Link>
          </li>
          <li>
            <strong>Vercel</strong>: Hosting and deployment platform.{" "}
            <Link path={"https://vercel.com"}>vercel.com</Link>
          </li>
        </ul>
      </section>

      <section class={"credits-and-attributions__section"}>
        <h2 id={"creditsAssets"}>External Assets</h2>
        <ul class={"credits-and-attributions__list"}>
          <li>
            <strong>Brand and social SVG icons</strong>: Project icon assets in{" "}
            <Link path={CODEBERG_VECTORS_URL}>the vectors asset folder</Link>{" "}
            are based on icon-source projects such as Bootstrap Icons and Simple
            Icons, adapted for this site&apos;s sprite usage.
          </li>
          <li>
            <strong>Brand logo attributions in vectors folder</strong>:
            <ul class={"credits-and-attributions__nested-list"}>
              <li>
                <span class={"credits-and-attributions__logo-label"}>
                  <IconBundle name={"discord"} /> Discord
                </span>
                : Discord logo, trademark of Discord Inc.
              </li>
              <li>
                <span class={"credits-and-attributions__logo-label"}>
                  <IconBundle name={"github"} /> GitHub
                </span>
                : GitHub logo, trademark of GitHub, Inc.
              </li>
              <li>
                <span class={"credits-and-attributions__logo-label"}>
                  <IconBundle name={"youtube"} /> YouTube
                </span>
                : YouTube logo, trademark of Google LLC.
              </li>
              <li>
                <span class={"credits-and-attributions__logo-label"}>
                  <IconBundle name={"deviantart"} /> DeviantArt
                </span>
                : DeviantArt logo, trademark of DeviantArt, Inc.
              </li>
              <li>
                <span class={"credits-and-attributions__logo-label"}>
                  <IconBundle name={"git"} /> Git
                </span>
                : Git logo, trademark of Software Freedom Conservancy, Inc.
              </li>
              <li>
                <span class={"credits-and-attributions__logo-label"}>
                  <IconBundle name={"instagram"} /> Instagram
                </span>
                : Instagram logo, trademark of Meta Platforms, Inc.
              </li>
              <li>
                <span class={"credits-and-attributions__logo-label"}>
                  <IconBundle name={"pinterest"} /> Pinterest
                </span>
                : Pinterest logo, trademark of Pinterest, Inc.
              </li>
              <li>
                <span class={"credits-and-attributions__logo-label"}>
                  <IconBundle name={"reddit"} /> Reddit
                </span>
                : Reddit logo, trademark of Reddit, Inc.
              </li>
              <li>
                <span class={"credits-and-attributions__logo-label"}>
                  <IconBundle name={"twitch"} /> Twitch
                </span>
                : Twitch logo, trademark of Twitch Interactive, Inc.
              </li>
              <li>
                <span class={"credits-and-attributions__logo-label"}>
                  <IconBundle name={"twitter"} /> Twitter
                </span>
                : Twitter logo (service now branded as X), trademark of X Corp.
              </li>
              <li>
                <span class={"credits-and-attributions__logo-label"}>
                  <IconBundle name={"patreon"} /> Patreon
                </span>
                : Patreon logo, trademark of Patreon, Inc.
              </li>
              <li>
                <span class={"credits-and-attributions__logo-label"}>
                  <IconBundle name={"codeberg"} /> Codeberg
                </span>
                : Codeberg logo, attributed to Codeberg e.V.
              </li>
              <li>
                <span class={"credits-and-attributions__logo-label"}>
                  <IconBundle name={"gumroad"} /> Gumroad
                </span>
                : Gumroad logo, trademark of Gumroad, Inc.
              </li>
              <li>
                <span class={"credits-and-attributions__logo-label"}>
                  <IconBundle name={"blender-bw"} /> Blender
                </span>
                : Blender logo, trademark of Blender Foundation.
              </li>
              <li>
                <span class={"credits-and-attributions__logo-label"}>
                  <IconBundle name={"python-bw"} /> Python
                </span>
                : Python logo, trademark of the Python Software Foundation.
              </li>
            </ul>
          </li>
          <li>
            <strong>Brand ownership notice</strong>: All product names, logos,
            and brands in this project remain the property of their respective
            owners, and are used for identification and credit purposes.
          </li>
          <li>
            <strong>Web fonts</strong>: Audiowide, Play, Noto Sans, and Source
            Code Pro are sourced from{" "}
            <Link path={"https://fonts.google.com"}>Google Fonts</Link> and are
            locally hosted in{" "}
            <Link path={CODEBERG_FONTS_URL}>the fonts asset folder</Link>. These
            fonts are distributed under the SIL Open Font License (OFL); license
            text is available in <Link path={CODEBERG_OFL_URL}>OFL.txt</Link>.
          </li>
          <li>
            <strong>Project and header imagery</strong>: Render and project
            visuals used across this site are custom assets created for Sedaia
            Designs unless otherwise noted in project-specific documentation.
          </li>
        </ul>
      </section>
    </main>
  );
}
