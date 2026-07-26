import { forwardRef } from "react";

export const Input = forwardRef(({ className = "", ...props }, ref) => {
  return (
    <input 
      ref={ref}
      className={`w-full px-4 py-3 bg-white border-[3px] border-brand-black shadow-[4px_4px_0px_0px_#111] focus:shadow-[2px_2px_0px_0px_#111] focus:translate-x-[2px] focus:translate-y-[2px] font-inter text-brand-black placeholder:text-gray-400 focus:outline-none transition-all duration-200 ${className}`}
      {...props}
    />
  );
});

Input.displayName = "Input";
