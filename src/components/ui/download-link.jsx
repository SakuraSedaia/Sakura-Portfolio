export default function DownloadLink(props) {
  const downloadPath = `/lib/${props.path}`;
  
  // Extract filename from path to use as the download attribute
  const fileName = () => {
    if (!props.path) return undefined;
    const parts = props.path.split('/');
    return parts[parts.length - 1];
  };
  
  return (
    <a 
      href={props.disabled ? "#" : downloadPath} 
      download={props.disabled ? undefined : fileName()}
      class={`${props.class || ""} ${props.disabled ? "disabled" : ""}`}
      onClick={(e) => { if (props.disabled) e.preventDefault(); }}
    >
      {props.children || "Download"}
    </a>
  );
}
