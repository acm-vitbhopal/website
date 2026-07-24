import { cn } from "@/lib/utils";

export function Button({ 
  children, 
  className, 
  variant = "primary", 
  size = "md", 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-space-grotesk font-bold brutal-border brutal-shadow rounded-full transition-all duration-200 active:shadow-none active:translate-x-[6px] active:translate-y-[6px]";
  
  const variants = {
    primary: "bg-brand-pink text-white",
    secondary: "bg-brand-yellow text-brand-black",
    outline: "bg-transparent text-brand-black",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-8 py-3 text-base md:text-lg",
    lg: "px-10 py-4 text-xl md:text-2xl",
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
