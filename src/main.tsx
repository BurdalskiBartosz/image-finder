import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { AppProvider } from "./providers/AppProvider";
import { BrowserRouter, Route, Routes } from "react-router";
import FormView from "./view/Form";
import ImagePreviewView from "./view/ImagePreview.js";
import CardView from "./view/Card.js";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<FormView />} />
          <Route path="/image-preview" element={<ImagePreviewView />} />
          <Route path="/card" element={<CardView />} />
          {/* <App /> */}
        </Routes>
      </AppProvider>
    </BrowserRouter>
  </StrictMode>
);
