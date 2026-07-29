import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto bg-brand-navy text-white overflow-hidden relative">
      {/* Decorative Wave Overlay - Reduced Height */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 opacity-5">
        <svg className="relative block w-full h-[50px] md:h-[70px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-12 pb-8 md:pt-16 md:pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="md:col-span-2">
            <Link href="/" className="font-space-grotesk text-3xl lg:text-4xl font-black tracking-tighter block mb-4 text-white">
              ACM<span className="text-brand-blue">.</span>VITB
            </Link>
            <p className="font-medium font-inter text-brand-light-blue max-w-sm mb-6 leading-relaxed text-sm md:text-base">
              The official student chapter of the Association for Computing Machinery at VIT Bhopal. Building the next generation of tech leaders.
            </p>
            <div className="flex gap-4">
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-brand-blue rounded-full transition-colors border-[1px] border-white/10 font-bold text-xs tracking-wider">
                IG
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-brand-blue rounded-full transition-colors border-[1px] border-white/10 font-bold text-xs tracking-wider">
                IN
              </a>
              <a href="#" className="flex items-center justify-center w-10 h-10 bg-white/5 hover:bg-brand-blue rounded-full transition-colors border-[1px] border-white/10 font-bold text-xs tracking-wider">
                GH
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-space-grotesk font-bold text-xl mb-4 text-white tracking-wide">Explore</h3>
            <ul className="space-y-3 font-medium font-inter text-brand-light-blue/80 text-sm md:text-base">
              <li><Link href="/about" className="hover:text-brand-blue hover:translate-x-1 inline-flex items-center transition-all"><ArrowRight className="w-4 h-4 mr-2" /> About Us</Link></li>
              <li><Link href="/events" className="hover:text-brand-blue hover:translate-x-1 inline-flex items-center transition-all"><ArrowRight className="w-4 h-4 mr-2" /> Events</Link></li>
              <li><Link href="/team" className="hover:text-brand-blue hover:translate-x-1 inline-flex items-center transition-all"><ArrowRight className="w-4 h-4 mr-2" /> Team</Link></li>
              <li><Link href="/projects" className="hover:text-brand-blue hover:translate-x-1 inline-flex items-center transition-all"><ArrowRight className="w-4 h-4 mr-2" /> Projects</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-space-grotesk font-bold text-xl mb-4 text-white tracking-wide">Resources</h3>
            <ul className="space-y-3 font-medium font-inter text-brand-light-blue/80 text-sm md:text-base">
              <li><a href="#" className="hover:text-brand-blue hover:translate-x-1 inline-flex items-center transition-all"><ArrowRight className="w-4 h-4 mr-2" /> Blog</a></li>
              <li><a href="#" className="hover:text-brand-blue hover:translate-x-1 inline-flex items-center transition-all"><ArrowRight className="w-4 h-4 mr-2" /> Code of Conduct</a></li>
              <li><a href="#" className="hover:text-brand-blue hover:translate-x-1 inline-flex items-center transition-all"><ArrowRight className="w-4 h-4 mr-2" /> Contact Us</a></li>
            </ul>
          </div>

        </div>
        
        <div className="mt-12 pt-6 border-t-[1px] border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 font-medium font-inter text-xs md:text-sm text-brand-light-blue/60">
          <p>© {new Date().getFullYear()} ACM VIT Bhopal. All rights reserved.</p>
          <p className="flex items-center gap-1">Built with <span className="text-brand-blue">💙</span> by the Tech Team</p>
        </div>
      </div>
    </footer>
  );
}
