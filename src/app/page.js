"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Hold the loading screen for 1.2 seconds before transitioning
    const timer = setTimeout(() => setIsLoaded(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    { icon: "🏆", text: "Hackathons & competitions" },
    { icon: "🤝", text: "Industry networking" },
    { icon: "🔬", text: "Research opportunities" },
    { icon: "🎟️", text: "Exclusive events" },
    { icon: "👥", text: "Mentorship & guidance" },
    { icon: "📚", text: "ACM Digital Library" },
  ];

  const { scrollYProgress } = useScroll();
  const marqueeX = useTransform(scrollYProgress, [0, 1], [0, -1000]);

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

  // Framer Motion Variants for the Pinboard Drop
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardDropVariants = {
    hidden: { y: -150, opacity: 0, scale: 0.8 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 150, 
        damping: 12,
        mass: 1.2
      } 
    },
  };

  // The custom cinematic easing curve
  const premiumEase = [0.76, 0, 0.24, 1];

  return (
    <div className="flex flex-col relative bg-brand-yellow min-h-screen">
      <AnimatePresence>
        {!isLoaded && (
          <motion.div 
            key="loader"
            className="fixed inset-0 z-[100] bg-brand-yellow flex flex-col items-center justify-center"
            // The loader background fades out smoothly while the text layoutId takes over
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-yellow pb-20 pt-32 lg:pb-0 lg:pt-24 border-b-[3px] border-brand-black rounded-b-[3rem] -mb-[3rem] z-40 min-h-[95vh] flex flex-col justify-center">
        
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Main Lighter Layer */}
          <svg className="absolute bottom-0 left-0 w-[200%] md:w-full h-auto min-h-[70vh] text-white opacity-25" viewBox="0 0 1440 600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,150 C250,550 550,50 950,250 C1200,350 1440,100 1440,100 L1440,600 L0,600 Z" />
          </svg>
          {/* Secondary Darker Layer */}
          <svg className="absolute -bottom-10 right-0 w-[150%] md:w-[80%] h-auto min-h-[40vh] text-black opacity-[0.06]" viewBox="0 0 1440 400" fill="currentColor" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0,400 C300,100 600,200 800,100 C1100,-50 1440,200 1440,200 L1440,400 Z" />
          </svg>
        </div>

        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12 mt-8 md:mt-0 relative z-10">
          
          {/* Left Side: Staggered Content */}
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
              {/* Thick Marker Draw Animation */}
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

          {/* Right Side: Identity Block Resting State */}
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

        {/* Scroll-Speed Marquee */}
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

      {/* What is ACM Section */}
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

      {/* Featured Event Section */}
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

      {/* Past Projects Section */}
      <section className="pt-40 pb-40 bg-brand-pink relative z-10 border-b-[3px] border-brand-black rounded-b-[3rem] -mb-[3rem]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center mb-24 text-center">
            <h2 className="text-6xl md:text-8xl font-black mb-4 text-white">Shipped.</h2>
            <p className="text-2xl font-bold font-inter text-brand-black transform -rotate-1">
              Projects built by our members
            </p>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-8 max-w-6xl mx-auto"
          >
            
            {/* Project 1 */}
            <motion.div variants={cardDropVariants} className="relative w-full max-w-sm transform -rotate-3 hover:rotate-0 transition-transform z-10 hover:z-30">
              {/* Tape */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#e6ddc5] border-[3px] border-brand-black shadow-[2px_2px_0px_0px_#111] rotate-2 z-20"></div>
              {/* Polaroid Card */}
              <div className="bg-white p-6 pb-12 brutal-border brutal-shadow rounded-xl">
                <div className="w-full aspect-video bg-brand-cyan brutal-border mb-6 flex items-center justify-center">
                   <span className="text-6xl">🌐</span>
                </div>
                <h3 className="text-3xl font-black font-space-grotesk mb-2">ACM Portal</h3>
                <p className="font-bold font-inter text-gray-700">The central hub for all member activities, built with Next.js.</p>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div variants={cardDropVariants} className="relative w-full max-w-sm transform rotate-6 hover:-rotate-2 transition-transform z-20 hover:z-30 mt-0 md:mt-12">
              {/* Tape */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#e6ddc5] border-[3px] border-brand-black shadow-[2px_2px_0px_0px_#111] -rotate-3 z-20"></div>
              {/* Polaroid Card */}
              <div className="bg-brand-yellow p-6 pb-12 brutal-border brutal-shadow rounded-xl">
                <div className="w-full aspect-video bg-white brutal-border mb-6 flex items-center justify-center">
                   <span className="text-6xl">📱</span>
                </div>
                <h3 className="text-3xl font-black font-space-grotesk mb-2">Campus Map</h3>
                <p className="font-bold font-inter text-brand-black/80">Interactive 3D map of VIT Bhopal campus to help freshers navigate.</p>
              </div>
            </motion.div>

            {/* Project 3 */}
            <motion.div variants={cardDropVariants} className="relative w-full max-w-sm transform -rotate-2 hover:rotate-2 transition-transform z-10 hover:z-30 mt-0 md:-mt-8">
              {/* Tape */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-[#e6ddc5] border-[3px] border-brand-black shadow-[2px_2px_0px_0px_#111] rotate-4 z-20"></div>
              {/* Polaroid Card */}
              <div className="bg-white p-6 pb-12 brutal-border brutal-shadow rounded-xl">
                <div className="w-full aspect-video bg-brand-purple brutal-border mb-6 flex items-center justify-center">
                   <span className="text-6xl">🤖</span>
                </div>
                <h3 className="text-3xl font-black font-space-grotesk mb-2">Discord Bot</h3>
                <p className="font-bold font-inter text-gray-700">Open-source bot that manages our 2,000+ member server.</p>
              </div>
            </motion.div>

          </motion.div>
          
          <div className="mt-20 text-center relative z-20">
             <Button variant="outline" className="bg-white hover:bg-brand-yellow">View all projects</Button>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="pt-32 pb-24 bg-bg-light rounded-t-[3rem] z-0 relative">
        <div className="container mx-auto px-4 pt-12">
          <div className="flex flex-col items-center mb-20 text-center">
            <h2 className="text-6xl md:text-8xl font-black mb-4">How it works</h2>
            <p className="text-2xl font-bold font-inter text-brand-purple transform -rotate-2">
              Your journey into tech starts here
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 max-w-6xl mx-auto">
            <Card color="cyan" className="transform md:rotate-[-2deg] md:translate-y-8 z-10">
              <span className="font-space-grotesk font-black text-xl mb-8 text-center block">Step #1</span>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-none mt-auto">Learn new skills</h3>
              <p className="font-bold text-lg leading-tight">
                From web development to AI, we host workshops that take you from zero to one.
              </p>
            </Card>
            
            <Card color="pink" className="transform md:rotate-[1deg] md:-translate-y-4 z-20 shadow-xl">
              <span className="font-space-grotesk font-black text-xl mb-8 text-center block">Step #2</span>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-none mt-auto">Build your project</h3>
              <p className="font-bold text-lg leading-tight">
                Apply your knowledge by building real-world projects in our hackathons.
              </p>
            </Card>

            <Card color="yellow" className="transform md:rotate-[3deg] md:translate-y-12 z-30 shadow-xl">
              <span className="font-space-grotesk font-black text-xl mb-8 text-center block">Step #3</span>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-none mt-auto">Check your network</h3>
              <p className="font-bold text-lg leading-tight">
                Join a community of like-minded builders. Network with seniors and alumni.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section className="pt-32 pb-40 bg-brand-yellow relative z-0 border-t-[3px] border-brand-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl md:text-8xl font-black mb-6">Join Our Ranks!</h2>
          <p className="text-xl md:text-2xl font-bold font-inter text-brand-black/80 max-w-3xl mx-auto mb-16">
            Step into a thriving tech community where ideas turn into impact. As a member of ACM Student Chapter VIT Bhopal, you'll gain hands-on experience, expand your network, and unlock opportunities designed to accelerate your journey in technology.
          </p>
          
          {/* Infinite Marquee of Benefits */}
          <div className="relative w-full overflow-hidden flex mb-20 py-4">
             {/* Gradient Masks for smooth fade on edges */}
             <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-brand-yellow to-transparent z-10 pointer-events-none"></div>
             <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-brand-yellow to-transparent z-10 pointer-events-none"></div>
             
             <motion.div 
                animate={{ x: ["0%", "-50%"] }} 
                transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                className="flex gap-6 w-max"
             >
                {/* We double the content to make it infinite */}
                {[...benefits, ...benefits, ...benefits].map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3 bg-brand-yellow border-[3px] border-brand-black shadow-[4px_4px_0px_0px_#111] px-6 py-3 rounded-full font-bold font-inter text-lg md:text-xl transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#111] transition-all cursor-default">
                    <span className="opacity-70">{benefit.icon}</span> <span>{benefit.text}</span>
                  </div>
                ))}
             </motion.div>
          </div>

          <div className="flex justify-center">
            <Button variant="primary" size="lg" className="bg-brand-black text-brand-yellow hover:text-white hover:bg-gray-900 border-[3px] border-brand-black text-xl px-12 py-5 uppercase tracking-widest">
              Apply for Membership
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}