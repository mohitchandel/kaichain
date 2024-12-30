"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    q: "What makes Kaichain different from other blockchain networks?",
    a: "Kaichain stands out for its exceptional transaction speed of 100,000 TPS (Transactions per Second), which is significantly faster than many existing blockchain networks including Ethereum. It uses a Proof of Authority consensus mechanism that ensures both energy and economic efficiency, making it an ideal choice for widespread adoption.",
  },
  {
    q: "How does Kaichain address environmental concerns?",
    a: "Kaichain is designed to be an eco-friendly blockchain with virtually no carbon footprint for transactions. This is achieved through its efficient Proof of Authority system, which consumes significantly less energy compared to traditional Proof of Work blockchains.",
  },
  {
    q: "What are the transaction costs on Kaichain?",
    a: "Kaichain offers extremely low transaction fees, making it accessible to all users. Transactions can be processed with almost negligible fees every time, which makes it particularly attractive for frequent users and developers building applications on the network.",
  },
  {
    q: "Is Kaichain compatible with existing blockchain applications?",
    a: "Yes, Kaichain is fully EVM (Ethereum Virtual Machine) compatible, which means developers can deploy existing Ethereum-based applications with minimal to no code modifications. This compatibility ensures a smooth transition for both developers and users familiar with the Ethereum ecosystem.",
  },
  {
    q: "How accessible is Kaichain for non-technical users?",
    a: "Kaichain is designed to be user-friendly for everyone, regardless of their technical expertise in blockchain technology. The platform provides full access to blockchain functionality while maintaining an interface that's accessible to common users, making blockchain adoption easier for the general public.",
  },
  {
    q: "What kind of performance can users expect from Kaichain?",
    a: "Users can expect flawless transactions that are processed quickly and efficiently. With its compressed block size, fast validation times, and high-speed block processing, Kaichain ensures smooth operation at all times. The network is designed to maintain consistent performance and availability, making it reliable for both everyday users and complex applications.",
  },
];

export function FaqSection() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".accordion-item").forEach((item) => {
      if (item instanceof HTMLElement) {
        gsap.from(item, {
          opacity: 0,
          y: 50,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            once: true,
          },
        });
      }
    });
  }, []);
  return (
    <section className="py-24 px-4 bg-muted/40">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-muted rounded-full px-4 py-1.5 text-sm mb-4">
            FAQ
          </div>
          <h2 className="text-4xl font-bold mb-4">Have any Questions?</h2>
          <p className="text-muted-foreground">Find the answers here.</p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {questions.map((question, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="accordion-item"
            >
              <AccordionTrigger>{question.q}</AccordionTrigger>
              <AccordionContent>{question.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
