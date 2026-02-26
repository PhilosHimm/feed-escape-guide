import React from "react";
import NavBar from "@/components/NavBar";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#F5F3EE] font-['Space_Grotesk'] text-[#111111] selection:bg-[#E63B2E] selection:text-white">
      {/* GLOBAL CSS NOISE OVERLAY */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-5 mix-blend-multiply">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
      <NavBar />
      <main className={className}>
        {children}
      </main>
    </div>
  );
}
