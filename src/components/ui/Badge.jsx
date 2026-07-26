export function Badge({ children, color = "yellow", className = "" }) {
  const colorStyles = {
    yellow: "bg-brand-yellow text-brand-black",
    pink: "bg-brand-pink text-white",
    cyan: "bg-brand-cyan text-brand-black",
    purple: "bg-brand-purple text-white",
    black: "bg-brand-black text-white",
    white: "bg-white text-brand-black"
  };

  const selectedColor = colorStyles[color] || colorStyles.yellow;

  return (
    <span 
      className={`inline-block px-3 py-1 text-xs md:text-sm font-bold font-space-grotesk uppercase tracking-widest border-2 border-brand-black shadow-[2px_2px_0px_0px_#111] ${selectedColor} ${className}`}
    >
      {children}
    </span>
  );
}
