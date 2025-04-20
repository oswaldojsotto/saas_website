import Image from "next/image";
import React from "react";
import productImage from "@/assets/product-image.png";

const Showcase = () => {
  return (
    <section>
      <div className="w-full flex flex-col justify-center">
        <h3 className="w-full flex justify-center items-center font-normal py-2">
          Boost your productivity
        </h3>
        <h1 className="flex flex-col justify-center items-center my-4 text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent px-4">
          <span>A more effective way to</span>
          <span>track your progress</span>
        </h1>
        <h2 className="flex justify-center items-center px-4 text-center">
          Effortlessly turn your ideas into a fully
          functional, responsive, no-code SaaS website in
          just minutes with this template.
        </h2>
      </div>
      <div className="image">
        <Image
          className="px-2 md:px-4"
          src={productImage}
          alt="product image"
        />
      </div>
    </section>
  );
};

export default Showcase;
