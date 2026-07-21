// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";
import { getRequestEvent } from "solid-js/web";

function getPageType(pathname: string) {
  if (pathname === "/projects" || pathname.startsWith("/projects/")) {
    return "projects";
  }

  return "base";
}

function getRequestPageType() {
  const requestUrl = getRequestEvent()?.request.url;
  let pathname = "/";

  if (requestUrl !== undefined) {
    try {
      pathname = new URL(requestUrl, "http://localhost").pathname;
    } catch {
      pathname = "/";
    }
  }

  return getPageType(pathname);
}

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/images/icon/favicon.ico" />
          {assets}
        </head>
        <body data-pagetype={getRequestPageType()}>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
