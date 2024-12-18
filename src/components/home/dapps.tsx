"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";
import Marquee from "../ui/marquee";

export default function Dapps() {
  const contentRef = useRef(null);
  const btnRef = useRef(null);
  const sectionRef = useRef(null);

  const brands = [
    "/brand1.svg",
    "/brand2.svg",
    "/brand3.svg",
    "/brand4.svg",
    "/brand5.svg",
    "/brand6.svg",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const timeline = gsap.timeline({
              defaults: { duration: 1, ease: "power3.out" },
            });

            timeline
              .fromTo(
                btnRef.current,
                { x: "-100%", opacity: 0 },
                { x: "0%", opacity: 1 },
                "<0.2"
              )
              .fromTo(
                contentRef.current,
                { y: "100%", opacity: 0 },
                { y: "0%", opacity: 1 },
                "<0.2" // Staggered effect
              );

            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="bg-black overflow-hidden border-b-[0.1px] border-b-gray-800 font-poppins py-16">
        <div ref={sectionRef} className="container mx-auto ">
          <div ref={contentRef} className="flex items-center justify-center">
            <h1 className="text-md text-gray-400 max-w-2xl mb-12 leading-relaxed">
              Explore the growing dApps and builders building on Kaichain.
            </h1>
          </div>

          <div
            ref={btnRef}
            className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl"
          >
            <Marquee pauseOnHover className="[--duration:50s] ">
              {brands.map((items, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-6"
                >
                  <Image
                    src={items}
                    alt="Example SVG"
                    width={100}
                    height={39}
                    className="opacity-50 hover:opacity-100 transition duration-300 mx-6"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    </>
  );
}
