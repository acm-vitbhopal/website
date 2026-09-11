import Link from "next/link";
import { Button } from "../ui/Button";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Events", href: "/events" },
    { name: "Team", href: "/team" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <footer className="relative mt-auto overflow-hidden brutal-border border-x-0 border-b-0 bg-brand-navy text-brand-off-white">
      {/* Background */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-brand-light-blue/10 blur-3xl" />

      <div className="relative container mx-auto px-4 py-14">
        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div className="lg:col-span-1 text-center sm:text-left">
            <Link
              href="/"
              className="flex items-center justify-center gap-3 sm:justify-start font-space-grotesk text-4xl font-black tracking-tighter hover:text-brand-light-blue transition-colors">
              <Image
                src="/logo.png"
                alt="ACM VITB Logo"
                width={48}
                height={48}
                className="h-12 w-12 object-contain"
                />
                
              <span>
                ACM<span className="text-brand-light-blue">.</span>VITB
              </span>
            </Link>

            <p className="mt-5 text-brand-off-white/75 leading-relaxed font-bold">
              The official student chapter of the Association for Computing
              Machinery at VIT Bhopal University.
            </p>
          </div>

          {/* Quick Links */}
          <div className="brutal-border bg-brand-off-white/5 p-5">
            <h3 className="mb-5 font-space-grotesk text-xl font-black text-brand-light-blue">
              Quick Links
            </h3>

            <ul className="space-y-3 font-bold">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-brand-light-blue">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="brutal-border bg-brand-off-white/5 p-5">
            <h3 className="mb-5 font-space-grotesk text-xl font-black text-brand-light-blue">
              Contact Us
            </h3>

            <div className="space-y-4 text-sm font-bold">
              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-brand-light-blue" />
                <span>acmstudent@vitbhopal.ac.in</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-brand-light-blue" />
                <span>VIT Bhopal University</span>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className="brutal-border bg-brand-off-white/5 p-5">
            <h3 className="mb-5 font-space-grotesk text-xl font-black text-brand-light-blue">
              Connect with Us
            </h3>

            <div className="flex gap-5 text-2xl">
              <a
                href="https://www.instagram.com/acm_vitb_official"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="transition-all duration-200 hover:scale-110 hover:text-brand-light-blue">
                <FaInstagram />
              </a>

              <a
                href="https://www.linkedin.com/company/acm-student-chapter-vitbhopal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition-all duration-200 hover:scale-110 hover:text-brand-light-blue">
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/acm-vitbhopal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition-all duration-200 hover:scale-110 hover:text-brand-light-blue">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="mt-14 brutal-border bg-brand-light-blue p-8 text-brand-navy">
          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div>
              <h2 className="font-space-grotesk text-3xl font-black">
                Want to build something awesome?
              </h2>

              <p className="mt-2 font-bold opacity-80">
                Join ACM.VITB and become part of a community of developers,
                innovators, and creators.
              </p>
            </div>

            <Button
              variant="primary"
              className="flex items-center gap-2 whitespace-nowrap">
              Join ACM
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-brand-off-white/20 pt-6 text-center text-sm text-brand-off-white/60 md:flex md:items-center md:justify-between md:text-left">
          <p>© {year} ACM.VITB. All rights reserved.</p>

          <p className="mt-2 md:mt-0">
            Made with 💙 by the Tech Team
          </p>
        </div>
      </div>
    </footer>
  );
}
