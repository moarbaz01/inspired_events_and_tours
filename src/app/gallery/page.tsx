import Gallery from "@/components/Gallery";
export async function generateMetadata() {
  return {
    title: "Gallery | Inspired Events",
    description:
      "Explore the gallery of Inspired Events. Discover a collection of moments captured in our vibrant community.",
  };
}

const Page = () => {
  return <Gallery />;
};

export default Page;
