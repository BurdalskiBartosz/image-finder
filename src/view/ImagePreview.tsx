import ImagePreview from "../components/ImagePreview/ImagePreview";
import { useApp } from "../hooks/useApp";
import { useNavigate } from "react-router";
import Button from "../components/Button/Button";

function ImagePreviewView() {
  const { previewData, refetch, save } = useApp();
  const navigate = useNavigate();

  return (
    <div className="container flex flex-col gap-8 py-8">
      <div className="flex flex-col gap-y-4">
        <ImagePreview
          refetch={refetch}
          save={save}
          imgUrl={previewData?.imgUrl}
        />
      </div>
      <div className="w-min">
        <Button handleClick={() => navigate(-1)}>Back</Button>
      </div>
    </div>
  );
}

export default ImagePreviewView;
