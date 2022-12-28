import classNames from "classnames";
import { Line } from "rc-progress";
import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import CarImage1 from "../assets/images/carImage1.svg";
import CarImage2 from "../assets/images/carImage2.svg";
import CarImage3 from "../assets/images/carImage3.svg";
import CarImage4 from "../assets/images/carImage4.svg";
import DropDown from "./form/DropDown";

const reportMenu = [
  { id: 1, name: "Engine", score: 64 },
  { id: 2, name: "Interior", score: 82 },
  { id: 3, name: "Exterior", score: 60 },
  { id: 4, name: "Wheels", score: 50 },
  { id: 5, name: "Roadtest", score: 57 },
  { id: 6, name: "Attention Required", score: 0 },
];
const carImages = [
  { id: 1, url: CarImage1 },
  { id: 2, url: CarImage2 },
  { id: 3, url: CarImage3 },
  { id: 4, url: CarImage4 },
];
const carSpecifications = [
  {
    title: "Engine bay presentation",
    rating: "Good",
    comment: (
      <Comment
        comment={
          "No visible rust or corrosion to the vehicle at the time of inspection. The scope of the inspection does not include removal of components, only what is visible at the time. Paint and underbody sealer may inhibit detection of rust and corrosion."
        }
        images={carImages}
      />
    ),
  },
  { title: "Running noise", rating: "Not Evident", comment: <Comment /> },
  { title: "Oil level", rating: "Fair", comment: <Comment /> },
  { title: "Coolant level", rating: "Fair", comment: <Comment /> },
];

const Report = () => {
  const [active, setActive] = useState(reportMenu[0]);
  useEffect(() => {}, [active]);

  return (
    <div className="flex flex-col gap-20">
      <h1 className="text-[#212338] font-bold text-[32px] leading-[48px]">
        Full Report
      </h1>
      <div className="lg:flex lg:gap-20 lg:flex-wrap hidden">
        {reportMenu.map((menu) => {
          return (
            <div
              key={menu.id}
              onClick={() => setActive(menu)}
              className="cursor-pointer"
            >
              <div
                className={classNames(
                  "flex flex-col gap-1",
                  active.id === menu.id &&
                    "after:content-[''] after:w-full after:h-1 after:bg-[#70BF44] after:mt-4"
                )}
              >
                <p className="text-[#212338] font-bold text-xl">{menu.name}</p>
                <p
                  className={classNames(
                    "text-[#90919B] font-medium text-base",
                    menu.score === 0 && "min-h-[24px]"
                  )}
                >
                  {menu.score !== 0 && menu.score} {menu.score !== 0 && "Score"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="lg:hidden">
        <DropDown items={reportMenu} setActive={setActive} selected={active} />
      </div>
      <div className="flex flex-col gap-8">
        <h1 className="text-2xl text-[#90919B] font-medium ">
          <span className="text-[#70BF44] font-bold">{active.score}</span>{" "}
          points of 100
        </h1>
        <Line
          percent={active.score}
          strokeWidth={1.5}
          trailWidth={1.5}
          strokeColor="#70BF44"
          trailColor="#E9E9EB"
        />
      </div>
      <div className="w-full">
        {carSpecifications.map((spec, index) => {
          return (
            <>
              <div
                key={index}
                className="w-full flex flex-wrap sm:flex-nowrap gap-5 md:gap-0"
              >
                <p className="w-full max-w-[400px] lg:max-w-[530px] text-[#212338] font-semibold text-base">
                  {spec.title}
                </p>
                <div className="flex flex-col gap-8">
                  <h2 className="font-bold text-[#70BF44] text-2xl">
                    {spec.rating}
                  </h2>
                  <div className="w-full max-w-[500px] lg:max-w-[530px]">
                    {spec.comment}
                  </div>
                </div>
              </div>
              {index !== carSpecifications.length - 1 && (
                <div className="w-full h-[1px] bg-[#D3D3D7] my-10"></div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Report;
