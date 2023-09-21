import { Route, Routes } from "react-router-dom";
import TopBar from "./screen/global/TopBar";
import { ColorModeContext,useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import Dashboard from "./screen/dashboard";
import Sidebar from "./screen/global/Sidebar";
import Team from "./screen/team";
import Contacts from "./screen/contacts";
import Bar from "./screen/bar";
import Line from "./screen/line";
import Pie from "./screen/pie";



function App() {
  const [theme, colorMode] = useMode();
  return (<ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <TopBar />
              <Routes>
                <Route path="/" element={<Dashboard/>} />
                <Route path="/team" element={<Team/>} />
                <Route path="/contacts" element={<Contacts/>} />
                <Route path="/bar" element={<Bar/>} />
                <Route path="/line" element={<Line/>} />
                <Route path="pie" element={<Pie/>} />
              </Routes>
            </main>
          </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
