import { FunctionComponent } from "react";
import PageContent from "../components/page-content";
import Activity from "../components/activity";
import FrameComponent from "../components/frame-component";

const Homepage: FunctionComponent = () => {
  return (
    <div className="relative bg-aliceblue-100 w-full overflow-y-auto flex flex-row items-center justify-start leading-[normal] tracking-[normal] [row-gap:20px] text-left text-sm text-Primary-950 font-Small-Medium mq1425:flex-wrap">
      <div className="h-[1027px] w-[273px] shadow-[0px_1px_2px_rgba(95,_74,_46,_0.08)] bg-White flex flex-col items-start justify-start !pt-6 !pb-4 !pl-3 !pr-3 box-border relative gap-2 z-[0]">
        <div className="self-stretch flex-1 overflow-y-auto flex flex-col items-center justify-center gap-5 z-[0]">
          <div className="self-stretch flex flex-col items-start justify-center gap-4">
            <img
              className="w-[139.4px] max-h-full overflow-hidden object-cover"
              loading="lazy"
              alt=""
              src="/logo-3@2x.png"
            />
            <div className="self-stretch h-12 rounded-lg bg-whitesmoke-200 flex flex-row items-center justify-between !p-3 box-border gap-0">
              <div className="flex flex-row items-center justify-start gap-2">
                <img
                  className="h-7 w-7 relative rounded-[6.2px] overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/frame-427319359.svg"
                />
                <div className="flex flex-col items-start justify-start">
                  <div className="relative leading-[20px] font-semibold">
                    Agence Intuition
                  </div>
                </div>
              </div>
              <img
                className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/chevrondown.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-3">
            <div className="self-stretch h-px relative border-gray border-solid border-t-[1px] box-border" />
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-3">
              <div className="self-stretch rounded-lg bg-aliceblue-100 flex flex-row items-center justify-between !pt-2 !pb-2 !pl-4 !pr-5 top-[0] z-[99] sticky">
                <div className="w-[209px] flex flex-row items-center justify-start gap-2">
                  <img
                    className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                    loading="lazy"
                    alt=""
                    src="/lucidehouse.svg"
                  />
                  <div className="relative leading-[20px] font-medium">
                    Home
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-0 text-xs text-Grey-500">
                <div className="self-stretch flex flex-col items-start justify-start gap-5">
                  <nav className="!m-0 self-stretch flex flex-col items-start justify-start gap-1 text-left text-sm text-Primary-950 font-Small-Medium">
                    <div className="self-stretch flex flex-row items-center justify-start !pt-2 !pb-2 !pl-4 !pr-5 text-xs text-Grey-500">
                      <div className="relative leading-[15px] uppercase font-semibold">
                        Boards
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg flex flex-row items-center justify-between !pt-2 !pb-2 !pl-4 !pr-2 gap-0">
                      <div className="flex flex-row items-center justify-start">
                        <div className="relative leading-[17.5px] font-medium">
                          Weekly reports
                        </div>
                      </div>
                      <img
                        className="h-[18px] w-[18px] relative object-contain"
                        loading="lazy"
                        alt=""
                        src="/svg.svg"
                      />
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start !pt-2 !pb-2 !pl-7 !pr-2">
                      <div className="flex flex-row items-center justify-start gap-2">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/lucidechartline.svg"
                        />
                        <div className="relative leading-[20px] font-medium">
                          Top performing
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start !pt-2 !pb-2 !pl-7 !pr-2">
                      <div className="flex flex-row items-center justify-start gap-2">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/lucidelayoutpanelleft.svg"
                        />
                        <div className="relative leading-[20px] font-medium">
                          Top creative
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start !pt-2 !pb-2 !pl-7 !pr-2">
                      <div className="flex flex-row items-center justify-start gap-2">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/lucidechartline.svg"
                        />
                        <div className="relative leading-[20px] font-medium">
                          Other reports
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start !pt-2 !pb-2 !pl-7 !pr-2">
                      <div className="flex flex-row items-center justify-start gap-2">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/lucidelayoutpanelleft.svg"
                        />
                        <div className="relative leading-[20px] font-medium">
                          Other reports
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg flex flex-row items-center justify-between !pt-2 !pb-2 !pl-4 !pr-2 gap-0">
                      <div className="flex flex-row items-center justify-start">
                        <div className="relative leading-[17.5px] font-medium">
                          Another type of reports
                        </div>
                      </div>
                      <img
                        className="h-[18px] w-[18px] relative"
                        loading="lazy"
                        alt=""
                        src="/svg-1.svg"
                      />
                    </div>
                    <div className="self-stretch rounded-lg flex flex-row items-center justify-between !pt-2 !pb-2 !pl-4 !pr-2 gap-0">
                      <div className="flex flex-row items-center justify-start">
                        <div className="relative leading-[17.5px] font-medium">
                          Another type of reports
                        </div>
                      </div>
                      <img
                        className="h-[18px] w-[18px] relative"
                        loading="lazy"
                        alt=""
                        src="/svg-1.svg"
                      />
                    </div>
                  </nav>
                  <div className="self-stretch flex flex-col items-start justify-start gap-1">
                    <div className="self-stretch flex flex-row items-center justify-start !pt-2 !pb-2 !pl-4 !pr-5">
                      <div className="relative leading-[15px] uppercase font-semibold">
                        Mapping
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-start !pt-2 !pb-2 !pl-4 !pr-2 text-sm text-Primary-950">
                      <div className="flex flex-row items-center justify-start gap-2">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/lucidelayers.svg"
                        />
                        <div className="relative leading-[20px] font-medium">
                          Landing pages
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-center justify-center gap-4 text-sm text-Primary-950">
                  <div className="self-stretch flex flex-col items-start justify-start gap-1">
                    <div className="self-stretch flex flex-row items-center justify-start !pt-2 !pb-2 !pl-4 !pr-5 text-xs text-Grey-500">
                      <div className="relative leading-[15px] uppercase font-semibold">
                        workspace
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg flex flex-row items-center justify-between !pt-2 !pb-2 !pl-4 !pr-2">
                      <div className="w-[209px] flex flex-row items-center justify-start gap-2">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/tag.svg"
                        />
                        <div className="relative leading-[20px] font-medium">
                          Tags
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-lg flex flex-row items-center justify-between !pt-2 !pb-2 !pl-4 !pr-2">
                      <div className="w-[209px] flex flex-row items-center justify-start gap-2">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/lucideusersround.svg"
                        />
                        <div className="relative leading-[20px] font-medium">
                          Members
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between !pt-2 !pb-2 !pl-4 !pr-2">
                      <div className="w-[209px] flex flex-row items-center justify-start gap-2">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/lucidedatabasezap.svg"
                        />
                        <div className="relative leading-[20px] font-medium">
                          Data sources
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row items-center justify-between !pt-2 !pb-2 !pl-4 !pr-2">
                      <div className="w-[209px] flex flex-row items-center justify-start gap-2">
                        <img
                          className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                          loading="lazy"
                          alt=""
                          src="/badgeeuro.svg"
                        />
                        <div className="relative leading-[20px] font-medium">
                          Subscription
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch h-px relative border-gray border-solid border-t-[1px] box-border" />
                  <div className="self-stretch h-9 flex flex-row items-center justify-between !pt-1 !pb-1 !pl-[11px] !pr-2 box-border gap-0 text-center text-[12.3px] text-White">
                    <div className="flex flex-row items-center justify-start gap-2">
                      <div className="h-7 w-7 rounded-[874.1px] bg-blueviolet-100 border-White border-solid border-[0.9px] box-border overflow-hidden shrink-0 flex flex-row items-start justify-start !pt-1 !pb-1 !pl-1.5 !pr-1">
                        <div className="h-[16.6px] w-[15.8px] relative leading-[17.5px] font-semibold flex items-center justify-center">
                          J
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start text-left text-sm text-Dark">
                        <div className="relative leading-[20px] font-semibold">
                          Jérémy Martin
                        </div>
                      </div>
                    </div>
                    <img
                      className="h-[18px] w-[18px] relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/chevrondown.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="w-6 !!m-[0 important] absolute top-[20px] right-[0px] rounded-[9999px] max-h-full z-[1]"
          loading="lazy"
          alt=""
          src="/button.svg"
        />
      </div>
      <main className="h-[1027px] w-[1239px] overflow-hidden shrink-0 flex flex-col items-start justify-start !p-8 box-border max-w-full z-[1] lg:!pt-[21px] lg:!pb-[21px] lg:box-border mq450:h-auto mq450:!pt-5 mq450:!pb-5 mq450:box-border">
        <section className="self-stretch rounded-lg bg-White overflow-hidden flex flex-col items-start justify-start !p-6 box-border gap-10 max-w-full text-left text-9xl text-Primary-900 font-Small-Medium lg:!pt-5 lg:!pb-5 lg:box-border mq825:gap-5">
          <div className="self-stretch flex flex-row items-start justify-between">
            <div className="self-stretch w-[1127px] flex flex-row items-start justify-between">
              <div className="flex-1 flex flex-col items-start justify-start gap-2">
                <h1 className="!m-0 relative text-[length:inherit] leading-[35px] font-bold font-[inherit] mq450:text-[22px] mq450:leading-[28px]">
                  Home
                </h1>
                <div className="self-stretch relative text-base leading-[150%] font-medium text-Grey-600">
                  Here’s everything you need to manage your campaigns
                  efficiently today.
                </div>
              </div>
            </div>
          </div>
          <PageContent />
          <Activity />
          <FrameComponent />
        </section>
      </main>
      <div className="w-14 !!m-[0 important] absolute right-[24px] bottom-[24px] rounded-31xl max-h-full flex items-center justify-center z-[2]">
        <img
          className="w-full object-contain absolute left-[0px] top-[2px] h-full [transform:scale(1.286)]"
          loading="lazy"
          alt=""
          src="/background.svg"
        />
      </div>
    </div>
  );
};

export default Homepage;
