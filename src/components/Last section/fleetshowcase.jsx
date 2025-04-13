import React from "react";
import { Box, Card, CardMedia, Typography, Chip, Tooltip } from "@mui/material";
import ShieldIcon from "@mui/icons-material/Shield";
import BoltIcon from "@mui/icons-material/Bolt";
import { useInView } from "../hooks/useInView.jsx";

const fleet = [
  {
    name: "Xerion IX",
    image: "/fleet/1.jpg",
    speed: "Warp 9.2",
    class: "Explorer",
    tech: ["Quantum Shields", "Ion Pulse Drive"],
    badge: "Flagship",
  },
  {
    name: "Astra Vela",
    image: "/fleet/2.jpg",
    speed: "Warp 8.6",
    class: "Cruiser",
    tech: ["Plasma Torpedoes", "Nano Repair AI"],
    badge: "Stealth",
  },
  {
    name: "Orion Wraith",
    image: "/fleet/3.jpg",
    speed: "Warp 9.4",
    class: "Interceptor",
    tech: ["Photon Shields", "Dark Matter Core"],
    badge: "Speed",
  },
  {
    name: "Celestis Ark",
    image: "/fleet/4.jpg",
    speed: "Warp 8.9",
    class: "Carrier",
    tech: ["AI Navigation", "Gravity Wells"],
    badge: "Luxury",
  },
];

