import React, { useContext } from "react";
import { PlanetContext } from "../../../../context/PlanetContext.context";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { Box, IconButton } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const MiniPlanetCarousel = () => {
  const { planets, activeIndex, paginate } = useContext(PlanetContext);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "0.5rem 0",
        gap: 1,
      }}
    >
      <Motion.div
        whileHover={{ scale: 1.2, filter: "drop-shadow(0px 0px 5px #00f7ff)" }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <IconButton onClick={() => paginate(-1)} aria-label="Previous Planet">
          <ArrowBackIosIcon sx={{ fontSize: "1rem", color: "#00f7ff" }} />
        </IconButton>
      </Motion.div>

      <Box
        className="mini-carousel-content"
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          overflow: "hidden",
          minWidth: 0,
        }}
      >
        <AnimatePresence mode="sync">
          {planets.map((planet, index) => (
            <Motion.img
              key={planet.id}
              src={planet.image}
              alt={planet.name}
              className={`mini-planet ${index === activeIndex ? "active" : ""}`}
              style={{
                width: index === activeIndex ? "12vw" : "8vw",
                maxWidth: "80px",
                aspectRatio: "1 / 1",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid transparent",
                transition: "all 0.3s ease",
                flexShrink: 0,
              }}
              initial={{
                opacity: index === activeIndex ? 0 : 0.5,
                scale: index === activeIndex ? 0.8 : 0.6,
              }}
              animate={{
                opacity: index === activeIndex ? 1 : 0.5,
                scale: index === activeIndex ? 1 : 0.6,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          ))}
        </AnimatePresence>
      </Box>

      <Motion.div
        whileHover={{ scale: 1.2, filter: "drop-shadow(0px 0px 5px #00f7ff)" }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300, damping: 10 }}
      >
        <IconButton onClick={() => paginate(1)} aria-label="Next Planet">
          <ArrowForwardIosIcon sx={{ fontSize: "1rem", color: "#00f7ff" }} />
        </IconButton>
      </Motion.div>
    </Box>
  );
};
