import React from "react";
import {
  Card,
  CardContent,
  Chip,
  Typography,
  Stack,
  Box,
  useTheme,
} from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

export function PlanetVisitsChart({ planet }) {
  const theme = useTheme();
  const visitData = planet.visitFrequency || [
    1500, 2300, 3100, 2800, 4000, 3200, 3500,
  ];
  const totalVisits = visitData.reduce((a, b) => a + b, 0);
  const landingData = visitData.map((val) => Math.floor(val * 0.8));
  const missionData = visitData.map((val) => Math.floor(val * 0.6));
  const colorPalette = ["#0d47a1", "#1976d2", "#42a5f5"];
  const randomLabel = Math.random() * 20 + 1;

  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        height: "400px", // Set an explicit height here
        borderRadius: "12px",
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardContent
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          p: 2,
          "&:last-child": { pb: 2 }, // Remove default padding
        }}
      >
        {/* Header Section */}
        <Box>
          <Typography variant="h5" sx={{ color: "primary.main" }}>
            Visit Frequency - {planet.name}
          </Typography>
          <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1 }}>
            <Typography variant="h4" sx={{ color: theme.palette.text.primary }}>
              {totalVisits.toLocaleString()}
            </Typography>
            <Chip
              size="small"
              label={`+${randomLabel.toFixed(2)}%`}
              variant="outlined"
              sx={{
                color: theme.palette.success.main,
                borderColor: theme.palette.success.main,
                backgroundColor: " #388E3C30 ",
              }}
            />
          </Stack>
          <Typography
            variant="caption2"
            sx={{
              color: theme.palette.text.secondary,
              mt: 1,
              display: "block",
            }}
          >
            Total visits in the last 6 months
          </Typography>
        </Box>

        {/* Chart Container */}
        <Box
          sx={{
            flex: 1,
            minHeight: 0,
            position: "relative",
            width: "100%",
            height: "300px", // Ensure chart container has a height
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <BarChart
              colors={colorPalette}
              borderRadius={8} // Add this prop for rounded corners
              xAxis={[
                {
                  scaleType: "band",
                  data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                  categoryGapRatio: 0.5,
                  tickLabelStyle: {
                    fill: theme.palette.text.primary,
                    fontSize: theme.typography.caption.fontSize,
                  },
                },
              ]}
              yAxis={[
                {
                  tickLabelStyle: {
                    fill: theme.palette.text.primary,
                    fontSize: theme.typography.caption.fontSize,
                  },
                },
              ]}
              series={[
                {
                  id: "orbital",
                  data: visitData,
                  stack: "A",
                  label: "Orbital Passes",
                },
                {
                  id: "landings",
                  data: landingData,
                  stack: "A",
                  label: "Surface Landings",
                },
                {
                  id: "missions",
                  data: missionData,
                  stack: "A",
                  label: "Exploration Missions",
                },
              ]}
              margin={{
                left: 60,
                right: 20,
                top: 20,
                bottom: 30,
              }}
              grid={{
                horizontal: true,
                vertical: false,
              }}
              slotProps={{
                legend: { hidden: true },
              }}
              sx={{
                width: "100%",
                height: "100%",
                minHeight: 0,
                willChange: "height",
                "& .MuiBarElement-root": {
                  // Add transition for smooth hover effects
                  transition: "all 0.3s ease",
                },
                "& .MuiChartsAxis-line, & .MuiChartsAxis-tick": {
                  stroke: theme.palette.divider,
                },
                "& .MuiChartsGrid-line": {
                  stroke: theme.palette.divider,
                  strokeDasharray: "4 2",
                  strokeOpacity: 0.5,
                },
              }}
            />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
