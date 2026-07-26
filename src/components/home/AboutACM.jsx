"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/Card";

export function AboutACM() {
  // Accordion Fan Scroll Setup
  const acmRef = useRef(null);
  const { scrollYProgress: acmScroll } = useScroll({
    target: acmRef,
    offset: ["start end", "center center"]
  });
  
  const backCardRotate = useTransform(acmScroll, [0, 1], [0, 6]);
  const backCardX = useTransform(acmScroll, [0, 1], [0, 24]);
  const backCardY = useTransform(acmScroll, [0, 1], [0, 24]);
  const frontCardRotate = useTransform(acmScroll, [0, 1], [0, -3]);

  return (
    <section ref={acmRef} className="pt-40 pb-32 bg-brand-purple relative z-30 border-b-[3px] border-brand-black rounded-b-[3rem] -mb-[3rem]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left: Huge Text */}
          <div className="flex-1 text-white">
            <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-black leading-[0.85] tracking-tighter mb-8">
              Not just <br/> another <br/> <span className="text-brand-yellow">college club.</span>
            </h2>
            <p className="text-2xl font-bold font-inter max-w-lg">
              We are the central nervous system for tech culture at VIT Bhopal.
            </p>
          </div>

          {/* Right: Brutalist Card Stack */}
          <div className="flex-1 relative w-full max-w-lg mx-auto lg:mx-0 mt-8 lg:mt-0">
            {/* Back Card (Decorative) */}
            <motion.div 
              style={{ rotate: backCardRotate, x: backCardX, y: backCardY }}
              className="absolute inset-0 bg-brand-yellow rounded-3xl border-[3px] border-brand-black"
            ></motion.div>
            
            {/* Front Card (Content) */}
            <motion.div style={{ rotate: frontCardRotate }} className="relative z-10">
              <Card color="white" className="md:p-10 w-full h-full">
                <h3 className="text-3xl md:text-4xl font-space-grotesk font-black mb-4">ACM Global</h3>
                <p className="font-bold text-lg md:text-xl mb-6 leading-tight text-brand-black/80">
                  The Association for Computing Machinery is the world's largest educational and scientific computing society, delivering resources that advance computing as a profession.
                </p>
                <div className="w-full h-[3px] bg-brand-black my-6"></div>
                <h3 className="text-3xl md:text-4xl font-space-grotesk font-black mb-4">Our Chapter</h3>
                <p className="font-bold text-lg md:text-xl leading-tight text-brand-black/80">
                  At VIT Bhopal, we bridge the gap between classroom theory and real-world engineering. We are a community of builders, researchers, and hackers.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
