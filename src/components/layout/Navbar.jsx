import Link from "next/link";
import { Button } from "../ui/Button";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-[2px] border-brand-navy/10 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-space-grotesk text-3xl font-black tracking-tighter text-brand-navy">
          ACM<span className="text-brand-blue">.</span>VITB
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-bold text-brand-navy/80">
          <Link href="/about" className="hover:text-brand-blue transition-colors">About</Link>
          <Link href="/events" className="hover:text-brand-blue transition-colors">Events</Link>
          <Link href="/team" className="hover:text-brand-blue transition-colors">Team</Link>
          <Link href="/projects" className="hover:text-brand-blue transition-colors">Projects</Link>
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button variant="primary" className="hidden md:inline-flex text-sm px-6 py-2">Join ACM</Button>
          <button className="md:hidden p-2 text-brand-navy hover:bg-brand-light-blue rounded-md transition-colors">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
