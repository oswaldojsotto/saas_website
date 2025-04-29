"use client";
import Button from "@/components/Button";
import React from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import springImage from "@/assets/spring.png";
import starImage from "@/assets/star.png";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

const Contact = () => {
  const animRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: animRef,
    offset: ["start end", "end start"],
  });

  const translateYTop = useTransform(
    scrollYProgress,
    [0, 1],
    [150, -150]
  );

  return (
    <section>
      <div
        ref={animRef}
        className="w-full flex flex-col justify-center relative overflow-x-clip md:py-32 ">
        <h1 className="flex flex-col md:flex-row justify-center items-center my-4 text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent px-4 md:text-[52px] md:leading-[60px] md:gap-2">
          <span>Sign up </span>
          <span>for free today!</span>
        </h1>
        <h2 className=" flex justify-center items-center px-4 text-center md:max-w-[540px] max-w-[380px] mx-auto">
          Celebrate the joy of accomplishment with an app
          designed to track your progress and motivate your
          efforts.
        </h2>
        <div className="flex flex-row md:flex-row justify-center items-center md:items-end my-8">
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
        <motion.img
          width={330}
          height={330}
          src={starImage.src}
          alt="star image"
          className="hidden md:block absolute md:-left-40 md:top-5 lg:left-0 "
          style={{ translateY: translateYTop }}
        />
        <motion.img
          src={springImage.src}
          width={330}
          height={330}
          alt="spring image"
          className="hidden md:block absolute md:-right-28 md:bottom-12 lg:right-0"
          style={{ translateY: translateYTop }}
        />
      </div>
    </section>
  );
};

export default Contact;
