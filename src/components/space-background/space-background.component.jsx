import { useCallback, useState, useEffect } from "react";
import { motion as Motion, useScroll, useTransform } from "framer-motion";
import "./space-background.styles.css";

export default function SpaceBackground() {
  // Generate realistic star colors
  const getRandomStarColor = useCallback(() => {
    const starColors = [
      "rgba(255, 255, 255, 0.85)",
      "rgba(180, 210, 255, 0.75)",
      "rgba(255, 190, 140, 0.7)",
      "rgba(255, 130, 130, 0.7)",
      "rgba(160, 200, 255, 0.75)",
    ];
    return starColors[Math.floor(Math.random() * starColors.length)];
  }, []);

  // Generate stars with correct positions
  const generateStars = useCallback(
    (count, depth) =>
      Array.from({ length: count }, (_, i) => ({
        id: `star-${depth}-${i}`,
        x: `${Math.random() * 100}vw`, // Ensure proper CSS position
        y: `${Math.random() * 100}vh`,
        delay: Math.random() * 5,
        size: `${Math.random() * (depth === "near" ? 4.5 : 2.5) + 1}px`,
        opacity: depth === "near" ? 1 : 0.8,
        depth,
        color: getRandomStarColor(),
      })),
    [getRandomStarColor]
  );

  // Generate shooting stars
  const generateShootingStars = useCallback((count) => {
    return Array.from({ length: count }, (_, i) => ({
      id: `shooting-star-${i}`,
      xStart: `${Math.random() * 100}vw`,
      yStart: `${Math.random() * 100}vh`,
      xEnd: `${Math.random() * 100 + 20}vw`, // Diagonal movement
      yEnd: `${Math.random() * 100 + 20}vh`,
      delay: Math.random() * 10,
      size: `${Math.random() * 2 + 1}px`,
    }));
  }, []);

  const [nearStars, setNearStars] = useState([]);
  const [farStars, setFarStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    setNearStars(generateStars(15, "near"));
    setFarStars(generateStars(25, "far"));
    setShootingStars(generateShootingStars(3)); // 3 Shooting Stars
  }, [generateStars, generateShootingStars]);

  const { scrollY } = useScroll();
  const farStarsY = useTransform(scrollY, [0, 500], [0, 25]);
  const nearStarsY = useTransform(scrollY, [0, 500], [0, 50]);
  const nebulaY = useTransform(scrollY, [0, 500], [0, 15]);

  return (
    <div className="space-bg">
      {[...farStars, ...nearStars].map((star) => (
        <Motion.div
          key={star.id}
          className={`star ${star.depth}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, star.opacity, 0] }}
          transition={{
            duration: star.depth === "near" ? 5 : 7,
            repeat: Infinity,
            delay: star.delay,
          }}
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            background: star.color,
            borderRadius: "50%",
            y: star.depth === "near" ? nearStarsY : farStarsY,
          }}
        >
          {star.depth === "near" && parseFloat(star.size) > 3 && (
            <div
              className="star-flare"
              style={{
                position: "absolute",
                width: "200%",
                height: "200%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.15) 10%, transparent 80%)",
                top: "-50%",
                left: "-50%",
                borderRadius: "50%",
              }}
            />
          )}
        </Motion.div>
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((star) => (
        <Motion.div
          key={star.id}
          className="shooting-star"
          initial={{ left: star.xStart, top: star.yStart, opacity: 1 }}
          animate={{ left: star.xEnd, top: star.yEnd, opacity: 0 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            delay: star.delay,
            ease: "linear",
          }}
          style={{
            width: star.size,
            height: star.size,
            background: "white",
            borderRadius: "50%",
            boxShadow: "0 0 5px white",
          }}
        />
      ))}

      {/* Nebula (Moves Slowest) */}
      <Motion.div
        className="nebula"
        initial={{ opacity: 0.3, scale: 1 }}
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        style={{ y: nebulaY }}
      />
    </div>
  );
}
