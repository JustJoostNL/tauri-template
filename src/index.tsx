import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, Grow, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { HashRouter, Route, Routes } from "react-router-dom";
import { platform } from "@tauri-apps/plugin-os";
import { IndexPage } from "./pages/IndexPage";
import { BaseStyle } from "./components/shared/BaseStyle";
import { theme } from "./lib/theme";
import { ConfigProvider } from "./hooks/useConfig";
import { MinimalScrollbars } from "./components/shared/MinimalScrollbars";

const platformName = platform();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <ConfigProvider>
      <SnackbarProvider
        autoHideDuration={1500}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        maxSnack={2}
        TransitionComponent={Grow}
      >
        <ThemeProvider theme={theme}>
          {platformName !== "macos" && <MinimalScrollbars />}
          <BaseStyle />
          <CssBaseline />
          <HashRouter>
            <Routes>
              <Route path="/" element={<IndexPage />} />
            </Routes>
          </HashRouter>
        </ThemeProvider>
      </SnackbarProvider>
    </ConfigProvider>
  </React.StrictMode>,
);
