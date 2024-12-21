import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowRight,
  Blocks,
  Brain,
  Lock,
  Shield,
  Coins,
  LineChart,
} from "lucide-react";

const services = [
  {
    title: "Blockchain Integration",
    description:
      "Seamlessly integrate blockchain technology into your existing systems to enhance security, transparency, and efficiency.",
    icon: Blocks,
  },
  {
    title: "Smart Contracts Development",
    description:
      "Design and implement smart contracts that automate processes, reduce costs, and ensure tamper-proof transactions.",
    icon: Brain,
  },
  {
    title: "Decentralized Applications",
    description:
      "Develop robust and scalable decentralized applications that leverage the power of blockchain technology.",
    icon: Lock,
  },
  {
    title: "NFT Strategies",
    description:
      "Create, market, and manage Non-Fungible Tokens (NFTs) to unlock new revenue streams and engage your audience.",
    icon: Coins,
  },
  {
    title: "Cryptocurrency Advisory",
    description:
      "Get expert advice on cryptocurrency adoption, investment strategies, and secure management practices.",
    icon: LineChart,
  },
  {
    title: "Security Audits",
    description:
      "Conduct comprehensive security audits of your blockchain systems and smart contracts to ensure their integrity and reliability.",
    icon: Shield,
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Ways How we can Help you</h2>
        <p className="text-muted-foreground mb-16">
          Tailored solutions for your decentralized journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                <a
                  href="#"
                  className="text-primary inline-flex items-center hover:underline"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
