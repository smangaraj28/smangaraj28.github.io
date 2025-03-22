import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import { DarkModeProvider } from "./contexts/DarkModeContext"; // Import the DarkModeProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </React.StrictMode>
);
