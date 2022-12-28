import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { Header } from "../components/layouts";
import CarDetail from "../components/CarDetail";
import { Accordion, Notes, RatingGuid, Report } from "../components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Header />
      <div className="w-full max-w-[1300px] 2xl:max-w-[1500px] bg-white px-5 sm:px-10 md:px-16 xl:px-0 lg:rounded-3xl mx-auto -mt-[200px] py-[104px]">
        <div className="w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto">
          <h1 className="text-[#212338] font-bold text-[32px] leading-[48px]">
            BMW 3 Series 330i Sport Line F30 LCI
          </h1>
          <div className="w-full h-[1px] bg-[#D3D3D7] my-20"></div>
          <CarDetail />
          <div className="w-full h-[1px] bg-[#D3D3D7] my-20"></div>
          <Notes />
          <div className="w-full h-[1px] bg-[#D3D3D7] my-20"></div>
          <Report />
          <div className="w-full h-[1px] bg-[#D3D3D7] my-20"></div>
          <RatingGuid />
          <div className="w-full h-[1px] bg-[#D3D3D7] my-20"></div>
          <Accordion />
        </div>
      </div>
    </div>
  );
}
