import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import { useTranslation } from "react-i18next";

const Line = () => {
  const { t } = useTranslation();

  return (
    <Box m="20px">
      <Header title={t("line.title")} subtitle={t("line.subtitle")} />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
