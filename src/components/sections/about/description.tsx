import Link from "~/components/routing/link";

export default function Description() {
  return (
    <section class={"about__description"}>
      <h2 id={"aboutAbout"}>Who Am I?</h2>
      <img
        src={"images/camera/iowa_motor_speedway_garage_selfie.avif"}
        alt="Sakura Sedaia taking a selfie at the Iowa Motor Speedway garage"
        class={"about__description__image"}
      />
      <p>
        I am a{" "}
        {new Date(
          Date.now() - new Date("2003-06-19").getTime(),
        ).getUTCFullYear() - 1970}
        -year-old multi-disciplinary technician from the United States with
        skills in automotive repair, 3D rendering and rigging, and software
        development. I have been practicing 3D rendering since late 2015,
        starting with Blender to create Minecraft-style renders. While early
        work from 2016 to 2019 has been lost, most renders created since 2019
        are available to view on the{" "}
        <Link path={"projects://"}>Projects Page</Link>. I also share
        demonstrations of my ongoing work, including 3D rendering reels, rig
        downloader interfaces, and script development tests, directly on my{" "}
        <Link path="https://youtube.com/c/SakuraSedaia" external={true}>
          YouTube channel
        </Link>
        .
      </p>
      <p>
        Software development is my second major discipline, beginning in high
        school in 2017. After learning HTML and CSS from a friend, I began
        experimenting with web design and soon adopted JavaScript to build
        reactive websites. In 2025, I expanded into Python to write Blender
        extensions before branching into other technologies. These include
        SolidJS, which was used to build this very site, and Kotlin, used to
        develop a PyCharm plugin that ports favorite features from a VS Code
        extension. I maintain repositories on{" "}
        <Link path="https://codeberg.org/SakuraSedaia" external={true}>
          Codeberg
        </Link>{" "}
        to manage project files for development and collaboration.
      </p>
      <p>
        In addition to my digital pursuits, I have built a strong professional
        background in the automotive industry. I began my career optimizing lot
        organization and assisting with service flow as a Service Lot Attendant.
        I later advanced to an Apprentice Automotive Technician, where I
        performed routine vehicle maintenance, executed complex mechanical
        replacements, and utilized specialized diagnostic systems to resolve
        electrical and mechanical issues. Additionally, I served as an L3 Senior
        Tire Technician, where I managed emergency roadside assistance,
        performed preventative maintenance on semi-trucks, and oversaw the
        training of junior technicians. My hands-on technical proficiency
        encompasses engine repair, braking systems, suspension, and diesel
        diagnostics. After getting fed up with the automotive industry, I have
        now begun venturing more into the Telecommunication and Manufacturing
        space, where I currently work as an asset recovery technician travelling
        the country while continuing to work on my digital passion projects.
      </p>
    </section>
  );
}
