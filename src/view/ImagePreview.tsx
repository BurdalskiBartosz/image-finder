import ImagePreview from "../components/ImagePreview/ImagePreview";
import { useApp } from "../hooks/useApp";

function ImagePreviewView() {
  const { previewData, refetch, save } = useApp();
  return (
    <div className="container flex gap-8 py-8">
      <div className="flex flex-col gap-y-4">
        <ImagePreview
          refetch={refetch}
          save={save}
          imgUrl={previewData?.imgUrl}
        />
      </div>
    </div>
  );
}

export default ImagePreviewView;
