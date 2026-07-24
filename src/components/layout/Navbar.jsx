import Link from "next/link";
import { Button } from "../ui/Button";
import { Menu } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b-4 border-brand-black bg-bg-light/90 backdrop-blur-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-space-grotesk text-2xl font-black tracking-tighter">
          ACM<span className="text-brand-blue">.</span>VITB
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-bold">
          <Link href="/about" className="hover:text-brand-purple transition-colors">About</Link>
          <Link href="/events" className="hover:text-brand-purple transition-colors">Events</Link>
          <Link href="/team" className="hover:text-brand-purple transition-colors">Team</Link>
          <Link href="/projects" className="hover:text-brand-purple transition-colors">Projects</Link>
        </nav>

        {/* CTA & Mobile Menu */}
        <div className="flex items-center gap-4">
          <Button variant="secondary" className="hidden md:inline-flex">Join ACM</Button>
          <button className="md:hidden p-2 brutal-border bg-brand-yellow rounded-md">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
