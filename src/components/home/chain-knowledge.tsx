import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export function ChainKnowledge() {
  return (
    <section className="py-24 px-4">
      <div className="relative container mx-auto">
        <div className="absolute right-[-20%] w-1/3 -translate-x-1/4  animate-float-slow">
          <img
            src="/shapes/shape-4.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block bg-muted rounded-full px-4 py-1.5 text-sm mb-6">
              100k TPS Ready
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Empowering the Future of Blockchain
            </h2>
            <p className="text-muted-foreground mb-8">
              As the demand for blockchain technology and decentralized
              solutions grows, so do the challenges of scalability and
              efficiency. Kaichain addresses these hurdles with groundbreaking
              innovations, ensuring a sustainable, high-performance blockchain
              ecosystem that&apos;s built to thrive in the long term. Explore
              how Kaichain is driving adoption with unmatched speed and
              efficiency.
            </p>
            <Button variant="secondary" className="rounded-3xl">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="backdrop-blur-xl bg-white/10 border-primary/20 rounded-3xl">
              <CardContent className="p-6">
                <h3 className="text-3xl font-bold mb-2">
                  The Sustainable Solution
                </h3>
                <p className="text-gray-600">
                  Blockchain adoption, though increasing rapidly, is still in
                  its infancy. With less than 5% of the global population using
                  cryptos and even a lesser amount in GameFi, the stresses and
                  load on even the most advanced blockchain ecosystems are being
                  felt. Kaichain will help sustain those loads.
                </p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-xl bg-white/10 border-primary/20 rounded-3xl">
              <CardContent className="p-6">
                <h3 className="text-3xl font-bold mb-2">Built To Last</h3>
                <p className="text-gray-600">
                  Top Defi and Gamefi blockchain networks offer extremely slow
                  TPS (Transactions per Second). Kaichain, on the other hand,
                  can handle abut 100,000 TPS, offering extremely fast movement
                  of assets. Combined withan energy and economically efficient
                  Proof of Authority, it is the logical choice for easy adoption
                  and viability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
