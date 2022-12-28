import Image from "next/image";
import React from "react";
import CarImage from "../assets/images/car.svg";
import ImageGallery from "./ImageGallery";

const carDetail = [
  { title: "VIN", description: "Wbauf52050pm79918" },
  { title: "Registration no.", description: "CTO16F" },
  { title: "Body Type", description: "5d hatchback" },
  { title: "Transmission", description: "6sp automatic" },
  { title: "Exterior Colour", description: "Black" },
  { title: "Odometre Reading", description: "108547" },
];

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const CarDetail = () => {
  return (
    <>
      <div className="w-full max-w-[957px] 2xl:max-w-[1257px] flex flex-wrap md:flex-nowrap gap-20">
        <div className="relative w-full rounded-xl">
          <Image
            src={CarImage}
            className="rounded-xl"
            width={470}
            height={316}
            alt="Car"
          />
          <ImageGallery images={images} />
        </div>
        <div className="w-full flex flex-col flex-wrap md:flex-nowrap justify-center gap-6">
          {carDetail.map((detail) => {
            return (
              <>
                <div className="w-full flex flex-wrap md:flex-nowrap gap-5">
                  <div className="w-full max-w-[140px] lg:max-w-[200px] font-medium text-base text-[#646574]">
                    {detail.title}
                  </div>
                  <div className="font-semibold text-base uppercase text-[#212338]">
                    {detail.description}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CarDetail;
