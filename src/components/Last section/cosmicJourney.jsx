import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { motion as Motion } from "framer-motion";
import { useInView } from "../hooks/useInView.jsx";

export function CosmicJourney() {
  const [setRef, isInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={setRef}
      component={Motion.div}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: 0.5,
        duration: 0.7,
        type: "spring",
        stiffness: 60,
        damping: 10,
      }}
      sx={{
        mt: 10,
        mb: 6,
        px: { xs: 2, md: 4 },
        position: "relative",
        textAlign: "center",
        visibility: isInView ? "visible" : "hidden",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: "1px",
          background:
            "linear-gradient(to right, transparent, rgba(0,247,255,0.5), transparent)",
        },
      }}
    >
      <Motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Typography
          variant="h4"
          sx={{
            mt: 6,
            mb: 3,
            fontFamily: '"Orbitron", sans-serif',
            fontWeight: 500,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(224, 247, 255, 0.9)",
            textShadow: "0 0 12px rgba(0, 247, 255, 0.5)",
            fontSize: { xs: "1.5rem", md: "2rem" },
          }}
        >
          Ready for Your Cosmic Journey?
        </Typography>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        <Typography
          variant="body1"
          sx={{
            maxWidth: "800px",
            mx: "auto",
            mb: 5,
            fontSize: { xs: "1rem", md: "1.4rem" },
            lineHeight: 1.7,
            color: "rgba(200, 235, 255, 0.85)",
          }}
        >
          Our mission control team is standing by to chart your personalized
          voyage through the cosmos. Whether you're seeking scientific
          discovery, transcendent experiences, or simply to touch the void,
          we'll craft an itinerary that exceeds all gravitational expectations.
        </Typography>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
            mt: 4,
            flexWrap: "wrap",
          }}
        >
          <Motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="contained"
              sx={{
                px: 4,
                py: 1.5,
                background:
                  "linear-gradient(135deg, rgba(0,180,255,0.2), rgba(138,43,226,0.2))",
                border: "1px solid rgba(0,247,255,0.3)",
                color: "#00f7ff",
                fontFamily: '"Orbitron", sans-serif',
                letterSpacing: "0.1em",
                fontSize: "0.9rem",
                backdropFilter: "blur(4px)",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, rgba(0,180,255,0.3), rgba(138,43,226,0.3))",
                  boxShadow: "0 0 20px rgba(0,247,255,0.4)",
                },
              }}
            >
              Request Mission Briefing
            </Button>
          </Motion.div>

          <Motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outlined"
              sx={{
                px: 4,
                py: 1.5,
                borderColor: "rgba(0, 247, 255, 0.3)",
                color: "#00f7ff",
                fontFamily: '"Orbitron", sans-serif',
                letterSpacing: "0.1em",
                fontSize: "0.9rem",
                "&:hover": {
                  borderColor: "rgba(0, 247, 255, 0.6)",
                  backgroundColor: "rgba(0, 247, 255, 0.05)",
                },
              }}
            >
              Meet Our Crew
            </Button>
          </Motion.div>
        </Box>
      </Motion.div>

      <Motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 1.0, duration: 0.5 }}
      >
        <Typography
          variant="caption"
          sx={{
            display: "block",
            mt: 6,
            color: "rgba(150, 200, 255, 0.6)",
            fontStyle: "italic",
            fontSize: "0.8rem",
            "&::before, &::after": {
              content: '"✧"',
              margin: "0 0.5rem",
              color: "rgba(0,247,255,0.4)",
            },
          }}
        >
          All expeditions subject to celestial alignment and safety protocols
        </Typography>
      </Motion.div>
    </Box>
  );
}
