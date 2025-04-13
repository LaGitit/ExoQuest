import React from "react";
import "./ExoLoader.css";

export function ExoLoader() {
  return (
    <div className="exo-loader-container">
      <div className="exo-loader-glow" />
      <div className="exo-loader-text">Initializing ExoQuest...</div>
    </div>
  );
}
