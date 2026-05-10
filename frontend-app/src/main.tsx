import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import "react-phone-input-2/lib/style.css";

import "./styles/globals.css";

import ScrollToTop from "./Views/components/steps/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <ScrollToTop />
    </BrowserRouter>
  </React.StrictMode>,
);
