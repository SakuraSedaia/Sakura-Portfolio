import { Link as MetaLink, Meta, Title } from "@solidjs/meta";
import { useLocation } from "@solidjs/router";

const SITE_NAME = "Sedaia Designs";
const SITE_URL = "https://sakura-sedaia.com";
const DEFAULT_DESCRIPTION =
  "Sedaia Designs, more commonly known as Sakura is a freelance software developer and Voxel 3D Artist specialising in Minecraft style 3D art, SolidJS/React-like websites, and Blender extension development.";
const DEFAULT_IMAGE = "/images/minecraft-renders/farmer-sakura.png";

interface MetadataProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  noIndex?: boolean;
}

function toAbsoluteUrl(value: string) {
  return new URL(value, SITE_URL).toString();
}

export default function Metadata({
  title,
  description = DEFAULT_DESCRIPTION,
  image = DEFAULT_IMAGE,
  url,
  noIndex = false,
}: MetadataProps) {
  const location = useLocation();
  const canonicalUrl = () => toAbsoluteUrl(url ?? location.pathname);
  const imageUrl = () => toAbsoluteUrl(image);

  return (
    <>
      <Title>{title}</Title>

      <Meta name="description" content={description} />
      <MetaLink rel="canonical" href={canonicalUrl()} />
      {noIndex && <Meta name="robots" content="noindex" />}

      <Meta property="og:site_name" content={SITE_NAME} />
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:url" content={canonicalUrl()} />
      <Meta property="og:type" content="website" />
      <Meta property="og:image" content={imageUrl()} />

      <Meta name="twitter:card" content="summary_large_image" />
      <Meta name="twitter:title" content={title} />
      <Meta name="twitter:description" content={description} />
      <Meta name="twitter:image" content={imageUrl()} />
    </>
  );
}
