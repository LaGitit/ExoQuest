import { useRef } from "react";
import { Card, CardMedia, Typography, Box, Chip } from "@mui/material";
import InfoRounded from "@mui/icons-material/InfoRounded";
import RocketLaunch from "@mui/icons-material/RocketLaunch";
import "./ComingSoonCarousel.css";
import OGB from "../../assets/OGB.svg";
import { useInView } from "../hooks/useInView.jsx";

const comingSoonDestinations = [
  {
    name: "Nerath Prime",
    type: "Planet",
    status: "Coming Soon",
    image: "/comingSoonDestinations/1.jpg",
    tagline: "A terraformed utopia waiting to awaken.",
  },
  {
    name: "Axiom Spire",
    type: "Space Station",
    status: "Coming Soon",
    image: "/comingSoonDestinations/2.jpg",
    tagline: "The citadel of innovation beyond Earth’s reach.",
  },
  {
    name: "Dusk Ring",
    type: "Asteroid Belt",
    status: "Coming Soon",
    image: "/comingSoonDestinations/3.jpg",
    tagline: "A symphony of silent collisions and golden dusk.",
  },
  {
    name: "Oura IV",
    type: "Moon",
    status: "Coming Soon",
    image: "/comingSoonDestinations/4.jpg",
    tagline: "Where ancient craters whisper lunar secrets.",
  },
  {
    name: "Heaven's Gate",
    type: "Nebula Field",
    status: "Coming Soon",
    image: "/comingSoonDestinations/5.jpg",
    tagline: "A radiant field where stars are born and gods might dwell.",
  },
  {
    name: "Veltrix Haven",
    type: "Colony Hub",
    status: "Coming Soon",
    image: "/comingSoonDestinations/6.jpg",
    tagline: "The heart of interstellar civilization, pulsing with life.",
  },
  {
    name: "Frostral",
    type: "Ice World",
    status: "Coming Soon",
    image: "/comingSoonDestinations/7.jpg",
    tagline: "A frozen realm glistening with alien serenity.",
  },
  {
    name: "Cradle Echo",
    type: "Artificial Orb",
    status: "Coming Soon",
    image: "/comingSoonDestinations/8.jpg",
    tagline: "An engineered enigma resonating with forgotten signals.",
  },
  {
    name: "Zenith Fold",
    type: "Black Hole",
    status: "Coming Soon",
    image: "/comingSoonDestinations/9.jpg",
    tagline: "The edge of known space. Light bends. Time hesitates.",
  },
  {
    name: "Lux Core",
    type: "Energy Nexus",
    status: "Coming Soon",
    image: "/comingSoonDestinations/10.jpg",
    tagline: "A glowing heartbeat of cosmic energy.",
  },
];

