import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Slider from "@/components/Home/Slider";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <TopBanner /> */}
      <About />
      <Slider />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
