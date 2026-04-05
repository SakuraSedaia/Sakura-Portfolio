import { splitProps, Show } from "solid-js";

export default function OptimizedImage(props) {
  const [local, others] = splitProps(props, ["src", "alt", "fallbackExt", "class"]);
  
  // Extract base path without extension
  const baseSrc = () => {
    const src = local.src;
    const lastDot = src.lastIndexOf('.');
    if (lastDot === -1) return src;
    
    const ext = src.substring(lastDot).toLowerCase();
    const knownExts = ['.jxl', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.mp4', '.webm'];
    
    // Only strip if it's a known image extension
    if (knownExts.includes(ext)) {
      return src.substring(0, lastDot);
    }
    return src;
  };
  
  const originalExt = () => {
    const src = local.src;
    const lastDot = src.lastIndexOf('.');
    if (lastDot === -1) return "";
    
    const ext = src.substring(lastDot).toLowerCase();
    const knownExts = ['.jxl', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.mp4', '.webm'];
    
    return knownExts.includes(ext) ? ext : "";
  };
  
  // Determine fallback: use provided fallbackExt, or originalExt if it's jpg/png, default to .jpg
  const fallbackExt = () => {
    if (local.fallbackExt) return local.fallbackExt.startsWith('.') ? local.fallbackExt : `.${local.fallbackExt}`;
    const ext = originalExt();
    if (ext === '.png') return '.png';
    if (ext === '.jpg' || ext === '.jpeg') return '.jpg';
    if (ext === '.gif') return '.gif';
    // If it's .jxl or something else, default to .jpg as it's the most common fallback in the pipeline
    return '.jpg';
  };

  const isOptimized = () => {
    const ext = originalExt();
    // Only use <picture> with JXL for static images that aren't already specific formats we don't optimize
    return ext !== ".gif" && ext !== ".svg" && ext !== ".mp4" && ext !== ".webm";
  };

  return (
    <Show 
      when={isOptimized()} 
      fallback={<img src={local.src} alt={local.alt} class={local.class} {...others} />}
    >
      <picture class={local.class}>
        <source srcset={`${baseSrc()}.jxl`} type="image/jxl" />
        <source srcset={`${baseSrc()}.png`} type="image/png" />
        <source srcset={`${baseSrc()}.jpg`} type="image/jpeg" />
        <img src={`${baseSrc()}${fallbackExt()}`} alt={local.alt} {...others} />
      </picture>
    </Show>
  );
}
