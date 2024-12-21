import Contact from "@/components/Contact";

export async function generateMetadata() {
  return {
    title: "Contact Us | Inspired Events",
    description:
      "Get in touch with Inspired Events for all your event needs. We're here to make your dream event a reality.",
  };
}

const Page = () => {
  return <Contact />;
};

export default Page;
