"use client";

import * as React from "react";
import Link from "next/link";
// import { ChevronDown } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  // NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  // NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

// const components: { title: string; subtitle: string; href: string }[] = [
//   {
//     title: "Home v1",
//     subtitle: "Vibrant & Modern",
//     href: "/",
//   },
//   {
//     title: "Home v2",
//     subtitle: "Classic Minimal Layout",
//     href: "/",
//   },
//   {
//     title: "Home v3",
//     subtitle: "Trendy Layouts",
//     href: "/",
//   },
//   {
//     title: "Home v4",
//     subtitle: "Clean, Gradient & Minimal",
//     href: "/",
//   },
// ];

// const companyLinks = [
//   { title: "Company", href: "/Company" },
//   { title: "Features", href: "/features" },
//   { title: "Services", href: "/services" },
//   { title: "Service Details", href: "/service_details" },
//   { title: "Testimonials", href: "/testimonials" },
// ];

// const blogLinks = [
//   { title: "Blogs", href: "/blogs" },
//   { title: "Blog Details", href: "/blog-details" },
//   { title: "Case Study", href: "/Case_Studies" },
//   { title: "Case Study Details", href: "/case-study-details" },
//   { title: "Contact", href: "/contact" },
// ];

// const teamLinks = [
//   { title: "Team", href: "/team" },
//   { title: "Careers", href: "/careers" },
//   { title: "FAQs", href: "/faq" },
//   { title: "404", href: "/404" },
// ];

export function Navbar() {
  return (
    <div className="py-4 border-b-[0.1px] border-b-gray-800 bg-black border-[#ffa701]">
      <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between">
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
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className=" gap-6">
            {/* <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-black text-lg text-white  hover:text-white">
                All Pages
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[800px] space-y-3 grid-cols-4 gap-3  bg-black p-6">
                  <ul className="space-y-4">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        subtitle={component.subtitle}
                        href={component.href}
                      />
                    ))}
                  </ul>
                  <ul className="space-y-4">
                    {companyLinks.map((link) => (
                      <ListItem
                        key={link.title}
                        title={link.title}
                        href={link.href}
                      />
                    ))}
                  </ul>
                  <ul className="space-y-4">
                    {blogLinks.map((link) => (
                      <ListItem
                        key={link.title}
                        title={link.title}
                        href={link.href}
                      />
                    ))}
                  </ul>
                  <ul className="space-y-4">
                    {teamLinks.map((link) => (
                      <ListItem
                        key={link.title}
                        title={link.title}
                        href={link.href}
                      />
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem> */}
            <NavigationMenuItem>
              <Link href="/Company" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-black text-lg text-white hover:bg-black hover:text-white"
                  )}
                >
                  Company
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/Case_Studies" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-black text-lg text-white hover:bg-black hover:text-white"
                  )}
                >
                  Case Studies
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "bg-black text-lg text-white hover:bg-black hover:text-white"
                  )}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <Button className=" bg-[#ffa701] ">Documentation</Button>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
    subtitle?: string;
  }
>(({ className, title, subtitle, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#1A1727] hover:text-white focus:text-white",
            className
          )}
          {...props}
        >
          <div className="text-lg font-medium leading-none text-white">
            {title}
          </div>
          {subtitle && (
            <p className="line-clamp-2 text-sm leading-snug text-gray-400">
              {subtitle}
            </p>
          )}
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
