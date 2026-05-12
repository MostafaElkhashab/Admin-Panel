import { useTheme, useMediaQuery } from "@mui/material";
import { ResponsiveChoropleth } from "@nivo/geo";
import { geoFeatures } from "../data/mockGeoFeatures";
import { tokens } from "../theme";
import { mockGeographyData as data } from "../data/mockData";

const GeographyChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const colors = tokens(theme.palette.mode);
  const chartTextColor =
    theme.palette.mode === "dark" ? colors.grey[100] : colors.grey[100];
  const tooltipBackground =
    theme.palette.mode === "dark" ? colors.primary[400] : "#fff";
  const projectionScale = isDashboard
    ? isSmallScreen
      ? 30
      : 40
    : isSmallScreen
      ? 110
      : 150;
  const projectionTranslation = isDashboard
    ? [0.49, 0.6]
    : isSmallScreen
      ? [0.5, 0.65]
      : [0.5, 0.5];

  return (
    <ResponsiveChoropleth
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: chartTextColor,
            },
          },
          legend: {
            text: {
              fill: chartTextColor,
            },
          },
          ticks: {
            line: {
              stroke: chartTextColor,
              strokeWidth: 1,
            },
            text: {
              fill: chartTextColor,
            },
          },
        },
        legends: {
          text: {
            fill: chartTextColor,
          },
        },
        tooltip: {
          container: {
            background: tooltipBackground,
            color: chartTextColor,
            fontSize: 12,
            borderRadius: 4,
            boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
          },
        },
      }}
      features={geoFeatures.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionScale={projectionScale}
      projectionTranslation={projectionTranslation}
      projectionRotation={[0, 0, 0]}
      borderWidth={1.5}
      borderColor="#ffffff"
      fillOpacity={1}
      hoverOpacity={1}
      legends={
        !isDashboard && !isSmallScreen
          ? [
              {
                anchor: "bottom-left",
                direction: "column",
                justify: true,
                translateX: 20,
                translateY: -100,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: colors.grey[100],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: "#ffffff",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
          : undefined
      }
    />
  );
};

export default GeographyChart;
