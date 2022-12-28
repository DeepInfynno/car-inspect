import Image from "next/image";
import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Quotes from "../assets/images/quotes.svg";

const progressData = [
  { title: "Roadtest", value: 56 },
  { title: "Interior", value: 82 },
  { title: "Exterior", value: 60 },
  { title: "Wheels", value: 50 },
  { title: "Engine", value: 57 },
];

const Notes = () => {
  return (
    <div className="w-full mx-auto text-left sm:text-center flex flex-col gap-[112px]">
      <div className="flex flex-col gap-16 w-full max-w-[834px] mx-auto">
        <h2 className="text-[#212338] font-bold text-2xl">
          Notes from the mechanic
        </h2>
        <div className="text-[#212338] text-base flex flex-col gap-8 w-full">
          <div className="flex items-center">
            <div className="hidden sm:block">
              <Image src={Quotes} alt="Image" width={80} height={80} />
            </div>
            <p className="font-medium w-full max-w-[594px] mx-auto">
              The vehicle present is in average condition based on age and
              mileage . Oil leaking from rocker cover gasket and rear seal.
              Coolant is under minimum. Front shocks need to be replaced. Front
              hood shocks need to be replaced. Brake pads about 20% left tyres
              about 50% left. Car has 1 key. Also logbook is not genuine.
              Overall car is average condition.
            </p>
            <div className="rotate-180 hidden sm:block">
              <Image src={Quotes} alt="Image" width={80} height={80} />
            </div>
          </div>
          <p className="font-bold">Omid Bonab - Inspector</p>
        </div>
      </div>
      <div className="flex gap-x-3 gap-y-5 justify-center xs:justify-start md:gap-5 mx-auto flex-wrap">
        {progressData.map((data) => {
          return (
            <>
              <div className="flex flex-col gap-6 md:gap-8">
                <h1 className="font-bold text-center text-base md:text-xl text-[#212338]">
                  {data.title}
                </h1>
                <div className="w-[160px] h-[160px] md:w-[200px] md:h-[200px]">
                  <CircularProgressbarWithChildren
                    strokeWidth={5}
                    value={data.value}
                    styles={buildStyles({
                      pathColor: "#70BF44",
                      trailColor: "#E9E9EB",
                      strokeLinecap: "butt",
                    })}
                  >
                    <div className="text-lg md:text-base text-center font-medium text-[#646574]">
                      <strong className="text-[#70BF44] text-2xl md:text-[32px] font-bold md:leading-[48px]">
                        {data.value}
                      </strong>
                      <br /> out of 100
                    </div>
                  </CircularProgressbarWithChildren>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Notes;
