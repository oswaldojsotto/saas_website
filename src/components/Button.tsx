import React from "react";

type Props = {
  children?: React.ReactNode;
  style: "filled" | "empty";
  icon?: React.ReactNode;
};

const Button = ({ children, style }: Props) => {
  return (
    <div
      className={`gap-2 antialiased cursor-pointer py-2 tracking-tight px-4 flex justify-center items-center border  rounded-xl  ${
        style === "empty"
          ? "bg-white text-black border-white"
          : "bg-black text-white border-black"
      }`}>
      {children}
    </div>
  );
};

export default Button;
