import { createSignal, onCleanup, onMount } from "solid-js";

export function useMobile(query = "(max-width: 720px)") {
  const [isMobile, setIsMobile] = createSignal(false);

  onMount(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatches = () => setIsMobile(mediaQuery.matches);
    
    updateMatches();
    mediaQuery.addEventListener("change", updateMatches);
    onCleanup(() => mediaQuery.removeEventListener("change", updateMatches));
  });

  return isMobile;
}
