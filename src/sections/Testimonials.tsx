import React from "react";
import { testimonialsData } from "@/data/TestimonialsData";
import TestimonialCard from "@/components/TestimonialCard";

const Testimonials = () => {
  const firstColumn = testimonialsData.slice(0, 3);
  const secondColumn = testimonialsData.slice(3, 6);
  const thirdColumn = testimonialsData.slice(6, 9);

  return (
    <section>
      <div className="w-full flex flex-col justify-center">
        <h3 className="w-full flex justify-center items-center font-normal py-2 ">
          Testimonials
        </h3>
        <h1 className="flex flex-col justify-center items-center my-4 text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent px-4 md:text-[52px] md:leading-[60px]">
          <span>What our users say</span>
        </h1>
      </div>
      <div className="flex justify-center items-center flex-col md:flex-row px-4 md:justify-evenly">
        <div className="testimonial-fade">
          {firstColumn.map((item, index) => (
            <TestimonialCard
              key={index}
              text={item.text}
              src={item.src}
              name={item.name}
              user={item.user}
            />
          ))}
        </div>
        <div className="hidden md:block testimonial-fade">
          {secondColumn.map((item, index) => (
            <TestimonialCard
              key={index}
              text={item.text}
              src={item.src}
              name={item.name}
              user={item.user}
            />
          ))}
        </div>
        <div className="hidden lg:block testimonial-fade">
          {thirdColumn.map((item, index) => (
            <TestimonialCard
              key={index}
              text={item.text}
              src={item.src}
              name={item.name}
              user={item.user}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
