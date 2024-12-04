import GetImageForm from "./components/GetImageForm/GetImageForm";
import ImageCard from "./components/ImageCard/ImageCard";
import ImagePreview from "./components/ImagePreview/ImagePreview";
import SpinningLoader from "./components/SpinningLoader/SpinningLoader";
import { useApp } from "./hooks/useApp";

function App() {
  const { previewData, data, refetch, save, isLoading, error } = useApp();
  return (
    <div className="container flex gap-8 py-8">
      <div className="flex flex-col gap-y-4">
        <GetImageForm />
        {error && <p className="text-red-700">{error}</p>}
        {isLoading && <SpinningLoader />}
        <ImagePreview
          refetch={refetch}
          save={save}
          imgUrl={previewData?.imgUrl}
        />
      </div>
      <div className="flex-grow h-fit grid grid-cols-3 gap-8">
        {!!data.length &&
          data.map((el) => <ImageCard key={el.imgUrl} {...el} />)}
      </div>
    </div>
  );
}

export default App;
