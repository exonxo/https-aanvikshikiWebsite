import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd";
import "./index.css";
import App from "./app/App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0F62FE",
          colorBgBase: "#ffffff",
          colorBgContainer: "#ffffff",
          colorTextBase: "#1e293b",
          colorTextSecondary: "#64748B",
          colorBorder: "#E2E8F0",
          colorBorderSecondary: "#e5e7eb",
          borderRadius: 0,
          fontFamily: "'IBM Plex Sans', sans-serif",
          fontFamilyCode: "'IBM Plex Mono', monospace",
          colorLink: "#0F62FE",
          colorLinkHover: "#0043CE",
          colorSuccess: "#22c55e",
          colorWarning: "#f59e0b",
          colorError: "#ef4444",
          motionDurationMid: "0.2s",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
);
