import { useApp } from "../../hooks/useApp";
import ImageCard from "../ImageCard/ImageCard";

const ImagesGrid = () => {
  const { data } = useApp();

  if (!data.length) {
    return (
      <div className="flex justify-center">
        <h3 className="text-3xl">No photos so far selected...</h3>
      </div>
    );
  }

  return (
    <div className="flex-grow h-fit grid grid-cols-3 gap-8 ">
      {!!data.length && data.map((el) => <ImageCard key={el.imgUrl} {...el} />)}
    </div>
  );
};

export default ImagesGrid;
