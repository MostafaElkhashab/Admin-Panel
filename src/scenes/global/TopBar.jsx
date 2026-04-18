import { Box, IconButton, useTheme, Menu, MenuItem } from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import InputBase from "@mui/material/InputBase";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
import Tooltip from "@mui/material/Tooltip";
import { useTranslation } from "react-i18next";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { t, i18n } = useTranslation();
  const [langAnchor, setLangAnchor] = useState(null);
  const isRTL = i18n.language === "ar";

  const handleLangOpen = (event) => {
    setLangAnchor(event.currentTarget);
  };

  const handleLangClose = () => {
    setLangAnchor(null);
  };

  const handleLanguageSelect = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("language", lang);
    handleLangClose();
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder={t("search")} />
        <IconButton type="button" sx={{ p: 1 }}>
          <Tooltip title={t("search")}>
            <SearchIcon />
          </Tooltip>
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <Tooltip title={t("topbar.lightMode")}>
              <DarkModeOutlinedIcon />
            </Tooltip>
          ) : (
            <Tooltip title={t("topbar.darkMode")}>
              <LightModeOutlinedIcon />
            </Tooltip>
          )}
        </IconButton>
        <IconButton>
          <Tooltip title={t("topbar.notifications")}>
            <NotificationsOutlinedIcon />
          </Tooltip>
        </IconButton>

        {/* LANGUAGE SELECTOR */}
        <IconButton onClick={handleLangOpen}>
          <Tooltip title={t("topbar.language")}>
            <LanguageIcon />
          </Tooltip>
        </IconButton>
        <Menu
          anchorEl={langAnchor}
          open={Boolean(langAnchor)}
          onClose={handleLangClose}
        >
          <MenuItem
            onClick={() => handleLanguageSelect("en")}
            selected={i18n.language === "en"}
          >
            {t("languages.en")}
          </MenuItem>
          <MenuItem
            onClick={() => handleLanguageSelect("ar")}
            selected={i18n.language === "ar"}
          >
            {t("languages.ar")}
          </MenuItem>
        </Menu>

        <IconButton>
          <Tooltip title={t("topbar.settings")}>
            <SettingsOutlinedIcon />
          </Tooltip>
        </IconButton>
        <IconButton>
          <Tooltip title={t("topbar.profile")}>
            <PersonOutlinedIcon />
          </Tooltip>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
