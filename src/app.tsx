import { Route, Router } from "@solidjs/router";
import "./app.css";

// Import Page Components
import Navbar from "./components/navigation-bar";
import Heading from "./components/heading";
import Footer from "./components/footer";

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
import Commissions from "./routes/commissions";

export default function App() {
  return (
    <div class="viewport mb-0">
      <div class="devalert bg-amber-300 text-black pt-8 pb-1">
        <h1 class="text-2xl font-bold">WARNING</h1>
        <p class=" pb-0">This site is currently undergoing a remodel and as such a lot of content has not been added as of yet, please be patient while I work to build the new site.</p>
      </div>
      <header class="body-container" style="border-bottom: 4px solid oklch(28.759% 0.11731 357.455);">
        <div class="header-sizing block bg-cover bg-center px-30">
          <Navbar />
          <Heading />
        </div>
      </header>
      <Router>
        <Route path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/commissions" component={Commissions} />

        <Route path="/sakura-character-rig" component={SACR} />
        <Route path="/sakura-rig-gui" component={SRGUI} />
        <Route path="/rig-assets" component={RigAssets} />
        <Route path="/scene-assets" component={SceneAssets} />

        <Route path="/cad-designs" component={CADDesigns} />
        <Route path="/renders" component={Renders} />
        <Route path="/animations" component={Animations} />
        <Route path="/web-development" component={WebDev} />

      </Router>

      <div class="footer-container" style="border-top: 4px solid oklch(28.759% 0.11731 357.455);">
        <Footer />
      </div>
    </div>
  );
}