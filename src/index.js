import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import { DarkModeProvider } from "./contexts/DarkModeContext"; // Import the DarkModeProvider
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
