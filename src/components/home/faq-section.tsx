import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const questions = [
  {
    q: "What is Web3 and how can it benefit my business?",
    a: "Web3 represents the next evolution of the internet, incorporating blockchain technology, decentralization, and token-based economics. It can benefit your business through enhanced security, transparency, and new revenue opportunities.",
  },
  {
    q: "How do you ensure the security of your blockchain solutions?",
    a: "We implement multiple layers of security measures, including comprehensive smart contract audits, secure key management systems, and regular security assessments to protect your blockchain infrastructure.",
  },
  {
    q: "What industries can benefit from Web3 technologies?",
    a: "Web3 technologies can benefit various industries including finance, healthcare, supply chain, real estate, gaming, and entertainment through improved efficiency, transparency, and new business models.",
  },
  {
    q: "How long does it take to see results from your Web3 consulting services?",
    a: "Timeline varies depending on project scope, but typically clients see initial results within 3-6 months. We provide regular updates and milestones throughout the implementation process.",
  },
  {
    q: "Do you offer ongoing support after the implementation of Web3 solutions?",
    a: "Yes, we offer comprehensive post-implementation support including maintenance, updates, and continuous optimization to ensure your Web3 solutions remain effective and secure.",
  },
];

export function FaqSection() {
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
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{question.q}</AccordionTrigger>
              <AccordionContent>{question.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
