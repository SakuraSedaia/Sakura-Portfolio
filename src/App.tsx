import type { Component } from "solid-js";
import { Route, Router } from "@solidjs/router";
import { Button } from "@kobalte/core/button";
import Navbar from "./components/navbar";
import Heading from "./components/heading";

// Import Pages from ./pages
import Home from "./pages/home";
import SACR from "./pages/sacr";
import Contact from "./pages/contact";
import SRGUI from "./pages/sr_gui";
import CADDesigns from "./pages/cad-designs";
import Renders from "./pages/renders";
import Animations from "./pages/animations";

const App: Component = () => {
  return (
    <div class="viewport mb-0">
      <header class="body-container">
        <div class="header-sizing block bg-[url(src/data/images/renders/Environments/EnchantingRoom-Oct2023.png)] bg-cover bg-center px-30">
          <Navbar />
          <Heading />
        </div>
      </header>

      <Router>
        <Route path="/" component={Home} />
        <Route path="/sakura-character-rig" component={SACR} />
        <Route path="/sakura-rig-gui" component={SRGUI} />

        <Route path="/cad-designs" component={CADDesigns} />
        <Route path="/renders" component={Renders} />
        <Route path="/animations" component={Animations} />

        <Route path="/contact" component={Contact} />
      </Router>
    </div>
  );
};

export default App;
