"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { SITE_CONTACT } from "@/data/siteContent";
import { Button } from "@/components/common/Button";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["home", "about", "services", "work", "process", "institute", "courses", "pricing", "faq", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home", id: "home" },
    { name: "About", href: "/#about", id: "about" },
    { name: "Services", href: "/#services", id: "services" },
    { name: "Work", href: "/#work", id: "work" },
    { name: "Process", href: "/#process", id: "process" },
    { name: "Institute", href: "/#institute", id: "institute" },
    { name: "Courses", href: "/courses", id: "courses" },
    { name: "FAQ", href: "/#faq", id: "faq" },
    { name: "Contact", href: "/#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#080B11]/90 backdrop-blur-md border-b border-[#1E293B] py-3.5 shadow-lg shadow-black/40"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#00F0FF] p-[1.5px] transition-transform duration-200 group-hover:scale-105">
              <div className="w-full h-full bg-[#080B11] rounded-[7px] flex items-center justify-center">
                <span className="font-bold text-lg font-heading text-[#FFFFFF] tracking-tighter">C</span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-lg tracking-tight text-[#F8FAFC] font-heading leading-tight group-hover:text-[#A78BFA] transition-colors">
                CREATIVES
              </span>
              <span className="text-[10px] sm:text-[11px] font-mono tracking-widest text-[#94A3B8] uppercase">
                Agency & Institute
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#111726]/60 border border-[#1E293B] rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-150 ${
                    isActive
                      ? "text-[#FFFFFF] bg-[#1E293B]"
                      : "text-[#94A3B8] hover:text-[#FFFFFF] hover:bg-[#151D30]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Dual CTAs (Desktop) */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Button
              href="/courses"
              variant="outline"
              size="sm"
              className="hidden md:inline-flex text-xs py-2 px-3.5 border-[#2E3D5B] text-[#C4B5FD] hover:text-[#FFFFFF] hover:border-[#8B5CF6]"
            >
              Explore Courses
            </Button>
            <Button
              href="/#contact"
              variant="primary"
              size="sm"
              showArrow
              className="text-xs py-2 px-4"
            >
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <Button
              href="/#contact"
              variant="primary"
              size="sm"
              className="text-xs py-1.5 px-3"
            >
              Quote
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#111726] border border-[#1E293B] text-[#94A3B8] hover:text-[#FFFFFF] focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#080B11]/98 border-b border-[#1E293B] px-4 pt-3 pb-6 space-y-3 mt-3 backdrop-blur-xl animate-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pb-3 border-b border-[#1E293B]">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activeSection === link.id
                    ? "bg-[#1E293B] text-white font-medium"
                    : "text-[#94A3B8] hover:text-white hover:bg-[#111726]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2 pt-2">
            <Button
              href="/courses"
              variant="secondary"
              size="md"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-center text-xs text-[#C4B5FD]"
            >
              Explore Course Catalog
            </Button>
            <Button
              href="/#contact"
              variant="primary"
              size="md"
              showArrow
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-center text-xs"
            >
              Get a Free Quote
            </Button>
            <a
              href={SITE_CONTACT.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#10B981]/15 border border-[#10B981]/30 text-[#34D399] text-xs font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp ({SITE_CONTACT.phoneDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
