import { memo } from "react";
import { PanoraWidget } from "@panoraexchange/widget-sdk";

const Widget = () => (
  <div
    className=""
    style={{
      minHeight: "100vh",
      minWidth: "100vw",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#010D09",
    }}
  >
    <PanoraWidget
      config={{
        displayMode: "INTEGRATED",
        independentWalletConnection: true,
      }}
    />
  </div>
);

export default memo(Widget);
