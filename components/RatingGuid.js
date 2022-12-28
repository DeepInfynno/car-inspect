import React from "react";

const guides = [
  {
    title: "Excellent",
    des: "Brand new/ recently replaced/ no evidence of fault detected",
  },
  {
    title: "Good",
    des: "Item found to be in working order with some signs of damage and/or deterioration, consistent with the age & kilometers of vehicle",
  },
  {
    title: "Fair",
    des: "Item found to be in working order with notable signs of damage and/or deterioration, consistent with the age & kilometers of vehicle",
  },
  {
    title: "Poor",
    des: "Item found to be in bad condition, needs urgent attention or replacement",
  },
  {
    title: "N/A",
    des: "Item not fitted to the vehicle or able to be checked",
  },
];

const RatingGuid = () => {
  return (
    <div className="w-full flex flex-col gap-14">
      <h1 className="text-[#212338] font-bold text-base">Rating Guide</h1>
      <div className="w-full flex flex-col gap-8">
        {guides.map((guide, index) => {
          return (
            <div
              key={index}
              className="flex flex-wrap sm:flex-nowrap gap-3 md:gap-5 w-full"
            >
              <p className="w-full max-w-[200px] text-[#646574] font-semibold text-sm">
                {guide.title}
              </p>
              <p className="text-[#646574] font-medium text-sm">{guide.des}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RatingGuid;
