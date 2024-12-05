import cn from "classnames";
import { useApp } from "../../hooks/useApp";
import SpinningLoader from "../SpinningLoader/SpinningLoader";
import ImageSelection from "../ImageSelection/ImageSelection";

const ImagePreview = () => {
  const { isLoading, previewData } = useApp();

  return (
    <div
      className={cn("border relative border-primary rounded-lg h-[266px] ", {
        "py-2 px-3": !previewData?.imgUrl,
      })}
    >
      {isLoading && (
        <div className="absolute top-0 z-10 flex justify-center bg-black/80 items-center left-0 w-full h-full ">
          <SpinningLoader />
        </div>
      )}
      {previewData ? (
        <ImageSelection />
      ) : (
        <p>Fill out the form to find and view a photo</p>
      )}
    </div>
  );
};

export default ImagePreview;
