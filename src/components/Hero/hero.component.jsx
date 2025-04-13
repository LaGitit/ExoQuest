import { Box, Typography } from "@mui/material";
import { motion as Motion } from "framer-motion";
import OGB from "../../assets/OGB.svg";
import { useEffect } from "react";

export default function Hero() {
  // Load fonts dynamically
  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Exo:wght@700&family=Syne:wght@400;800&family=Rajdhani:wght@700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const pulseGlow = {
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 30px rgba(0, 183, 255, 0.8)",
    },
    animate: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0px 0px 15px rgba(0, 183, 255, 0.7)",
        "0px 0px 25px rgba(0, 183, 255, 1)",
        "0px 0px 15px rgba(0, 183, 255, 0.7)",
      ],
    },
  };

  // New tap effect for the CTA button
  const tapEffect = {
    scale: 0.95,
    transition: { duration: 0.1 },
  };

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        px: { xs: 2, md: 4 },
        pt: { xs: 2, md: 4 },
        overflow: "hidden",
      }}
    >
      {/* Logo + Title - Top Left with more breathing room */}
      <Motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: { xs: "1.5rem", md: "2.5rem" },
          left: { xs: "1.5rem", md: "3rem" },
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          zIndex: 10,
        }}
      >
        <img
          src={OGB}
          alt="ExoQuest Logo"
          style={{
            width: "3rem",
            height: "3rem",
            transition: "transform 0.8s ease-out",
          }}
          draggable={false}
          onMouseOver={(e) =>
            (e.currentTarget.style.transform = "rotate(360deg)")
          }
          onMouseOut={(e) => (e.currentTarget.style.transform = "rotate(0deg)")}
        />
        <Typography
          variant="h3"
          sx={{
            fontFamily: "'Exo', sans-serif",
            fontSize: { xs: "2rem", md: "3rem" },
            fontWeight: 700,
            background: "linear-gradient(90deg, #00b7ff, #0047ff)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            paddingRight: "1rem", // Extra right padding
          }}
        >
          ExoQuest
        </Typography>
      </Motion.div>

      {/* Hero Content - Centered */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flexGrow: 1,
          height: "100%",
          pb: { xs: "4rem", md: "6rem" },
        }}
      >
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            width: "100%",
            maxWidth: "1200px",
            gap: "clamp(1.4rem, 3.5vh, 2.5rem)",
          }}
        >
          <Motion.h1
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(2.5rem, 7vw, 4.5rem)",
              fontWeight: 700,
              color: "#fff",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              textShadow: "0 0 15px rgba(0, 183, 255, 0.8)",
              lineHeight: 1.2,
              margin: 0,
              padding: 0,
            }}
          >
            Journey Beyond the Stars
          </Motion.h1>

          <Motion.p
            variants={fadeUp}
            transition={{ delay: 0.6 }}
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              color: "rgba(255, 255, 255, 0.85)",
              width: "min(90%, 700px)",
              lineHeight: 1.6,
              textShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
              margin: 0,
              padding: 0,
            }}
          >
            Explore distant worlds, experience zero gravity, and travel faster
            than light. Your cosmic adventure starts now.
          </Motion.p>

          <Motion.button
            whileHover="hover"
            whileTap={tapEffect} // Added the tap effect here
            animate="animate"
            variants={pulseGlow}
            transition={{
              hover: { duration: 0.3 },
              animate: { duration: 2, repeat: Infinity, repeatType: "mirror" },
            }}
            style={{
              fontFamily: "'Rajdhani', sans-serif",
              fontSize: "clamp(1.2rem, 3vw, 2rem)",
              fontWeight: 700,
              background: "linear-gradient(90deg, #00b7ff, #0047ff)",
              color: "white",
              padding: "0.8rem 2rem",
              border: "none",
              borderRadius: "2rem",
              cursor: "pointer",
              boxShadow: "0 0 20px rgba(0, 183, 255, 0.5)",
              marginTop: "clamp(2rem, 6vh, 4rem)",
              outline: "none",
            }}
          >
            Start Your Journey
          </Motion.button>
        </Motion.div>
      </Box>
    </Box>
  );
}
