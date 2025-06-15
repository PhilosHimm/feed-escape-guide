
import React from "react";
import { Link, useLocation } from "react-router-dom";

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

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur border-b border-purpleblue-100 shadow px-4 py-1 md:py-0">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <span className="font-playfair font-bold tracking-wide text-2xl md:text-3xl text-purpleblue-700 select-none">
          Trapped in the Feed
        </span>
        <ul className="flex items-center gap-2 md:gap-6">
          {navList.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`
                  px-2 py-1 text-base md:text-lg font-semibold transition 
                  border-b-2 border-transparent hover:border-purpleblue-400 hover:text-purpleblue-700
                  ${location.pathname === item.path ? "border-purpleblue-700 text-purpleblue-700" : "text-muted-foreground"}
                  font-playfair
                `}
                style={{ fontFamily: 'Playfair Display, serif' }}
                aria-label={item.label}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
