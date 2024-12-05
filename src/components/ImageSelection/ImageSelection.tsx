import { useApp } from "../../hooks/useApp";
import Button from "../Button/Button";

const ImageSelection = () => {
  const { refetch, save, previewData, error } = useApp();
  return (
    <>
      {previewData?.imgUrl && (
        <>
          <img
            className="rounded-lg h-full w-full max-w-[400px] object-cover"
            src={previewData.imgUrl}
          />
          <div className="flex gap-3 mt-4 ">
            <Button type="reject" handleClick={refetch}>
              Reject
            </Button>
            <Button handleClick={save}>Accept</Button>
          </div>
        </>
      )}
      {error && <p>{error}</p>}
    </>
  );
};

export default ImageSelection;
