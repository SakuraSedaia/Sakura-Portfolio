export default function DisplayCard(props) {
	const json = JSON.parse(props.data)
  return (
    <div class={"render-card"}>
      <h2>Render Card</h2>
			<a href="#">Link</a>
      <p>{json.description}</p>
    </div>
  );
}