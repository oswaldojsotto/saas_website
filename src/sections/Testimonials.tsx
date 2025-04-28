"use client";
import React from "react";
import { testimonialsData } from "@/data/TestimonialsData";
import TestimonialCard from "@/components/TestimonialCard";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

const Testimonials = () => {
  const firstColumn = testimonialsData.slice(0, 3);
  const secondColumn = testimonialsData.slice(3, 6);
  const thirdColumn = testimonialsData.slice(6, 9);

  const firstColumnRef = React.useRef(null);

  const { scrollYProgress } = useScroll({
    target: firstColumnRef,
    offset: ["start end", "end start"],
  });

  const translateYTop = useTransform(
    scrollYProgress,
    [0, 1],
    [50, -450]
  );
  const translateYBottom = useTransform(
    scrollYProgress,
    [0, 1],
    [-550, 200]
  );

  return (
    <section>
      <div className="w-full flex flex-col justify-center">
        <h3 className="w-full flex justify-center items-center font-normal py-2 mt-20 ">
          Testimonials
        </h3>
        <h1 className="flex flex-col justify-center items-center mt-4 text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent px-4 md:text-[52px] md:leading-[60px] mb-10">
          <span>What our users say</span>
        </h1>
      </div>
      <div className="flex justify-center h-[600px] items-center flex-col md:flex-row px-4 md:justify-evenly testimonial-fade">
        <div
          className="relative h-auto overflow-hidden"
          ref={firstColumnRef}>
          {" "}
          <motion.div
            className="md:hidden"
            style={{ translateY: translateYTop }}>
            {[
              ...firstColumn,
              ...secondColumn,
              ...thirdColumn,
            ].map(item => (
              <TestimonialCard
                key={item.id}
                text={item.text}
                src={item.src}
                name={item.name}
                user={item.user}
              />
            ))}
          </motion.div>
          <motion.div
            className="hidden md:block "
            style={{ translateY: translateYTop }}>
            {[...firstColumn, ...secondColumn].map(item => (
              <TestimonialCard
                key={item.id}
                text={item.text}
                src={item.src}
                name={item.name}
                user={item.user}
              />
            ))}
          </motion.div>
        </div>
        <motion.div
          className="hidden md:block "
          style={{ translateY: translateYBottom }}>
          {[...secondColumn, ...thirdColumn].map(item => (
            <TestimonialCard
              key={item.id}
              text={item.text}
              src={item.src}
              name={item.name}
              user={item.user}
            />
          ))}
        </motion.div>
        <motion.div
          className="hidden lg:block"
          style={{ translateY: translateYTop }}>
          {[...thirdColumn, ...firstColumn].map(item => (
            <TestimonialCard
              key={item.id}
              text={item.text}
              src={item.src}
              name={item.name}
              user={item.user}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
