import { cn } from "@/lib/utils";

export function Card({ children, className, color = "blue", ...props }) {
  const colors = {
    blue: "bg-brand-blue",
    yellow: "bg-brand-yellow",
    purple: "bg-brand-purple",
    white: "bg-white",
  };

  return (
    <div 
      className={cn(
        "rounded-xl brutal-border brutal-shadow p-6 md:p-8 flex flex-col",
        colors[color],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
