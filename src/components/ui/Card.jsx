import { cn } from "@/lib/utils";

export function Card({ children, className, color = "cyan", ...props }) {
  const colors = {
    cyan: "bg-brand-cyan text-brand-black",
    yellow: "bg-brand-yellow text-brand-black",
    pink: "bg-brand-pink text-white",
    purple: "bg-brand-purple text-white",
    white: "bg-white text-brand-black",
  };

  return (
    <div 
      className={cn(
        "rounded-3xl brutal-border p-8 md:p-10 flex flex-col transition-transform hover:-translate-y-2",
        colors[color],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
