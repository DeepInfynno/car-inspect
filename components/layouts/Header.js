import Image from "next/image";
import React from "react";
import Logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <section className="w-full bg-[#212338] h-[747px] flex justify-center px-5 sm:px-10 md:px-16 xl:px-0">
      <div className="w-full max-w-[1300px] 2xl:max-w-[1500px] mt-[59px]">
        <p className="text-[#646574] text-left md:text-right text-sm font-medium">
          Reference no. 1644115313
        </p>
        <div className="w-full max-w-[1080px] 2xl:max-w-[1280px] mx-auto mt-[89px]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-[107px]">
              <div className="relative">
                <Image src={Logo} width={199} height={67} alt="Logo" />
              </div>
              <div>
                <div className="flex flex-col gap-4">
                  <p className="text-base tracking-[0.04em] uppercase font-bold text-[#FFFFFF66]">
                    Pre-purchase
                  </p>
                  <h2 className="font-bold text-[32px] leading-[48px] md:text-[55px] md:leading-[64px] text-white">
                    Inspection Report
                  </h2>
                </div>
              </div>
            </div>
            <p className="font-medium text-sm text-[#90919B]">
              Completed on 21 Jun 2022, 2:32pm AEST
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
