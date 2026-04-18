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
const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [langAnchor, setLangAnchor] = useState(null);
  const [language, setLanguage] = useState("EN");

  const handleLangOpen = (event) => {
    setLangAnchor(event.currentTarget);
  };

  const handleLangClose = () => {
    setLangAnchor(null);
  };

  const handleLanguageSelect = (lang) => {
    setLanguage(lang);
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
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />
        <IconButton type="button" sx={{ p: 1 }}>
          <Tooltip title="Search">
            <SearchIcon />
          </Tooltip>
        </IconButton>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <Tooltip title="Light Mode">
              <DarkModeOutlinedIcon />
            </Tooltip>
          ) : (
            <Tooltip title="Dark Mode">
              <LightModeOutlinedIcon />
            </Tooltip>
          )}
        </IconButton>
        <IconButton>
          <Tooltip title="Notifications">
            <NotificationsOutlinedIcon />
          </Tooltip>
        </IconButton>

        {/* LANGUAGE SELECTOR */}
        <IconButton onClick={handleLangOpen}>
          <Tooltip title="Language">
            <LanguageIcon />
          </Tooltip>
        </IconButton>
        <Menu
          anchorEl={langAnchor}
          open={Boolean(langAnchor)}
          onClose={handleLangClose}
        >
          <MenuItem
            onClick={() => handleLanguageSelect("EN")}
            selected={language === "EN"}
          >
            EN - English
          </MenuItem>
          <MenuItem
            onClick={() => handleLanguageSelect("AR")}
            selected={language === "AR"}
          >
            AR - العربية
          </MenuItem>
        </Menu>

        <IconButton>
          <Tooltip title="Settings">
            <SettingsOutlinedIcon />
          </Tooltip>
        </IconButton>
        <IconButton>
          <Tooltip title="Profile">
            <PersonOutlinedIcon />
          </Tooltip>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
