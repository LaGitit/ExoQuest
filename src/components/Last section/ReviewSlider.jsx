import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useInView } from "../hooks/useInView.jsx";
import { motion as Motion, useScroll, useTransform } from "framer-motion";
import { useRef, useCallback } from "react";

const starTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#00f7ff" },
    secondary: { main: "#8a2be2" },
    background: {
      default: "transparent",
      paper: "rgba(16, 24, 40, 0.1)",
    },
  },
  typography: {
    fontFamily: '"Orbitron", sans-serif',
    h5: { fontWeight: 500, letterSpacing: "0.1em" },
  },
});

const reviews = [
  {
    name: "Commander Ayla Rynn",
    avatar: "/ExoQuest/reviewAvatar/1.jpg",
    quote:
      "Witnessing the quantum auroras from ExoQuest's orbital platform redefined my understanding of beauty. The crew's expertise made me feel safer than on Earth.",
    stars: 5,
    title: "Former ISS Flight Director",
    highlight: "Orbital Symphony Experience",
  },
  {
    name: "Dr. Kaelen Vos",
    avatar: "/ExoQuest/reviewAvatar/2-1.jpg",
    quote:
      "As a scientist, I'm skeptical by nature. But their zero-gravity research module exceeded all specifications. We collected unprecedented data on dark matter fluctuations.",
    stars: 5,
    title: "Quantum Cosmologist, Celestial Dynamics Lab",
    highlight: "Research Expedition Package",
  },
  {
    name: "Juno Tavik",
    avatar: "/ExoQuest/reviewAvatar/2.jpg",
    quote:
      "The Neptune skydive experience? Absolutely transcendental. The 120-second freefall through the upper atmosphere was worth every credit. Media crew captured perfect footage.",
    stars: 5,
    title: "Chief Content Officer, Stellar Media Group",
    highlight: "Atmospheric Descent Program",
  },
  {
    name: "Engineer Eren Maku",
    avatar: "/ExoQuest/reviewAvatar/3.jpg",
    quote:
      "Their ship maintenance is impeccable. As a propulsion specialist, I inspected every system - flawless redundancies. The Mars cycler habitat modules are engineering poetry.",
    stars: 4,
    title: "Lead Systems Architect, Orbital Shipyards",
    highlight: "Engineering Tour",
  },
];

