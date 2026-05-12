import { ResponsiveLine } from "@nivo/line";
import { useTheme, useMediaQuery } from "@mui/material";
import { tokens } from "../theme";
import { mockLineData as data } from "../data/mockData";

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const colors = tokens(theme.palette.mode);
  const chartTextColor =
    theme.palette.mode === "dark" ? colors.grey[100] : colors.grey[100];
  const tooltipBackground =
    theme.palette.mode === "dark" ? colors.primary[400] : "#fff";
  const chartMargin = {
    top: 50,
    right: isDashboard ? 40 : isSmallScreen ? 20 : 110,
    bottom: isSmallScreen ? 40 : 50,
    left: isDashboard ? 40 : 40,
  };
  const xLegend = isDashboard || isSmallScreen ? undefined : "transportation";
  const yLegend = isDashboard || isSmallScreen ? undefined : "count";

  return (
    <ResponsiveLine
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
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }} // added
      margin={chartMargin}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: isSmallScreen ? 8 : 5,
        tickRotation: isSmallScreen ? -45 : 0,
        legend: xLegend,
        legendOffset: isSmallScreen ? 30 : 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: isSmallScreen ? 3 : 5,
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: yLegend,
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={
        isSmallScreen
          ? []
          : [
              {
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: "left-to-right",
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: "circle",
                symbolBorderColor: "rgba(0, 0, 0, .5)",
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemBackground: "rgba(0, 0, 0, .03)",
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
      }
    />
  );
};

export default LineChart;
