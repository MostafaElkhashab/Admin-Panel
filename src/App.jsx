import { useState, useMemo } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material/styles";
import "./index.css";
import { ColorModeContext, themeSettings, useMode } from "./theme";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Button variant="contained">+</Button>
          <Button onClick={colorMode.toggleColorMode} variant="outlined">
            Toggle {theme.palette.mode === "dark" ? "Light" : "Dark"} Mode
          </Button>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
