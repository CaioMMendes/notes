import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Toaster } from "sonner";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <Toaster
      richColors
      toastOptions={{
        style: {
          background: "#334155",
          color: "#a3e635",
          border: "1px solid #a3e635",
        },
      }}
    />
  </React.StrictMode>
);
