import { forwardRef } from "react";

export const Textarea = forwardRef(({ className = "", ...props }, ref) => {
  return (
    <textarea 
      ref={ref}
      className={`w-full px-4 py-3 bg-white border-[3px] border-brand-navy shadow-sm focus:shadow-md focus:translate-y-[-2px] font-inter text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 min-h-[120px] resize-y transition-all duration-200 rounded-xl ${className}`}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";
