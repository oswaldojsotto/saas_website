import Contact from "@/sections/Contact";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Pricing from "@/sections/Pricing";
import Showcase from "@/sections/Showcase";
import Slider from "@/sections/Slider";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Slider />
      <Showcase />
      <Pricing />
      <Testimonials />
      <Contact />
    </>
  );
}
