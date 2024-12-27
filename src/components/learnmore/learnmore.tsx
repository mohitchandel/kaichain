"use client";

import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Learn() {
  useEffect(() => {
    gsap.fromTo(
      ".kaichain-logo",
      { x: -500, opacity: 0 },
      {
        x: 0,
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

    gsap.fromTo(
      ".content",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".content",
          start: "top 80%",
          once: true,
        },
      }
    );
  }, []);

  return (
    <div className="relative  flex items-center justify-center overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-20"></div>

      <div className="container mx-auto px-4 py-12 md:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative group flex justify-center">
            <div className="w-[350px] sm:w-[400px] lg:w-[500px] h-[350px] sm:h-[400px] lg:h-[500px] mx-auto rounded-full flex items-center justify-center kaichain-logo">
              <div className="w-full h-full object-contain transition-all transform group-hover:scale-110 group-hover:rotate-6">
                <img
                  src="/shapes/shape-3.webp?height=450&width=450"
                  alt="Kaichain logo"
                  className="w-full h-full object-contain "
                />
              </div>
            </div>
          </div>

          <div className="text-black space-y-6 sm:space-y-8 content">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
              In-House Features
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-xl leading-relaxed">
            We have some upcoming features that is scheduled or expected to be presented or released in the near future this features which offer you a great benefit as shown on our roadmap.
            </p>
            <ul className="space-y-4">
              {[
                "Streamlined workflows for better productivity.",
                "Advanced integrations with popular platforms.",
                "User-friendly tools for everyday use.",
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3 text-gray-800"
                >
                  <span className="w-4 h-4 bg-blue-400 rounded-full"></span>
                  <span className="text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </ul>
            <Button
              variant="secondary"
              className="rounded-full px-6 py-4 sm:px-8 sm:py-6 flex items-center space-x-2  hover:from-blue-400 hover:to-indigo-500 transition-all shadow-lg cta-button"
            >
              <span className="text-sm sm:text-base font-medium text-white">
                View Documentation
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
