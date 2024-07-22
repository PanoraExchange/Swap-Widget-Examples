import { memo } from "react";
import { PanoraWidget } from "@panoraexchange/widget-sdk";

const KEYLESS_GOOGLE_CLIENT_ID =
  process.env.NEXT_PUBLIC_KEYLESS_GOOGLE_CLIENT_ID;
const PANORA_WIDGET_API_KEY =
  process.env.NEXT_PUBLIC_PANORA_WIDGET_API_KEY ?? "";

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
        API_KEY: PANORA_WIDGET_API_KEY,
        styles: {
          widget: { width: "450px" },
        },
        KEYLESS_GOOGLE_CLIENT_ID,
        tokenPickerView: "MODAL",
      }}
    />
  </div>
);

export default memo(Widget);
