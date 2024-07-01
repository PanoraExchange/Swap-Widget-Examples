import { PanoraWidget, PanoraWidgetConfig } from "@panoraexchange/widget-sdk";

const PANORA_WIDGET_API_KEY = process.env.REACT_APP_PANORA_WIDGET_API_KEY ?? "";

const Widget = () => {
  const widgetConfig: PanoraWidgetConfig = {
    API_KEY: PANORA_WIDGET_API_KEY,
    styles: {
      widget: {
        width: "450px",
      },
    },
  };

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
      <PanoraWidget config={widgetConfig} />
    </div>
  );
};

export default Widget;
