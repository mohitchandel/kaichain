import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
export default function Footer() {
  return (
    <footer className="bg-black py-24">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-[2fr,3fr] gap-80">
          <div className="space-y-8">
            <div className="flex items-center gap-2 text-white">
              <div className="flex items-center gap-2">
                <Image
                  decoding="async"
                  src="/logo.svg"
                  alt=""
                  width={200}
                  height={200}
                  className="display:block;width:100%;height:100%;border-radius:inherit;object-position:center;object-fit:contain;image-rendering:auto"
                ></Image>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-white text-xl mb-8 ml-2 ">
                Get weekly news on blockchain.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your mail address"
                  className="flex-1 px-4 py-2 rounded-full bg-[#1a1f2d] text-white border-none focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                />
                <Button variant="default">Subscribe</Button>
              </form>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-20">
            <div className="space-y-4">
              <ul className="space-y-8">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-lg hover:text-[#ffa706] transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-lg hover:text-[#ffa706] transition-colors"
                  >
                    Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-lg hover:text-[#ffa706] transition-colors"
                  >
                    Use Cases
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-lg hover:text-[#ffa706] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <ul className="space-y-8">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-lg hover:text-[#ffa706] transition-colors"
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-lg hover:text-[#ffa706] transition-colors"
                  >
                    Policies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 text-lg hover:text-[#ffa706] transition-colors"
                  >
                    Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm">
            © Copyright 2024. All Rights Reserved by FramerBite
          </p>

          <div className="flex items-center gap-8">
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Connect with</span>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
