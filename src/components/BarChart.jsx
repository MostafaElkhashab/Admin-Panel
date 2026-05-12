import { useTheme, useMediaQuery } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../theme";
import { mockBarData as data } from "../data/mockData";

const BarChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const colors = tokens(theme.palette.mode);
  const chartTextColor =
    theme.palette.mode === "dark" ? colors.grey[100] : colors.grey[100];
  const tooltipBackground =
    theme.palette.mode === "dark" ? colors.primary[400] : "#fff";
  const chartMargin = {
    top: 50,
    right: isDashboard ? 40 : isSmallScreen ? 20 : 130,
    bottom: isSmallScreen ? 90 : 50,
    left: isDashboard ? 40 : 60,
  };

  return (
    <ResponsiveBar
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
      keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
      indexBy="country"
      margin={chartMargin}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: isSmallScreen ? 8 : 5,
        tickRotation: isSmallScreen ? -45 : 0,
        legend: isDashboard || isSmallScreen ? undefined : "country",
        legendPosition: "middle",
        legendOffset: isSmallScreen ? 36 : 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        tickValues: isSmallScreen ? 3 : undefined,
        legend: isDashboard || isSmallScreen ? undefined : "food",
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={
        isSmallScreen
          ? []
          : [
              {
                dataFrom: "keys",
                anchor: "bottom-right",
                direction: "column",
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: "left-to-right",
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]
      }
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in country: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;
