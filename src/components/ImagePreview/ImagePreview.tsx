import Button from "../Button/Button";

type ImagePreviewProps = {
  imgUrl?: string;
  refetch: () => void;
  save: () => void;
};

const ImagePreview = ({ imgUrl, save, refetch }: ImagePreviewProps) => {
  return (
    <div>
      {imgUrl ? (
        <>
          <img className="rounded-lg overflow-hidden" src={imgUrl} />
          <div className="flex gap-3 mt-4 jus">
            <Button type="reject" handleClick={refetch}>
              Reject
            </Button>
            <Button handleClick={save}>Accept</Button>
          </div>
        </>
      ) : (
        <p>Couldn't find any image</p>
      )}
    </div>
  );
};

export default ImagePreview;
