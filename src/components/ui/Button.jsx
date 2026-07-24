import { cn } from "@/lib/utils";

export function Button({ 
  children, 
  className, 
  variant = "primary", 
  size = "md", 
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center font-space-grotesk font-bold brutal-border brutal-shadow transition-all duration-200 active:shadow-none active:translate-x-[4px] active:translate-y-[4px]";
  
  const variants = {
    primary: "bg-brand-blue text-white",
    secondary: "bg-brand-yellow text-brand-black",
    outline: "bg-transparent text-brand-black",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg md:text-xl",
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
