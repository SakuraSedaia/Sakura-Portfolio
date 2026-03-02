import Nav from "~/components/navigation/nav.jsx";
import MobileNav from "~/components/navigation/mobile-nav.jsx";
import { Show, createMemo } from "solid-js";
import { useLocation } from "@solidjs/router";
import { Meta } from "@solidjs/meta";
import Routes from "~/jsondata/routes.json";

export default function Header(props) {
  const location = useLocation();

  const isHiddenFromSearch = createMemo(() => {
    const path = location.pathname.replace(/^\/|\/$/g, "");
    
    // Check main routes
    const mainRoute = Routes.find(r => r.path === path || (r.path === "" && path === ""));
    if (mainRoute?.hide_from_search) return true;

    // Check subpages
    for (const route of Routes) {
      if (route.subpages) {
        const subpage = route.subpages.find(s => s.path === path);
        if (subpage?.hide_from_search) return true;
      }
    }

    return false;
  });

  const bgImg = () => {
    const path = `/images/headers/${props.img}`;
    return {
      "background-image": `image-set(url("${path}.jxl") type("image/jxl"), url("${path}.jpg") type("image/jpeg"))`
    };
  };

  let page_title = props.page_title;
  if (page_title === undefined) {
    page_title = "Sedaia Designs";
  }

  return (
    <>
      <Show when={isHiddenFromSearch()}>
        <Meta name="robots" content="noindex, nofollow" />
      </Show>
      <MobileNav title={page_title} />
      <header style={bgImg()}>
        {/* Navigation Content */}
        <Nav title={page_title} />

        <Show when={props.onlyNav === undefined}>
          {/* Header Content */}
          <div class={"header-box"}>
            <div class={"header-position"}>
              <div class={"header-content"}>
                <Show when={props.title !== undefined}>
                  <h1>{props.title}</h1>
                </Show>

                <Show when={props.desc !== undefined}>
                  <p>{props.desc}</p>
                </Show>
              </div>
            </div>
          </div>
        </Show>
      </header>
    </>
  );
}


