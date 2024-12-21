"use client";
import { useRef } from "react";
import Marquee from "../ui/marquee";
import Image from "next/image";

export default function Dapps() {
  const contentRef = useRef(null);
  const btnRef = useRef(null);
  const sectionRef = useRef(null);

  const dapps = [
    "/dapps/logoipsum-325.svg",
    "/dapps/logoipsum-335.svg",
    "/dapps/logoipsum-336.svg",
    "/dapps/logoipsum-341.svg",
    "/dapps/logoipsum-343.svg",
  ];

  return (
    <>
      <section className="overflow-hidden border-b-[0.1px] py-16">
        <div ref={sectionRef} className="container mx-auto px-4">
          <div ref={contentRef} className="flex items-center justify-center">
            <h1 className="text-md max-w-2xl mb-12 leading-relaxed">
              Explore the growing dApps and builders building on Kaichain.
            </h1>
          </div>

          <div
            ref={btnRef}
            className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg "
          >
            <Marquee pauseOnHover className="[--duration:30s] ">
              {dapps.map((items, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-6"
                >
                  <Image
                    src={items}
                    alt="Example SVG"
                    width={140}
                    height={80}
                    className="transition duration-300 mx-6 grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#f8f8f6] dark:from-background"></div>{" "}
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#f8f8f6] dark:from-background"></div>
          </div>
        </div>
      </section>
    </>
  );
}
