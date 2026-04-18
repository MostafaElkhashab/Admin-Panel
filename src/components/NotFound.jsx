import { Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SearchOffIcon from "@mui/icons-material/SearchOff";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
      }}
    >
      {/* Main Content */}
      <Box
        sx={{
          textAlign: "center",
          zIndex: 1,
          maxWidth: "600px",
        }}
      >
        {/* Icon */}
        <Box
          sx={{
            marginBottom: "40px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              backgroundColor: colors.greenAccent[900],
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "64px",
            }}
          >
            <SearchOffIcon
              sx={{
                fontSize: "64px",
                color: colors.greenAccent[500],
              }}
            />
          </Box>
        </Box>

        {/* Error Code */}
        <Typography
          variant="h1"
          sx={{
            color: colors.greenAccent[500],
            fontWeight: "bold",
            marginBottom: "10px",
            textShadow: `0px 4px 8px rgba(0, 0, 0, 0.3)`,
          }}
        >
          404
        </Typography>

        {/* Error Title */}
        <Typography
          variant="h2"
          sx={{
            color: colors.grey[100],
            marginBottom: "15px",
            fontWeight: "600",
          }}
        >
          {t("notFound.title")}
        </Typography>

        {/* Error Description */}
        <Typography
          variant="h5"
          sx={{
            color: colors.grey[300],
            marginBottom: "40px",
            lineHeight: 1.6,
          }}
        >
          {t("notFound.description")}
        </Typography>

        {/* Action Buttons */}
        <Box
          sx={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              backgroundColor: colors.greenAccent[500],
              color: colors.primary[500],
              padding: "12px 32px",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "6px",
              textTransform: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: colors.greenAccent[600],
                transform: "translateY(-2px)",
                boxShadow: `0px 8px 16px rgba(76, 206, 172, 0.3)`,
              },
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
            startIcon={<HomeIcon />}
          >
            {t("notFound.backHome")}
          </Button>

          <Button
            variant="outlined"
            onClick={() => navigate(-1)}
            sx={{
              borderColor: colors.greenAccent[500],
              color: colors.greenAccent[500],
              padding: "12px 32px",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "6px",
              textTransform: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                borderColor: colors.greenAccent[600],
                backgroundColor: "rgba(76, 206, 172, 0.1)",
              },
            }}
          >
            {t("notFound.contactSupport")}
          </Button>
        </Box>

        {/* Helpful Text */}
        <Typography
          variant="body2"
          sx={{
            color: colors.grey[400],
            marginTop: "40px",
            fontSize: "14px",
          }}
        >
          If you believe this is a mistake, please{" "}
          <span
            style={{
              color: colors.greenAccent[500],
              cursor: "pointer",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            contact support
          </span>
          .
        </Typography>
      </Box>
    </Box>
  );
};

export default NotFound;
