import Image from "next/image";
import React from "react";

const Comment = ({ comment, images }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <p className="text-[#90919B] font-medium text-sm">Comments</p>
        <p className="text-[#37394C] font-medium text-base">
          {comment || "No Comments"}
        </p>
      </div>
      <div className="flex flex-wrap gap-3 xs:w-[354px] sm:w-auto">
        {images &&
          images.map((image) => {
            return (
              <div key={image.id} className="rounded-[4px]">
                <Image
                  src={image.url}
                  className="rounded-[4px]"
                  width={110}
                  height={82}
                  alt={"image"}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Comment;
