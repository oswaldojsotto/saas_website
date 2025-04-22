import React from "react";
import Button from "./Button";
import CheckMark from "@/assets/check.svg";

type PricingCardProps = {
  title: string;
  color: "black" | "white";
  popular?: boolean;
  price: number;
  buttonText?: string;
  buttonStyle?: "black" | "white" | "trasparent";
  features?: string[];
};
const PricingCard = ({
  title,
  color,
  popular,
  price,
  buttonText,
  buttonStyle,
  features,
}: PricingCardProps) => {
  return (
    <div
      className={` md:scale-[0.9] px-8 my-8 flex flex-col h-auto rounded-2xl w-full max-w-[362px]  ${
        color === "black"
          ? "bg-black text-white"
          : "bg-white text-black"
      }`}>
      <div className="flex justify-between  w-full mt-8">
        <h1
          className={` font-semibold ${
            color === "black"
              ? "text-white/80"
              : "text-black"
          }`}>
          {title}
        </h1>
        {popular ? <p>Popular</p> : null}
      </div>
      <div className="my-8">
        <div className="text-6xl font-bold">
          ${price}
          <span className="text-sm font-normal">
            /monthly
          </span>
        </div>
      </div>
      {buttonText ? (
        <div>
          <Button style={buttonStyle}>{buttonText}</Button>
        </div>
      ) : null}
      <div className="w-full my-8">
        {features?.map(feature => {
          return (
            <div key={feature} className="my-4 flex gap-2">
              <span>
                <CheckMark className="h-6 w-6 flex justify-center items-center" />
              </span>
              <span>{feature}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingCard;
