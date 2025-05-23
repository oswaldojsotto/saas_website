"use client";
import Image from "next/image";
import React, { useRef } from "react";
import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

const Showcase = () => {
  const productRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(
    scrollYProgress,
    [0, 1],
    [150, -180]
  );

  return (
    <section
      ref={productRef}
      className="max-w-full  overflow-x-clip bg-[radial-gradient(ellipse_1700%_100%_at_bottom,#c8d0ec,#EAEEFE_20%)]">
      <div className="w-full flex flex-col justify-center">
        <h3 className="w-full flex justify-center items-center font-normal py-2 ">
          Boost your productivity
        </h3>
        <h1 className="flex flex-col justify-center items-center my-4 text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent px-4 md:text-[52px] md:leading-[60px]">
          <span>A more effective way to</span>
          <span>track your progress</span>
        </h1>
        <h2 className=" flex justify-center items-center px-4 text-center max-w-[540px] mx-auto">
          Effortlessly turn your ideas into a fully
          functional, responsive, no-code SaaS website in
          just minutes with this template.
        </h2>
      </div>
      <div className="relative max-w-full mt-10">
        <Image
          className="px-2 md:px-4"
          src={productImage}
          alt="product image"
        />
        <motion.img
          className=" absolute -right-32 -top-28 hidden md:block overflow-hidden"
          src={pyramidImage.src}
          alt="pyramid image"
          width={262}
          height={262}
          style={{ translateY: translateY }}
        />
        <motion.img
          className="absolute bottom-20 -left-32 hidden md:block overflow-hidden"
          src={tubeImage.src}
          alt="tube image"
          width={262}
          height={262}
          style={{ translateY: translateY }}
        />
      </div>
    </section>
  );
};

export default Showcase;
