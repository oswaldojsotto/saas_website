import React from "react";
import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import MenuIcon from "@/assets/menu.svg";
import Image from "next/image";
import Button from "@/components/Button";
const Header = () => {
  return (
    <header className="fixed top-0 w-full z-[10]">
      <div className="w-full bg-black px-8 flex justify-center py-3 items-center text-sm gap-2 ">
        <div className="inline-flex justify-center items-center gap-4">
          <p className="text-white/60 hidden lg:block">
            Streamline your workflow and supercharge your
            business.
          </p>
          <div className="inline-flex justify-center items-center gap-1">
            <p className="text-neutral-50">
              View the complete kit
            </p>
            <ArrowRight className="text-sm h-4 w-4 text-white flex justify-center items-center" />
          </div>
        </div>
      </div>
      <div className="w-full inline-flex justify-between items-center gap-2 px-4 py-3 backdrop-blur ">
        <Image
          src={Logo}
          alt="SaaS Logo"
          height={40}
          width={40}
        />
        <MenuIcon className="h-5 w-5 text-black md:hidden" />
        <nav className="hidden md:block  ">
          <ul className="inline-flex justify-center items-center gap-6 text-black/60">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Updates</a>
            <a href="#">Help</a>
            <Button style="black">
              <p>Get for free</p>
            </Button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
