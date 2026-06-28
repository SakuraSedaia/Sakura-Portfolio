import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { ErrorBoundary, Suspense } from "solid-js";
import "./app.scss";
import NavBar from "~/components/sections/common/nav-bar";
import Footer from "~/components/sections/common/footer";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <NavBar />
          <ErrorBoundary fallback={<div>Something went wrong</div>}>
            <Suspense>{props.children}</Suspense>
          </ErrorBoundary>
          <Footer />
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
