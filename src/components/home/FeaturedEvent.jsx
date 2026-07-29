"use client";
import { Button } from "@/components/ui/Button";

export function FeaturedEvent() {
  return (
    <section className="pt-40 pb-32 bg-gradient-to-b from-brand-off-white to-[#e8f2fc] relative z-20 border-b-[3px] border-brand-navy rounded-b-[3rem] -mb-[3rem] overflow-hidden">
      
      {/* Tech Grid Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
        style={{ 
          backgroundImage: "radial-gradient(#004AAD 2px, transparent 2px)", 
          backgroundSize: "32px 32px" 
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-4 text-brand-navy">Up next</h2>
          <p className="text-2xl font-bold font-inter text-brand-navy/80">
            Don't miss out on this one
          </p>
        </div>

        {/* Ticket Container */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row shadow-brand bg-white rounded-3xl overflow-hidden transform md:-rotate-1 hover:rotate-0 transition-transform duration-300 border-2 border-brand-navy">
          
          {/* Left Side (Main Info) */}
          <div className="flex-1 p-8 md:p-12 border-b-[2px] md:border-b-0 md:border-r-[3px] border-dashed border-brand-navy flex flex-col justify-between">
            <div>
              <span className="inline-block bg-brand-light-blue text-brand-navy px-4 py-1 font-bold border-[2px] border-brand-navy rounded-md mb-6">
                FLAGSHIP HACKATHON
              </span>
              <h3 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 uppercase text-brand-navy">
                Code Black <br/> <span className="text-brand-blue">2026</span>
              </h3>
              <p className="font-medium text-lg md:text-xl font-inter text-brand-navy/70 max-w-lg mb-8">
                Our 48-hour flagship hackathon. Build innovative solutions, win prizes, and network with industry leaders.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 font-bold font-inter text-brand-navy mt-8">
              <div>
                <p className="text-sm text-brand-navy/50 uppercase tracking-widest">Date</p>
                <p className="text-xl">Nov 01 - Nov 03</p>
              </div>
              <div>
                <p className="text-sm text-brand-navy/50 uppercase tracking-widest">Location</p>
                <p className="text-xl">VIT Bhopal Auditorium</p>
              </div>
            </div>
          </div>

          {/* Right Side (Stub & CTA) */}
          <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col items-center justify-center relative overflow-hidden bg-white">
            <div className="text-center z-10 w-full flex flex-col items-center">
              <p className="font-space-grotesk font-black text-3xl md:text-4xl uppercase tracking-widest mb-2 transform -rotate-12 text-brand-navy">
                Admit One
              </p>
              <div className="my-8 flex justify-center gap-1 md:gap-2">
                {/* Fake Barcode */}
                <div className="w-2 h-16 bg-brand-navy"></div>
                <div className="w-1 h-16 bg-brand-navy"></div>
                <div className="w-4 h-16 bg-brand-navy"></div>
                <div className="w-1 h-16 bg-brand-navy"></div>
                <div className="w-3 h-16 bg-brand-navy"></div>
                <div className="w-1 h-16 bg-brand-navy"></div>
                <div className="w-4 h-16 bg-brand-navy"></div>
                <div className="w-1 h-16 bg-brand-navy"></div>
              </div>
              <Button variant="primary" className="w-full">
                Claim Ticket
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
