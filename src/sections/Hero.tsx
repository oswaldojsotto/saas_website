import Button from "@/components/Button";
import React from "react";
import ArrowRight from "@/assets/arrow-right.svg";

const Hero = () => {
  return (
    <div className="flex flex-col px-4 h-dvh w-full mt-32 md:justify-center md:mt-0  lg:px-32">
      <p className="text-sm border border-black/10 w-fit flex justify-center items-center py-2 px-4 rounded-xl">
        Version 2.0 is here
      </p>
      <p className="text-4xl font-bold">
        Pathway to <br /> Productivity
      </p>
      <p className="text-md font-light">
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
  );
};

export default Hero;
