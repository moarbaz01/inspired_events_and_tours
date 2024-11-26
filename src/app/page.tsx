import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Slider from "@/components/Home/Slider";
import Testimonials from "@/components/Home/Testimonials";
import TopBanner from "@/components/Home/TopBanner";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Announcement from "@/components/ui/Announcement";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

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