export function FleetShowcase() {
  const [setRef, isInView] = useInView();
  const [setRefCard, isInViewCard] = useInView();

  return (
    <Box
      ref={setRef}
      sx={{
        mt: 16,
        px: { xs: 2, sm: 4 },
        pb: 12,
        position: "relative",
        background: "transparent",
        "@keyframes aweGlow": {
          "0%, 100%": {
            textShadow:
              "0 0 8px rgba(0,255,255,0.7), 0 0 16px rgba(0,255,255,0.4)",
          },
          "50%": {
            textShadow:
              "0 0 12px rgba(0,255,255,1), 0 0 24px rgba(0,255,255,0.6)",
          },
        },
        "@keyframes fadeSlideIn": {
          from: {
            opacity: 0,
            transform: "translateY(30px)",
          },
          to: {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
      }}
    >
      {/* 💫 Section Header and Lore Panel */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 4,
          mb: 8,
        }}
      >
        {/* 🚀 Section Title */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "1.6rem", sm: "2.4rem" },
              color: "#00ffff",
              fontFamily: "'Orbitron', sans-serif",
              textAlign: "left",
              mb: 1,
              textShadow: "0 0 8px rgba(0,255,255,0.4)",
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateY(0)" : "translateY(20px)",
              willChange: "transform, opacity",
              transition: "transform 2.6s ease, opacity 1.3s ease",
            }}
          >
            Our Stellar Fleet
          </Typography>
          <Typography
            ref={setRef}
            sx={{
              color: "#888",
              fontSize: { xs: 12.5, sm: 14 },
              fontFamily: "'Share Tech Mono', monospace",
              letterSpacing: 1,
              textTransform: "uppercase",
              opacity: isInView ? 1 : 0,
              transform: isInView ? "translateX(0)" : "translateX(20px)",
              willChange: "transform, opacity",
              transition: "transform 2.9s ease, opacity 1.9s ease",
            }}
          >
            Precision. Speed. Luxury. Built for the stars.
          </Typography>
        </Box>

        {/* 🌌 Floating Lore Box */}
        <Box
          ref={setRef}
          sx={{
            flex: 2,
            background: "rgba(255, 255, 255, 0.02)",
            border: "1px solid rgba(0, 255, 255, 0.1)",
            borderRadius: 3,
            px: 3,
            py: 2.5,
            fontFamily: "'Share Tech Mono', monospace",
            position: "relative",
            overflow: "hidden",
            "&:before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: isInView
                ? "radial-gradient(circle at 50% 50%, rgba(0,183,255,0.15), transparent 70%)"
                : "transparent",
              transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
              zIndex: -1,
            },
            boxShadow: isInView
              ? "0 0 15px 1px rgba(0, 183, 255, 0.4)"
              : "0 0 0 rgba(0, 183, 255, 0)",
            transition:
              "box-shadow 1.2s cubic-bezier(0.16, 1, 0.3, 1), background 1.2s ease",
            willChange: "box-shadow, background",
            "&:hover": {
              boxShadow: "0 0 20px 2px rgba(0,255,255,0.7)",
            },
          }}
        >
          <Typography
            sx={{
              color: "#ccc",
              fontSize: { xs: 14, sm: 15.5 },
              lineHeight: 1.65,
              letterSpacing: 0.2,
              position: "relative",
            }}
          >
            From Titan's orbital shipyards to the nebular ports of Kepler Prime,
            our fleet represents a fusion of human innovation and alien
            engineering. Every vessel is engineered not just for travel — but
            for{" "}
            <Box
              component="span"
              sx={{
                position: "relative",
                fontStyle: "italic",
                color: isInView ? "#00ffff" : "rgba(0,255,255,0.1)",
                textShadow: isInView ? "0 0 12px rgba(0,255,255,0.9)" : "none",
                fontFamily: "'Orbitron', sans-serif",
                fontWeight: 700,
                transform: isInView ? "scale(1.1)" : "scale(0.95)",
                willChange: "transform, opacity, text-shadow",
                transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)",
                "&:before": {
                  content: '""',
                  position: "absolute",
                  top: "-10%",
                  left: "-10%",
                  right: "-10%",
                  bottom: "-10%",
                  background: isInView
                    ? "radial-gradient(circle, rgba(0,255,255,0.3) 0%, transparent 70%)"
                    : "transparent",
                  borderRadius: "50%",
                  filter: "blur(8px)",
                  zIndex: -1,
                  transition: "all 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                },
                "&:after": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "100%",
                  background: isInView
                    ? "linear-gradient(90deg, transparent, rgba(0,255,255,0.15), transparent)"
                    : "transparent",
                  transform: isInView ? "translateX(0)" : "translateX(-100%)",
                  transition: "transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  zIndex: -1,
                },
              }}
            >
              awe
            </Box>
            . With warp-tier speeds, AI-driven navigation, and grav-lux
            interiors, your journey isn't just fast... it's unforgettable.
          </Typography>
        </Box>
      </Box>

      {/* 🚀 Cards Grid */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr 1fr", sm: "repeat(4, 1fr)" },
          gap: 4,
        }}
      >
        {fleet.map((ship, i) => {
          return (
            <Card
              ref={setRefCard}
              key={i}
              sx={{
                position: "relative",
                p: 2,
                borderRadius: 4,
                background:
                  "linear-gradient(135deg, rgba(0,255,255,0.04), rgba(255,255,255,0.015))",
                boxShadow:
                  "0 4px 12px rgba(0,255,255,0.07), inset 0 0 2px rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.05)",
                transition:
                  "transform 0.4s ease, box-shadow 0.4s ease, border 0.4s ease",
                cursor: "pointer",
                color: "#e0f7ff",
                fontFamily: "'Orbitron', sans-serif",
                overflow: "hidden",
                willChange: "transform, box-shadow, border-color",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow:
                    "0 10px 28px rgba(0,255,255,0.18), inset 0 0 6px rgba(0,255,255,0.25)",
                  border: "1px solid rgba(0,255,255,0.25)",
                  "&::after": {
                    opacity: 1,
                  },
                  "&::before": {
                    animation: "shimmer 1.4s linear",
                  },
                },
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "2px",
                  background:
                    "linear-gradient(to right, transparent, #00ffffaa, transparent)",
                  opacity: 0,
                  transition: "opacity 0.4s ease",
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: "-75%",
                  width: "200%",
                  height: "100%",
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent 60%)",
                  pointerEvents: "none",
                },
                "@keyframes shimmer": {
                  "0%": { left: "-75%" },
                  "100%": { left: "100%" },
                },
              }}
            >
              <Box
                sx={{
                  transition: "transform 0.6s ease, opacity 0.6s ease",
                  opacity: isInViewCard ? 1 : 0,
                  transform: isInViewCard
                    ? "translateY(0)"
                    : "translateY(30px)",
                  willChange: "transform, opacity",
                }}
              >
                <Chip
                  label={ship.badge}
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    bgcolor: "rgba(0,255,255,0.1)",
                    color: "cyan",
                    fontSize: 10,
                    border: "1px solid cyan",
                  }}
                />
                <CardMedia
                  component="img"
                  image={ship.image}
                  alt={ship.name}
                  sx={{
                    height: 120,
                    borderRadius: 2,
                    mb: 2,
                    objectFit: "cover",
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: 600,
                    fontSize: 18,
                    color: "#00ffff",
                    mb: 0.5,
                  }}
                >
                  {ship.name}
                </Typography>
                <Typography sx={{ color: "#ccc", fontSize: 14, mb: 1 }}>
                  Class: {ship.class} | Max Speed: {ship.speed}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                  {ship.tech.map((t, j) => (
                    <Tooltip key={j} title={t} arrow>
                      <Chip
                        icon={j % 2 === 0 ? <ShieldIcon /> : <BoltIcon />}
                        label={t}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: "rgba(255,255,255,0.1)",
                          color: "#00ffff",
                          fontSize: 10,
                          ".MuiChip-icon": { color: "#00ffff", fontSize: 16 },
                        }}
                      />
                    </Tooltip>
                  ))}
                </Box>
              </Box>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
}
