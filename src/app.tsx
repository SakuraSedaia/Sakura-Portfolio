import { Route, Router } from "@solidjs/router";
import "./app.css";

// Import Page Components
import Navbar from "./components/navigation-bar";

// Import Pages from ./pages
import Home from "./routes/about";
import Contact from "./routes/contact";

import SRGUI from "./routes/assetpages/sakura-rig-gui";
import SACR from "./routes/assetpages/sacr";

import Renders from "./routes/works/renders";
import NotFound from "./routes/[...404]";
import { Show } from "solid-js";

export default function App() {
  const devWarn = false;
  return (
    <div class="viewport mb-0">
      <Show when={devWarn}>
        <div class="devalert bg-amber-300 pt-8 pb-1 text-black">
          <h1 class="text-2xl font-bold">WARNING</h1>
          <p class="pb-0">
            This site is currently undergoing a remodel and as such a lot of
            content has not been added as of yet, please be patient while I work
            to build the new site.
          </p>
        </div>
      </Show>

      <Navbar />

      <Router>
        <Route path="/" component={Home} />
        <Route path="/contact" component={Contact} />

        <Route path="/sakura-character-rig" component={SACR} />
        <Route path="/sakura-rig-gui" component={SRGUI} />

        <Route path="/renders" component={Renders} />
        <Route path="*404" component={NotFound} />
      </Router>
    </div>
  );
}
