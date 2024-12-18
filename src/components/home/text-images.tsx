"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function TextImages() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    sectionRefs.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%", // trigger when the section reaches 80% of the viewport height
              end: "bottom top",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="bg-black py-20 font-poppins ">
      <div className="container mx-auto px-4">
        {/* Section 1 */}
        <div ref={addToRefs} className="grid md:grid-cols-2 gap-6 items-center">
          <div className="flex  items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#ffa706] opacity-30 rounded-xl blur-2xl"></div>
              <Image
                src="/shapes/shape-4.png"
                height={391}
                width={340}
                alt="3D geometric cubes with glowing edges"
                className="relative z-10 shadow-2xl object-cover w-[450px] h-[450px] rounded-xl"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl text-white font-light leading-tight">
              In-House Features
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              Blockchain alone is not enough. Several dApps are underway and
              will take advantage of Kaichain&apos;s mechanics.
            </p>
            <Link
              href="#"
              className="text-gray-400 flex items-center text-center"
            >
              Learn More <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Section 2 */}
        <div
          ref={addToRefs}
          className="mt-20 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h2 className="text-4xl text-white font-light leading-tight">
              Flawless Transaction
            </h2>
            <p className="text-gray-400 text-start text-lg leading-relaxed max-w-2xl">
              Transactions will be smooth and is readily available ANYTIME and
              ANYWHERE at maximum speed and efficiency.
            </p>
            <Link
              href="#"
              className="text-gray-400 flex items-center text-center"
            >
              Learn More <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#ffa706] opacity-30 rounded-xl blur-2xl"></div>
              <Image
                src="/shapes/shape-5.png"
                height={391}
                width={340}
                alt="3D geometric cubes with glowing edges"
                className="relative z-10 shadow-2xl object-cover w-[450px] h-[450px] rounded-xl"
              />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div
          ref={addToRefs}
          className="mt-20 grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#ffa706] opacity-30 rounded-xl blur-2xl"></div>
              <Image
                src="/shapes/shape-6.png"
                height={450}
                width={450}
                alt="3D geometric cubes with glowing edges"
                className="relative z-10 shadow-2xl object-cover w-[450px] h-[450px] rounded-xl"
              />
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl text-white font-light leading-tight">
              Unmatched Speed
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
              With blocks compressed size, fast validations and high speed block
              times, every transaction will just blast off.
            </p>
            <Link
              href="#"
              className="text-gray-400 flex items-center text-center"
            >
              Learn More <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
