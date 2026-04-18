import { useState, useMemo } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import "./index.css";
import { ColorModeContext, themeSettings, useMode } from "./theme";
import Topbar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <SideBar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<div>Dashboard</div>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
