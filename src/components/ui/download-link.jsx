export default function DownloadLink(props) {
  const downloadPath = `/lib/${props.path}`;
  
  return (
    <a 
      href={props.disabled ? "#" : downloadPath} 
      download={props.disabled ? undefined : true}
      class={`${props.class || ""} ${props.disabled ? "disabled" : ""}`}
      onClick={(e) => { if (props.disabled) e.preventDefault(); }}
    >
      {props.children || "Download"}
    </a>
  );
}
