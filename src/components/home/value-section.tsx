"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Diamond, ChevronsDown, TreeDeciduous, Wind } from "lucide-react";

export default function ValuesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<HTMLDivElement[]>([]);

  // Helper to assign refs
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !contentRefs.current.includes(el)) {
      contentRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const elements = contentRefs.current;

    if (section && elements.length > 0) {
      gsap.fromTo(
        section,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );

      elements.forEach((element, index) => {
        gsap.fromTo(
          element,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: element,
              start: "top 90%",
            },
          }
        );
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white min-h-screen py-16 px-4 md:px-8"
    >
      <div className="container mx-auto font-poppins">
        <div className="md:max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-16 text-start">
            Built for Developers and Common Folks
          </h1>
          <p className="text-gray-200">
            Everyone have the full access to blockchain no matter how deep your
            knowledge is on blockchain. Kaichain opens the door for everyone to
            explore blockchain and its adoption.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            ref={addToRefs}
            className="relative aspect-square w-full max-w-lg mx-auto"
          >
            <Image
              src="/shapes/shape-7.png"
              alt="Abstract geometric shapes"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div ref={addToRefs} className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <Wind className="w-6 h-6 text-[#ffa706]" />
              </div>
              <h3 className="text-xl font-medium">Quick & Fast Transaction</h3>
              <p className="text-gray-400">
                Designed to bolster speed more than 1000x than Ethereum.
              </p>
            </div>

            <div ref={addToRefs} className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <ChevronsDown className="w-6 h-6 text-[#ffa706]" />
              </div>
              <h3 className="text-xl font-medium">Cheap & Low Cost Fees</h3>
              <p className="text-gray-400">
                Transact anything with almost free feesEVERYTIME.
              </p>
            </div>

            <div ref={addToRefs} className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <TreeDeciduous className="w-6 h-6 text-[#ffa706]" />
              </div>
              <h3 className="text-xl font-medium">Eco-Friendly Blockchain</h3>
              <p className="text-gray-400">
                No carbon footprint for every transaction.
              </p>
            </div>

            <div ref={addToRefs} className="flex flex-col gap-4">
              <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                <Diamond className="w-6 h-6 text-[#ffa706]" />
              </div>
              <h3 className="text-xl font-medium">EVM Compatible</h3>
              <p className="text-gray-400">
                Less to None learning for new line of codesâ€¦deploy whats
                available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
