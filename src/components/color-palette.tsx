import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type ColorPaletteType = {
  className?: string;
  pieAndChartsStreamlineMilano?: string;
  understandingReports?: string;
  minVideo?: string;

  /** Style props */
  colorPaletteBackgroundColor?: CSSProperties["backgroundColor"];
  designWidth?: CSSProperties["width"];
  designAlignSelf?: CSSProperties["alignSelf"];
};

const ColorPalette: FunctionComponent<ColorPaletteType> = ({
  className = "",
  colorPaletteBackgroundColor,
  designWidth,
  designAlignSelf,
  pieAndChartsStreamlineMilano,
  understandingReports,
  minVideo,
}) => {
  const colorPaletteStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: colorPaletteBackgroundColor,
    };
  }, [colorPaletteBackgroundColor]);

  const designStyle: CSSProperties = useMemo(() => {
    return {
      width: designWidth,
      alignSelf: designAlignSelf,
    };
  }, [designWidth, designAlignSelf]);

  return (
    <div
      className={`w-[310px] rounded-3xs bg-aliceblue-200 border-Border border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start text-left text-base text-Dark font-Small-Medium ${className}`}
      style={colorPaletteStyle}
    >
      <div className="w-[310px] h-[150px] relative" style={designStyle}>
        <img
          className="absolute h-[calc(100%_-_14px)] top-[7.2px] bottom-[6.8px] left-[87.4px] max-h-full w-[136px] object-cover"
          loading="lazy"
          alt=""
          src={pieAndChartsStreamlineMilano}
        />
      </div>
      <div className="self-stretch bg-White flex flex-col items-start justify-start !p-4 gap-2">
        <div className="self-stretch relative leading-[20px] font-semibold">
          {understandingReports}
        </div>
        <div className="self-stretch flex flex-row items-center justify-start gap-2 text-sm text-Grey-600">
          <img
            className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/circleplay.svg"
          />
          <div className="relative leading-[20px] font-medium">{minVideo}</div>
        </div>
      </div>
    </div>
  );
};

export default ColorPalette;
