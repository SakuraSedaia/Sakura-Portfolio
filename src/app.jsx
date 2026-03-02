import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense, ErrorBoundary } from "solid-js";
import { MetaProvider } from "@solidjs/meta";
import "./styles/app.scss";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <ErrorBoundary fallback={(err) => <div class="content-container">Error: {err.message}</div>}>
            <Suspense fallback={<div class="content-container">Loading...</div>}>
              {props.children}
            </Suspense>
          </ErrorBoundary>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}

