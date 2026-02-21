import { A } from "@solidjs/router";

export default function CommissionGrid() {
  return (
    <section class={"grid breakout"}>
      <div class={"grid-item"}>
        <h2>3D Render</h2>
        <p>
          Want a 3D Render? I can make a full render start to finish on whatever
          topic of your choice! While my strengths are in Minecraft I am able to
          open up and do more mediums whether it be photorealistic, stylized, or
          toon shaded.
        </p>
        <p>Starting Rate: $20 Per Hour</p>
        <A href={"/"} class={"btn"}>
          See Rates
        </A>
      </div>

      <div class={"grid-item"}>
        <h2>3D Model</h2>
        <p>
          Need an Asset for your project? I can model it in Blender and export
          it out into either USD, FBX, OBJ
        </p>
        <p>Minimum Rate: $15 Per Hour</p>
        <A href={"/"} class={"btn"}>
          See Rates
        </A>
      </div>

      <div class={"grid-item"}>
        <h2>Blender Rig</h2>
        <p>
          Need an Rig for your project? I can work on and develop a new rig for
          your needs, you can either provide your own model or commission one
          from me, basic rigs can be exported out while more complex rigs are
          Blender Only
        </p>
        <p>Minimum Rate: $25 Per Hour</p>
        <A href={"/"} class={"btn"}>
          See Rates
        </A>
      </div>

      <div class={"grid-item"}>
        <h2>Blender Extension Interface</h2>
        <p>
          Have a Blender Rig or Asset you want a custom interface for? Using
          Python I can create a new Extension for you which contains the
          necessary modules to build a personalized interface just for your
          needs
        </p>
        <p>Minimum Rate: $20 Per Hour</p>
        <A href={"/"} class={"btn"}>
          See Rates
        </A>
      </div>

      <div class={"grid-item"}>
        <h2>Web Front-End</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
          consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
          quisque faucibus ex sapien vitae pellentesque.
        </p>
        <p>Minimum Rate: $25 Per Hour</p>
        <A href={"/"} class={"btn"}>
          See Rates
        </A>
      </div>

      <div class={"grid-item"}>
        <h2>Web Component</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
          consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
          quisque faucibus ex sapien vitae pellentesque.
        </p>
        <p>Minimum Rate: $25 Per Hour</p>
        <A href={"/"} class={"btn"}>
          See Rates
        </A>
      </div>
    </section>
  );
}
