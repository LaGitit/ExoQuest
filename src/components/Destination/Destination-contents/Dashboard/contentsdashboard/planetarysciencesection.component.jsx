import React, { useEffect, useState } from "react";
import { Box, Typography, styled } from "@mui/material";
import { motion as Motion } from "framer-motion";

const TemperatureBarContainer = styled(Box)({
  position: "relative",
  height: 8,
  width: "100%",
  backgroundColor: "#222",
  borderRadius: 4,
  overflow: "hidden",
});

const TemperatureBarFill = styled(Motion.div)(({ fillcolor }) => ({
  height: "100%",
  backgroundColor: fillcolor,
  borderRadius: 4,
  boxShadow: `0 0 8px ${fillcolor}`,
}));

const TemperatureIndicator = styled(Box)({
  position: "absolute",
  top: -30,
  transform: "translateX(-50%)",
  padding: "4px 8px",
  backgroundColor: "#000",
  color: "#fff",
  borderRadius: 4,
  fontSize: "12px",
  fontWeight: "bold",
  boxShadow: "0 2px 4px rgba(0,0,0,0.5)",
});

const ElementContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "clamp(70px, 20vw, 90px)",
  height: "clamp(80px, 22vw, 100px)",
  margin: theme.spacing(0.5),
  transition: "transform 0.2s ease",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const ElementCircle = styled(Motion.circle)({
  fill: "none",
  strokeWidth: "2",
  strokeLinecap: "round",
});

const ElementText = styled("text")({
  textAnchor: "middle",
  dominantBaseline: "middle",
  fontFamily: "Arial, sans-serif",
  fontWeight: "bold",
});

function getTempPosition(current, min, max) {
  const clamped = Math.min(Math.max(current, min), max);
  return ((clamped - min) / (max - min)) * 100;
}

export function PlanetaryScienceSection({ planet }) {
  const { temperature, coreComposition } = planet;
  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const positionPercent = getTempPosition(
    temperature.current,
    temperature.min,
    temperature.max
  );

  const [percentages, setPercentages] = useState(coreComposition.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentages((prev) =>
        prev.map((val, i) =>
          val < coreComposition[i].percentage
            ? Math.min(val + 1, coreComposition[i].percentage)
            : val
        )
      );
    }, 20);

    return () => clearInterval(interval);
  }, [coreComposition]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
        p: { xs: 1, sm: 2 },
      }}
    >
      {/* Core Analysis Header */}
      <Typography
        variant="h5"
        sx={{
          color: "primary.main",
          fontSize: { xs: "1.1rem", sm: "1.25rem" },
          flexShrink: 0,
        }}
      >
        Core Analysis
      </Typography>

      {/* Composition Elements Grid */}
      <Box
        sx={{
          flex: "1 1 auto",
          minHeight: 0,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignContent: "flex-start",
          overflow: { xs: "scroll", sm: "hidden" },
          px: { xs: 0.25, sm: 0.5 },
          gap: { xs: 0.5, sm: 0.5, md: 0 },
          "& > *": {
            flex: {
              xs: "0 0 48%",
              sm: "0 0 30%",
              md: "0 0 20%",
            },
            maxWidth: {
              xs: "48%",
              sm: "30%",
              md: "20%",
            },
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        {coreComposition.map((element, index) => {
          const strokeDashoffset =
            circumference - (percentages[index] / 100) * circumference;

          return (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "2px",
              }}
            >
              <ElementContainer
                sx={{
                  width: "100%",
                  maxWidth: {
                    xs: "90px",
                    sm: "85px",
                    md: "80px",
                  },
                  aspectRatio: "1/1",
                  flexShrink: 0,
                }}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="xMidYMid meet"
                  style={{
                    overflow: "visible",
                  }}
                >
                  <ElementCircle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke="rgba(255,255,255,0.1)"
                  />
                  <ElementCircle
                    cx="50"
                    cy="50"
                    r={radius}
                    stroke={element.color}
                    initial={{ strokeDashoffset: circumference }}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    style={{
                      strokeDasharray: circumference,
                      transform: "rotate(-90deg)",
                      transformOrigin: "50% 50%",
                    }}
                  />
                  <ElementText
                    x="50"
                    y="40"
                    fontSize="12"
                    fontWeight="500"
                    fill={element.color}
                  >
                    {element.symbol || "--"}
                  </ElementText>
                  <ElementText
                    x="50"
                    y="60"
                    fontSize="16"
                    fontWeight="700"
                    fill="#ffffff"
                  >
                    {percentages[index]}%
                  </ElementText>
                </svg>
              </ElementContainer>

              <Typography
                variant="caption"
                sx={{
                  width: "100%",
                  textAlign: "center",
                  color: "primary.main",
                  mt: 0.15,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  fontSize: {
                    xs: "0.6rem",
                    sm: "0.65rem",
                    md: "0.7rem",
                  },
                  lineHeight: 1.25,
                  minHeight: {
                    xs: "2.2em",
                    sm: "2.4em",
                    md: "2.6em",
                  },
                  px: 0.25,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  whiteSpace: "normal",
                }}
              >
                {element.name}
              </Typography>
            </Motion.div>
          );
        })}
      </Box>

      {/* Temperature Display Section */}
      <Box
        sx={{
          mt: "auto",
          pt: { xs: 1, sm: 2 },
          flexShrink: 0,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            color: "rgba(255,255,255,0.7)",
            mb: 1,
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          Temperature Range
        </Typography>

        <Box sx={{ position: "relative" }}>
          <TemperatureBarContainer>
            <TemperatureBarFill
              fillcolor={"#00f7ff"}
              initial={{ width: "0%" }}
              animate={{ width: `${positionPercent}%` }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <TemperatureIndicator sx={{ left: `${positionPercent}%` }}>
              {temperature.current}°C
            </TemperatureIndicator>
          </TemperatureBarContainer>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: 1,
              px: 0.5,
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.7rem" }}
            >
              {temperature.min}°C
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "rgba(255,255,255,0.7)", fontSize: "0.7rem" }}
            >
              {temperature.max}°C
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
