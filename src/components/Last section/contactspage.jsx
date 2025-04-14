import { useRef } from "react";
import { Box, Typography, TextField, Button, Grid, Link } from "@mui/material";
import OGB from "../../assets/OGB.svg";
import { useInView } from "../hooks/useInView.jsx";
import { ExoNotifyProfileBar } from "./ExoNotifyProfileBar.jsx";

export function ContactPage() {
  const bottomRef = useRef(null);
  const [setRef, isInView] = useInView();

  return (
    <Box
      id="contact"
      ref={setRef}
      sx={{
        width: "99%",
        mx: "auto",
        mt: 12,
        p: { xs: 2, sm: 4 },
        paddingBottom: { md: 7 },
        background: "transparent",
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
        border: "1px solid rgba(0, 255, 255, 0.15)",
        position: "relative",
        overflow: "hidden",
        backdropFilter: "blur(5px)",
        textAlign: "center",
        boxShadow: "inset 0 0 20px rgba(0, 183, 255, 0.1)",
        transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: isInView ? "translateY(0)" : "translateY(20px)",
        opacity: isInView ? 1 : 0.8,
      }}
    >
      <Box
        component="img"
        src={OGB}
        alt="ExoQuest Logo"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: 220,
          transform: "translate(-50%, -50%)",
          opacity: 0.1,
          zIndex: 0,
          filter: "drop-shadow(0 0 10px rgba(0, 183, 255, 0.3))",
        }}
      />
      {/* ExoNet Beacon CTA */}
      <Box sx={{ position: "relative", zIndex: 2 }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{
            color: "transparent",
            background: "linear-gradient(90deg, #00ffff, #8a2be2)",
            backgroundClip: "text",
            mb: 2,
            fontFamily: '"Orbitron", sans-serif',
            letterSpacing: "0.09em",
            textTransform: "uppercase",
            fontSize: { xs: "1.5rem", sm: "2.1rem" },
          }}
        >
          Join the ExoNet Beacon
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            color: "#b3e5fc",
            mb: 3,
            mx: "auto",
            fontSize: { xs: "0.9rem", sm: "1.3rem" },
          }}
        >
          Subscribe to receive priority access to launch windows, cosmic weather
          alerts, and exclusive expedition updates.
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            flexWrap: "wrap",
            mb: 6,
            maxWidth: 600,
            mx: "auto",
          }}
        >
          <TextField
            placeholder="Your Galactic Identifier"
            variant="outlined"
            size="small"
            sx={{
              flexGrow: 1,
              minWidth: 280,
              input: {
                color: "#00ffff",
                "&::placeholder": {
                  opacity: 0.6,
                  color: "inherit",
                },
              },
              background: "rgba(255, 255, 255, 0.08)",
              borderRadius: 1,
              border: "1px solid rgba(0, 255, 255, 0.2)",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "rgba(0, 255, 255, 0.3)",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "rgba(0, 255, 255, 0.5)",
                },
              },
              transition: "all 0.3s ease",
            }}
          />
          <Button
            variant="outlined"
            sx={{
              color: "#00ffff",
              borderColor: "rgba(0, 255, 255, 0.5)",
              px: 4,
              ":hover": {
                backgroundColor: "rgba(0, 255, 255, 0.1)",
                borderColor: "#00ffff",
                boxShadow: "0 0 15px rgba(0, 255, 255, 0.3)",
              },
              transition: "all 0.3s ease",
              fontWeight: "bold",
              letterSpacing: "0.05em",
            }}
          >
            Activate Beacon
          </Button>
        </Box>
      </Box>
      {/* Link Grid */}
      <Grid
        container
        spacing={{ xs: 4, sm: 6, md: 7 }}
        justifyContent="center"
        sx={{
          zIndex: 2,
          position: "relative",
        }}
      >
        {[
          {
            title: "Missions",
            links: [
              "Intergalactic Tours",
              "Planetary Cruises",
              "Zero-G Retreats",
              "Private Launches",
            ],
          },
          {
            title: "Resources",
            links: [
              "Mission Archives",
              "Spacecraft Blueprints",
              "Travel Protocols",
              "Galactic Currency Info",
            ],
          },
          {
            title: "Explore",
            links: [
              "ExoBlog",
              "Quantum Roadmap",
              "Crew Stories",
              "Cosmic Gallery",
            ],
          },
          {
            title: "Command Core",
            links: [
              "About ExoQuest",
              "Careers @ Orbit HQ",
              "Partnership Program",
              "Support Channels",
            ],
          },
          {
            title: "Legals",
            links: [
              "Privacy Systems",
              "Contact Mission Control",
              "Feedback Pod",
            ],
          },
        ].map((section) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={2.4}
            key={section.title}
            sx={{
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: "#00ffff",
                mb: 2,
                fontWeight: "bold",
                fontSize: { xs: "1rem", sm: "1.7rem" },
                letterSpacing: "0.05em",
              }}
            >
              {section.title}
            </Typography>
            {section.links.map((link) => (
              <Typography
                key={link}
                sx={{
                  mb: 1.2,
                  transition: "all 0.2s ease",
                }}
              >
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: "#b3e5fc",
                    fontSize: { xs: "0.8rem", sm: "1.5rem" },
                    ":hover": {
                      color: "#00ffff",
                      textShadow: "0 0 8px rgba(0, 255, 255, 0.5)",
                    },
                    display: "inline-block",
                    position: "relative",
                    "&:after": {
                      content: '""',
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                      width: "0%",
                      height: "1px",
                      background: "#00ffff",
                      transition: "width 0.3s ease",
                    },
                    "&:hover:after": {
                      width: "100%",
                    },
                  }}
                >
                  {link}
                </Link>
              </Typography>
            ))}
          </Grid>
        ))}
      </Grid>

      <div ref={bottomRef} style={{ height: 1 }} />
      <ExoNotifyProfileBar />
    </Box>
  );
}
