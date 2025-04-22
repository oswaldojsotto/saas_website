import React from "react";
import { imageData } from "@/data/SliderImages";
import Image from "next/image";

const Slider = () => {
  return (
    <>
      <div className="my-8 md:py-12 bg-white">
        <div className="container">
          <div className="flex justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <div className="flex gap-14 flex-none">
              {imageData.map((image, index) => (
                <Image
                  key={index}
                  className="logo-image"
                  src={image.src}
                  alt={image.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
