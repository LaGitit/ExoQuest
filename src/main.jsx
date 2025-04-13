import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PlanetProvider } from "./components/context/PLanetProvider.provider.jsx";
import { VisibilityProvider } from "./components/context/VisibilityProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PlanetProvider>
      <VisibilityProvider>
        <App />
      </VisibilityProvider>
    </PlanetProvider>
  </StrictMode>
);
