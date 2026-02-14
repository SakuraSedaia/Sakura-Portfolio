import Nav from "~/components/nav.jsx";
import { createSignal, Show } from "solid-js";

export default function Header(props) {
  const bgImg = {
    "background-image": "url('/images/headers/" + props.img + ".jpg')"
  };

  let page_title = props.page_title;
  if (page_title === undefined) {
    page_title = "Sedaia Designs";
  }

  return (
    <>
      <header style={bgImg}>
        {/* Navigation Content */}
        <Nav title={page_title} />

        <Show when={props.onlyNav === undefined}>
          {/* Header Content */}
          <header-box>
            <header-position>
              <header-content>
                <Show when={props.title !== undefined}>
                  <h1>{props.title}</h1>
                </Show>

                <Show when={props.desc !== undefined}>
                  <p>{props.desc}</p>
                </Show>
              </header-content>
            </header-position>
          </header-box>
        </Show>
      </header>
    </>
  );
}


