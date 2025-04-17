import React from "react";

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <div className=" cursor-pointer py-2 tracking-tight px-4 flex justify-center items-center border border-black rounded-xl bg-black text-white">
      {text}
    </div>
  );
};

export default Button;
