import { For, createSignal } from "solid-js";
import renderData from "~/jsondata/render-map.json";
import RenderCard from "~/components/media/render-card.jsx";
import ImageModal from "~/components/media/image-modal.jsx";

export default function CharGallery() {
  const [modalOpen, setModalOpen] = createSignal(false);
  const [currentImage, setCurrentImage] = createSignal({ src: "", alt: "", description: "" });

  const openModal = (json, cat, folder) => {
    // We use the first size (lg) for the modal
    const filename = json.sizes[0];
    setCurrentImage({
      src: `/images/renders${cat}${folder}/${filename}`,
      alt: json.name,
      description: json.description
    });
    setModalOpen(true);
  };

  return (
    <>
      <For each={renderData} fallback={<p>Loading...</p>}>
        {(group) => (
          <section id={"char-gallery"}>
            <div class={"heading"}>
              <h2>{group.label}</h2>
            </div>
            
            <div class={"grid-container"}>
              <For each={group.images}>
                {(render) => (
                  <RenderCard data={JSON.stringify(render)} cat={group.path} onImageClick={openModal}/>
                )}
              </For>
            </div>
          </section>
        )}
      </For>
      <ImageModal 
        show={modalOpen()} 
        onClose={() => setModalOpen(false)} 
        imageSrc={currentImage().src} 
        imageAlt={currentImage().alt}
        description={currentImage().description}
      />
    </>
  );
}
