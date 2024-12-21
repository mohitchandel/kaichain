import { ChainKnowledge } from "@/components/home/chain-knowledge";
import Dapps from "@/components/home/dapps";
import { ExpertiseSection } from "@/components/home/expertise-section";
import { FaqSection } from "@/components/home/faq-section";
import Hero from "@/components/home/hero";
import { MainSection } from "@/components/home/main-section";
import { ServicesSection } from "@/components/home/services-section";
import { Stats } from "@/components/home/stats";
import { TeamSection } from "@/components/home/team-section";

export default function Home() {
  return (
    <main className="font-manrope relative bg-[#f8f8f6]">
      <Hero />
      <Dapps />
      <Stats />
      <ChainKnowledge />
      <ExpertiseSection />
      <MainSection />
      <ServicesSection />
      <TeamSection />
      <FaqSection />
    </main>
  );
}