export function ReviewSlider() {
  const [setRef, isInView] = useInView({ threshold: 0.2 });
  const scrollRef = useRef(null);

  // Combined the callback ref and scroll ref
  const combinedRef = useCallback(
    (node) => {
      setRef(node); // For IntersectionObserver
      scrollRef.current = node; // For useScroll
    },
    [setRef]
  );

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const yTitle = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const yCards = useTransform(scrollYProgress, [0, 1], [-30, 30]);
  const yCta = useTransform(scrollYProgress, [0, 1], [0, -20]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <Box
      ref={combinedRef}
      component={Motion.div}
      style={{ opacity }}
      sx={{
        px: 2,
        py: 6,
        background: "transparent",
        color: "#e0f7ff",
        textAlign: "center",
        width: "100%",
        maxWidth: "100vw",
        overflow: "hidden",
        position: "relative",
        borderTop: "1px solid rgba(0, 247, 255, 0.2)",
      }}
    >
      {/* Testimonials Section */}
      <Motion.div style={{ y: yTitle }}>
        <Typography
          variant="h3"
          sx={{
            mb: 4,
            fontFamily: '"Orbitron", sans-serif',
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            textShadow: "0 0 10px rgba(0, 247, 255, 0.7)",
            fontSize: { xs: "1.8rem", md: "2.5rem" },
          }}
        >
          Voices From The Void
        </Typography>

        <Typography
          variant="body1"
          sx={{
            maxWidth: "800px",
            mx: "auto",
            mb: 6,
            fontSize: { xs: "1rem", md: "1.4rem" },
            lineHeight: 1.6,
            color: "rgba(224, 247, 255, 0.8)",
          }}
        >
          Don't take our word for it - hear from those who've journeyed with us
          beyond the Kármán line. Our clients include leading scientists,
          veteran astronauts, and pioneering media creators who demand
          perfection in off-world experiences.
        </Typography>
      </Motion.div>

      <Motion.div style={{ y: yCards }}>
        <Box
          sx={{
            display: "grid",
            gap: { xs: 2, sm: 3 },
            gridTemplateColumns: {
              xs: "repeat(1, minmax(0, 1fr))",
              sm: "repeat(2, minmax(0, 1fr))",
              md: "repeat(4, minmax(0, 1fr))",
            },
            maxWidth: "1400px",
            mx: "auto",
            width: "100%",
            padding: { xs: "0 1rem", sm: "0" },
          }}
        >
          {reviews.map((review, i) => (
            <Box
              key={i}
              component={Motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                sx={{
                  background: "rgba(8, 16, 32, 0.3)",
                  border: "1px solid rgba(0, 247, 255, 0.15)",
                  borderRadius: { xs: "0.8rem", sm: "1.5rem" },
                  padding: { xs: "0.8rem", sm: "1.5rem" },
                  backdropFilter: "blur(4px)",
                  transition: "all 0.3s ease",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 10px rgba(0, 255, 255, 0.15)",
                  willChange: "transform, box-shadow, border-color",
                  width: { xs: "100%", sm: "100%" },
                  maxWidth: { xs: "400px", sm: "none" },
                  "&:hover": {
                    borderColor: "rgba(0, 255, 255, 0.3)",
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 28px rgba(0, 255, 255, 0.25)",
                  },
                }}
              >
                <CardContent
                  sx={{ p: { xs: "0.5rem !important", sm: "1rem !important" } }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    mb={2}
                    sx={{
                      flexDirection: { xs: "column", sm: "row" },
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    <Avatar
                      src={review.avatar}
                      alt={review.name}
                      sx={{
                        width: { xs: "4rem", sm: "6rem" },
                        height: { xs: "4rem", sm: "6rem" },
                        border: "2px solid #00ffff4d",
                        boxShadow: "0 0 12px #00ffff7d",
                        mb: { xs: 1, sm: 0 },
                      }}
                    />
                    <Box ml={{ xs: 0, sm: 2 }}>
                      <Typography
                        sx={{
                          fontSize: { xs: "1rem", sm: "1.25rem" },
                          fontWeight: 600,
                          color: "#00ffff",
                          textShadow: "0 0 8px rgba(0, 255, 255, 0.7)",
                          lineHeight: 1.3,
                        }}
                      >
                        {review.name}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: { xs: "0.8rem", sm: "0.95rem" },
                          color: "rgba(170, 255, 255, 0.7)",
                          mt: 0.5,
                        }}
                      >
                        {review.title}
                      </Typography>
                    </Box>
                  </Box>

                  <Typography
                    sx={{
                      fontStyle: "italic",
                      marginTop: "1rem",
                      fontSize: { xs: "0.85rem", sm: "1.05rem" },
                      lineHeight: 1.6,
                      color: "rgba(255, 255, 255, 0.85)",
                      textAlign: { xs: "center", sm: "left" },
                      mb: 2,
                    }}
                  >
                    "{review.quote}"
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: "0.75rem",
                      color: "rgba(0, 247, 255, 0.8)",
                      textAlign: "right",
                      fontFamily: '"Orbitron", sans-serif',
                      letterSpacing: "0.1em",
                      mb: 1,
                    }}
                  >
                    {review.highlight}
                  </Typography>

                  <ThemeProvider theme={starTheme}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 0.5,
                        mt: 2,
                      }}
                    >
                      {Array.from({ length: review.stars }).map((_, i) => (
                        <StarIcon
                          key={i}
                          fontSize="small"
                          color="primary"
                          sx={{
                            filter: "drop-shadow(0 0 8px #00ffffaa)",
                            fontSize: { xs: "1.2rem", sm: "1.4rem" },
                          }}
                        />
                      ))}
                    </Box>
                  </ThemeProvider>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Motion.div>

      <Motion.div style={{ y: yCta }}>
        <Button
          variant="outlined"
          sx={{
            mt: 6,
            px: 4,
            py: 1.5,
            borderColor: "rgba(0, 247, 255, 0.5)",
            color: "#00f7ff",
            fontFamily: '"Orbitron", sans-serif',
            letterSpacing: "0.1em",
            fontSize: "0.9rem",
            "&:hover": {
              borderColor: "#00f7ff",
              backgroundColor: "rgba(0, 247, 255, 0.1)",
            },
          }}
        >
          Read More Testimonials
        </Button>
      </Motion.div>
    </Box>
  );
}
