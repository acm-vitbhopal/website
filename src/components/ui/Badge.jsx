export function Badge({ children, color = "navy", className = "" }) {
  const colorStyles = {
    navy: "bg-brand-navy text-white",
    blue: "bg-brand-blue text-white",
    light: "bg-brand-light-blue text-brand-navy",
    white: "bg-brand-off-white text-brand-navy border-brand-navy",
  };

  const selectedColor = colorStyles[color] || colorStyles.navy;

  return (
    <span 
      className={`inline-block px-3 py-1 text-xs md:text-sm font-bold font-space-grotesk uppercase tracking-widest border-2 border-brand-navy shadow-sm rounded-full ${selectedColor} ${className}`}
    >
      {children}
    </span>
  );
}
