import Nav from "~/components/navigation/nav.jsx";
import MobileNav from "~/components/navigation/mobile-nav.jsx";
import { Show } from "solid-js";

export default function Header(props) {
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