export function ComingSoonSlider() {
  const scrollRef = useRef(null);
  const CARD_WIDTH = { xs: 280, sm: 350, md: 400, lg: 450 };
  const GAP = 16;
  const VISIBLE_CARDS = { xs: 1.5, sm: 2.5, md: 3.5, lg: 4 };

  const [setRef, isInView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const scrollLeft = () => {
    const cardWidth = getResponsiveValue(CARD_WIDTH);
    const scrollAmount = (cardWidth + GAP) * getResponsiveValue(VISIBLE_CARDS);
    scrollRef.current?.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  };

  const scrollRight = () => {
    const cardWidth = getResponsiveValue(CARD_WIDTH);
    const scrollAmount = (cardWidth + GAP) * getResponsiveValue(VISIBLE_CARDS);
    scrollRef.current?.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const getResponsiveValue = (values) => {
    const width = window.innerWidth;
    if (width < 600) return values.xs;
    if (width < 900) return values.sm;
    if (width < 1200) return values.md;
    return values.lg;
  };

  return (
    <div className="coming-soon-slider">
      <div
        className="coming-header"
        ref={setRef}
        style={{
          transform: isInView ? "translateY(0)" : "translateY(30px)",
          opacity: isInView ? 1 : 0,
          transition: "transform 0.6s ease-out, opacity 0.6s ease-out",
        }}
      >
        <div className="header-gradient">
          <h2>Next-Gen Cosmic Destinations</h2>
          <div className="subheader-wrapper">
            <div
              className="decorative-line"
              style={{
                transform: isInView ? "scaleX(1)" : "scaleX(0)",
                transformOrigin: "left center",
                transition: "transform 0.6s ease-out 0.4s",
              }}
            />
          </div>
        </div>
        <Typography
          variant="body1"
          className="header-body"
          style={{
            transform: isInView ? "translateY(0)" : "translateY(20px)",
            opacity: isInView ? 1 : 0,
            transition:
              "transform 0.6s ease-out 0.3s, opacity 0.6s ease-out 0.3s",
          }}
        >
          Be among the first to experience humanity's newest frontier with our
          <strong> limited inaugural voyages</strong>. These destinations
          represent the pinnacle of interstellar travel technology and
          exclusivity.
        </Typography>
      </div>

      <div className="slider-window" ref={scrollRef}>
        <div className="slider-track">
          {comingSoonDestinations.map((site, i) => (
            <Card
              key={i}
              className="coming-card"
              variant="outlined"
              sx={{
                p: 2,
                display: "flex",
                cursor: "pointer",
                flexDirection: { xs: "column", sm: "row" },
                width: { xs: 280, sm: 350, md: 400, lg: 450 },
                minWidth: { xs: 280, sm: 350, md: 400, lg: 450 },
                background:
                  "linear-gradient(135deg, rgba(0,255,255,0.07), rgba(255,255,255,0.03))",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "12px",
                color: "#e0f7ff",
                boxShadow:
                  "0 2px 12px rgba(0,255,255,0.05), inset 0 0 1px rgba(255,255,255,0.2)",
                position: "relative",
                transition:
                  "transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
                "&:hover": {
                  transform: "translateY(-8px) scale(1.04)",
                  borderColor: "rgba(0,255,255,0.45)",
                  boxShadow:
                    "0 3px 10px rgba(0,255,255,0.15), 0 0 12px rgba(138, 43, 226, 0.15), inset 0 0 4px rgba(0,255,255,0.22)",
                  transition: "all 0.35s ease-in-out",
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background:
                    "linear-gradient(135deg, rgba(0,255,255,0.07), rgba(255,255,255,0.03))",
                  backdropFilter: "blur(10px)",
                  zIndex: -1,
                }}
              />
              <CardMedia
                component="img"
                image={site.image}
                alt={site.name}
                sx={{
                  borderRadius: "6px",
                  width: { xs: "100%", sm: 270 },
                  height: 100,
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  alignSelf: { xs: "flex-start", sm: "center" },
                  mt: { xs: 1.5, sm: 0 },
                  ml: { xs: 0, sm: 2 },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "1.3rem",
                    fontWeight: 600,
                    background:
                      "linear-gradient(45deg, #00ffff 0%, #8a2be2 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    letterSpacing: "0.5px",
                    mb: 0.5,
                  }}
                >
                  {site.name}
                </Typography>

                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#80d8ff",
                    fontWeight: 400,
                    fontSize: "0.95rem",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  {site.type}
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mt: 0.5,
                    color: "#b3e5fc",
                    fontStyle: "italic",
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                  }}
                >
                  {site.tagline}
                </Typography>

                <Chip
                  size="small"
                  variant="outlined"
                  icon={<InfoRounded />}
                  label={site.status}
                  sx={{
                    mt: 1,
                    ".MuiChip-icon": { fontSize: 16, ml: "4px" },
                    bgcolor: "rgba(255,255,255,0.1)",
                    borderColor: "rgba(15, 196, 66, 0.63)",
                    color: "rgba(15, 196, 66, 0.63)",
                  }}
                />
              </Box>
              <Box
                component="img"
                src={OGB}
                alt="Brand"
                sx={{
                  position: "absolute",
                  bottom: 8,
                  right: 8,
                  width: 24,
                  height: 24,
                }}
              />
            </Card>
          ))}
        </div>
      </div>

      <div className="nav-btn-group">
        <button className="nav-btn" onClick={scrollLeft}>
          ‹
        </button>
        <button className="nav-btn" onClick={scrollRight}>
          ›
        </button>
      </div>

      <button className="notify-btn">
        <RocketLaunch fontSize="small" sx={{ mr: 1 }} />
        Join Priority Access
      </button>
    </div>
  );
}
