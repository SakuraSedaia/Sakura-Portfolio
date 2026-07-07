import { For, JSX, Show } from "solid-js";

type SupportedPlatform = "blender" | "pycharm";

const platforms: Record<
  SupportedPlatform,
  { label: string; src: string; href: string }
> = {
  blender: {
    label: "Blender",
    src: "/images/platform-icons/blender/blender_logo_socket.svg",
    href: "https://www.blender.org/",
  },
  pycharm: {
    label: "PyCharm",
    src: "/images/platform-icons/pycharm/pycharm_logo.svg",
    href: "https://www.jetbrains.com/pycharm/",
  },
};

interface PluginHeroProps {
  title: string;
  description: string;
  tagline: string;
  backgroundImage: string;
  supportedPlatform?: SupportedPlatform | SupportedPlatform[];
  children?: JSX.Element;
}

export default function SupportedPlatformsHero(props: PluginHeroProps) {
  const platformList = (): SupportedPlatform[] => {
    if (!props.supportedPlatform) return [];
    return Array.isArray(props.supportedPlatform)
      ? props.supportedPlatform
      : [props.supportedPlatform];
  };

  return (
    <Show when={platformList().length > 0}>
      <p class={"supported-platforms"}>
        <span class={"supported-platforms__label"}>Supported in:</span>
        <For each={platformList()}>
          {(platform) => {
            const meta = platforms[platform];
            if (!meta) return null;
            return (
              <a
                href={meta.href}
                target={"_blank"}
                rel={"noopener noreferrer"}
                aria-label={`${meta.label} website`}
                class={"supported-platforms__link"}
              >
                <img
                  class={`platform-icon platform-${platform}`}
                  src={meta.src}
                  alt={`${meta.label} logo`}
                  title={`Supported on ${meta.label}`}
                />
              </a>
            );
          }}
        </For>
      </p>
    </Show>
  );
}
