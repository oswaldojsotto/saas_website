import React from "react";

type Props = {
  children?: React.ReactNode;
  style?: "black" | "white" | "trasparent";
  icon?: React.ReactNode;
  customStyle?: string;
};

const Button = ({
  children,
  style,
  customStyle,
}: Props) => {
  return (
    <div
      className={`gap-2 antialiased cursor-pointer py-2 tracking-tight px-4 flex justify-center items-center   rounded-xl  ${
        style === "black" && "bg-black text-white"
      } ${style === "white" && "bg-white text-black"} ${
        style === "trasparent" &&
        "bg-transparent text-black border-none"
      } ${customStyle}`}>
      {children}
    </div>
  );
};

export default Button;
