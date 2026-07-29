import { cn } from "@/lib/utils";

export function Card({ children, className, color = "white", ...props }) {
  const colors = {
    navy: "bg-brand-navy text-white",
    blue: "bg-brand-blue text-white",
    light: "bg-brand-light-blue text-brand-navy",
    white: "bg-brand-off-white text-brand-navy",
  };

  return (
    <div 
      className={cn(
        "rounded-3xl brutal-border p-8 md:p-10 flex flex-col transition-transform hover:-translate-y-2 bg-white brutal-shadow",
        colors[color],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
