import Link from "next/link";
import {
  Instagram,
  Linkedin,
  PinIcon as Pinterest,
  Youtube,
} from "lucide-react";
import { Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-20 font-manrope">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-xs">
          {/* Logo and Description Section */}
          <div className="lg:col-span-8">
            <div className="flex flex-col gap-6">
              <p className="text-xl">Kaichain</p>

              <p className="text-white max-w-sm text-xs">
                Celebrate the joy of accomplishment with an app designed to
                track your progress, motivate your efforts, and celebrate your
                successes.
              </p>
              {/* Social Icons */}
              <div className="flex gap-6 mt-4">
                <Link
                  href="#"
                  className="hover:text-white text-gray-400 transition-colors text-xs"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="hover:text-white text-gray-400 transition-colors text-xs"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="hover:text-white text-gray-400 transition-colors text-xs"
                >
                  <Pinterest className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="hover:text-white text-gray-400 transition-colors text-xs"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="hover:text-white text-gray-400 transition-colors text-xs"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
              </div>
              <p className="text-white max-w-sm text-xs">
                copyright © 2025 Kaichain
              </p>
            </div>
          </div>

          {/* Navigation Links Section */}
          <div className="lg:col-span-4 text-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Product Column */}
              <div>
                <h3 className="text-sm text-white font-bold mb-4">Product</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white text-gray-400 transition-colors text-xs"
                    >
                      Features
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white text-gray-400 transition-colors text-xs"
                    >
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white text-gray-400 transition-colors text-xs"
                    >
                      Updates
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white text-gray-400 transition-colors text-xs"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white text-gray-400 transition-colors text-xs"
                    >
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Company Column */}
              <div>
                <h3 className="text-sm text-white font-bold mb-4">Company</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white text-gray-400 transition-colors text-xs"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white text-gray-400 transition-colors text-xs"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white text-gray-400 transition-colors text-xs"
                    >
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white text-gray-400 transition-colors text-xs"
                    >
                      Manifesto
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white text-gray-400 transition-colors text-xs"
                    >
                      Press
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white text-gray-400 transition-colors text-xs"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources Column */}
              <div>
                <h3 className="text-sm text-white font-bold mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white text-gray-400 transition-colors text-xs"
                    >
                      Examples
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white text-gray-400 transition-colors text-xs"
                    >
                      Community
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white text-gray-400 transition-colors text-xs"
                    >
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white text-gray-400 transition-colors text-xs"
                    >
                      Docs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Legal Column */}
              <div>
                <h3 className="text-sm text-white font-bold mb-4">Legal</h3>
                <ul className="space-y-3">
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white text-gray-400 transition-colors text-xs"
                    >
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white text-gray-400 transition-colors text-xs"
                    >
                      Terms
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="hover:text-white text-gray-400 transition-colors text-xs"
                    >
                      Security
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
