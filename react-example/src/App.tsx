import { useEffect, useState } from "react";
import { init, close } from "@panoraexchange/widget-sdk";

// Replace with your own API key, or leave empty to use the default public key
const API_KEY = import.meta.env.VITE_PANORA_API_KEY || "";

const DEFAULT_FROM = "0xa" as const; // APT
const DEFAULT_TO =
  "0x357b0b74bc833e95a115ad22604854d6b0fca151cecd94111770e5d6ffc9dc2b" as const; // USDt

type Tab = "INTEGRATED" | "WIDGET" | "MODAL";

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>("INTEGRATED");

  useEffect(() => {
    // Always tear down previous instance before switching modes
    close();

    // MODAL is opened on-demand via button click
    if (activeTab === "MODAL") return;

    const timeout = setTimeout(() => {
      if (activeTab === "INTEGRATED") {
        init({
          panoraApiKey: API_KEY,
          displayMode: "INTEGRATED",
          integratedTargetId: "panora-widget-container",
          defaultFromTokenAddress: DEFAULT_FROM,
          defaultToTokenAddress: DEFAULT_TO,
          locale: "en",
          showNotifications: true,
        });
      } else if (activeTab === "WIDGET") {
        init({
          panoraApiKey: API_KEY,
          displayMode: "WIDGET",
          defaultFromTokenAddress: DEFAULT_FROM,
          defaultToTokenAddress: DEFAULT_TO,
          locale: "en",
          widgetBtnDirection: "right-bottom",
        });
      }
    }, 100);

    return () => {
      clearTimeout(timeout);
      close();
    };
  }, [activeTab]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#111",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem",
        fontFamily: "system-ui, sans-serif",
        color: "#fff",
        gap: "1.5rem",
      }}
    >
      <h1 style={{ marginBottom: "0.5rem" }}>
        Panora Widget SDK — React + Vite
      </h1>

      {/* Tab switcher */}
      <div style={{ display: "flex", gap: "0.5rem" }}>
        {(["INTEGRATED", "WIDGET", "MODAL"] as Tab[]).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: "8px 20px",
              borderRadius: "8px",
              border:
                activeTab === tab ? "2px solid #5fdfac" : "2px solid #333",
              background: activeTab === tab ? "#5fdfac20" : "#1a1a1a",
              color: activeTab === tab ? "#5fdfac" : "#888",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* INTEGRATED — renders inline */}
      {activeTab === "INTEGRATED" && (
        <div>
          <p
            style={{
              color: "#888",
              fontSize: "13px",
              marginBottom: "0.75rem",
              textAlign: "center",
            }}
          >
            Renders inline inside a target element
          </p>
          <div id="panora-widget-container" />
        </div>
      )}

      {/* WIDGET — floating button */}
      {activeTab === "WIDGET" && (
        <div style={{ textAlign: "center" }}>
          <p style={{ color: "#888", fontSize: "13px" }}>
            Floating button at bottom-right corner — click it to open
          </p>
        </div>
      )}

      {/* MODAL — init() opens, close() closes */}
      {activeTab === "MODAL" && (
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <p style={{ color: "#888", fontSize: "13px" }}>
            init() opens the modal, close() closes it
          </p>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <button
              onClick={() => {
                init({
                  panoraApiKey: API_KEY,
                  displayMode: "MODAL",
                  defaultFromTokenAddress: DEFAULT_FROM,
                  defaultToTokenAddress: DEFAULT_TO,
                  locale: "en",
                });
              }}
              style={{
                padding: "12px 32px",
                borderRadius: "12px",
                border: "2px solid #5fdfac",
                background: "#5fdfac20",
                color: "#5fdfac",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: "16px",
              }}
            >
              Open Swap Modal
            </button>
            <button
              onClick={() => close()}
              style={{
                padding: "12px 32px",
                borderRadius: "12px",
                border: "2px solid #ff4d4d",
                background: "#ff4d4d20",
                color: "#ff4d4d",
                cursor: "pointer",
                fontWeight: 700,
                fontSize: "16px",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
