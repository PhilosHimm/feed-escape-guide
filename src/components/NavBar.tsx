
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navList = [
  { path: "/", label: "Home" },
  { path: "/algorithms", label: "Algorithms" },
  { path: "/misinformation", label: "Misinformation" },
  { path: "/mental-health", label: "Mental Health" },
  { path: "/privacy", label: "Privacy" },
  { path: "/digital-balance", label: "Digital Balance" },
  { path: "/digital-navigator", label: "Quiz" },
  { path: "/about", label: "About Us" },
  { path: "/sources", label: "Sources" },
];

const NavBar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-[#E8E4DD]/90 backdrop-blur-xl border-b border-[#111111]/10 font-['Space_Grotesk']">
        <div className="container flex h-14 items-center">
          {/* Logo */}
          <div className="mr-6 hidden md:flex shrink-0">
            <Link to="/" className="flex items-center">
              <span className="font-bold tracking-tight uppercase text-sm text-[#111111]">
                Feed Escape
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-5 text-xs font-medium hidden md:flex flex-1">
            {navList.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "transition-colors hover:text-[#E63B2E] whitespace-nowrap",
                  location.pathname === item.path
                    ? "text-[#E63B2E] font-semibold"
                    : "text-[#111111]/70"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="flex flex-1 items-center justify-between md:justify-end">
            <Link to="/" className="md:hidden font-bold tracking-tight uppercase text-sm text-[#111111]">
              Feed Escape
            </Link>
            <Button
              variant="ghost"
              className="md:hidden text-[#111111] hover:text-[#E63B2E]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div id="mobile-nav-menu" className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#E8E4DD] border-t border-[#111111]/10">
              {navList.map((item) => (
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
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;
