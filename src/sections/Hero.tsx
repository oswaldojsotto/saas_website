import React from "react";
import Button from "@/components/Button";
import ArrowRight from "@/assets/arrow-right.svg";
import CogImage from "@/assets/cog.png";
import Image from "next/image";
import Cylinder from "@/assets/cylinder.png";
import Noodle from "@/assets/noodle.png";

const Hero = () => {
  return (
    <section className="flex flex-col md:h-dvh md:flex-row w-full h-auto bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183ec2,#EAEEFE_100%)] px-4">
      <div className="flex flex-col  gap-4 md:mt-0 md:justify-center mt-30  md:mt-0">
        <p className=" text-sm border font-semibold border-black/10 w-fit flex justify-center items-center py-2 px-4 rounded-xl">
          Version 2.0 is here
        </p>
        <p className="text-5xl md:text-7xl  font-bold tracking-tighter bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent">
          Pathway to <br /> Productivity
        </p>
        <p className="text-md md:text-xl md:font-normal lg:text-xl font-light tracking-tight text-[#010D3E] md:w-[100%]">
          Celebrate the joy of accomplishment with an app
          designed to track your progress, motivate your
          efforts, and celebrate your successes.
        </p>
        <div className="flex w-fit gap-2">
          <Button style="filled">
            <p>Get Started</p>
          </Button>
          <Button style="empty">
            <p>Learn More</p>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex flex-col justify-center relative overflow-hidden  lg:overflow-hidden md:mt-12 ">
        <Image
          src={CogImage}
          alt="Cog Image"
          className="object-contain md:ml-32  lg:ml-0 md:scale-[1.2] lg:scale-[1] lg:max-h-[90%] lg:mt-20"
        />

        <Image
          src={Cylinder}
          alt="cylinder Image"
          className="  hidden md:block md:absolute h-[180px] w-[180px] object-contain top-17"
        />
        <Image
          src={Noodle}
          alt="Noodle Image"
          className="  hidden lg:block md:absolute h-[180px] w-[180px] object-contain -bottom-10 right-1 overflow-visible rotate-30"
        />
      </div>
    </section>
  );
};

export default Hero;
