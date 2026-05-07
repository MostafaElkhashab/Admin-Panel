import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { useTranslation } from "react-i18next";

const FAQS = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { t } = useTranslation();

  return (
    <Box m="20px">
      <Header title={t("faq.title")} subtitle={t("faq.subtitle")} />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            {t("faq.questions.q1.title")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t("faq.questions.q1.answer")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            {t("faq.questions.q2.title")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t("faq.questions.q2.answer")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            {t("faq.questions.q3.title")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t("faq.questions.q3.answer")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            {t("faq.questions.q4.title")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t("faq.questions.q4.answer")}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            {t("faq.questions.q5.title")}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t("faq.questions.q5.answer")}</Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQS;
