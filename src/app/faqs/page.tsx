import FAQs from "@/components/FAQs";

export async function generateMetadata() {
  return {
    title: "FAQs | Inspired Events",
    description:
      "Find answers to common questions about Inspired Events. We're here to assist you with any inquiries you may have.",
  };
}

const Page = () => {
  return <FAQs />;
};

export default Page;
