import { Link } from "~/components/links";

export default function Hero() {
  return (
    <section class={"index__hero"}>
      <div class={"index__hero__content"}>
        <h1>Welcome to Sedaia Designs</h1>
        <p>
          Sedaia Designs, more commonly known as Sakura is a freelance software
          developer and Voxel 3D Artist specialising in Minecraft style 3D art,
          SolidJS/React-like websites, and Blender extension development.
        </p>
        <p>
          <Link path={"/about"} emboss={true}>
            Learn more about me!
          </Link>
        </p>
      </div>
    </section>
  );
}