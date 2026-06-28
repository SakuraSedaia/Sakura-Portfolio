import { HttpStatusCode } from "@solidjs/start";
import Metadata from "~/components/page-metadata";

export default function NotFound() {
  return (
    <main>
      <Metadata
        title={"Not Found | Sedaia Designs"}
        description={"The requested Sedaia Designs page could not be found."}
        noIndex
      />
      <HttpStatusCode code={404} />
      <h1>Page Not Found</h1>
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
    </main>
  );
}
