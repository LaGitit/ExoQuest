import { useContext } from "react";
import { PlanetContext } from "../../../../context/PlanetContext.context.jsx";
import { Typography, Button, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/system";
import { PlanetaryScienceSection } from "./planetarysciencesection.component.jsx";
import { PlanetVisitsChart } from "./planetvisitschart.component.jsx";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { motion as Motion, AnimatePresence } from "framer-motion";
import { HolographicBar } from "../../HolographicBar.jsx";
import "./contentdashboard.styles.css";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      smPlus: 700,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
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

const GlassPaper = styled(Motion.div)(() => ({
  background: "rgba(8, 18, 32, 0.1)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(255, 255, 255, 0.1)",
  transition: "all 0.3s ease",
  borderRadius: "12px",
  "&:hover": {
    borderColor: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(16px)",
  },
  overflow: "auto",
  height: "100%",
  minHeight: 0,
  display: "flex",
  flexDirection: "column",
}));

export function ContentsDashboard() {
  const { planets, activeIndex } = useContext(PlanetContext);

  if (!planets || planets.length === 0) {
    return <div className="content-dashboard">Loading planet data...</div>;
  }

  const planet = planets[activeIndex];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          boxSizing: "border-box",
          overflow: "hidden",
          background: "transparent",
        }}
        className="content-dashboard"
        id="contents-dashboard"
      >
        <HolographicBar variant="section2" />

        <AnimatePresence mode="wait">
          <Grid
            container
            key={planet.name}
            className="content-grid"
            sx={{
              width: "95%",
              height: "85%",
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                smPlus: "1fr 1fr",
              },

              gridTemplateRows: {
                xs: "1fr 1fr",
                smPlus: "1fr 1fr",
              },
              gap: "16px",
              borderRadius: "24px",
              background: "transparent",
              overflow: "hidden",
              marginTop: "1rem",
              padding: "0.8rem 1.5rem",
              boxSizing: "border-box",
              minHeight: 0,
              border: "transparent",
            }}
          >
            {/* 1st Section: Planetary Science */}
            <Grid
              sx={{ gridColumn: "span 1", gridRow: "span 1", minHeight: 0 }}
            >
              <GlassPaper
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                sx={{
                  p: { xs: 1, sm: 2, md: 2.5 },
                  height: "100%",
                  overflow: "auto",
                }}
              >
                <PlanetaryScienceSection planet={planet} />
              </GlassPaper>
            </Grid>

            {/* 2nd Section: Expedition Packages - hidden on small screens */}
            <Grid
              sx={{
                gridColumn: "span 1",
                gridRow: "span 1",
                minHeight: 0,
                display: { xs: "none", smPlus: "block" },
              }}
            >
              <GlassPaper
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                sx={{
                  p: { xs: 1, sm: 2 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "primary.main",
                    mb: { xs: 1, sm: 2, md: 3 },
                    fontSize: { xs: "1.1rem", sm: "1.25rem", md: "1.5rem" },
                    flexShrink: 0,
                  }}
                >
                  Expedition Packages
                </Typography>
                <Box
                  sx={{
                    flex: 1,
                    minHeight: 0,
                    display: "flex",
                    overflow: "hidden",
                    gap: { xs: 1, sm: 1.5, md: 2 },
                    alignItems: "flex-start",
                  }}
                >
                  {planet.expeditionPackages?.map((pkg, index) => (
                    <Box
                      key={index}
                      sx={{
                        flex: 1,
                        minWidth: 0,
                        display: "flex",
                        flexDirection: "column",
                        height: "auto",
                      }}
                    >
                      <GlassPaper
                        sx={{
                          p: { xs: 1, sm: 1.5 },
                          display: "flex",
                          flexDirection: "column",
                          minHeight: { xs: 180, sm: 200 },
                          height: "auto",
                        }}
                      >
                        <Typography
                          variant="h6"
                          sx={{
                            color: "primary.main",
                            display: "flex",
                            alignItems: "center",
                            gap: 1,
                            fontSize: { xs: "0.9rem", sm: "1rem" },
                            flexShrink: 0,
                          }}
                        >
                          {pkg.tier === "Advanced" ? (
                            <RocketLaunchIcon fontSize="small" />
                          ) : (
                            <AutoAwesomeIcon fontSize="small" />
                          )}
                          {pkg.tier} Tier
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color: "rgba(255,255,255,0.7)",
                            my: { xs: 1, sm: 1.5 },
                            fontSize: { xs: "0.8rem", sm: "0.9rem" },
                            flex: 1,
                            minHeight: 0,
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: "vertical",
                          }}
                        >
                          {pkg.description}
                        </Typography>
                        <Button
                          variant="outlined"
                          fullWidth
                          size="small"
                          sx={{
                            borderColor: "primary.main",
                            color: "primary.main",
                            fontSize: { xs: "0.7rem", sm: "0.8rem" },
                            flexShrink: 0,
                            "&:hover": {
                              backgroundColor: "rgba(0, 247, 255, 0.1)",
                            },
                          }}
                        >
                          Book Now - {pkg.price}
                        </Button>
                      </GlassPaper>
                    </Box>
                  ))}
                </Box>
              </GlassPaper>
            </Grid>

            {/* 3rd Section: Xenocultural Archive */}
            <Grid
              sx={{ gridColumn: "span 1", gridRow: "span 1", minHeight: 0 }}
            >
              <GlassPaper
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                sx={{
                  p: { xs: 1, sm: 2 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    color: "primary.main",
                    mb: { xs: 1, sm: 2 },
                    fontSize: {
                      xs: "1.1rem",
                      sm: "1.25rem",
                      md: "1.5rem",
                    },
                    flexShrink: 0,
                    lineHeight: 1.2,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  Xenocultural Archive
                </Typography>

                <Box
                  sx={{
                    flex: "1 1 auto",
                    minHeight: 0,
                    display: "flex",
                    gap: { xs: 0.5, sm: 1 },
                    mb: { xs: 0.5, sm: 1 },
                    flexDirection: { xs: "column", sm: "row" },
                  }}
                >
                  {[planet.Ximg[0], planet.Ximg[1]].map((imgSrc, index) => (
                    <Box
                      key={index}
                      sx={{
                        flex: 1,
                        minHeight: 0,
                        position: "relative",
                        borderRadius: "1rem",
                        overflow: "hidden",
                        aspectRatio: "16/9",
                        maxHeight: {
                          xs: "40vh",
                          sm: "45vh",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={imgSrc}
                        alt={`Cultural Image ${index + 1}`}
                        sx={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center",
                          transition: "all 0.3s ease",
                          filter: "brightness(0.9) saturate(1.1)",
                          "&:hover": {
                            transform: "scale(1.02)",
                            filter: "brightness(1) saturate(1.3)",
                          },
                        }}
                      />
                    </Box>
                  ))}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: {
                      xs: "0.85rem",
                      sm: "0.95rem",
                    },
                    mt: { xs: 1, sm: 1.5 },
                    flexShrink: 0,
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    textOverflow: "ellipsis",
                    lineHeight: 1.35,
                    minHeight: "3.7em",
                    maxHeight: "3.7em",
                  }}
                >
                  {planet.culturalLog}
                </Typography>
              </GlassPaper>
            </Grid>

            {/* 4th Section: Planet Visits Chart - hidden on small screens */}
            <Grid
              sx={{
                gridColumn: "span 1",
                gridRow: "span 1",
                minHeight: 0,
                display: { xs: "none", smPlus: "block" },
              }}
            >
              <GlassPaper
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                sx={{ height: "100%" }}
              >
                <PlanetVisitsChart planet={planet} />
              </GlassPaper>
            </Grid>
          </Grid>
        </AnimatePresence>
      </Box>
    </ThemeProvider>
  );
}
