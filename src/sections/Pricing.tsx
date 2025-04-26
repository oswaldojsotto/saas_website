import React from "react";
import PricingCard from "@/components/PricingCard";
import {
  freeTier,
  proTier,
  businessTier,
} from "@/data/Features";

const Pricing = () => {
  return (
    <section className="max-w-full overflow-x-clip mt-20">
      <div className="w-full flex flex-col justify-center">
        <h3 className="w-full flex justify-center items-center font-normal py-2 ">
          Boost your productivity
        </h3>
        <h1 className="flex flex-col justify-center items-center my-4 text-3xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001354] bg-clip-text text-transparent px-4 md:text-[52px] md:leading-[60px]">
          <span>A more effective way to</span>
          <span>track your progress</span>
        </h1>
        <h2 className=" flex justify-center items-center px-4 text-center max-w-[540px] mx-auto">
          Enjoy customizable lists, team work tools, and
          smart tracking all in one place. Set tasks, get
          reminders, and see your progress simply and
          quickly.
        </h2>
      </div>

      <div className="flex gap-4 mx-4 h-full mt-4 flex-col md:flex-row justify-center items-center md:items-end">
        <PricingCard
          title="Free"
          color="white"
          price={0}
          buttonText="Start Free Trial"
          buttonStyle="black"
          features={freeTier}
        />
        <PricingCard
          title="Pro"
          color="black"
          popular
          price={9}
          buttonText="Sign Up Now"
          buttonStyle="white"
          features={proTier}
        />
        <PricingCard
          title="Business"
          color="white"
          price={19}
          buttonText="Start Free Trial"
          buttonStyle="black"
          features={businessTier}
        />
      </div>
    </section>
  );
};

export default Pricing;
