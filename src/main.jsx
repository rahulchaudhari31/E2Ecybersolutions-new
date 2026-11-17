import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { MotionConfig } from "framer-motion";
import App from "./App.jsx";
import SmoothScrollProvider from "./components/SmoothScrollProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <MotionConfig reducedMotion="user">
        <BrowserRouter>
          <SmoothScrollProvider>
            <App />
          </SmoothScrollProvider>
        </BrowserRouter>
      </MotionConfig>
    </HelmetProvider>
  </React.StrictMode>,
);
