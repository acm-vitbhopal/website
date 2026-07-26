"use client";
import { Button } from "@/components/ui/Button";

export function FeaturedEvent() {
  return (
    <section className="pt-40 pb-32 bg-brand-cyan relative z-20 border-b-[3px] border-brand-black rounded-b-[3rem] -mb-[3rem]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16 text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-4">Up next</h2>
          <p className="text-2xl font-bold font-inter text-brand-black transform rotate-2">
            Don't miss out on this one
          </p>
        </div>

        {/* Ticket Container */}
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row brutal-shadow brutal-border bg-white rounded-3xl overflow-hidden transform md:-rotate-1 hover:rotate-0 transition-transform duration-300">
          
          {/* Left Side (Main Info) */}
          <div className="flex-1 p-8 md:p-12 border-b-[3px] md:border-b-0 md:border-r-[4px] border-dashed border-brand-black flex flex-col justify-between">
            <div>
              <span className="inline-block bg-brand-yellow px-4 py-1 font-bold border-2 border-brand-black shadow-[2px_2px_0px_0px_#111] mb-6">
                FLAGSHIP HACKATHON
              </span>
              <h3 className="text-5xl md:text-7xl font-black leading-[0.9] mb-6 uppercase">
                Code Black <br/> <span className="text-brand-pink">2026</span>
              </h3>
              <p className="font-bold text-lg md:text-xl font-inter text-gray-700 max-w-lg mb-8">
                Our 48-hour flagship hackathon. Build innovative solutions, win prizes, and network with industry leaders.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 font-bold font-inter text-brand-black mt-8">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Date</p>
                <p className="text-xl">Nov 01 - Nov 03</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Location</p>
                <p className="text-xl">VIT Bhopal Auditorium</p>
              </div>
            </div>
          </div>

          {/* Right Side (Stub & CTA) */}
          <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col items-center justify-center relative overflow-hidden bg-white">
            <div className="text-center z-10 w-full flex flex-col items-center">
              <p className="font-space-grotesk font-black text-3xl md:text-4xl uppercase tracking-widest mb-2 transform -rotate-12 text-brand-purple">
                Admit One
              </p>
              <div className="my-8 flex justify-center gap-1 md:gap-2">
                {/* Fake Barcode */}
                <div className="w-2 h-16 bg-brand-black"></div>
                <div className="w-1 h-16 bg-brand-black"></div>
                <div className="w-4 h-16 bg-brand-black"></div>
                <div className="w-1 h-16 bg-brand-black"></div>
                <div className="w-3 h-16 bg-brand-black"></div>
                <div className="w-1 h-16 bg-brand-black"></div>
                <div className="w-4 h-16 bg-brand-black"></div>
                <div className="w-1 h-16 bg-brand-black"></div>
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
