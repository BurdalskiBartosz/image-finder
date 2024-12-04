import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ImageDataProvider } from "./providers/ImageDataProvider.js";
import { BrowserRouter, Route, Routes } from "react-router";
import FormView from "./view/Form";
import ImagePreviewView from "./view/ImagePreview.js";
import CardView from "./view/Card.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ImageDataProvider>
        <Routes>
          <Route path="/" element={<FormView />} />
          <Route path="/image-preview" element={<ImagePreviewView />} />
          <Route path="/card" element={<CardView />} />
          {/* <App /> */}
        </Routes>
      </ImageDataProvider>
    </BrowserRouter>
  </StrictMode>
);
