import { Card, CardContent } from "@/components/ui/card";
import { Blocks, Brain, Lock, Shield, Coins, LineChart } from "lucide-react";

const services = [
  {
    title: "Blazing-Fast Transactions",
    description:
      "Experience lightning-fast transaction speeds, over 1000x faster than Ethereum. Say goodbye to delays and hello to instant results.",
    icon: Blocks,
  },
  {
    title: "Ultra-Low Fees",
    description:
      "Enjoy near-zero transaction costs, making transfers affordable for everyone, everywhere.",
    icon: Brain,
  },
  {
    title: "Eco-Friendly Blockchain",
    description:
      "Reduce your environmental impact with Kaichain’s energy-efficient and sustainable infrastructure.",
    icon: Lock,
  },
  {
    title: "EVM-Compatible",
    description:
      "Seamlessly integrate your Ethereum-based applications without rewriting code. Simply deploy and go!",
    icon: Coins,
  },
  {
    title: "Uncompromised Security",
    description:
      "Benefit from state-of-the-art security measures that protect your assets and data 24/7.",
    icon: LineChart,
  },
  {
    title: "Developer-Friendly Tools",
    description:
      "Access an extensive toolkit with comprehensive documentation to build, test, and deploy with ease.",
    icon: Shield,
  },
];

export function ChainKnowledge() {
  return (
    <section className="relative overflow-hidden py-24 px-4 bg-[#eceef2] ">
      <div className="container mx-auto relative">
        <div className="absolute top-[22%] md:top-[5%] left-[-25%] md:w-1/2 animate-float-slow">
          <img
            src="/shapes/shape-7.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="mb-16 mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold mb-4">
            Blockchain Designed for All – Developers and Dreamers
          </h2>
          <p className="text-muted-foreground mb-16">
            Unlock the potential of blockchain for everyone, whether you&apos;re
            a seasoned developer or just starting your journey. Kaichain bridges
            the gap, offering simplicity, efficiency, and sustainability to all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="z-45 rounded-3xl shadow-2xl shadow-primary/20 backdrop-blur-2xl bg-white/30 border-none"
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-black mb-4 ">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
