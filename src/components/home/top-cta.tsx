"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Globe, ChartNoAxesCombined } from "lucide-react";
import Image from "next/image";
import { Card } from "@/components/ui/card";

gsap.registerPlugin(ScrollTrigger);

export default function TopCta() {
  const contentRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { duration: 1, ease: "power3.out" },
    });

    timeline
      .fromTo(
        btnRef.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1 }
      )
      .fromTo(
        contentRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1 },
        "<0.2"
      );

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="relative bg-black text-white py-20 font-poppins">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2">
          <div
            ref={btnRef}
            className="rounded-3xl flex items-center justify-center aspect-square"
          >
            <Image
              src="/section-shapes/section-shape-1.png"
              alt="Blockchain geometric illustration"
              fill
              className="object-cover shadow-2xl rounded-3xl animate-float-slow"
            />
          </div>
          <div
            ref={contentRef}
            className="h-full w-full flex flex-col justify-center items-center"
          >
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              Developing Blockchain Solutions for Your Needs
            </h2>

            <div className="grid md:grid-cols-2 mt-8 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#1a1f2d]">
                    <ChartNoAxesCombined className="w-6 h-6 text-[#FFA701]" />
                  </div>
                  <h3 className="text-xl font-medium">Scalable</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  The scalable blockchain market refers to the segment of the
                  blockchain industry that focuses on developing.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#1a1f2d]">
                    <Globe className="w-6 h-6 text-[#FFA701]" />
                  </div>
                  <h3 className="text-xl font-medium">Scalable</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Sharding involves partitioning the blockchain network into
                  smaller groups called shards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-light text-white mb-6 leading-relaxed text-center">
            Most secured Blockchain Solutions.
          </h1>

          <p className="text-lg  text-gray-400 max-w-2xl mb-6 leading-relaxed text-center">
            Reduce costs, scale effortlessly, and make your business come alive.
            Hundreds of companies use Cosmos SDK to build fast.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 p-10 max-w-5xl mx-auto">
          <Card className="bg-black border-[0.1px] border-gray-800 p-8 rounded-3xl space-y-6 shadow-sm shadow-[#ffa706]">
            <div className="aspect-auto">
              <Image
                src="/shapes/shape-2.png"
                height={300}
                width={300}
                alt="Abstract blue blockchain grid"
                className="w-full object-cover animate-float-slow"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-xl text-white md:text-4xl font-light leading-tight">
                The Sustainable Solution
              </h2>
              <p className="text-gray-400">
                Blockchain adoption, though increasing rapidly, is still in its
                infancy. With less than 5% of the global population using
                cryptos and even a lesser amount in GameFi, the stresses and
                load on even the most advanced blockchain ecosystems are being
                felt. Kaichain will help sustain those loads.
              </p>
            </div>
          </Card>
          <Card className="bg-black border-[0.1px] border-gray-800 p-8 rounded-3xl space-y-6 shadow-sm shadow-[#ffa706]">
            <div className="aspect-auto">
              <Image
                src="/shapes/shape-3.png"
                height={300}
                width={300}
                alt="Abstract blue blockchain grid"
                className="w-full object-cover animate-float-slow"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-xl text-white md:text-4xl font-light leading-tight">
                Built To Last
              </h2>
              <p className="text-gray-400">
                Top Defi and Gamefi blockchain networks offer extremely slow TPS
                (Transactions per Second). Kaichain, on the other hand, can
                handle abut 100,000 TPS, offering extremely fast movement of
                assets. Combined withan energy and economically efficient Proof
                of Authority, it is the logical choice for easy adoption and
                viability.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
