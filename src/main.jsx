import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PokeStepper } from "./components/PokeStepper";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PokeStepper />
  </StrictMode>
);
