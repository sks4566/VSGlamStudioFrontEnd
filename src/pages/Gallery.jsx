import { api } from "../lib/api";
import { useData } from "../lib/useData";
import { PageHero, Section, GalleryGrid, LoadingState, ErrorState } from "../components/UI";

const Gallery = () => {
  const galleryQuery = useData(api.gallery, []);

  if (galleryQuery.loading) return <LoadingState />;
  if (galleryQuery.error) return <ErrorState message={galleryQuery.error.message} />;

  return (
    <>
      <PageHero
        kicker="Gallery"
        title="Recent transformations"
        subtitle="Browse bridal, fashion, and editorial moments."
      />
      <Section>
        <GalleryGrid items={galleryQuery.data} />
      </Section>
    </>
  );
};

export default Gallery;
