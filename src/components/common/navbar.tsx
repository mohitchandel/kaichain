import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <div className="sticky top-0 z-50  max-w-4xl  mx-auto pt-4 rounded-full font-manrope">
      <header className="flex h-20 items-center justify-between mx-auto backdrop-blur-md bg-primary/10 rounded-full px-8 border">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-semibold">Kaichain</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#" className="text-sm font-medium hover:underline">
            Docs
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline">
            White Paper
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline">
            Explorer
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline">
            Pitch Deck
          </Link>
        </nav>

        <Button variant="secondary" className="rounded-full px-6">
          Learn More
          <div className="text-white">
            <ArrowRight />
          </div>
        </Button>
      </header>
    </div>
  );
}
