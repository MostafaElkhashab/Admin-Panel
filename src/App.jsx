import { useEffect } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import { ColorModeContext, themeSettings, useMode } from "./theme";
import Topbar from "./scenes/global/TopBar";
import SideBar from "./scenes/global/SideBar";
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import { useTranslation } from "react-i18next";
import Team from "./scenes/team/Team";
import Contacts from "./scenes/contacts/Contacts";
import Invoices from "./scenes/invoices/Invoices";
import { ToastContainer } from "react-toastify";
import Form from "./scenes/form/Form";
import Calendar from "./scenes/calender/Calendar";
import FAQS from "./scenes/faq/FAQS";
import Bar from "./scenes/bar/Bar";
import Pie from "./scenes/pie/Pie";
import Line from "./scenes/line/Line";
import Geography from "./scenes/geography/Geography";
import Dashboard from "./scenes/dashboard/Dashboard";

function App() {
  const [theme, colorMode] = useMode();
  const { i18n } = useTranslation();
  useEffect(() => {
    const htmlElement = document.documentElement;
    htmlElement.lang = i18n.language;
    htmlElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className={`App ${theme.palette.mode}`}>
          <SideBar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/faq" element={<FAQS />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <ToastContainer />
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
