import Image from "next/image";
import React from "react";
import CarImage from "../assets/images/car.svg";
import ImageGallery from "./ImageGallery";
import CarImage1 from "../assets/images/carImage1.svg";
import CarImage2 from "../assets/images/carImage2.svg";
import CarImage3 from "../assets/images/carImage3.svg";
import CarImage4 from "../assets/images/carImage4.svg";

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
    original:
      "https://img.freepik.com/premium-photo/generic-brandless-modern-sport-car_110488-1758.jpg?w=2000",
    thumbnail:
      "https://img.freepik.com/premium-photo/generic-brandless-modern-sport-car_110488-1758.jpg?w=2000",
  },
  {
    original: "https://i.ytimg.com/vi/ekgUjyWe1Yc/maxresdefault.jpg",
    thumbnail: "https://i.ytimg.com/vi/ekgUjyWe1Yc/maxresdefault.jpg",
  },
  {
    original:
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?cs=srgb&dl=pexels-mike-b-120049.jpg&fm=jpg",
    thumbnail:
      "https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?cs=srgb&dl=pexels-mike-b-120049.jpg&fm=jpg",
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
