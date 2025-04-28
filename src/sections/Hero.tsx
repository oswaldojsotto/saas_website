"use client";
import React, { useRef } from "react";
import Button from "@/components/Button";
import ArrowRight from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import Image from "next/image";
import Cylinder from "@/assets/cylinder.png";
import Noodle from "@/assets/noodle.png";
import {
  easeInOut,
  useTransform,
  motion,
  useScroll,
} from "framer-motion";

const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [150, -150]
  );

  return (
    <section
      ref={heroRef}
      className="flex flex-col md:h-dvh md:flex-row w-full h-auto bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#EAEEFE_90%)]  z-10">
      <div className="flex flex-col  gap-4 md:mt-0 md:justify-center mt-30 px-4 md:max-w-[50%] overflow-visible z-10">
        <p className=" text-sm border font-semibold border-black/10 w-fit flex justify-center items-center py-2 px-4 rounded-xl">
          Version 2.0 is here
        </p>
        <p className="text-5xl md:text-6xl  pr-3 font-bold tracking-tighter bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent ">
          Pathway to <br /> Productivity
        </p>
        <p className="text-md md:text-lg md:font-normal lg:text-xl font-light tracking-tight text-[#010D3E] md:w-[100%]">
          Celebrate the joy of accomplishment with an app
          designed to track your progress, motivate your
          efforts, and celebrate your successes.
        </p>
        <div className="flex w-fit gap-2">
          <Button style="black">
            <p>Get Started</p>
          </Button>
          <Button style="trasparent">
            <p>Learn More</p>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <motion.div className="flex flex-col justify-center relative md:mt-12 max-h-[90%] overflow-x-clip ">
        <motion.img
          src={CogImage.src}
          alt="Cog Image"
          className="object-contain lg:ml-0 md:scale-[1.5] lg:scale-[0.8] md:ml-42 lg:mt-20 my-10"
          animate={{ translateY: [-30, 30] }}
          transition={{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 3,
            ease: easeInOut,
          }}
        />

        <motion.img
          src={Cylinder.src}
          alt="cylinder Image"
          className="  hidden md:block md:absolute h-[180px] w-[180px] object-contain top-17"
          style={{ translateY: translateY }}
        />
        <motion.img
          src={Noodle.src}
          alt="Noodle Image"
          className="  hidden lg:block md:absolute h-[180px] w-[180px] object-contain -bottom-12 right-1  rotate-30"
          style={{ rotate: -45, translateY: translateY }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
