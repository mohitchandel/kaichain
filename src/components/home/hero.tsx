"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import WordRotate from "../ui/word-rotate";

export default function Hero() {
  const contentRef = useRef(null);
  const btnRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
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
        "<0.2"
      )
      .fromTo(
        imageRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1 },
        "<0.2"
      );
  }, []);

  return (
    <div className="border-b-[0.1px] border-b-gray-800 md:min-h-screen flex flex-col justify-center bg-black relative overflow-hidden font-poppins py-16 md:py-1">
      <div className="absolute -right-[38%] bottom-[30%] w-[1400px] h-full">
        <img
          ref={imageRef}
          src="/shapes/shape-1.png"
          alt=""
          className="animate-float hidden md:block"
        />
      </div>

      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-start justify-center px-8 container mx-auto h-full"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-light max-w-3xl leading-[1.1] mb-8">
          The Architecture of Flawless{" "}
          <WordRotate
            className="text-[#ffa706]"
            words={["Transaction", "Execution", "Innovation", "Precision"]}
          />
        </h1>

        <p className="font-md text-gray-400 max-w-2xl mb-12 leading-relaxed">
          Kaichain is a rising blockchain network that overcomes the upcoming
          flaws in major ecosystems, such as higher TPS, lower operational costs
          and environment-friendly transactions.
        </p>

        <div ref={btnRef} className="flex flex-row gap-4">
          <Button variant={"default"}>
            Learn More <ArrowRight />
          </Button>
          <Button variant={"default"}>
            View Our Daps <ArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
