import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <div className=" top-0 z-50 w-full font-manrope">
      <header className="flex h-20 items-center justify-between backdrop-blur-lg bg-gradient-to-r from-blue-200 via-blue-100 to-blue-300 shadow-md border-b border-gray-200 px-8 md:px-16">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold  text-black">Kaichain</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#"
            className="text-base font-medium text-black hover:text-primary transition-colors"
          >
            Docs
          </Link>
          <Link
            href="#"
            className="text-base font-medium text-black hover:text-primary transition-colors"
          >
            White Paper
          </Link>
          <Link
            href="#"
            className="text-base font-medium text-black hover:text-primary transition-colors"
          >
            Explorer
          </Link>
          <Link
            href="#"
            className="text-base font-medium text-black hover:text-primary transition-colors"
          >
            Pitch Deck
          </Link>
        </nav>

        <Button
          variant="secondary"
          className="rounded-full px-8 py-2 flex items-center space-x-2  hover:from-blue-400 hover:to-indigo-600 transition-all"
        >
          <span className="text-sm font-medium text-white">Learn More</span>
          <ArrowRight className="w-5 h-5 text-white" />
        </Button>
      </header>
    </div>
  );
}
