import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import ImageGalleryCarousel from "@/components/Home/ImageGalleryCarousel";
import Slider from "@/components/Home/Slider";
import Testimonials from "@/components/Home/Testimonials";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <ImageGalleryCarousel/>
      <Slider />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
