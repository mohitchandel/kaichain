"use client";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function NavBar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative top-0 z-50 w-full font-manrope">
      <header className="flex h-20 items-center justify-between px-4 md:px-8 lg:px-16 bg-white ">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl lg:text-2xl font-bold text-black">
            Kaichain
          </span>
        </Link>

        <button
          className="md:hidden text-black"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <Link
            href="https://docs.kaichain.net/"
            target="_blank"
            className="text-sm lg:text-base font-medium text-black hover:text-primary transition-colors"
          >
            Docs
          </Link>
          <Link
            href="#"
            className="text-sm lg:text-base font-medium text-black hover:text-primary transition-colors"
          >
            White Paper
          </Link>
          <div className="relative group">
            <button className="flex items-center space-x-2 text-sm lg:text-base font-medium text-black hover:text-primary transition-colors focus:outline-none">
              <span>Explorer</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 lg:w-56 bg-white shadow-lg border border-gray-200 rounded-md z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <Link
                href="https://explorer.kaichain.net/"
                target="_blank"
                className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition rounded-md"
              >
                Mainnet Explorer
              </Link>
              <Link
                href="https://testnet-explorer.kaichain.net/"
                target="_blank"
                className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition rounded-md"
              >
                Testnet Explorer
              </Link>
              <Link
                href="https://faucet.kaichain.net/"
                target="_blank"
                className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition rounded-md"
              >
                Faucet
              </Link>
              <Link
                href="https://status.kaichain.net/"
                target="_blank"
                className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition rounded-md"
              >
                Network Status
              </Link>
              <Link
                href="https://medium.com/@kaichain.net/connecting-metamask-to-kaichain-9f798fbf76c7"
                target="_blank"
                className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition rounded-md"
              >
                Connect Metamask
              </Link>
            </div>
          </div>
          <Link
            href="#"
            className="text-sm lg:text-base font-medium text-black hover:text-primary transition-colors"
          >
            Pitch Deck
          </Link>
        </nav>

        <Button variant="secondary" className="rounded-3xl hidden md:block">
          <a href="/learnmore" className="flex items-center">
            Learn More
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </Button>
      </header>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg z-40">
          <div className="flex flex-col items-center space-y-4 py-4">
            <Link
              href="https://docs.kaichain.net/"
              target="_blank"
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
              Pitch Deck
            </Link>
            <div className="relative">
              <button className="flex items-center space-x-2 text-base font-medium text-black hover:text-primary transition-colors focus:outline-none">
                <span>Explorer</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-md z-50">
                <Link
                  href="https://explorer.kaichain.net/"
                  target="_blank"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition rounded-md"
                >
                  Mainnet Explorer
                </Link>
                <Link
                  href="https://testnet-explorer.kaichain.net/"
                  target="_blank"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition rounded-md"
                >
                  Testnet Explorer
                </Link>
                <Link
                  href="https://faucet.kaichain.net/"
                  target="_blank"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition rounded-md"
                >
                  Faucet
                </Link>
                <Link
                  href="https://status.kaichain.net/"
                  target="_blank"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition rounded-md"
                >
                  Network Status
                </Link>
                <Link
                  href="https://medium.com/@kaichain.net/connecting-metamask-to-kaichain-9f798fbf76c7"
                  target="_blank"
                  className="block px-4 py-2 text-sm text-black hover:bg-gray-100 transition rounded-md"
                >
                  Connect Metamask
                </Link>
              </div>
            </div>
            <Button variant="secondary" className="rounded-3xl">
              <a href="/learnmore" className="flex items-center">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
