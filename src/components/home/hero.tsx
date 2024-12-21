"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    // GSAP animation for Hero section elements
    gsap.fromTo(
      ".hero-content", // Target the entire content section
      { opacity: 0, y: 50 }, // Initial state: invisible and slightly lower
      {
        opacity: 1,
        y: 0, // Final state: fully visible and in place
        duration: 1, // Duration of animation
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".hero-content", // Trigger animation when the Hero content comes into view
          start: "top 80%", // Start the animation when the top of the Hero content reaches 80% of the viewport
          once: true, // Animate only once when it comes into view
        },
      }
    );
  }, []);

  return (
    <section className="relative overflow-hidden min-h-[90vh] flex justify-center items-center bg-gradient-to-b from-white via-white to-primary/80">
      <div className="relative container mx-auto flex flex-col items-center justify-center text-center">
        <div className="absolute -top-[32%] md:-top-20 left-[-5%] md:left-[-35%] w-1/2  animate-float-slow">
          <img
            src="/shapes/shape-1.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-[55%] md:-bottom-20 -right-[15%] md:right-[-35%] w-1/2 animate-float-slow">
          <img
            src="/shapes/shape-2.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-4xl mx-auto hero-content">
          <span className="inline-block mb-6 px-4 py-2 bg-gray-100 rounded-full text-sm font-light">
            Optimized For The Future
          </span>

          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
            The Architecture Of Flawless{" "}
            <span className="bg-gradient-to-r from-primary via-primary/70 to-primary/50 inline-block text-transparent bg-clip-text">
              Transactions
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Kaichain is a rising blockchain network that overcomes the upcoming
            flaws in major ecosystems, such as higher TPS, lower operational
            costs and environment-friendly transactions.
          </p>

          <Button variant="secondary" className="rounded-full">
            Documentation
          </Button>

          <Button variant="link" className="rounded-full text-black">
            Learn More
            <div className="text-black">
              <ArrowRight />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
