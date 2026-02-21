import { splitProps } from "solid-js";

export default function OptimizedImage(props) {
  const [local, others] = splitProps(props, ["src", "alt", "fallbackExt", "class"]);
  
  // Extract base path without extension
  const baseSrc = () => {
    const src = local.src;
    return src;
  };
  const originalExt = () => {
    const src = local.src;
    const lastDot = src.lastIndexOf('.');
    return lastDot !== -1 ? src.substring(lastDot).toLowerCase() : "";
  };
  
  // Determine fallback: use provided fallbackExt, or originalExt if it's jpg/png, default to .jpg
  const fallbackExt = () => {
    if (local.fallbackExt) return local.fallbackExt.startsWith('.') ? local.fallbackExt : `.${local.fallbackExt}`;
    const ext = originalExt();
    if (ext === '.png') return '.png';
    if (ext === '.jpg' || ext === '.jpeg') return '.jpg';
    // If it's .jxl or something else, default to .jpg as it's the most common fallback in the pipeline
    return '.jpg';
  };

  return (
    <picture class={local.class}>
      <source srcset={`${baseSrc()}.jxl`} type="image/jxl" />
      <img src={`${baseSrc()}${fallbackExt()}`} alt={local.alt} {...others} />
    </picture>
  );
}
