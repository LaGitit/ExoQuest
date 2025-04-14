import { useState, useEffect, useContext } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { useGesture } from "@use-gesture/react";
import { Typewriter } from "react-simple-typewriter";
import { PlanetContext } from "../../../../context/PlanetContext.context.jsx";
import { useVisibility } from "../../../../context/useVisibility.jsx";
import { StatsHUD } from "./statsHud.component.jsx";
import { HolographicBar } from "../../HolographicBar.jsx";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./herodashboard.styles.css";

export function HeroDashboard() {
  const { section1Ref } = useVisibility();
  const { planets, activeIndex, direction, paginate } =
    useContext(PlanetContext);
  const [infoVisible, setInfoVisible] = useState(false);
  const [typing, setTyping] = useState(true);
  const currentPlanet = planets[activeIndex];

  useEffect(() => {
    setTyping(false);
    setInfoVisible(false);

    const timeout = setTimeout(() => {
      setTyping(true);
      setInfoVisible(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, [currentPlanet]);

  const bind = useGesture({
    onDrag: ({ movement: [mx], direction: [xDir], last }) => {
      const threshold = 30;
      if (last && Math.abs(mx) > threshold) {
        paginate(xDir > 0 ? -1 : 1);
      }
    },
  });
  return (
    <div className="dashboard" id="hero-dashboard" ref={section1Ref}>
      <div className="dog-ear-label">Upcoming Launches</div>

      <Motion.div className="planet-card">
        <div className={`planet-info ${infoVisible ? "visible" : ""}`}>
          <h2 className="planet-name">
            {typing && (
              <Typewriter
                words={[currentPlanet.name]}
                typeSpeed={80}
                cursorStyle="|"
              />
            )}
          </h2>
          <p className="planet-coordinates">
            <LocationOnIcon className="location-icon" />
            {typing && (
              <Typewriter
                words={[
                  ` ${currentPlanet.coordinates.x}, ${currentPlanet.coordinates.y}, ${currentPlanet.coordinates.z}`,
                ]}
                typeSpeed={50}
                cursorStyle="_"
              />
            )}
          </p>
        </div>

        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <Motion.div
            className="planet-visual-wrapper"
            key={activeIndex}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            exit={{ scaleY: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.68, -0.6, 0.32, 1.6] }}
          >
            <div className="swipe-area" {...bind()}>
              <img
                src={currentPlanet.image}
                alt={currentPlanet.name}
                className="planet-image"
              />
            </div>

            <div className="holographic-overlay" />
            <div className="static-overlay" />
          </Motion.div>
        </AnimatePresence>

        <div className="nav-buttons">
          <button
            className="prev-btn"
            onClick={() => paginate(-1)}
            aria-label="Previous"
          >
            ◄
          </button>
          <button
            className="next-btn"
            onClick={() => paginate(1)}
            aria-label="Next"
          >
            ►
          </button>
        </div>
      </Motion.div>

      <StatsHUD stats={currentPlanet.stats} />
      <HolographicBar variant="section1" />
    </div>
  );
}
