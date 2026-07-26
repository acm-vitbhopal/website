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
            className="fixed inset-0 z-[100] bg-brand-yellow flex flex-col items-center justify-center"
            exit={{ opacity: 0, transition: { duration: 0.8, ease: premiumEase } }}
          >
            <motion.div layoutId="acm-identity-container" transition={{ duration: 1.2, ease: premiumEase }} className="flex flex-col items-center z-10 transform scale-150">
              <span className="font-space-grotesk font-black text-5xl lg:text-[6rem] tracking-tighter text-brand-black leading-none">ACM</span>
              <span className="font-space-grotesk font-bold text-xl lg:text-2xl tracking-widest uppercase text-brand-pink mt-2 lg:mt-3">Student Chapter</span>
              <div className="w-24 lg:w-32 h-[4px] bg-brand-black my-5"></div>
              <span className="font-inter font-bold text-sm lg:text-base uppercase tracking-[0.4em] text-brand-black/80">VIT Bhopal</span>
            </motion.div>

            {/* Brutalist Loading Bar */}
            <div className="absolute bottom-16 md:bottom-24 w-64 md:w-96 h-3 bg-brand-yellow rounded-full overflow-hidden border-[3px] border-brand-black shadow-[4px_4px_0px_0px_#111]">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.1, ease: "linear" }}
                className="h-full bg-brand-black"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative overflow-hidden bg-brand-yellow pb-20 pt-32 lg:pb-0 lg:pt-24 border-b-[3px] border-brand-black rounded-b-[3rem] -mb-[3rem] z-40 min-h-[95vh] flex flex-col justify-center">
        
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <svg className="absolute bottom-0 left-0 w-[200%] md:w-full h-auto min-h-[70vh] text-white opacity-25" viewBox="0 0 1440 600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,150 C250,550 550,50 950,250 C1200,350 1440,100 1440,100 L1440,600 L0,600 Z" />
          </svg>
          <svg className="absolute -bottom-10 right-0 w-[150%] md:w-[80%] h-auto min-h-[40vh] text-black opacity-[0.06]" viewBox="0 0 1440 400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
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
          <h1 className="text-7xl md:text-[8rem] lg:text-[10rem] font-black mb-8 max-w-[80vw] leading-[0.85] tracking-tighter">
            Build. <br/> Break. <br/> 
            <span className="text-brand-pink relative inline-block z-10">
              Become.
              <svg className="absolute -bottom-4 left-0 w-full h-8 -z-10 text-brand-cyan opacity-80" viewBox="0 0 100 20" preserveAspectRatio="none">
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
          <p className="text-xl md:text-2xl font-bold mb-10 max-w-xl text-brand-black/80 font-inter">
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
                className="flex flex-col items-center lg:items-start border-t-4 lg:border-t-0 lg:border-l-4 border-brand-black pt-8 lg:pt-0 lg:pl-10 lg:py-6 transform scale-100 origin-left"
              >
                <span className="font-space-grotesk font-black text-5xl lg:text-[6rem] tracking-tighter text-brand-black leading-none">ACM</span>
                <span className="font-space-grotesk font-bold text-xl lg:text-2xl tracking-widest uppercase text-brand-pink mt-2 lg:mt-3">Student Chapter</span>
                <div className="w-24 lg:w-32 h-[4px] bg-brand-black my-5"></div>
                <span className="font-inter font-bold text-sm lg:text-base uppercase tracking-[0.4em] text-brand-black/80">VIT Bhopal</span>
              </motion.div>
            )}
          </div>

        </div>

        <div className="absolute bottom-4 left-0 right-0 overflow-hidden flex whitespace-nowrap bg-brand-black text-brand-yellow py-3 border-y-[3px] border-brand-black transform rotate-2 scale-110 translate-y-12 z-0 opacity-20 pointer-events-none">
          <motion.div style={{ x: marqueeX }} className="flex gap-8 text-4xl font-space-grotesk font-black uppercase tracking-widest">
            <span>VIT BHOPAL ACM STUDENT CHAPTER •</span>
            <span>VIT BHOPAL ACM STUDENT CHAPTER •</span>
            <span>VIT BHOPAL ACM STUDENT CHAPTER •</span>
            <span>VIT BHOPAL ACM STUDENT CHAPTER •</span>
            <span>VIT BHOPAL ACM STUDENT CHAPTER •</span>
          </motion.div>
        </div>
      </section>
    </>
  );
}
