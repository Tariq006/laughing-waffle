"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// Import the logo directly
import logo from "./GOLF-LOGO.png"; // IMPORTANT: Import the logo

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Course", href: "/course" },
  { name: "Visitors", href: "/visitors" },
  { name: "News", href: "/news" },
  { 
    name: "Master Scoreboard", 
    href: "https://www.masterscoreboard.co.uk/ClubIndex.php?CWID=106965",
    external: true 
  },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-golf-green/90 backdrop-blur-md py-3 shadow-lg"
          : "bg-golf-green py-4 md:py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 md:gap-4">
          {/* Logo Image */}
          <div className="h-10 w-10 md:h-12 md:w-12 flex items-center justify-center flex-shrink-0 relative">
            <Image
              src={logo}  // Use the imported logo
              alt="ABEOKUTA GOLF CLUB Logo"
              width={48}
              height={48}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
          
          {/* ABEOKUTA GOLF CLUB Text */}
          <div className="flex flex-col min-w-0">
            <h1 className="font-serif text-sm md:text-2xl font-bold text-white tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
              ABEOKUTA GOLF CLUB
            </h1>
            <p className="text-xs md:text-sm text-golf-gold italic whitespace-nowrap">
              Established 1987
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => {
            if (item.external) {
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-sm font-medium transition-colors text-white hover:text-golf-gold",
                    pathname === item.href && "text-golf-gold underline underline-offset-8"
                  )}
                >
                  {item.name}
                </a>
              );
            }
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-golf-gold",
                  pathname === item.href
                    ? "text-golf-gold underline underline-offset-8"
                    : "text-white"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white ml-2 flex-shrink-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-golf-green border-t border-golf-green-light"
          >
            <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
              {navItems.map((item) => {
                if (item.external) {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-base font-medium transition-colors hover:text-golf-gold py-2",
                        pathname === item.href ? "text-golf-gold" : "text-white"
                      )}
                    >
                      {item.name}
                    </a>
                  );
                }
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-golf-gold py-2",
                      pathname === item.href ? "text-golf-gold" : "text-white"
                    )}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
