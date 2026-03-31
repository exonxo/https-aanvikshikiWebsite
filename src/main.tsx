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
          colorPrimary: "#FF5C00",
          colorBgBase: "#FFFFFF",
          colorBgContainer: "#FFFFFF",
          colorTextBase: "#1A1A1A",
          colorTextSecondary: "#666666",
          colorBorder: "#F3F4F6",
          colorBorderSecondary: "#E2E8F0",
          borderRadius: 0,
          fontFamily: "'Geist', sans-serif",
          fontFamilyCode: "'Funnel Sans', sans-serif",
          colorLink: "#FF5C00",
          colorLinkHover: "#CC4A00",
          colorSuccess: "#22c55e",
          colorWarning: "#f59e0b",
          colorError: "#D93C15",
          motionDurationMid: "0.2s",
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
);
