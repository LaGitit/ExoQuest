import React, { useContext } from "react";
import { motion as Motion } from "framer-motion";
import { Box, Typography, Button, styled } from "@mui/material";
import { PlanetContext } from "../../../../context/PlanetContext.context.jsx";
import { MiniPlanetCarousel } from "./miniplanet.component.jsx";

const HolographicBar = styled(Motion.div)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "100%",
  background: "transparent",
  borderRadius: "1rem",
  backdropFilter: "blur(10px)",
  padding: theme.spacing(2),
  border: "1px solid rgba(255, 255, 255, 0.1)",
  transition: "all 0.4s ease",
  willChange: "transform, width, opacity, height",
  "&:hover": {
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  [theme.breakpoints.down("lg")]: {
    justifyContent: "center",
    padding: theme.spacing(1.5),
  },
}));

const FadeSlideBox = styled(Box)(() => ({
  opacity: 0,
  transform: "translateY(-20px)",
  animation: "fadeSlideIn 0.5s ease-in-out forwards",
  "@keyframes fadeSlideIn": {
    from: { opacity: 0, transform: "translateY(-20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
  },
}));

const PlanetStat = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "bold",
  textTransform: "uppercase",
  fontSize: "1.4rem",
  position: "relative",
  "&::after": {
    content: '""',
    display: "block",
    width: "50%",
    height: "2px",
    background: theme.palette.primary.main,
    margin: "4px auto 0",
    opacity: 0.7,
    boxShadow: "0px 0px 8px rgba(0, 255, 255, 0.6)",
    transition: "width 0.3s ease-in-out",
  },
  "&:hover::after": {
    width: "80%",
  },
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    fontSize: "1.2rem",
  },
  "@media (minWidth: 1024px) and (maxWidth: 1110px)": {
    fontSize: "1.05rem",
  },
}));

const HoloButton = styled(Button)(({ theme }) => ({
  color: theme.palette.primary.main,
  padding: "8px 16px",
  border: `1px solid ${theme.palette.primary.main}`,
  transition: "all 0.3s ease-in-out",
  minWidth: "120px",
  "&:hover": {
    background: theme.palette.primary.main,
    color: "#000",
  },
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
  [theme.breakpoints.between("lg", "xl")]: {
    padding: "6px 12px",
    minWidth: "100px",
    fontSize: "0.875rem",
  },
  "@media (minWidth: 1024px) and (maxWidth: 1110px)": {
    padding: "4px 10px",
    minWidth: "90px",
    fontSize: "0.8rem",
  },
}));

export const ExpandedHolographicBar = () => {
  const { planets, activeIndex } = useContext(PlanetContext);
  const planet = planets[activeIndex];

  return (
    <HolographicBar
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      whileHover={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
    >
      {/* Planet Name/Status */}
      <FadeSlideBox
        sx={{
          flex: "0 1 auto",
          minWidth: 0,
          display: { xs: "none", lg: "flex" },
          flexDirection: "column",
          alignItems: "flex-start",
          mr: { lg: 4, xl: 5 },
          "@media (minWidth: 1024px) and (maxWidth: 1385px)": {
            mr: 2,
          },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: {
              lg: "2.2rem",
              xl: "3rem",
              "@media (minWidth: 1024px) and (maxWidth: 1385px)": "1.8rem",
              "@media (minWidth: 1024px) and (maxWidth: 1110px)": "1.6rem",
            },
            letterSpacing: "0.08em",
            color: "primary.main",
            fontWeight: "bold",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxWidth: "100%",
          }}
        >
          {planet.name}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: {
              lg: "1.1rem",
              xl: "1.5rem",
              "@media (minWidth: 1024px) and (maxWidth: 1385px)": "1rem",
              "@media (minWidth: 1024px) and (maxWidth: 1110px)": "0.9rem",
            },
            color: "rgba(0, 255, 255, 0.7)",
            whiteSpace: "nowrap",
          }}
        >
          Status: {planet.status || "Available"}
        </Typography>
      </FadeSlideBox>

      {/* Distance & Temperature */}
      <FadeSlideBox
        sx={{
          flex: "0 1 auto",
          minWidth: 0,
          display: { xs: "none", lg: "flex" },
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          mx: { lg: 3, xl: 4 },
          "@media (minWidth: 1024px) and (maxWidth: 1385px)": {
            mx: 2,
          },
          "@media (minWidth: 1024px) and (maxWidth: 1110px)": {
            mx: 1,
          },
        }}
      >
        <PlanetStat variant="h5">
          Distance: {planet.distance || "N/A"} LY
        </PlanetStat>
        <PlanetStat variant="subtitle1">
          Temp: {planet.temperature?.current || "Unknown"}°C
        </PlanetStat>
      </FadeSlideBox>

      {/* Mini Carousel */}
      <Box
        sx={{
          flex: "1 1 auto",
          minWidth: 0,
          display: "flex",
          justifyContent: "center",
          mx: { xs: 1, lg: 4 },
          maxWidth: { lg: "600px", xl: "700px" },
          "@media (minWidth: 1024px) and (maxWidth: 1385px)": {
            mx: 2,
            maxWidth: "500px",
          },
          "@media (minWidth: 1024px) and (maxWidth: 1110px)": {
            mx: 1,
            maxWidth: "440px",
          },
        }}
      >
        <MiniPlanetCarousel />
      </Box>

      <FadeSlideBox
        sx={{
          flex: "0 1 auto",
          minWidth: 0,
          display: { xs: "none", lg: "flex" },
          gap: { lg: 1.5, xl: 2 },
          alignItems: "center",
          justifyContent: "flex-end",
          ml: { lg: 4, xl: 5 },
          "@media (minWidth: 1024px) and (maxWidth: 1385px)": {
            gap: 1,
            ml: 2,
          },
          "@media (minWidth: 1024px) and (maxWidth: 1110px)": {
            gap: 0.5,
            ml: 1,
          },
        }}
      >
        <HoloButton variant="outlined">Book Now</HoloButton>
        <HoloButton variant="outlined">View Deals</HoloButton>
      </FadeSlideBox>
    </HolographicBar>
  );
};
