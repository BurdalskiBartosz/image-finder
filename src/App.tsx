import GetImageForm from "./components/GetImageForm/GetImageForm";
import ImagePreview from "./components/ImagePreview/ImagePreview";
import ImagesGrid from "./components/ImagesGrid/ImagesGrid";

function App() {
  return (
    <div className="container flex gap-8 py-8">
      <div className="flex flex-col gap-y-8">
        <GetImageForm />
        <ImagePreview />
      </div>
      <ImagesGrid />
    </div>
  );
}

export default App;
