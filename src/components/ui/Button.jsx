"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef } from "react";

export function Button({ 
  children, 
  className, 
  variant = "primary", 
  size = "md", 
  ...props 
}) {
  const ref = useRef(null);
  
  // Motion values for the magnetic pull
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Smooth out the movement using spring physics
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    // Pull the button towards the cursor (max pull distance is 20% of its size)
    const pullX = (clientX - centerX) * 0.2;
    const pullY = (clientY - centerY) * 0.2;
    
    x.set(pullX);
    y.set(pullY);
  };

  const handleMouseLeave = () => {
    // Snap back to center
    x.set(0);
    y.set(0);
  };

  const baseStyles = "inline-flex items-center justify-center font-space-grotesk font-bold rounded-full transition-colors duration-200 cursor-pointer outline-none";
  
  const variants = {
    primary: "bg-brand-pink text-white",
    secondary: "bg-brand-yellow text-brand-black",
    outline: "bg-white text-brand-black", // Fixed outline background
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-8 py-3 text-base md:text-lg",
    lg: "px-10 py-4 text-xl md:text-2xl",
  };

  return (
    <div 
      className="relative inline-block" 
      ref={ref} 
      onMouseMove={handleMouseMove} 
      onMouseLeave={handleMouseLeave}
    >
      {/* Fixed Shadow/Backdrop Layer */}
      <div className="absolute inset-0 rounded-full border-[3px] border-brand-black bg-brand-black translate-x-[6px] translate-y-[6px]"></div>

      {/* Moving Button Layer */}
      <motion.button 
        style={{ x: springX, y: springY }}
        whileTap={{ x: 6, y: 6 }}
        className={cn(
          baseStyles, 
          variants[variant], 
          sizes[size], 
          "relative z-10 border-[3px] border-brand-black", 
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    </div>
  );
}
