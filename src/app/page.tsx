import { ChainKnowledge } from "@/components/home/chain-knowledge";
import EcosystemMap from "@/components/home/ecosystem";
import { EmpoweringSection } from "@/components/home/empowering-section";
import { ExpertiseSection } from "@/components/home/expertise-section";
import { FaqSection } from "@/components/home/faq-section";
import Hero from "@/components/home/hero";
import MainSection from "@/components/home/main-section";
import { Stats } from "@/components/home/stats";

export default function Home() {
  return (
    <main className="font-manrope relative bg-[#fcfbff]">
      <Hero />
      <EcosystemMap />
      <Stats />
      <EmpoweringSection />
      <MainSection />
      <ChainKnowledge />
      <ExpertiseSection />
      <FaqSection />
    </main>
  );
}
