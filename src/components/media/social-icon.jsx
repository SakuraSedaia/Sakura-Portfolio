export default function SocialIcon(props) {
  const icons = {
    discord: "bi-logos-discord",
    github: "bi-logos-github",
    youtube: "bi-logos-youtube",
    codeberg: "bi-logos-codeberg",
    git: "bi-logos-git",
    instagram: "bi-logos-instagram",
    pinterest: "bi-logos-pinterest",
    reddit: "bi-logos-reddit",
    twitch: "bi-logos-twitch",
    twitter: "bi-logos-twitter",
    envelope: "bi-envelope",
	  globe: "bi-globe",
  };

  const iconName = icons[props.name];
  
  if (!iconName) return null;

  return (
    <svg viewBox="0 0 24 24" fill="currentColor" class={`icon`}>
      <use href={`/images/vectors/${iconName}.svg#${iconName}`} />
    </svg>
  );
}
