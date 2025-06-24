
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navList = [
  { path: "/", label: "Home" },
  { path: "/algorithms", label: "Algorithms" },
  { path: "/misinformation", label: "Misinformation" },
  { path: "/mental-health", label: "Mental Health" },
  { path: "/privacy", label: "Privacy" },
  { path: "/digital-balance", label: "Digital Balance" },
  { path: "/about", label: "About Us" },
  { path: "/sources", label: "Sources" },
];

const NavBar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                to="/"
                className="font-playfair font-bold text-2xl lg:text-3xl text-purpleblue-700 hover:text-purpleblue-600 transition-colors duration-200"
              >
                Trapped in the Feed
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navList.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      px-3 py-2 text-sm font-medium uppercase tracking-wider transition-all duration-200
                      hover:text-purpleblue-700 relative
                      ${location.pathname === item.path 
                        ? "text-purpleblue-700" 
                        : "text-gray-700 hover:text-purpleblue-600"
                      }
                    `}
                  >
                    {item.label}
                    {location.pathname === item.path && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purpleblue-700 transform origin-left"></span>
                    )}
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purpleblue-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purpleblue-500 transition-colors duration-200"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-200/50">
              {navList.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block px-3 py-2 text-base font-medium uppercase tracking-wider transition-colors duration-200
                    ${location.pathname === item.path
                      ? "text-purpleblue-700 bg-purpleblue-50"
                      : "text-gray-700 hover:text-purpleblue-700 hover:bg-gray-50"
                    }
                  `}
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
