"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Content = [
  {
    id: 1,
    title: "In-House Features",
    description:
      "Blockchain alone is not enough. Several dApps are underway and will take advantage of Kaichain's mechanics.",
    image: "/shapes/shape-3.webp",
  },
  {
    id: 2,
    title: "Flawless Transaction",
    description:
      "Transactions will be smooth and is readily available ANYTIME and ANYWHERE at maximum speed and efficiency.",
    image: "/shapes/shape-5.webp",
  },
  {
    id: 3,
    title: "Speed and Efficiency",
    description:
      "Kaichain's blockchain is designed for speed and efficiency, ensuring swift transactions and seamless operations.",
    image: "/shapes/shape-4.webp",
  },
];

export function ExpertiseSection() {
  useEffect(() => {
    // Trigger GSAP animations when the component comes into view
    const elements = document.querySelectorAll(".expertise-card");

    elements.forEach((el) => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 120%", // Animation triggers when element is 80% from the top of the viewport
            once: true, // Trigger only once
          },
        }
      );
    });
  }, []);

  return (
    <section className="py-24 px-4 bg-muted/40">
      <div className="container mx-auto text-center">
        <div className="mb-16 mx-auto max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">
            Innovative Blockchain Technology
          </h2>
          <p className="text-muted-foreground mb-16">
            Discover the pillars of Kaichain&apos;s cutting-edge infrastructure,
            offering unmatched features, flawless transactions, and unparalleled
            speed for a seamless blockchain experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Content.map((item) => (
            <Card
              key={item.id}
              className="rounded-3xl shadow-2xl shadow-primary/20 group hover:bg-secondary hover:border-primary transition-all delay-200 ease-in-out expertise-card"
            >
              <CardContent className="pt-6">
                <div className="relative rounded-lg flex aspect-square items-center justify-center mb-4 mx-auto">
                  <Image
                    className="object-cover group-hover:scale-125 transition-all delay-200 ease-in-out"
                    src={item.image}
                    width={400}
                    height={400}
                    alt=""
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-white transition-all delay-200 ease-in-out hover:scale-105">
                  {item.title}
                </h3>
                <p className="text-muted-foreground group-hover:text-gray-400 transition-all delay-200 ease-in-out hover:scale-105">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
