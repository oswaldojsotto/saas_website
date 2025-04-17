import React from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
const Header = () => {
  return (
    <header className="sticky top-0 ">
      <div className="w-full bg-black px-8 flex justify-center py-3 items-center text-sm gap-2 ">
        <div className="inline-flex justify-center items-center gap-1">
          <p className="text-neutral-50">
            View the complete kit
          </p>
          <ArrowRight className="text-sm h-4 w-4 text-white flex justify-center items-center" />
        </div>
      </div>
      <div className="w-full inline-flex justify-between items-center gap-2 px-4 my-3">
        <Image
          src={Logo}
          alt="SaaS Logo"
          height={40}
          width={40}
        />
        <MenuIcon className="h-5 w-5 text-black md:hidden" />
        <nav className="hidden md:block">
          <ul className="inline-flex justify-center items-center gap-4">
            <li className="text-black">About</li>
            <li className="text-black">Features</li>
            <li className="text-black">Customers</li>
            <li className="text-black">Updates</li>
            <li className="text-black">Help</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
