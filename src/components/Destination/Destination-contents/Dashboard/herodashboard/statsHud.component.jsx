import React, { useState } from "react";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import "./statsHud.styles.css";
import { CountdownTimer } from "./countdowntimer.jsx";
import { useContext } from "react";
import { PlanetContext } from "../../../../context/PlanetContext.context.jsx";

export function StatsHUD({ stats }) {
  const { planets, activeIndex } = useContext(PlanetContext);

  const [typingStatus, setTypingStatus] = useState(
    stats.reduce((acc, stat) => ({ ...acc, [stat.id]: false }), {})
  );

  return (
    <div className="stats-hud">
      <Motion.div
        className="timer-container"
        key={planets[activeIndex].id}
        whileHover={{ scale: 1.05 }}
      >
        <CountdownTimer startTime={planets[activeIndex].startTimer} />
      </Motion.div>

      {stats.map((stat) => (
        <Motion.div
          key={stat.id}
          className="stat-panel"
          whileHover={{ scale: 1.05, borderColor: "rgba(0, 183, 255, 0.6)" }}
        >
          <h3>{stat.label}</h3>
          <AnimatePresence mode="wait">
            <Motion.p
              key={stat.value} // Re-trigger animation when value changes
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Typewriter
                words={[stat.value.toString()]}
                loop={1}
                cursor={!typingStatus[stat.id]} // Hide cursor when done
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
                onType={(count) => {
                  if (count === stat.value.toString().length) {
                    setTypingStatus((prev) => ({ ...prev, [stat.id]: true }));
                  }
                }}
              />
            </Motion.p>
          </AnimatePresence>
        </Motion.div>
      ))}

      <Motion.div
        className="bcta"
        whileHover={{
          scale: 1.05,
          cursor: "pointer",
          boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.5)",
        }}
      >
        <p>Book Now!</p>
      </Motion.div>
    </div>
  );
}
