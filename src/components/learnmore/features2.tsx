"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Network } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Features2() {
  useEffect(() => {
    gsap.fromTo(
      ".kaichain-logo",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".kaichain-logo",
          start: "top 80%",
          once: true, 
        },
      }
    );

    gsap.to(".kaichain-logo", {
      rotation: 360,
      repeat: -1,
      duration: 10,
      ease: "linear",
      transformOrigin: "center center",
    });

    gsap.fromTo(
      ".content",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".content",
          start: "top 80%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      ".content li",
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".content",
          start: "top 80%",
          once: true,
        },
      }
    );

    gsap.fromTo(
      ".cta-button",
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".cta-button",
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-100 via-white to-blue-100">
      <div className="container mx-auto px-4 py-12 md:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative flex justify-center">
            <div className="w-[350px] sm:w-[400px] lg:w-[500px] h-[350px] sm:h-[400px] lg:h-[500px] mx-auto rounded-full flex items-center justify-center kaichain-logo group">
              <div className="w-full h-full">
                <img
                  src="/shapes/shape-5.webp?height=450&width=450"
                  alt="Kaichain logo"
                  className="w-full h-full object-contain transition-all transform group-hover:scale-110 group-hover:rotate-6"
                />
              </div>
            </div>
          </div>

          <div className="text-black space-y-8 content">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-900">
              Unmatched Speed
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-xl">
              Protect your financial information. Kaichain ensures your activity
              history and balances are private, a level of security you can
              count on. Transactions are instantly confirmed by validators.
            </p>
            <ul className="space-y-4">
              {[
                "Up to 1000x faster than Ethereum blockchain",
                "Traceable transactions yet private",
                "Inflation Proof",
              ].map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Network className="w-6 h-6 text-blue-400" />
                  <span className="text-lg text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            <button className="cta-button bg-blue-500 text-white py-2 px-6 rounded-lg text-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
