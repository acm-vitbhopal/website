import { forwardRef } from "react";

export const Input = forwardRef(({ className = "", ...props }, ref) => {
  return (
    <input 
      ref={ref}
      className={`w-full px-4 py-3 bg-white border-[3px] border-brand-navy shadow-sm focus:shadow-md focus:translate-y-[-2px] font-inter text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all duration-200 rounded-xl ${className}`}
      {...props}
    />
  );
});

Input.displayName = "Input";
