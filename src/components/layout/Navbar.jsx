"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "../ui/Button";
import { House, Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full brutal-border border-x-0 border-t-0 bg-brand-off-white/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-space-grotesk text-3xl font-black tracking-tighter text-brand-navy hover:text-brand-blue transition-colors">
          <House className="w-7 h-7" />
          <span>
            ACM<span className="text-brand-blue">.</span>VITB
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6 font-bold text-brand-navy">
          <Link
            href="/about"
            className="hover:text-brand-blue transition-colors">
            About
          </Link>

          <Link
            href="/events"
            className="hover:text-brand-blue transition-colors" >
            Events
          </Link>

          <Link
            href="/team"
            className="hover:text-brand-blue transition-colors">
            Team
          </Link>

          <Link
            href="/projects"
            className="hover:text-brand-blue transition-colors" >
            Projects
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button variant="secondary" className="hidden md:inline-flex">
            Join ACM
          </Button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 brutal-border rounded-md bg-brand-light-blue text-brand-navy">
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="md:hidden brutal-border border-x-0 border-b-0 bg-brand-off-white px-4 py-6 flex flex-col gap-4 font-bold text-brand-navy">
          <Link href="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>

          <Link href="/events" onClick={() => setIsOpen(false)}>
            Events
          </Link>

          <Link href="/team" onClick={() => setIsOpen(false)}>
            Team
          </Link>

          <Link href="/projects" onClick={() => setIsOpen(false)}>
            Projects
          </Link>

          <Button
            variant="secondary"
            className="w-full"
            onClick={() => setIsOpen(false)} >
            Join ACM
          </Button>
        </nav>
      )}
    </header>
  );
}
