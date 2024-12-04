import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.js";
import { ImageDataProvider } from "./providers/ImageDataProvider.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ImageDataProvider>
      <App />
    </ImageDataProvider>
  </StrictMode>
);
