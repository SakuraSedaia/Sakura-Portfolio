import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, ErrorBoundary } from "solid-js";
import Nav from "~/components/nav";
import "./styles/app.scss";

export default function App() {
  return (
    <Router
      root={(props) => (
        <ErrorBoundary fallback={(err) => <div class={"content-container"}><h1>Error</h1><p>{err.message}</p></div>}>
          <Suspense fallback={<div class={"content-container"}><p>Loading...</p></div>}>
            {props.children}
          </Suspense>
        </ErrorBoundary>
      )}
    >
      <FileRoutes />
    </Router>
  );
}

