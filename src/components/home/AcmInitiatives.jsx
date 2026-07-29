"use client";
import { Network, Globe, Library, Users, Code2, Cpu, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function AcmInitiatives() {
  const sigs = [
    {
      title: "SIG-AI",
      desc: "Special Interest Group for Artificial Intelligence and Machine Learning.",
      icon: <Cpu className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "SIG-Web",
      desc: "Special Interest Group for modern Web Technologies and Open Source.",
      icon: <Code2 className="w-6 h-6 text-brand-blue" />,
    },
    {
      title: "SIG-Cyber",
      desc: "Special Interest Group for Cyber Security and Capture The Flag (CTF).",
      icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />,
    }
  ];

  const globalPerks = [
    {
      title: "ACM Digital Library",
      desc: "Free access to the world's most comprehensive database of computing literature.",
      icon: <Library className="w-8 h-8 text-white" />,
    },
    {
      title: "Global Network",
      desc: "Connect with over 100,000 computing professionals and students worldwide.",
      icon: <Globe className="w-8 h-8 text-white" />,
    },
    {
      title: "Distinguished Speakers",
      desc: "Attend exclusive talks from global industry leaders and renowned researchers.",
      icon: <Users className="w-8 h-8 text-white" />,
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-[#e8f2fc] to-white relative z-20 border-b-[3px] border-brand-navy rounded-b-[3rem] -mb-[3rem] overflow-hidden">
      
      {/* Tech Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: "radial-gradient(#004AAD 2px, transparent 2px)", 
          backgroundSize: "32px 32px" 
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section 1: The Global Advantage */}
        <div className="mb-24">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-brand-light-blue px-4 py-2 rounded-full border-[2px] border-brand-navy mb-6">
              <Network className="w-5 h-5 text-brand-navy" />
              <span className="font-bold text-sm text-brand-navy uppercase tracking-widest">Why Join Us</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-brand-navy">The ACM Advantage</h2>
            <p className="text-xl font-bold font-inter text-brand-navy/70 max-w-2xl mx-auto">
              We aren't just a college club. We are an official chapter of the world's largest educational and scientific computing society.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {globalPerks.map((perk, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-navy p-8 rounded-3xl border-[2px] border-brand-navy shadow-brand hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-brand-blue/20 flex items-center justify-center mb-6 border-[1px] border-brand-blue/30">
                  {perk.icon}
                </div>
                <h3 className="text-2xl font-black font-space-grotesk mb-3 text-white">{perk.title}</h3>
                <p className="font-medium font-inter text-brand-light-blue/80 leading-relaxed">{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Section 2: SIGs */}
        <div>
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-brand-navy whitespace-nowrap">Special Interest Groups</h2>
            <div className="flex-1 h-[2px] bg-brand-navy/10 mt-2"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sigs.map((sig, i) => (
              <div key={i} className="flex flex-col p-6 bg-white border-[2px] border-brand-navy/10 rounded-2xl hover:border-brand-blue transition-colors group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-brand-off-white rounded-xl group-hover:bg-brand-light-blue transition-colors">
                    {sig.icon}
                  </div>
                  <h3 className="text-xl font-black font-space-grotesk text-brand-navy">{sig.title}</h3>
                </div>
                <p className="font-medium font-inter text-brand-navy/60 text-sm leading-relaxed">{sig.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
