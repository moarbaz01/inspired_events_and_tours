import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import Hero from "@/components/Home/Hero";
import Slider from "@/components/Home/Slider";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <Slider />
      <About />
      <WhyChooseUs />
      <Banner />
      <Testimonials />
    </div>
  );
}
