import React from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: "md" | "lg";
  className?: string;
}

export default function MagneticButton({ children, onClick, size = "md", className = "" }: MagneticButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative group overflow-hidden bg-[#E63B2E] text-[#F5F3EE] rounded-full font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 ${
        size === "lg" ? "px-10 py-5 text-lg" : "px-6 py-2.5 text-xs"
      } ${className}`}
      style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
    >
      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      <span className="relative z-10 flex items-center justify-center">{children}</span>
    </button>
  );
}
