import NavSubBar from "./router/nav-sub-bar.jsx";
import NavMainBar from "./router/nav-main-bar.jsx";

export default function Nav(props) {
  return (
		<nav>
			<NavMainBar title={props.title}/>
			<NavSubBar />
		</nav>
	);
}
