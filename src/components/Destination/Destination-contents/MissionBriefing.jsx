import "./missionBriefing.styles.css";
import { HeroDashboard } from "./Dashboard/herodashboard/herodashboard.component.jsx";
import { ContentsDashboard } from "./Dashboard/contentsdashboard/contentdashboard.component.jsx";

export function MissionBriefing() {
  return (
    <div className="mission-briefing">
      <HeroDashboard />
      <ContentsDashboard />
    </div>
  );
}
