import { useContext } from "react";
import { VisibilityContext } from "./VisibilityContext.jsx"; // Ensure correct path

export const useVisibility = () => useContext(VisibilityContext);
