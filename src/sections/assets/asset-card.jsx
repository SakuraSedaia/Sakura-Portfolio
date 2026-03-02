import DownloadLink from "~/components/ui/download-link";

export default function AssetCard(props) {
    const asset = JSON.parse(props.data);
		const downloadPath = `${asset.software.toLowerCase()}/${asset.link}`;
    return (
        <div class={"grid-item"}>
            <h2>{asset.name}</h2>
            <hr />
            <p>{asset.description}</p>
            <DownloadLink class={`btn ${asset.disabled ? 'disabled' : ''}`} path={downloadPath} disabled={asset.disabled}>Download</DownloadLink>
        </div>
    );
}


