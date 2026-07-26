import { motion } from "framer-motion";

export function RecordSleeve({ layoutId, className }) {
  return (
    <motion.div
      layoutId={layoutId}
      className={`relative bg-brand-cyan brutal-border brutal-shadow rounded-2xl flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Rotating Vinyl Text */}
      <div className="absolute inset-2">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_10s_linear_infinite]">
          <path 
            id="circlePath" 
            d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" 
            fill="transparent" 
          />
          <text className="font-space-grotesk font-black text-[8.5px] uppercase fill-brand-black">
            <textPath href="#circlePath" startOffset="0%">
              VIT Bhopal ACM Student Chapter • VIT Bhopal ACM Student Chapter • 
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center ACM Logo */}
      <div className="z-10 bg-brand-yellow w-1/2 h-1/2 rounded-full brutal-border flex items-center justify-center">
        <span className="font-space-grotesk font-black text-2xl tracking-tighter">
          ACM<span className="text-brand-pink">.</span>
        </span>
      </div>
    </motion.div>
  );
}
