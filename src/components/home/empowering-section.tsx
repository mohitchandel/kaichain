"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export function EmpoweringSection() {
  useEffect(() => {
    // GSAP animation for the entire Empowering Section
    gsap.fromTo(
      ".empowering-section", // Target the section content
      { opacity: 0, y: 50 }, // Initial state: invisible and slightly lower
      {
        opacity: 1,
        y: 0, // Final state: fully visible and in place
        duration: 1.5, // Duration of the animation
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".empowering-section", // Trigger the animation when this section comes into view
          start: "top 80%", // Start the animation when the top of the section is at 80% of the viewport height
          once: true, // Animate only once
        },
      }
    );

    // GSAP animation for the individual cards inside the section
    gsap.fromTo(
      ".empowering-card", // Target each card
      { opacity: 0, y: 50 }, // Initial state: invisible and slightly lower
      {
        opacity: 1,
        y: 0, // Final state: fully visible and in place
        duration: 1,
        ease: "power4.out",
        stagger: 0.3, // Stagger the animation between the cards
        scrollTrigger: {
          trigger: ".empowering-section", // Trigger animation when the section comes into view
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <section className="py-24 px-4 relative overflow-hidden empowering-section">
      <div className="relative container mx-auto">
        <div className="absolute -top-[20%] right-[-35%] w-1/2 -translate-x-1/4 animate-float-slow">
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
              <a href="/learnmore" className="flex items-center">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="empowering-card backdrop-blur-2xl border-none shadow-2xl shadow-primary/20 bg-white/10 border-primary/20 rounded-3xl">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-2xl font-bold capitalize">
                  Sustainability at Scale
                </h3>
                <h4 className="text-xl font-medium">
                  Redefining Blockchain Efficiency
                </h4>
                <p className="text-gray-800">
                  Blockchain adoption, though increasing rapidly, is still in
                  its infancy. With less than 5% of the global population using
                  cryptos and even a lesser amount in GameFi, the stresses and
                  load on even the most advanced blockchain ecosystems are being
                  felt. Kaichain will help sustain those loads.
                </p>
              </CardContent>
            </Card>

            <Card className="empowering-card backdrop-blur-2xl border-none shadow-2xl shadow-primary/20 bg-white/20 border-primary/20 rounded-3xl">
              <CardContent className="p-6 space-y-2">
                <h3 className="text-2xl font-bold">
                  Built for Speed and Resilience
                </h3>
                <h4 className="text-xl font-medium">
                  Empowering the Next Generation of Transactions
                </h4>
                <p className="text-gray-800">
                  Top Defi and Gamefi blockchain networks offer extremely slow
                  TPS (Transactions per Second). Kaichain, on the other hand,
                  can handle about 100,000 TPS, offering extremely fast movement
                  of assets. Combined with an energy and economically efficient
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
