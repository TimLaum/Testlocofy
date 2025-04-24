import { FunctionComponent } from "react";
import Title from "./title";

export type ActivityType = {
  className?: string;
};

const Activity: FunctionComponent<ActivityType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-4 text-left text-base text-Primary-900 font-Small-Medium ${className}`}
    >
      <div className="self-stretch flex flex-row items-center justify-between gap-0 mq450:flex-wrap">
        <b className="relative leading-[20px]">Latest activity</b>
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
        <div className="w-[310px] rounded-3xs bg-whitesmoke-100 border-Border border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start relative">
          <div className="w-[310px] h-[100px] flex flex-row items-start justify-start !p-1 box-border">
            <div className="h-[92px] w-[302px] flex flex-row items-start justify-start gap-1">
              <div className="self-stretch flex-1 flex flex-col items-start justify-center relative gap-1">
                <div className="self-stretch flex-1 relative rounded-md bg-whitesmoke-300 z-[0]" />
                <img
                  className="w-3.5 h-3.5 absolute !!m-[0 important] top-[15px] left-[calc(50%_-_7.25px)] overflow-hidden shrink-0 z-[1]"
                  loading="lazy"
                  alt=""
                  src="/image.svg"
                />
                <div className="self-stretch flex-1 relative rounded-md bg-whitesmoke-300 z-[2]" />
                <img
                  className="w-3.5 h-3.5 absolute !!m-[0 important] top-[63px] left-[calc(50%_-_7.25px)] overflow-hidden shrink-0 z-[3]"
                  loading="lazy"
                  alt=""
                  src="/image.svg"
                />
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-center relative gap-1">
                <div className="self-stretch flex-1 relative rounded-md bg-whitesmoke-300 z-[0]" />
                <img
                  className="w-3.5 h-3.5 absolute !!m-[0 important] top-[15px] left-[calc(50%_-_6.75px)] overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/image-2.svg"
                />
                <div className="self-stretch flex-1 relative rounded-md bg-whitesmoke-300 z-[2]" />
                <img
                  className="w-3.5 h-3.5 absolute !!m-[0 important] top-[63px] left-[calc(50%_-_6.75px)] overflow-hidden shrink-0 z-[3]"
                  alt=""
                  src="/image-2.svg"
                />
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-center relative gap-1">
                <div className="self-stretch flex-1 relative rounded-md bg-whitesmoke-300 z-[0]" />
                <img
                  className="w-3.5 h-3.5 absolute !!m-[0 important] top-[15px] left-[calc(50%_-_7.25px)] overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/image.svg"
                />
                <div className="self-stretch flex-1 relative rounded-md bg-whitesmoke-300 z-[2]" />
                <img
                  className="w-3.5 h-3.5 absolute !!m-[0 important] top-[63px] left-[calc(50%_-_7.25px)] overflow-hidden shrink-0 z-[3]"
                  alt=""
                  src="/image.svg"
                />
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-center relative gap-1">
                <div className="self-stretch flex-1 relative rounded-md bg-whitesmoke-300 z-[0]" />
                <img
                  className="w-3.5 h-3.5 absolute !!m-[0 important] top-[15px] left-[calc(50%_-_6.75px)] overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/image-2.svg"
                />
                <div className="self-stretch flex-1 relative rounded-md bg-whitesmoke-300 z-[2]" />
                <img
                  className="w-3.5 h-3.5 absolute !!m-[0 important] top-[63px] left-[calc(50%_-_6.75px)] overflow-hidden shrink-0 z-[3]"
                  alt=""
                  src="/image-2.svg"
                />
              </div>
            </div>
          </div>
          <Title
            topCreative="Top creative"
            adsReviewed="13 ads reviewed"
            minAgo="24 min ago"
            t="T"
            thomasCollaudin="Thomas Collaudin"
          />
          <div className="!!m-[0 important] absolute top-[77.5px] left-[15.5px] rounded-lg bg-White border-Border border-solid border-[1px] flex flex-row items-center justify-center !pt-1.5 !pb-1.5 !pl-[7px] !pr-[7px] gap-2 z-[2] text-sm text-Primary-950">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/lucidelayoutpanelleft-2.svg"
            />
            <div className="relative font-medium">Report</div>
          </div>
        </div>
        <div className="w-[310px] rounded-3xs bg-whitesmoke-100 border-Border border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start relative text-sm text-Primary-950">
          <div className="w-[310px] h-[100px] flex flex-row items-start justify-start !p-1 box-border">
            <div className="h-[92px] w-[302px] flex flex-row items-center justify-start relative gap-1">
              <div className="self-stretch flex-1 relative rounded-md bg-whitesmoke-300 z-[0]" />
              <div className="self-stretch flex-1 relative rounded-md bg-whitesmoke-300 z-[1]" />
              <img
                className="h-3.5 w-3.5 absolute !!m-[0 important] top-[39px] left-[144px] overflow-hidden shrink-0 z-[2]"
                alt=""
                src="/table.svg"
              />
              <div className="self-stretch flex-1 relative rounded-md bg-whitesmoke-300 z-[3]" />
              <img
                className="h-3.5 w-3.5 absolute !!m-[0 important] top-[39px] left-[246px] overflow-hidden shrink-0 z-[4]"
                alt=""
                src="/chartcolumn.svg"
              />
              <img
                className="h-3.5 w-3.5 absolute !!m-[0 important] top-[39px] left-[42px] overflow-hidden shrink-0 z-[5]"
                alt=""
                src="/lucidelayoutpanelleft-3.svg"
              />
            </div>
          </div>
          <Title
            topCreative="Weekly reports"
            topCreativeAlignSelf="unset"
            adsReviewed="5 reports available"
            minAgo="51 min ago"
            authorInitialsBackgroundColor="#4fb9ea"
            t="J"
            thomasCollaudin="Julien Bosse"
          />
          <div className="!!m-[0 important] absolute top-[77.5px] left-[15.5px] rounded-lg bg-White border-Border border-solid border-[1px] flex flex-row items-center justify-center !pt-1.5 !pb-1.5 !pl-[7px] !pr-[7px] gap-2 z-[2]">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/columns2.svg"
            />
            <div className="relative font-medium">Board</div>
          </div>
        </div>
        <div className="w-[310px] rounded-3xs bg-whitesmoke-100 border-Border border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start relative">
          <div className="w-[310px] relative h-[100px] z-[0]">
            <div className="absolute w-[calc(100%_-_8px)] top-[4px] right-[4px] left-[4px] rounded-t-md rounded-b-none bg-whitesmoke-300 h-[92px]">
              <div className="absolute top-[0px] left-[0px] rounded-t-md rounded-b-none bg-whitesmoke-300 w-full h-full hidden" />
              <div className="absolute bottom-[0px] left-[calc(50%_-_130px)] flex flex-row items-end justify-start gap-4">
                <div className="flex flex-row items-end justify-center gap-0.5">
                  <div className="h-[19px] w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200" />
                  <div className="h-[31px] w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200" />
                  <div className="h-[26px] w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200" />
                  <div className="h-[23px] w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200" />
                </div>
                <div className="flex flex-row items-end justify-center gap-0.5">
                  <div className="h-[38px] w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200" />
                  <div className="h-[43px] w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200" />
                  <div className="h-[18px] w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200" />
                  <div className="h-4 w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200" />
                </div>
                <div className="flex flex-row items-end justify-center gap-0.5">
                  <div className="h-[37px] w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200" />
                  <div className="h-16 w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200" />
                  <div className="h-[49px] w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200" />
                  <div className="h-10 w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200" />
                </div>
                <div className="flex flex-row items-end justify-center gap-0.5">
                  <div className="h-1.5 w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200" />
                  <div className="h-[23px] w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200" />
                  <div className="h-1 w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200" />
                  <div className="h-[9px] w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200" />
                </div>
                <div className="flex flex-row items-end justify-center gap-0.5">
                  <div className="h-[51px] w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[39px]" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[57px]" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[30px]" />
                </div>
                <div className="flex flex-row items-end justify-center gap-0.5">
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[13px]" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[43px]" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[51px]" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-2.5" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-White border-Border border-solid border-t-[1px] flex flex-col items-start justify-start !pt-[22px] !pb-4 !pl-4 !pr-4 gap-4 z-[1]">
            <div className="self-stretch flex flex-row items-start justify-start gap-2 mq450:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[114px]">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Top performing
                </div>
                <div className="self-stretch relative text-sm leading-[20px] font-medium text-Grey-600">
                  28 ads reviewed
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-1 text-sm text-Grey-600">
                <img
                  className="h-[13px] w-[13px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/clock3.svg"
                />
                <div className="relative leading-[20px] font-medium">
                  2 hours ago
                </div>
              </div>
            </div>
            <div className="w-[162px] h-5 flex flex-row items-center justify-start gap-2 text-center text-2xs text-White">
              <div className="h-5 w-5 rounded-605xl-4 bg-goldenrod border-White border-solid border-[0.6px] box-border overflow-hidden shrink-0 flex flex-row items-start justify-start !pt-0.5 !pb-0.5 !pl-px !pr-px">
                <div className="h-3.5 w-[18px] relative leading-[12.5px] font-semibold flex items-center justify-center">
                  T
                </div>
              </div>
              <div className="relative text-sm leading-[20px] font-medium text-Grey-600 text-left">
                Thomas Collaudin
              </div>
            </div>
          </div>
          <div className="!!m-[0 important] absolute top-[77.5px] left-[15.5px] rounded-lg bg-White border-Border border-solid border-[1px] flex flex-row items-center justify-center !pt-1.5 !pb-1.5 !pl-[7px] !pr-[7px] gap-2 z-[2] text-sm text-Primary-950">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/chartcolumn-1.svg"
            />
            <div className="relative font-medium">Report</div>
          </div>
        </div>
        <div className="w-[310px] rounded-3xs bg-whitesmoke-100 border-Border border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start justify-start relative">
          <div className="w-[310px] relative h-[100px] z-[0]">
            <div className="absolute w-[calc(100%_-_8px)] top-[4px] right-[4px] left-[4px] rounded-t-md rounded-b-none bg-whitesmoke-300 h-[92px]">
              <div className="absolute top-[0px] left-[0px] rounded-t-md rounded-b-none bg-whitesmoke-300 w-full h-full hidden" />
              <div className="absolute bottom-[0px] left-[calc(50%_-_130px)] flex flex-row items-end justify-start gap-4">
                <div className="flex flex-row items-end justify-center gap-0.5">
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[19px]" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[31px]" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[26px]" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[23px]" />
                </div>
                <div className="flex flex-row items-end justify-center gap-0.5">
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[38px]" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[43px]" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[18px]" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-4" />
                </div>
                <div className="flex flex-row items-end justify-center gap-0.5">
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[37px]" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-16" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[49px]" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-10" />
                </div>
                <div className="flex flex-row items-end justify-center gap-0.5">
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-1.5" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[23px]" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-1" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[9px]" />
                </div>
                <div className="flex flex-row items-end justify-center gap-0.5">
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[51px]" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[39px]" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[57px]" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[30px]" />
                </div>
                <div className="flex flex-row items-end justify-center gap-0.5">
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[13px]" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[43px]" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-[51px]" />
                  <div className="w-1.5 relative rounded-t-12xs rounded-b-none bg-Grey-200 h-2.5" />
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch bg-White border-Border border-solid border-t-[1px] flex flex-col items-start justify-start !pt-[22px] !pb-4 !pl-4 !pr-4 gap-4 z-[1]">
            <div className="self-stretch flex flex-row items-start justify-start gap-2 mq450:flex-wrap">
              <div className="flex-1 flex flex-col items-start justify-start gap-2 min-w-[114px]">
                <div className="self-stretch relative leading-[20px] font-semibold">
                  Top campaigns
                </div>
                <div className="self-stretch relative text-sm leading-[20px] font-medium text-Grey-600">
                  7 ads reviewed
                </div>
              </div>
              <div className="flex flex-row items-center justify-start gap-1 text-sm text-Grey-600">
                <img
                  className="h-[13px] w-[13px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/clock3.svg"
                />
                <div className="relative leading-[20px] font-medium">
                  5 hours ago
                </div>
              </div>
            </div>
            <div className="w-[162px] h-5 flex flex-row items-center justify-start gap-2 text-center text-3xs text-White">
              <div className="h-5 w-5 rounded-605xl-4 bg-blueviolet-200 border-White border-solid border-[0.6px] box-border overflow-hidden shrink-0 flex flex-row items-start justify-start !pt-0.5 !pb-0.5 !pl-px !pr-px">
                <div className="h-3.5 w-[18px] relative leading-[12.5px] font-semibold flex items-center justify-center">
                  M
                </div>
              </div>
              <div className="relative text-sm leading-[20px] font-medium text-Grey-600 text-left">
                Maxime Brevet
              </div>
            </div>
          </div>
          <div className="!!m-[0 important] absolute top-[77.5px] left-[15.5px] rounded-lg bg-White border-Border border-solid border-[1px] flex flex-row items-center justify-center !pt-1.5 !pb-1.5 !pl-[7px] !pr-[7px] gap-2 z-[2] text-sm text-Primary-950">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/chartcolumn-1.svg"
            />
            <div className="relative font-medium">Report</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activity;
