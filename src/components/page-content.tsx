import { FunctionComponent } from "react";

export type PageContentType = {
  className?: string;
};

const PageContent: FunctionComponent<PageContentType> = ({
  className = "",
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-4 text-left text-base text-Primary-900 font-Small-Medium ${className}`}
    >
      <div className="flex flex-col items-start justify-start">
        <b className="relative leading-[20px]">Quick actions</b>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start text-Grey-950">
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-5">
          <div className="flex-1 rounded-lg bg-whitesmoke-100 flex flex-col items-start justify-center !p-xl box-border gap-2 min-w-[145px]">
            <div className="flex flex-col items-start justify-center gap-3">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                alt=""
                src="/eye.svg"
              />
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                alt=""
                src="/eye.svg"
              />
              <img
                className="w-[34px] rounded-lg max-h-full"
                loading="lazy"
                alt=""
                src="/frame-427319413.svg"
              />
              <b className="relative leading-[20px]">Create new board</b>
            </div>
            <div className="self-stretch relative text-sm leading-[20px] font-medium text-Grey-600">
              Start organizing your campaigns into actionable boards.
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-whitesmoke-100 flex flex-col items-start justify-center !p-xl box-border gap-2 min-w-[145px]">
            <div className="flex flex-col items-start justify-center gap-3">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                alt=""
                src="/eye.svg"
              />
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                alt=""
                src="/eye.svg"
              />
              <img
                className="w-[34px] rounded-lg max-h-full"
                loading="lazy"
                alt=""
                src="/frame-427319413.svg"
              />
              <b className="relative leading-[20px]">Create new report</b>
            </div>
            <div className="self-stretch relative text-sm leading-[20px] font-medium text-Grey-600">
              Generate detailed insights from your campaigns with customizable
              reports.
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-whitesmoke-100 overflow-hidden flex flex-col items-start justify-center !p-xl box-border gap-2 min-w-[145px]">
            <div className="flex flex-col items-start justify-center gap-3">
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                alt=""
                src="/eye.svg"
              />
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0 hidden"
                alt=""
                src="/eye.svg"
              />
              <img
                className="w-[34px] rounded-lg max-h-full"
                loading="lazy"
                alt=""
                src="/frame-427319413-1.svg"
              />
              <b className="relative leading-[20px]">Manage ad accounts</b>
            </div>
            <div className="self-stretch relative text-sm leading-[20px] font-medium text-Grey-600">
              Connect new ad accounts or update existing ones.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageContent;
