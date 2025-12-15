
function Header(props) {
  var bgImg =
    "background-image: url(/images/headers/" + props.background + ".jpg";
  var padding;
  if (props.vSpacing == null) {

    padding = "8em"
  } else {
    padding = props.vSpacing;
  }
  var padStyle = "padding-top: " + padding + "; padding-bottom: " + padding + ";"

  return (
    <div class="header-container body-container">
      <header>
        <div
          class="header-sizing block bg-cover bg-center px-30"
          style={bgImg}
        >
          <div class={"header-content"} style={padStyle}>
            <div class="title">
              <h1>{props.title}</h1>
              <p>{props.desc}</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Header;