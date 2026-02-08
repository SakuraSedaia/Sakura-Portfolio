import { NoHydration } from "solid-js/web";

export default function Technologies() {
  return (
    <NoHydration>
      <section id={"technologies"}>
        <heading>
          <h1>My Technologies</h1>
        </heading>
        <column-container>
          <column split>
            <h3>Python</h3>
            <hr />
            <ul>
              <li>Blender Python API</li>
              <li>Python 3</li>
            </ul>
          </column>
          <column split>
            <h3>Web Dev</h3>
            <hr />
            <ul>
              <li>HTML</li>
              <li>SCSS</li>
              <li>CSS</li>
              <li>SolidJS</li>
              <li>JavaScript</li>
            </ul>
          </column>
          <column split>
            <h3>Other</h3>
            <hr />
            <ul>
              <li>Java</li>
              <li>Kotlin</li>
            </ul>
          </column>
        </column-container>
      </section>
    </NoHydration>
  );
}
