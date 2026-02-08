export default function DownloadLink(props) {
  const downloadPath = `/lib/${props.path}`;
  
  return (
    <a 
      href={downloadPath} 
      download 
      class={props.class || ""}
    >
      {props.children || "Download"}
    </a>
  );
}
