import { MetaProvider } from "@solidjs/meta";
import { Router, useLocation } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { createEffect, ErrorBoundary, Suspense } from "solid-js";
import type { JSX } from "solid-js";
import "~/styles/app.scss";

import NavigationBar from "~/components/sections/global/navigation-bar";
import Footer from "~/components/sections/global/footer.js";

interface AppRootProps {
  children: JSX.Element;
}

function getPageType(pathname: string) {
  if (pathname === "/wiki" || pathname.startsWith("/wiki/")) {
    return "wiki";
  }

  if (pathname === "/projects" || pathname.startsWith("/projects/")) {
    return "projects";
  }

  return "base";
}

function AppRoot(props: AppRootProps) {
  const location = useLocation();

  createEffect(() => {
    if (typeof document !== "undefined") {
      document.body.dataset.pagetype = getPageType(location.pathname);
    }
  });

  return (
    <MetaProvider>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <NavigationBar />
        <Suspense>{props.children}</Suspense>

        <Footer />
      </ErrorBoundary>
    </MetaProvider>
  );
}

export default function App() {
  return (
    <Router root={(props) => <AppRoot>{props.children}</AppRoot>}>
      <FileRoutes />
    </Router>
  );
}
