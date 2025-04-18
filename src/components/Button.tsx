import React from "react";

type Props = {
  text: string;
  style: "filled" | "empty";
  icon?: React.ReactNode;
};

const Button = ({ text, style, icon }: Props) => {
  return (
    <div
      className={`gap-2 antialiased cursor-pointer py-2 tracking-tight px-4 flex justify-center items-center border  rounded-xl  ${
        style === "empty"
          ? "bg-white text-black border-white"
          : "bg-black text-white border-black"
      }`}>
      {text}
      {icon ? icon : ""}
    </div>
  );
};

export default Button;
