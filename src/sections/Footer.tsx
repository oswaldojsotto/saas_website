import Image from "next/image";
import React from "react";
import Logo from "@/assets/logosaas.png";
import Instagram from "@/assets/social-insta.svg";
import Twitter from "@/assets/social-x.svg";
import Pinterest from "@/assets/social-pin.svg";
import Linkedin from "@/assets/social-linkedin.svg";
import Youtube from "@/assets/social-youtube.svg";

const Footer = () => {
  const figmaUrl =
    "https://www.figma.com/design/BzFedW8FJ5pm3UarwfyaLt/SaaS-Website-UI-Kit-%E2%80%94-Framer-Website-Kit--Community-?node-id=2012-608&p=f&t=Me96zvVgk9fUdB6L-0";

  return (
    <footer className="bg-black px-4">
      <section className="flex flex-col md:flex-row justify-between">
        <div className="flex flex-col gap-4 py-8 rounded-2xl md:justify-between ">
          <div className="flex flex-col gap-4">
            <Image
              src={Logo}
              alt="SaaS Logo"
              height={40}
              width={40}
              className="shadow-sm shadow-[#d42074] rounded-lg"
            />
            <p className="text-white max-w-[300px] text-sm">
              Effortlessly turn your ideas into a fully
              functional, responsive, no-code SaaS website.
            </p>
          </div>
          <div className="flex gap-2">
            <Twitter className="h-6 w-6 text-white/60 " />
            <Instagram className="h-6 w-6 text-white/60" />
            <Pinterest className="h-6 w-6 text-white/60" />
            <Linkedin className="h-6 w-6 text-white/60" />
            <Youtube className="h-6 w-6 text-white/60" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-8 md:pt-4">
          <div className="flex flex-col gap-2 text-white/60 mt-8 py-4 md:mt-0 ">
            <h3 className="text-white font-medium">
              Product
            </h3>
            <a href="#">Features</a>
            <a href="#">Integrations</a>
            <a href="#">Updates</a>
            <a href="#">FAQ</a>
            <a href="#">Pricing</a>
          </div>
          <div className="flex flex-col gap-2 text-white/60 py-4">
            <h3 className="text-white font-medium">
              Company
            </h3>
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="#">Manifesto</a>
            <a href="#">Press</a>
            <a href="#">Contact</a>
          </div>
          <div className="flex flex-col gap-2 text-white/60 py-4">
            <h3 className="text-white font-medium">
              Resources
            </h3>
            <a href="#">Examples</a>
            <a href="#">Community</a>
            <a href="#">Guides</a>
            <a href="#">Docs</a>
          </div>
          <div className="flex flex-col gap-2 text-white/60 py-4 pb-8">
            <h3 className="text-white font-medium">
              Legal
            </h3>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
          </div>
        </div>
      </section>
      <div className="bg-white/10 text-white py-2 rounded-t-2xl px-2 text-sm flex justify-between">
        <p>
          Design by:{" "}
          <a
            href={figmaUrl}
            target="_blank"
            className="text-blue-800 hover:underline">
            _Framer Motion
          </a>
        </p>
        <p>
          Code by:{" "}
          <a
            href="https://www.oswaldo.site"
            target="_blank"
            className="text-blue-800 hover:underline">
            _Oswaldo J. Sotto
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
