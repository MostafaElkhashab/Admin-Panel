import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import { useTranslation } from "react-i18next";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { t } = useTranslation();

  return (
    <Box m={{ xs: "10px", md: "20px" }}>
      {/* HEADER */}
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
      >
        <Header
          title={t("dashboard.title")}
          subtitle={t("dashboard.subtitle")}
        />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
              width: { xs: "100%", sm: "auto" },
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            {t("dashboard.downloadReports")}
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        sx={{
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(12, 1fr)",
          },
          gridAutoRows: "minmax(140px, auto)",
          gap: "20px",
        }}
      >
        {/* ROW 1 */}
        <Box
          sx={{
            gridColumn: { xs: "span 12", sm: "span 6", md: "span 3" },
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "140px",
            p: { xs: "15px", md: 0 },
          }}
        >
          <StatBox
            title="2,361"
            subtitle={t("dashboard.stats.emailsSent")}
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumn: { xs: "span 12", sm: "span 6", md: "span 3" },
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "140px",
            p: { xs: "15px", md: 0 },
          }}
        >
          <StatBox
            title="31,225"
            subtitle={t("dashboard.stats.salesObtained")}
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumn: { xs: "span 12", sm: "span 6", md: "span 3" },
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "140px",
            p: { xs: "15px", md: 0 },
          }}
        >
          <StatBox
            title="11,441"
            subtitle={t("dashboard.stats.newClients")}
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          sx={{
            gridColumn: { xs: "span 12", sm: "span 6", md: "span 3" },
            backgroundColor: colors.primary[400],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "140px",
            p: { xs: "15px", md: 0 },
          }}
        >
          <StatBox
            title="1,325,134"
            subtitle={t("dashboard.stats.trafficReceived")}
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          sx={{
            gridColumn: { xs: "span 12", md: "span 8" },
            gridRow: { xs: "auto", md: "span 2" },
            backgroundColor: colors.primary[400],
          }}
        >
          <Box
            sx={{
              mt: "25px",
              p: { xs: "0 16px", md: "0 30px" },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
            }}
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                {t("dashboard.revenueGenerated")}
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $11,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height={{ xs: "220px", md: "250px" }} m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: { xs: "span 12", md: "span 4" },
            gridRow: { xs: "auto", md: "span 2" },
            backgroundColor: colors.primary[400],
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            maxHeight: { xs: "auto", md: "320px" },
          }}
        >
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
            gap={1}
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              {t("dashboard.recentTransactions")}
            </Typography>
          </Box>
          <Box sx={{ overflowY: "auto", px: "15px", py: "10px", flex: 1 }}>
            {mockTransactions.map((transaction, i) => (
              <Box
                key={`${transaction.txId}-${i}`}
                display="flex"
                flexDirection={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", sm: "center" }}
                borderBottom={`4px solid ${colors.primary[500]}`}
                py="15px"
                gap={1}
              >
                <Box sx={{ minWidth: 0 }}>
                  <Typography
                    color={colors.greenAccent[500]}
                    variant="h5"
                    fontWeight="600"
                  >
                    {transaction.txId}
                  </Typography>
                  <Typography color={colors.grey[100]}>
                    {transaction.user}
                  </Typography>
                </Box>
                <Box
                  color={colors.grey[100]}
                  sx={{ width: { xs: "100%", sm: "auto" }, minWidth: 0 }}
                >
                  {transaction.date}
                </Box>
                <Box
                  backgroundColor={colors.greenAccent[500]}
                  p="5px 10px"
                  borderRadius="4px"
                  sx={{
                    alignSelf: { xs: "stretch", sm: "auto" },
                    textAlign: { xs: "center", sm: "left" },
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  ${transaction.cost}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          sx={{
            gridColumn: { xs: "span 12", md: "span 4" },
            gridRow: { xs: "auto", md: "span 2" },
            backgroundColor: colors.primary[400],
            p: { xs: "20px", md: "30px" },
          }}
        >
          <Typography variant="h5" fontWeight="600">
            {t("dashboard.campaign")}
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              {t("dashboard.campaignRevenue", { amount: "$48,352" })}
            </Typography>
            <Typography>{t("dashboard.campaignNote")}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: { xs: "span 12", md: "span 4" },
            gridRow: { xs: "auto", md: "span 2" },
            backgroundColor: colors.primary[400],
          }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: { xs: "20px", md: "30px" } }}
          >
            {t("dashboard.salesQuantity")}
          </Typography>
          <Box height={{ xs: "220px", md: "250px" }} mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          sx={{
            gridColumn: { xs: "span 12", md: "span 4" },
            gridRow: { xs: "auto", md: "span 2" },
            backgroundColor: colors.primary[400],
            p: { xs: "20px", md: "30px" },
          }}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            {t("dashboard.geographyTraffic")}
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
