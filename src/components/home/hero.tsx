import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex justify-center items-center bg-gradient-to-b from-white via-white to-primary/80">
      <div className="relative container mx-auto flex flex-col items-center justify-center text-center">
        <div className="absolute left-[-35%] w-1/2 -translate-x-1/4 animate-float-slow">
          <img
            src="/shapes/shape-1.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute right-[-35%] w-1/2 -translate-x-1/4  animate-float-slow">
          <img
            src="/shapes/shape-2.webp"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block mb-6 px-4 py-2 bg-gray-100 rounded-full text-sm font-light">
            Optimized For The Future
          </span>

          <h1 className="text-4xl md:text-7xl  font-bold tracking-tight mb-6">
            The Architecture Of Flawless{" "}
            <span className="bg-gradient-to-r from-primary via-primary/70 to-primary/50 inline-block text-transparent bg-clip-text">
              Transactions
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Kaichain is a rising blockchain network that overcomes the upcoming
            flaws in major ecosystems, such as higher TPS, lower operational
            costs and environment-friendly transactions.
          </p>

          <Button variant="secondary" className="rounded-full">
            Documentation
          </Button>

          <Button variant="link" className="rounded-full text-black">
            Learn More
            <div className="text-black">
              <ArrowRight />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}
