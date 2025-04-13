import React, { Suspense, lazy } from "react";
import "./App.css";
import { CssBaseline, GlobalStyles } from "@mui/material";
import { ExoLoader } from "./components/loader/ExoLoader.jsx";
import Hero from "./components/Hero/hero.component.jsx";

const SpaceBackground = lazy(() =>
  import("./components/space-background/space-background.component.jsx")
);
const Destination = lazy(() =>
  import("./components/Destination/destination.component.jsx")
);
const LastSection = lazy(() =>
  import("./components/Last section/LastSection.jsx")
);

function App() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={{ "*": { boxSizing: "border-box" } }} />
      <Suspense fallback={<ExoLoader />}>
        <SpaceBackground />
        <Hero />
        <Destination />
        <LastSection />
      </Suspense>
    </>
  );
}

export default App;
