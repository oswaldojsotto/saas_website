import React from "react";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";

const Slider = () => {
  return (
    <>
      <div className="my-8 md:py-12 bg-white">
        <div className="container">
          <div className="flex justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
            <div className="flex gap-14 flex-none">
              <Image
                className="logo-image"
                src={acmeLogo}
                alt="acmeLogo"
              />
              <Image
                className="logo-image"
                src={quantumLogo}
                alt="quantumLogo"
              />
              <Image
                className="logo-image"
                src={echoLogo}
                alt="echoLogo"
              />
              <Image
                className="logo-image"
                src={celestialLogo}
                alt="celestialLogo"
              />
              <Image
                className="logo-image"
                src={pulseLogo}
                alt="pulseLogo"
              />
              <Image
                className="logo-image"
                src={apexLogo}
                alt="apexLogo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
