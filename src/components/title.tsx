import { FunctionComponent, useMemo, type CSSProperties } from "react";

export type TitleType = {
  className?: string;
  topCreative?: string;
  adsReviewed?: string;
  minAgo?: string;
  t?: string;
  thomasCollaudin?: string;

  /** Style props */
  topCreativeAlignSelf?: CSSProperties["alignSelf"];
  authorInitialsBackgroundColor?: CSSProperties["backgroundColor"];
};

const Title: FunctionComponent<TitleType> = ({
  className = "",
  topCreative,
  topCreativeAlignSelf,
  adsReviewed,
  minAgo,
  authorInitialsBackgroundColor,
  t,
  thomasCollaudin,
}) => {
  const topCreativeStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: topCreativeAlignSelf,
    };
  }, [topCreativeAlignSelf]);

  const authorInitialsStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: authorInitialsBackgroundColor,
    };
  }, [authorInitialsBackgroundColor]);

  return (
    <div
      className={`self-stretch bg-White border-Border border-solid border-t-[1px] flex flex-col items-start justify-start !pt-[22px] !pb-4 !pl-4 !pr-4 gap-4 z-[1] text-left text-base text-Dark font-Small-Medium ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-2 mq450:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[117px]">
          <div
            className="self-stretch relative leading-[20px] font-semibold"
            style={topCreativeStyle}
          >
            {topCreative}
          </div>
          <div className="self-stretch relative text-sm leading-[20px] font-medium text-Grey-600">
            {adsReviewed}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start gap-1 text-sm text-Grey-600">
          <img
            className="w-[13px] relative h-[13px] overflow-hidden shrink-0"
            alt=""
            src="/clock3.svg"
          />
          <div className="relative leading-[20px] font-medium">{minAgo}</div>
        </div>
      </div>
      <div className="w-[162px] h-5 flex flex-row items-center justify-start gap-2 text-center text-2xs text-White">
        <div
          className="h-5 w-5 rounded-605xl-4 bg-goldenrod border-White border-solid border-[0.6px] box-border overflow-hidden shrink-0 flex flex-row items-start justify-start !pt-0.5 !pb-0.5 !pl-px !pr-px"
          style={authorInitialsStyle}
        >
          <div className="h-3.5 w-[18px] relative leading-[12.5px] font-semibold flex items-center justify-center">
            {t}
          </div>
        </div>
        <div className="relative text-sm leading-[20px] font-medium text-Grey-600 text-left">
          {thomasCollaudin}
        </div>
      </div>
    </div>
  );
};

export default Title;
