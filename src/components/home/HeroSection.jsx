"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    // 0: Navy Void
    // 1: BUILD assembles (0.2s)
    // 2: BREAK glitches (1.0s)
    // 3: BECOME elegant (1.8s)
    // 4: ACM Identity reveal (2.8s)
    // 5: Transformation to Homepage (4.0s)
    
    const t1 = setTimeout(() => setPhase(1), 200);
    const t2 = setTimeout(() => setPhase(2), 1000);
    const t3 = setTimeout(() => setPhase(3), 1800);
    const t4 = setTimeout(() => setPhase(4), 2800);
    const t5 = setTimeout(() => setPhase(5), 4000);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5); };
  }, []);

  const isLoaded = phase >= 5;
  const premiumEase = [0.76, 0, 0.24, 1];
  
  // Custom easing for the layout morph to ensure a snappy, flawless flight
  const morphTransition = {
    layout: { duration: 1.2, ease: [0.65, 0, 0.15, 1] },
    color: { duration: 1.2, ease: [0.65, 0, 0.15, 1] }
  };

  return (
    <>
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            key="cinematic-loader"
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden pointer-events-none"
          >
            {/* Dark Navy Background overlay that fades out */}
            <motion.div 
              className="absolute inset-0 bg-brand-navy -z-10"
              exit={{ opacity: 0, transition: { duration: 1.2, ease: [0.65, 0, 0.15, 1] } }}
            />

            {/* Subtle Grid */}
            <motion.div 
               exit={{ opacity: 0 }}
               className="absolute inset-0 opacity-[0.03]" 
               style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '100px 100px' }}
            />

            <div className="relative flex flex-col items-center justify-center h-full w-full gap-12 md:gap-20">
              
              {/* The Words Stacked */}
              <div className="flex flex-col items-center justify-center -mt-24 md:-mt-32">
                
                {phase >= 1 && (
                  <motion.div
                    layoutId="hero-build"
                    initial={{ opacity: 0, scale: 1.1, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0, color: "#FFFFFF" }}
                    transition={{ delay: 0, duration: 0.4, type: "spring", bounce: 0.3 }}
                    className="font-space-grotesk font-black text-6xl md:text-8xl lg:text-[8rem] tracking-tighter leading-[0.85] whitespace-nowrap w-max"
                  >
                    BUILD<motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}>.</motion.span>
                  </motion.div>
                )}

                {phase >= 2 && (
                  <motion.div
                    layoutId="hero-break"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1, color: "#FFFFFF", transition: { duration: 0 } }}
                    className="font-space-grotesk font-black text-6xl md:text-8xl lg:text-[8rem] tracking-tighter leading-[0.85] whitespace-nowrap mt-2 relative w-max"
                  >
                    {/* The Glitch text */}
                    <motion.span
                      animate={{ x: [-8, 8, -4, 4, 0] }}
                      transition={{ duration: 0.2 }}
                      className="relative z-10 inline-block"
                    >
                      BREAK.
                    </motion.span>
                    
                    {/* Blue Ghost Layer */}
                    <motion.span
                      animate={{ x: [12, -12, 0], opacity: [0, 0.8, 0] }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-0 z-0 text-brand-blue mix-blend-screen inline-block"
                    >
                      BREAK.
                    </motion.span>
                  </motion.div>
                )}

                {phase >= 3 && (
                  <motion.div
                    layoutId="hero-become"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="font-space-grotesk font-black text-6xl md:text-8xl lg:text-[8rem] text-brand-blue tracking-tighter leading-[0.85] whitespace-nowrap w-max"
                  >
                    BECOME.
                  </motion.div>
                )}

              </div>

              {/* ACM Identity Center */}
              {phase >= 4 && (
                <motion.div
                  layoutId="acm-identity-container"
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 1 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.15,
                        delayChildren: 0.1
                      }
                    }
                  }}
                  className="absolute bottom-8 md:bottom-16 flex flex-col items-center z-10 transform scale-90 md:scale-100"
                >
                  <motion.span 
                    layoutId="acm-title" 
                    variants={{ hidden: { opacity: 0, y: 20, filter: "blur(5px)" }, visible: { opacity: 1, y: 0, color: "#FFFFFF", filter: "blur(0px)", transition: { type: "spring", bounce: 0.4, duration: 0.8 } } }}
                    className="font-space-grotesk font-black text-5xl lg:text-7xl tracking-tighter leading-none"
                  >
                    ACM
                  </motion.span>
                  <motion.span 
                    layoutId="acm-subtitle" 
                    variants={{ hidden: { opacity: 0, y: 20, filter: "blur(5px)" }, visible: { opacity: 1, y: 0, color: "#3B82F6", filter: "blur(0px)", transition: { type: "spring", bounce: 0.4, duration: 0.8 } } }}
                    className="font-space-grotesk font-bold text-xl lg:text-2xl tracking-widest uppercase mt-2"
                  >
                    STUDENT CHAPTER
                  </motion.span>
                  <motion.div 
                    layoutId="acm-divider-horizontal" 
                    variants={{ hidden: { opacity: 0, scaleX: 0 }, visible: { opacity: 1, scaleX: 1, transition: { type: "spring", bounce: 0.4, duration: 0.8 } } }}
                    className="w-20 lg:w-24 h-[3px] bg-brand-blue/50 my-4 rounded-full"
                  ></motion.div>
                  <motion.span 
                    layoutId="acm-location" 
                    variants={{ hidden: { opacity: 0, y: 20, filter: "blur(5px)" }, visible: { opacity: 1, y: 0, color: "rgba(255, 255, 255, 0.8)", filter: "blur(0px)", transition: { type: "spring", bounce: 0.4, duration: 0.8 } } }}
                    className="font-inter font-bold text-sm lg:text-base uppercase tracking-[0.4em]"
                  >
                    VIT BHOPAL
                  </motion.span>
                </motion.div>
              )}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative overflow-hidden bg-brand-light-blue pb-20 pt-28 lg:pb-0 lg:pt-4 border-b-[3px] border-brand-navy rounded-b-[3rem] -mb-[3rem] z-40 min-h-[95vh] flex flex-col justify-start">
        
        {/* Soft Wave Backgrounds */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-end">
          <motion.svg 
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 0.6 } : { opacity: 0 }}
            transition={{ duration: 1.3, delay: 0.2, ease: premiumEase }}
            className="absolute bottom-0 left-0 w-[200%] md:w-full h-auto min-h-[70vh] text-brand-off-white" viewBox="0 0 1440 600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
          >
            <path d="M0,150 C250,550 550,50 950,250 C1200,350 1440,100 1440,100 L1440,600 L0,600 Z" opacity="0.5"/>
          </motion.svg>
        </div>

        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 mt-8 md:mt-0 relative z-10">
          
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left z-10 w-full relative">
            
            <h1 className="mb-4 max-w-[80vw] flex flex-col items-center lg:items-start text-center lg:text-left relative z-20">
              
              {isLoaded ? (
                <motion.div layoutId="hero-build" initial={{ color: "#FFFFFF", opacity: 1 }} animate={{ color: "#102A43", opacity: 1 }} transition={morphTransition} className="font-space-grotesk font-black text-7xl md:text-[8rem] lg:text-[10rem] tracking-tighter leading-[0.85] whitespace-nowrap w-max">
                  BUILD<motion.span initial={{ opacity: 1 }} animate={{ opacity: 1 }} transition={{ duration: 0 }}>.</motion.span>
                </motion.div>
              ) : (
                <div style={{ color: "#102A43" }} className="font-space-grotesk font-black text-7xl md:text-[8rem] lg:text-[10rem] tracking-tighter leading-[0.85] whitespace-nowrap w-max opacity-0">
                  BUILD<span>.</span>
                </div>
              )}
              
              {isLoaded ? (
                <motion.div layoutId="hero-break" initial={{ color: "#FFFFFF", opacity: 1 }} animate={{ color: "#102A43", opacity: 1 }} transition={morphTransition} className="font-space-grotesk font-black text-7xl md:text-[8rem] lg:text-[10rem] tracking-tighter leading-[0.85] whitespace-nowrap mt-2 relative w-max">
                  <motion.span className="relative z-10 inline-block">BREAK.</motion.span>
                  <motion.span className="absolute left-0 top-0 z-0 text-brand-blue mix-blend-screen inline-block opacity-0">BREAK.</motion.span>
                </motion.div>
              ) : (
                <div style={{ color: "#102A43" }} className="font-space-grotesk font-black text-7xl md:text-[8rem] lg:text-[10rem] tracking-tighter leading-[0.85] whitespace-nowrap mt-2 relative w-max opacity-0">
                  <span className="relative z-10 inline-block">BREAK.</span>
                  <span className="absolute left-0 top-0 z-0 opacity-0 inline-block">BREAK.</span>
                </div>
              )}
              
              <span className="relative inline-block z-10 w-max">
                {isLoaded ? (
                  <motion.div layoutId="hero-become" initial={{ opacity: 1 }} animate={{ opacity: 1 }} transition={morphTransition} className="font-space-grotesk font-black text-7xl md:text-[8rem] lg:text-[10rem] text-brand-blue tracking-tighter leading-[0.85] whitespace-nowrap relative z-10 w-max">
                    BECOME.
                  </motion.div>
                ) : (
                  <div className="font-space-grotesk font-black text-7xl md:text-[8rem] lg:text-[10rem] text-brand-blue tracking-tighter leading-[0.85] whitespace-nowrap relative z-10 w-max opacity-0">
                    BECOME.
                  </div>
                )}
                
                {isLoaded && (
                  <svg 
                    className="absolute -bottom-4 left-0 w-full h-8 -z-10 text-brand-blue opacity-40" viewBox="0 0 100 20" preserveAspectRatio="none"
                  >
                    <motion.path 
                      d="M2 12 Q 25 18, 50 10 T 98 12" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="6"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ 
                        pathLength: { duration: 2.5, delay: 1.4, ease: "easeInOut" },
                        opacity: { duration: 0.4, delay: 1.4 }
                      }}
                    />
                  </svg>
                )}
              </span>

            </h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: premiumEase }}
            >
              <p className="text-xl md:text-2xl font-bold mb-6 max-w-xl text-brand-navy/80 font-inter">
                More than a coding club. A community where developers, designers, problem-solvers, and curious minds build projects, host events, compete, and grow together.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                <Button variant="primary" size="lg">
                  Become a Member <ArrowRight className="ml-2 w-6 h-6" />
                </Button>
              </div>
            </motion.div>
          </div>

          <div className="flex-1 w-full flex items-center justify-center lg:justify-end relative mt-16 lg:mt-0 z-10 min-h-[300px]">
             
             {isLoaded ? (
               <motion.div 
                  layoutId="acm-identity-container" 
                  transition={morphTransition}
                  className="flex flex-col items-center lg:items-start lg:pl-10 lg:py-6 transform scale-100 origin-left relative"
                >
                  <motion.div 
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 0.8, delay: 0.3, ease: premiumEase }}
                    className="hidden lg:block absolute left-0 top-0 w-[2px] bg-brand-blue/30"
                  />
                  <motion.span layoutId="acm-title" initial={{ color: "#FFFFFF", opacity: 1 }} animate={{ color: "#102A43", opacity: 1 }} transition={morphTransition} className="font-space-grotesk font-black text-5xl lg:text-[6rem] tracking-tighter leading-none">ACM</motion.span>
                  <motion.span layoutId="acm-subtitle" initial={{ color: "#3B82F6", opacity: 1 }} animate={{ color: "#102A43", opacity: 1 }} transition={morphTransition} className="font-space-grotesk font-bold text-xl lg:text-2xl tracking-widest uppercase mt-2 lg:mt-3">STUDENT CHAPTER</motion.span>
                  <motion.div layoutId="acm-divider-horizontal" transition={morphTransition} className="w-16 lg:w-20 h-[3px] bg-brand-blue/50 my-5 rounded-full"></motion.div>
                  <motion.span layoutId="acm-location" initial={{ color: "rgba(255, 255, 255, 0.8)", opacity: 1 }} animate={{ color: "rgba(10, 17, 40, 0.8)", opacity: 1 }} transition={morphTransition} className="font-inter font-bold text-sm lg:text-base uppercase tracking-[0.4em]">VIT BHOPAL</motion.span>
                </motion.div>
             ) : (
               <div className="flex flex-col items-center lg:items-start lg:pl-10 lg:py-6 transform scale-100 origin-left relative opacity-0">
                  <span style={{ color: "#102A43" }} className="font-space-grotesk font-black text-5xl lg:text-[6rem] tracking-tighter leading-none">ACM</span>
                  <span style={{ color: "#102A43" }} className="font-space-grotesk font-bold text-xl lg:text-2xl tracking-widest uppercase mt-2 lg:mt-3">STUDENT CHAPTER</span>
                  <div className="w-16 lg:w-20 h-[3px] bg-brand-blue/50 my-5 rounded-full"></div>
                  <span style={{ color: "rgba(10, 17, 40, 0.8)" }} className="font-inter font-bold text-sm lg:text-base uppercase tracking-[0.4em]">VIT BHOPAL</span>
               </div>
             )}

          </div>

        </div>
      </section>
    </>
  );
}
