import { Box, Typography, useMediaQuery } from "@mui/material";
import { useEffect, useRef } from "react";
import { Global, css } from "@emotion/react";

const milestones = [
  {
    title: "Pioneering Lift-Off",
    description:
      "In 2089, humanity defied gravity and crossed the stratosphere commercially. ExoQuest emerged, promising more than space tourism — it promised an odyssey.",
  },
  {
    title: "Orbital Luxury",
    description:
      "Zero-gravity spas. Panoramic nebula suites. We don't do flights. We curate celestial experiences with elegance stitched into every fiber of the ship.",
  },
  {
    title: "The Shield Protocol",
    description:
      "Equipped with quantum-reactive shielding, our vessels automatically counter micro-meteorite threats and radiation storms in real-time. Safety, redefined.",
  },
  {
    title: "Colonial Gateways",
    description:
      "Our chartered colonies on Luna, Mars, and Ganymede serve not just as destinations, but as gateways to the next frontier of civilization.",
  },
  {
    title: "Subspace Communication",
    description:
      "No lag. No blackouts. Our subspace relay systems keep you connected to Earth or any outpost in the solar grid, in real-time.",
  },
  {
    title: "Next: Interstellar",
    description:
      "Project Proxima is underway. What's next? Alpha Centauri, 4.2 light years away. For the bold, for the curious — we're making interstellar personal.",
  },
];

export function PrestigeCapstone() {
  const isMobile = useMediaQuery("(max-width: 600px)");
  const containerRef = useRef(null);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Global
        styles={css`
          @keyframes pulseLine {
            0%,
            100% {
              opacity: 0.7;
            }
            50% {
              opacity: 1;
            }
          }
          @keyframes pulseDot {
            0% {
              transform: scale(1);
              opacity: 1;
            }
            70% {
              transform: scale(2.5);
              opacity: 0;
            }
            100% {
              opacity: 0;
            }
          }
        `}
      />

      <Box
        ref={containerRef}
        component="section"
        sx={{
          position: "relative",
          width: "100%",
          minHeight: "100vh",
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 3, md: 4 },
          background: "transparent",
          overflow: "hidden",
          color: "#e0f7ff",
          isolation: "isolate",
        }}
      >
        {/* Title */}
        <Typography
          variant="h2"
          className="animate-on-scroll"
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 6 },
            fontWeight: 800,
            letterSpacing: { xs: 0.5, md: 1 },
            color: "#00ffff",
            textShadow: "0 0 15px rgba(0, 255, 255, 0.5)",
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "3rem" },
            opacity: 0,
            transform: "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            "&.animate-in": {
              opacity: 1,
              transform: "translateY(0)",
            },
          }}
        >
          Prestige Milestones
        </Typography>

        {/* Timeline */}
        <Box
          sx={{
            position: "relative",
            maxWidth: "1000px",
            mx: "auto",
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: "50%",
              width: isMobile ? "0" : "2px",
              height: isMobile ? "0" : "100%",
              background:
                "linear-gradient(to bottom, transparent 0%, #00ffff 50%, transparent 100%)",
              transform: "translateX(-50%)",
              animation: "pulseLine 4s ease-in-out infinite",
            },
          }}
        >
          {milestones.map((item, index) => (
            <Box
              key={index}
              className="animate-on-scroll"
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: isMobile
                  ? "center"
                  : index % 2 === 0
                  ? "flex-end"
                  : "flex-start",
                mb: { xs: 4, md: 6 },
                opacity: 0,
                transform: "translateY(30px)",
                transition: `opacity 0.6s ease-out ${
                  index * 0.1
                }s, transform 0.6s ease-out ${index * 0.1}s`,
                "&.animate-in": {
                  opacity: 1,
                  transform: "translateY(0)",
                },
              }}
            >
              {/* Dot on the center line */}
              {!isMobile && (
                <Box
                  sx={{
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "14px",
                    height: "14px",
                    backgroundColor: "#00ffff",
                    borderRadius: "50%",
                    boxShadow: "0 0 12px rgba(0, 255, 255, 0.7)",
                    zIndex: 2,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      width: "100%",
                      height: "100%",
                      borderRadius: "50%",
                      background: "rgba(0, 255, 255, 0.4)",
                      animation: "pulseDot 2s infinite",
                    },
                  }}
                />
              )}

              {/* Card */}
              <Box
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(0, 255, 255, 0.08) 0%, rgba(0, 13, 36, 0.4) 100%)",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(0, 255, 255, 0.15)",
                  borderRadius: "12px",
                  p: { xs: 2, md: 3 },
                  width: {
                    xs: "100%",
                    sm: isMobile ? "100%" : "380px",
                    md: "420px",
                  },
                  maxWidth: { xs: "400px", sm: "none" },
                  textAlign: isMobile
                    ? "center"
                    : index % 2 === 0
                    ? "right"
                    : "left",
                  transition: "all 0.3s ease",
                  // Perfectly balanced margins
                  marginLeft: isMobile
                    ? 0
                    : index % 2 === 0
                    ? 0
                    : "calc(50% + 20px)",
                  marginRight: isMobile
                    ? 0
                    : index % 2 === 0
                    ? "calc(50% + 20px)"
                    : 0,
                  "&:hover": {
                    transform: isMobile ? "none" : "translateY(-5px)",
                    boxShadow: "0 10px 25px rgba(0, 255, 255, 0.2)",
                    borderColor: "rgba(0, 255, 255, 0.3)",
                  },
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 700,
                    color: "#00ffff",
                    mb: 1.5,
                    fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.4rem" },
                    textShadow: "0 0 8px rgba(0, 255, 255, 0.4)",
                  }}
                >
                  {item.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "rgba(224, 247, 255, 0.9)",
                    lineHeight: 1.6,
                    fontSize: { xs: "0.9rem", md: "1rem" },
                  }}
                >
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* CTA Section */}
        <Box
          className="animate-on-scroll"
          sx={{
            mt: { xs: 6, md: 8 },
            textAlign: "center",
            px: 2,
            opacity: 0,
            transform: "translateY(20px)",
            transition:
              "opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s",
            "&.animate-in": {
              opacity: 1,
              transform: "translateY(0)",
            },
          }}
        >
          <Typography
            variant="h3"
            sx={{
              color: "#00ffff",
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: "1.5rem", md: "2rem" },
              textShadow: "0 0 20px rgba(0, 255, 255, 0.6)",
            }}
          >
            Ready to Begin Your Journey?
          </Typography>
        </Box>
      </Box>
    </>
  );
}
