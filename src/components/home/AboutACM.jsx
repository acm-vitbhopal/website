"use client";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function AboutACM() {
  return (
    <section className="py-32 bg-brand-navy relative z-30 border-b-[3px] border-brand-navy rounded-b-[3rem] -mb-[3rem]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1">
            <h2 className="text-6xl md:text-[5.5rem] font-black leading-[0.9] mb-8 text-brand-light-blue">
              Not just another <br/> <span className="text-white">college club.</span>
            </h2>
            <p className="text-xl md:text-2xl font-bold font-inter text-brand-light-blue/80 max-w-xl">
              We are the central nervous system for tech culture at VIT Bhopal. 
            </p>
          </div>

          <div className="flex-1 w-full max-w-xl relative">
            {/* Background decorative square */}
            <div className="absolute inset-0 bg-brand-blue rounded-3xl transform translate-x-4 translate-y-4"></div>
            
            <Card color="white" className="relative z-10 border-0 rotate-1">
              <div className="flex flex-col gap-8">
                
                <div className="border-b-[2px] border-brand-light-blue pb-6">
                  <h3 className="text-3xl font-black font-space-grotesk mb-3 text-brand-navy">ACM Global</h3>
                  <p className="font-medium font-inter text-brand-navy/80">
                    The Association for Computing Machinery is the world's largest educational and scientific computing society, delivering resources that advance computing as a profession.
                  </p>
                </div>

                <div>
                  <h3 className="text-3xl font-black font-space-grotesk mb-3 text-brand-navy">Our Chapter</h3>
                  <p className="font-medium font-inter text-brand-navy/80">
                    At VIT Bhopal, we bridge the gap between classroom theory and real-world engineering. We are a community of builders, researchers, and hackers.
                  </p>
                </div>

              </div>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
}
