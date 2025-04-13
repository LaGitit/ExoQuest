import React from "react";
import "./LastSection.css";
import { ComingSoonSlider } from "./ComingSoonCarousel.jsx";
import { ReviewSlider } from "./ReviewSlider.jsx";
import { FleetShowcase } from "./fleetshowcase.jsx";
import { PrestigeCapstone } from "./prestigecapstone.jsx";
import { ContactPage } from "./contactspage.jsx";
import { CosmicJourney } from "./cosmicJourney.jsx";

export default function LastSection() {
  return (
    <div className="last-section">
      <FleetShowcase />
      <ComingSoonSlider />
      <PrestigeCapstone />
      <ReviewSlider />
      <CosmicJourney />
      <ContactPage />
    </div>
  );
}
