import { useContext } from "react";
import { AppContext } from "../providers/AppContext";

export const useApp = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useApp must be used within an ImageDataProvider");
  }
  return context;
};
