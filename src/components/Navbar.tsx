"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Story", href: "#story" },
    { name: "Wedding", href: "#wedding" },
    { name: "Events", href: "#events" },
    { name: "Family", href: "#family" },
    { name: "RSVP", href: "#rsvp" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-ivory/90 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Monogram */}
        <a href="#home" className="text-3xl font-calligraphy text-gold font-bold tracking-wider">
          L & S
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-maroon/80 hover:text-gold transition-colors font-serif text-sm tracking-widest uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-maroon hover:text-gold transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={cn(
          "absolute top-full left-0 w-full bg-ivory/95 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden md:hidden",
          isOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        )}
      >
        <div className="flex flex-col items-center space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-maroon/80 hover:text-gold transition-colors font-serif text-sm tracking-widest uppercase block"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
