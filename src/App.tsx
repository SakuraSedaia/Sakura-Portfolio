import { Route, Router, useLocation } from "@solidjs/router";
import "./app.css";
import { Suspense, Component, createEffect, createSignal } from "solid-js";
import Navbar from "./components/navigation-bar";
import Heading from "./components/heading";

// Import Pages from ./pages
import Home from "./routes/about";
import Contact from "./routes/contact";

import SRGUI from "./routes/assetpages/sr_gui";
import SACR from "./routes/assetpages/sacr";
import RigAssets from "./routes/assetpages/rig-assets";
import SceneAssets from "./routes/assetpages/scene-assets";

import CADDesigns from "./routes/works/cad-designs";
import Renders from "./routes/works/renders";
import Animations from "./routes/works/animations";
import WebDev from "./routes/works/webdev";

export default function App() {

  return (
    <div class="viewport mb-0">
      <header class="body-container">
        <div class="header-sizing block bg-cover bg-center px-30">
          <Navbar />
          <Heading />
        </div>
      </header>

      <Router>
        <Route path="/" component={Home} />

        <Route path="/sakura-character-rig" component={SACR} />
        <Route path="/sakura-rig-gui" component={SRGUI} />
        <Route path="/rig-assets" component={RigAssets} />
        <Route path="/scene-assets" component={SceneAssets} />

        <Route path="/cad-designs" component={CADDesigns} />
        <Route path="/renders" component={Renders} />
        <Route path="/animations" component={Animations} />
        <Route path="/web-development" component={WebDev} />

        <Route path="/contact" component={Contact} />
      </Router>

      
    </div>
  );
}
