"use client";

import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Pricing from "@/sections/Pricing";
import Showcase from "@/sections/Showcase";
import Slider from "@/sections/Slider";
import Testimonials from "@/sections/Testimonials";
import { ReactLenis, useLenis } from "lenis/react";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const lenis = useLenis(({ scroll }) => {});
  return (
    <ReactLenis root>
      <Header />
      <Hero />
      <Slider />
      <Showcase />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </ReactLenis>
  );
}
