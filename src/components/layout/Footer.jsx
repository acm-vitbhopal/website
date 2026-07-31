import Link from "next/link";
import { Button } from "../ui/Button";
import { Code2, ArrowRight } from "lucide-react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden mt-auto brutal-border border-x-0 border-b-0 bg-brand-navy text-brand-off-white">
      {/* Bg details */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-blue/20 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-brand-light-blue/10 blur-3xl" />

      <div className="relative container mx-auto px-4 py-14">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-3 font-space-grotesk text-4xl font-black tracking-tighter hover:text-brand-light-blue transition-colors"
            >
              <Code2 className="w-10 h-10 text-brand-light-blue" />

              <span>
                ACM<span className="text-brand-light-blue">.</span>VITB
              </span>
            </Link>

            <p className="mt-5 max-w-md text-brand-off-white/75 leading-relaxed font-bold">
              The official student chapter of the Association for Computing
              Machinery at VIT Bhopal. Empowering students through technology,
              innovation, and collaboration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="brutal-border bg-brand-off-white/5 p-5">
            <h3 className="font-space-grotesk text-xl font-black mb-5 text-brand-light-blue">
              Quick Links
            </h3>

            <ul className="space-y-3 font-bold">
              <li>
                <Link
                  href="/about"
                  className="hover:text-brand-light-blue transition-colors"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/events"
                  className="hover:text-brand-light-blue transition-colors"
                >
                  Events
                </Link>
              </li>

              <li>
                <Link
                  href="/team"
                  className="hover:text-brand-light-blue transition-colors"
                >
                  Team
                </Link>
              </li>

              <li>
                <Link
                  href="/projects"
                  className="hover:text-brand-light-blue transition-colors"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="brutal-border bg-brand-off-white/5 p-5">
            <h3 className="font-space-grotesk text-xl font-black mb-5 text-brand-light-blue">
              Connect
            </h3>

            <div className="flex flex-col gap-4 font-bold">
              <a
                href="https://www.instagram.com/acm_vitb_official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-brand-light-blue transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
                Instagram
              </a>

              <a
                href="https://www.linkedin.com/company/acm-student-chapter-vitbhopal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-brand-light-blue transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
                LinkedIn
              </a>

              <a
                href="https://github.com/acm-vitbhopal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-brand-light-blue transition-colors"
              >
                <FaGithub className="w-5 h-5" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Join CTA */}
        <div className="mt-14 brutal-border bg-brand-light-blue text-brand-navy p-8 flex flex-col md:flex-row items-center justify-between gap-6">
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
            className="flex items-center gap-2 whitespace-nowrap"
          >
            Join ACM
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-brand-off-white/20 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-brand-off-white/60">
          <p>© {year} ACM.VITB. All rights reserved.</p>

          <p>Built with 💙 by the ACM VIT Bhopal Tech Team</p>
        </div>
      </div>
    </footer>
  );
}
