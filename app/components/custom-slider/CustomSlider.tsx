import { ConfigProvider, Slider } from "antd";

const CustomSlider = () => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Slider: {
            dotActiveBorderColor: "black",
            dotBorderColor: "black",
            handleColor: "black",
            handleActiveColor: "black",
            dotSize: 14,
            handleSize: 16,
            trackBg: "black",
            trackBgDisabled: "rgba(0,0,0,0.2)",
            controlSize: 12,      // Increases height of slider control
            railSize: 6           // Slightly more height than default (4)
          }
        }
      }}
    >
      <Slider
        range
        min={0}
        max={800}
        defaultValue={[134, 530]}
      />
    </ConfigProvider>
  );
};

export default CustomSlider;
