import DownloadLink from "~/components/download-link";

export default function AssetCard(props) {
    const asset = JSON.parse(props.data);
    return (
        <div class={"grid-item"}>
            <h2>{asset.name}</h2>
            <hr />
            <p>{asset.description}</p>
            <DownloadLink class={"btn"} path={asset.link}>Download</DownloadLink>
        </div>
    );
}


