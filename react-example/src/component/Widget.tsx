import { PanoraWidget } from "@panoraexchange/widget-sdk";

const PANORA_WIDGET_API_KEY = process.env.REACT_APP_PANORA_WIDGET_API_KEY ?? "";
const KEYLESS_GOOGLE_CLIENT_ID =
  process.env.REACT_APP_KEYLESS_GOOGLE_CLIENT_ID ?? "";

const Widget = () => {
  return (
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
};

export default Widget;
