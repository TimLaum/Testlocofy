import { FunctionComponent } from "react";
import ColorPalette from "./color-palette";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-4 max-w-full text-left text-base text-Primary-950 font-Small-Medium ${className}`}
    >
      <div className="w-[1127px] hidden flex-col items-start justify-start gap-5 max-w-full">
        <div className="self-stretch rounded-lg border-gray border-solid border-[1px] box-border flex flex-col items-start justify-start !pt-0 !pb-[18px] !pl-0 !pr-0 gap-5 max-w-full">
          <div className="self-stretch rounded-t-lg rounded-b-none bg-whitesmoke-100 border-gray border-solid border-t-[1px] border-r-[1px] border-l-[1px] box-border flex flex-row items-center justify-between !pt-3.5 !pb-4 !pl-5 !pr-5 gap-5 max-w-full lg:flex-wrap">
            <div className="w-[709.5px] flex flex-row items-center justify-start gap-[108px] max-w-full mq825:flex-wrap">
              <div className="w-[175px] flex flex-row items-center justify-start gap-3">
                <img
                  className="h-[18px] w-[18px] relative overflow-hidden shrink-0 object-contain"
                  alt=""
                  src="/svg.svg"
                />
                <div className="relative leading-[20px] font-semibold">
                  Meta
                </div>
              </div>
              <div className="w-[300px] relative text-sm leading-[20px] font-medium text-Dark text-center flex items-center justify-center shrink-0">
                1 account connected
              </div>
            </div>
            <div className="h-9 rounded-lg [background:linear-gradient(179.13deg,_#6e84fe,_#5c68f8)] overflow-hidden flex flex-row items-center justify-center !pt-3 !pb-3 !pl-4 !pr-4 box-border gap-2 text-sm text-White">
              <img
                className="w-4 relative h-4 overflow-hidden shrink-0"
                alt=""
                src="/plus.svg"
              />
              <div className="relative font-semibold">Add account</div>
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                alt=""
                src="/pluscircle.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start !pt-0 !pb-0 !pl-4 !pr-4 text-Dark">
            <div className="self-stretch flex flex-row items-center justify-between gap-5 lg:flex-wrap">
              <div className="flex flex-row items-center justify-start gap-4">
                <img
                  className="w-8 rounded-25xl-4 h-8"
                  alt=""
                  src="/frame-26.svg"
                />
                <div className="flex flex-col items-start justify-start gap-1">
                  <div className="relative leading-[20px] font-semibold">
                    Butterfl.ai
                  </div>
                  <div className="relative text-sm leading-[17.5px] font-medium text-Grey-600">
                    1261126874909649
                  </div>
                </div>
              </div>
              <div className="w-[300px] flex flex-col items-center justify-center text-xs text-Grey-950">
                <div className="rounded-lg bg-honeydew-100 flex flex-row items-center justify-center !pt-1 !pb-1 !pl-2 !pr-2">
                  <div className="relative leading-[16.5px] font-medium">
                    Synced
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start text-sm">
                <div className="relative leading-[20px] font-medium">
                  Connected 15 days ago
                </div>
              </div>
              <img
                className="w-[140px] h-4"
                alt=""
                src="/frame-427319370.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-lg bg-whitesmoke-100 flex flex-row items-center justify-between !pt-4 !pb-4 !pl-5 !pr-5 box-border gap-5 max-w-full lg:flex-wrap">
          <div className="w-[709.5px] flex flex-row items-center justify-start gap-[108px] max-w-full mq825:flex-wrap">
            <div className="w-[175px] flex flex-row items-center justify-start gap-3">
              <div className="w-8 rounded-25xl-4 bg-black h-8 flex flex-col items-center justify-center">
                <div className="w-4 relative h-4 overflow-hidden shrink-0">
                  <img
                    className="absolute h-[99.38%] w-[88.13%] top-[0%] right-[5.63%] bottom-[0.62%] left-[6.25%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/layer-12.svg"
                  />
                </div>
              </div>
              <div className="relative leading-[20px] font-semibold">
                TikTok
              </div>
            </div>
            <div className="w-[300px] relative text-sm leading-[20px] font-medium text-Grey-600 text-center flex items-center justify-center shrink-0">
              0 account connected
            </div>
          </div>
          <div className="h-9 rounded-lg [background:linear-gradient(179.13deg,_#6e84fe,_#5c68f8)] overflow-hidden flex flex-row items-center justify-center !pt-3 !pb-3 !pl-4 !pr-4 box-border gap-2 text-sm text-White">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/plus.svg"
            />
            <div className="relative font-semibold">Add account</div>
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
              alt=""
              src="/pluscircle.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-between gap-0 text-Primary-900 mq450:flex-wrap">
        <b className="relative leading-[20px]">{`Discover our app `}</b>
        <div className="flex flex-row items-start justify-start gap-3">
          <img
            className="h-8 w-8 rounded-31xl"
            loading="lazy"
            alt=""
            src="/frame-427319417.svg"
          />
          <img
            className="h-8 w-8 rounded-31xl"
            loading="lazy"
            alt=""
            src="/frame-427319418.svg"
          />
        </div>
      </div>
      <div className="self-stretch overflow-x-auto flex flex-row items-start justify-start gap-6 text-Dark">
        <div className="w-[310px] rounded-3xs bg-honeydew-200 border-Border border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start">
          <div className="w-[310px] h-[150px] relative">
            <img
              className="absolute h-[calc(100%_-_22px)] top-[12px] bottom-[10px] left-[91px] max-h-full w-32 object-cover"
              loading="lazy"
              alt=""
              src="/documentsstreamlinemilanopng@2x.png"
            />
          </div>
          <div className="self-stretch bg-White flex flex-col items-start justify-start !p-4 gap-2">
            <div className="self-stretch relative leading-[20px] font-semibold">
              Getting started with Boards
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-2 text-sm text-Grey-600">
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/circleplay.svg"
              />
              <div className="relative leading-[20px] font-medium">
                2 min video
              </div>
            </div>
          </div>
        </div>
        <ColorPalette
          pieAndChartsStreamlineMilano="/pieandcharts2streamlinemilanopng@2x.png"
          understandingReports="Understanding reports"
          minVideo="4 min video"
        />
        <ColorPalette
          colorPaletteBackgroundColor="rgba(255, 237, 213, 0.35)"
          designWidth="unset"
          designAlignSelf="stretch"
          pieAndChartsStreamlineMilano="/contentcreationwritingstreamlinemilanopng@2x.png"
          understandingReports="Top creative report explained"
          minVideo="5 min video"
        />
        <div className="w-[310px] rounded-3xs bg-lavender border-Border border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start">
          <div className="self-stretch h-[150px] relative">
            <img
              className="absolute top-[5.6px] left-[83.3px] w-32 h-32 object-cover"
              loading="lazy"
              alt=""
              src="/seosearchengineoptimization2streamlinemilanopng@2x.png"
            />
          </div>
          <div className="self-stretch bg-White flex flex-col items-start justify-start !p-4 gap-2">
            <div className="self-stretch relative leading-[20px] font-semibold">
              Mapping your landing pages
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-2 text-sm text-Grey-600">
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/circleplay.svg"
              />
              <div className="relative leading-[20px] font-medium">
                4 min video
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
