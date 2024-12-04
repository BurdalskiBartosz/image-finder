import ImageCard from "../components/ImageCard/ImageCard";
import { useApp } from "../hooks/useApp";
import { useNavigate } from "react-router";
import Button from "../components/Button/Button";

function CardView() {
  const { previewData } = useApp();
  const navigate = useNavigate();

  return (
    <div className="container flex flex-col gap-8 py-8">
      <div className="flex-grow h-fit grid grid-cols-3 gap-8">
        {!!previewData && (
          <ImageCard key={previewData.imgUrl} {...previewData} />
        )}
      </div>
      <div className="w-min">
        <Button handleClick={() => navigate("/")}>Generate again</Button>
      </div>
    </div>
  );
}

export default CardView;
