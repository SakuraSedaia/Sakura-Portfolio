import { NoHydration } from "solid-js/web";

export default function Technologies() {
  return (
    <NoHydration>
      <section id={"technologies"}>
        <heading>
          <h1>My Technologies</h1>
        </heading>
        <div class={"column-container"}>
          <div class={"column"} split>
            <h3>Python</h3>
            <hr />
            <ul>
              <li>Blender Python API</li>
              <li>Python 3</li>
            </ul>
          </div>
          <div class={"column"} split>
            <h3>Web Dev</h3>
            <hr />
            <ul>
              <li>HTML</li>
              <li>SCSS</li>
              <li>CSS</li>
              <li>SolidJS</li>
              <li>JavaScript</li>
            </ul>
          </div>
          <div class={"column"} split>
            <h3>Other</h3>
            <hr />
            <ul>
              <li>Java</li>
              <li>Kotlin</li>
            </ul>
          </div>
        </div>
      </section>
    </NoHydration>
  );
}
