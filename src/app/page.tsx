import TextImages from "@/components/home/text-images";
import BlogCarousel from "@/components/home/blog-carousel";
import Dapps from "@/components/home/dapps";
import TopCta from "@/components/home/top-cta";
import Numbers from "@/components/home/numbers";
import ValuesSection from "@/components/home/value-section";
import Hero from "@/components/home/hero";
export default function Home() {
  return (
    <>
      <Hero />
      <Dapps />
      <ValuesSection />
      <Numbers />
      <TopCta />
      <TextImages />
      <BlogCarousel />
    </>
  );
}
