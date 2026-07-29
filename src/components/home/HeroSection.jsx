"use client";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const { scrollYProgress } = useScroll();
  const marqueeX = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const premiumEase = [0.76, 0, 0.24, 1];

  return (
    <>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            key="loader"
            className="fixed inset-0 z-[100] bg-brand-light-blue flex flex-col items-center justify-center"
            exit={{ opacity: 0, transition: { duration: 0.8, ease: premiumEase } }}
          >
            <motion.div layoutId="acm-identity-container" transition={{ duration: 1.2, ease: premiumEase }} className="flex flex-col items-center z-10 transform scale-150">
              <span className="font-space-grotesk font-black text-5xl lg:text-[6rem] tracking-tighter text-brand-navy leading-none">ACM</span>
              <span className="font-space-grotesk font-bold text-xl lg:text-2xl tracking-widest uppercase text-brand-blue mt-2 lg:mt-3">Student Chapter</span>
              <div className="w-24 lg:w-32 h-[4px] bg-brand-navy my-5 rounded-full"></div>
              <span className="font-inter font-bold text-sm lg:text-base uppercase tracking-[0.4em] text-brand-navy/80">VIT Bhopal</span>
            </motion.div>

            {/* Sleek Loading Bar */}
            <div className="absolute bottom-16 md:bottom-24 w-64 md:w-96 h-2 bg-white/50 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.1, ease: "linear" }}
                className="h-full bg-brand-navy rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative overflow-hidden bg-brand-light-blue pb-20 pt-32 lg:pb-0 lg:pt-24 border-b-[3px] border-brand-navy rounded-b-[3rem] -mb-[3rem] z-40 min-h-[95vh] flex flex-col justify-center">
        
        {/* Soft Wave Backgrounds */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60">
          <svg className="absolute bottom-0 left-0 w-[200%] md:w-full h-auto min-h-[70vh] text-brand-off-white" viewBox="0 0 1440 600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,150 C250,550 550,50 950,250 C1200,350 1440,100 1440,100 L1440,600 L0,600 Z" opacity="0.5"/>
          </svg>
          <svg className="absolute -bottom-10 right-0 w-[150%] md:w-[80%] h-auto min-h-[40vh] text-brand-blue opacity-10" viewBox="0 0 1440 400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,400 C300,100 600,200 800,100 C1100,-50 1440,200 1440,200 L1440,400 Z" />
          </svg>
        </div>

        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 mt-8 md:mt-0 relative z-10">
          
          <motion.div 
            className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10 w-full"
            initial={{ opacity: 0, y: 40 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 0.4, ease: premiumEase }}
          >
          <h1 className="text-7xl md:text-[8rem] lg:text-[10rem] font-black mb-8 max-w-[80vw] leading-[0.85] tracking-tighter text-brand-navy">
            Build. <br/> Break. <br/> 
            <span className="text-brand-blue relative inline-block z-10">
              Become.
              <svg className="absolute -bottom-4 left-0 w-full h-8 -z-10 text-brand-blue opacity-30" viewBox="0 0 100 20" preserveAspectRatio="none">
                <motion.path 
                  d="M2 12 Q 25 18, 50 10 T 98 12" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                />
              </svg>
            </span>
          </h1>
          <p className="text-xl md:text-2xl font-bold mb-10 max-w-xl text-brand-navy/80 font-inter">
            More than a coding club. A community where developers, designers, problem-solvers, and curious minds build projects, host events, compete, and grow together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Button variant="primary" size="lg">
              Become a Member <ArrowRight className="ml-2 w-6 h-6" />
            </Button>
          </div>
          </motion.div>

          <div className="flex-1 w-full flex items-center justify-center lg:justify-end relative mt-16 lg:mt-0 z-10 min-h-[300px]">
            {isLoaded && (
              <motion.div 
                layoutId="acm-identity-container" 
                transition={{ duration: 1.2, ease: premiumEase }}
                className="flex flex-col items-center lg:items-start border-t-2 lg:border-t-0 lg:border-l-2 border-brand-blue/30 pt-8 lg:pt-0 lg:pl-10 lg:py-6 transform scale-100 origin-left"
              >
                <span className="font-space-grotesk font-black text-5xl lg:text-[6rem] tracking-tighter text-brand-navy leading-none">ACM</span>
                <span className="font-space-grotesk font-bold text-xl lg:text-2xl tracking-widest uppercase text-brand-navy mt-2 lg:mt-3">Student Chapter</span>
                <div className="w-16 lg:w-20 h-[3px] bg-brand-blue/50 my-5 rounded-full"></div>
                <span className="font-inter font-bold text-sm lg:text-base uppercase tracking-[0.4em] text-brand-navy/80">VIT Bhopal</span>
              </motion.div>
            )}
          </div>

        </div>

      </section>
    </>
  );
}
