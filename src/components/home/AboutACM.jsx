"use client";
import { useRef } from "react";
import { Card } from "@/components/ui/Card";
import { motion, useScroll, useTransform } from "framer-motion";

export function AboutACM() {
  const containerRef = useRef(null);
  
  // Parallax scroll setup
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // The white card floats UP (-50px) as you scroll down
  const cardY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  // The blue decorative square floats DOWN (+40px) as you scroll down
  const squareY = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  // Premium text reveal animation
  const textRevealVariants = {
    hidden: { y: "100%", opacity: 0, rotateZ: 2 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      rotateZ: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1], // Apple-like custom ease
      },
    }),
  };

  return (
    <section ref={containerRef} className="py-32 bg-brand-navy relative z-30 border-b-[3px] border-brand-navy rounded-b-[3rem] -mb-[3rem] overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className="flex-1">
            <h2 className="text-6xl md:text-[5.5rem] font-black leading-[0.9] mb-8 text-brand-light-blue flex flex-col">
              <span className="overflow-hidden pb-2">
                <motion.span 
                  custom={0}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={textRevealVariants}
                  className="inline-block origin-left"
                >
                  Not just another
                </motion.span>
              </span>
              <span className="overflow-hidden pt-1 pb-2">
                <motion.span 
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-100px" }}
                  variants={textRevealVariants}
                  className="inline-block origin-left text-white"
                >
                  college club.
                </motion.span>
              </span>
            </h2>
            
            <div className="overflow-hidden">
              <motion.p 
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={textRevealVariants}
                className="text-xl md:text-2xl font-bold font-inter text-brand-light-blue/80 max-w-xl"
              >
                We are the central nervous system for tech culture at VIT Bhopal. 
              </motion.p>
            </div>
          </div>

          <div className="flex-1 w-full max-w-xl relative mt-12 lg:mt-0">
            {/* Background decorative square (Parallax Down) */}
            <motion.div 
              style={{ y: squareY }}
              className="absolute inset-0 bg-brand-blue rounded-3xl transform translate-x-4 translate-y-4"
            ></motion.div>
            
            {/* Main Card (Parallax Up) */}
            <motion.div style={{ y: cardY }} className="relative z-10">
              <Card color="white" className="border-0 rotate-1 shadow-2xl">
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
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
