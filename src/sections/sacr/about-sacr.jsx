import { NoHydration } from "solid-js/web";

export default function AboutSACR() {
  return (
    <NoHydration>
      <section id={"about"}>
        <heading>
          <h1>About SACR</h1>
        </heading>
        <standard-container>
          <p>
            Sakura's Advanced Character Rig is a lightweight and highly
            customizable rig for{" "}
            <a href={"https://blender.org/"} class={"link"} target={"_blank"}>
              Blender 3D
            </a>
            , and has been developed since early 2019. The current build,
            R7.4 was originally started as Revision 3 back in 2021, and has
            grown through various forms through the years, and now is fully
            integrated with a UI Extension for greater customizability
          </p>
        </standard-container>
      </section>
    </NoHydration>
  );
}
