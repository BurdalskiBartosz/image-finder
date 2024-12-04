import ImageCard from "../components/ImageCard/ImageCard";
import { useApp } from "../hooks/useApp";

function CardView() {
  const { previewData } = useApp();
  return (
    <div className="container flex gap-8 py-8">
      <div className="flex-grow h-fit grid grid-cols-3 gap-8">
        {!!previewData && (
          <ImageCard key={previewData.imgUrl} {...previewData} />
        )}
      </div>
    </div>
  );
}

export default CardView;
