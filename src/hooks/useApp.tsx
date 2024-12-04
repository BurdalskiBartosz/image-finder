import { useContext } from "react";
import { ImageDataContext } from "../providers/ImageDataContext";

export const useApp = () => {
  const context = useContext(ImageDataContext);

  if (!context) {
    throw new Error("useApp must be used within an ImageDataProvider");
  }
  return context;
};
