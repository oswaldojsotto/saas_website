import React from "react";
import Image from "next/image";

type TestimonialCardProps = {
  text: string;
  src: string;
  name: string;
  user: string;
};

const TestimonialCard = ({
  text,
  src,
  name,
  user,
}: TestimonialCardProps) => {
  return (
    <div className=" scale-[1] md:scale-[0.9] lg:scale-[1] px-8 my-8 py-4 flex flex-col h-auto rounded-2xl w-full max-w-[322px] bg-white text-black">
      <p>{text}</p>
      <div className="flex gap-4 mt-2">
        <Image
          src={src}
          alt="avatar"
          width={50}
          height={50}
        />
        <div>
          <p className="font-semibold">{name}</p>
          <p>{user}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
