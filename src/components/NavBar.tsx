
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import MagneticButton from "@/components/ui/magnetic-button";

const navItems = [
  { path: "/algorithms", label: "Algorithms" },
  { path: "/misinformation", label: "Misinformation" },
  { path: "/mental-health", label: "Mental Health" },
  { path: "/privacy", label: "Privacy" },
  { path: "/digital-balance", label: "Balance" },
  { path: "/about", label: "About" },
  { path: "/sources", label: "Sources" },
];

const NavBar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 md:hidden flex items-center justify-between h-12 bg-[#E8E4DD]/90 backdrop-blur-xl px-4 border-b border-[#111111]/10 font-['Space_Grotesk']">
        <Link to="/" className="font-bold tracking-tight uppercase text-sm text-[#111111]">
          Feed Escape
        </Link>
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label="Toggle menu"
          className="p-1 text-[#111111] hover:text-[#E63B2E] transition-colors"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="fixed top-12 left-0 right-0 z-40 md:hidden bg-[#E8E4DD]/95 backdrop-blur-xl border-b border-[#111111]/10 px-4 py-3 space-y-1 font-['Space_Grotesk']"
        >
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "block px-3 py-2 text-sm font-medium transition-colors rounded",
                location.pathname === item.path
                  ? "text-[#E63B2E] bg-[#111111]/5 font-semibold"
                  : "text-[#111111]/70 hover:text-[#E63B2E] hover:bg-[#111111]/5"
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/digital-navigator"
            onClick={() => setIsMobileMenuOpen(false)}
            className={cn(
              "block px-3 py-2 text-sm font-semibold transition-colors rounded hover:bg-[#111111]/5",
              location.pathname === "/digital-navigator"
                ? "text-[#E63B2E] bg-[#111111]/5"
                : "text-[#E63B2E]"
            )}
          >
            Initiate Quiz
          </Link>
        </div>
      )}

      {/* Desktop Floating Pill Bar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 hidden md:flex items-center gap-6 bg-[#E8E4DD]/80 backdrop-blur-xl px-6 py-3 rounded-full border border-[#111111]/10 shadow-lg transition-all duration-300 hover:border-[#E63B2E]/50 whitespace-nowrap font-['Space_Grotesk']">
        <Link to="/" className="font-bold tracking-tight uppercase text-sm text-[#111111]">
          Feed Escape
        </Link>
        <div className="flex gap-4 text-xs font-medium">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "hover:-translate-y-[1px] transition-all",
                location.pathname === item.path
                  ? "text-[#E63B2E] font-semibold"
                  : "text-[#111111]/70 hover:text-[#E63B2E]"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link to="/digital-navigator">
          <MagneticButton>Initiate Quiz</MagneticButton>
        </Link>
      </nav>
    </>
  );
};

export default NavBar;
