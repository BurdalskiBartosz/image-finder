import GetImageForm from "../components/GetImageForm/GetImageForm";
import SpinningLoader from "../components/SpinningLoader/SpinningLoader";
import { useApp } from "../hooks/useApp";

function FormView() {
  const { isLoading, error } = useApp();
  return (
    <div className="container flex gap-8 py-8">
      <div className="flex flex-col gap-y-4">
        <GetImageForm />
        {error && <p className="text-red-700">{error}</p>}
        {isLoading && <SpinningLoader />}
      </div>
    </div>
  );
}

export default FormView;
