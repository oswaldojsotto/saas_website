"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";

const Slider = () => {
  const logos = [
    { src: acmeLogo, alt: "acme-logo" },
    { src: quantumLogo, alt: "quantum-logo" },
    { src: echoLogo, alt: "echo-logo" },
    { src: celestialLogo, alt: "celestial-logo" },
    { src: pulseLogo, alt: "pulse-logo" },
    { src: apexLogo, alt: "apex-logo" },
  ];

  return (
    <div className="my-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex justify-center overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            className="flex gap-14 items-center"
            animate={{
              x: [0, -1440],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}>
            {[...logos, ...logos, ...logos].map(
              (logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="flex-shrink-0 object-contain transform-gpu"
                />
              )
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
