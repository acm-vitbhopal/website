"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/Button";
import Image from "next/Image";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full brutal-border border-x-0 border-t-0 bg-brand-off-white/90 backdrop-blur-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 font-space-grotesk text-3xl font-black tracking-tighter text-brand-navy transition-colors hover:text-brand-blue">
          <Image src="/logo.png" 
          alt="ACM VITB Logo" 
          width={44} 
          height={44}
          className="h-11 w-11 object-contain" 
          />

          <span>
            ACM<span className="text-brand-blue">.</span>VITB
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-4 py-2 font-bold transition-all duration-200 ${
                  active
                    ? "bg-brand-blue text-brand-off-white"
                    : "text-brand-navy hover:bg-brand-light-blue hover:text-brand-navy"
                }`} >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Join Button */}
        <div className="flex items-center gap-4">
          <Button 
            variant="secondary" 
            className="hidden md:inline-flex !bg-brand-light-blue !text-brand-navy transition-colors hover:!bg-brand-navy hover:!text-brand-off-white" >
            Join ACM
          </Button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
            className="rounded-md brutal-border bg-brand-light-blue p-2 text-brand-navy transition-colors hover:bg-brand-blue hover:text-brand-off-white md:hidden">
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden brutal-border border-x-0 border-b-0 bg-brand-off-white px-4 py-5">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-md px-4 py-3 text-lg font-bold transition-all ${
                    active
                      ? "bg-brand-blue text-brand-off-white"
                      : "text-brand-navy hover:bg-brand-light-blue"
                  }`}>
                  {link.name}
                </Link>
              );
            })}

            <div className="mt-3">
              <Button
                variant="secondary"
                className="w-full !bg-brand-light-blue !text-brand-navy transition-colors hover:!bg-brand-navy hover:!text-brand-off-white"
                onClick={() => setIsOpen(false)}>
                Join ACM
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
