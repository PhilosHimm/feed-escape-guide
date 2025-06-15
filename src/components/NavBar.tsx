
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { BookOpen, Shield, Users, Eye, Calendar, Check, Image } from "lucide-react";

const navList = [
  { id: "home", emoji: "🏠", label: "Home" },
  { id: "algorithms", emoji: "🔄", label: "Algorithms" },
  { id: "misinformation", emoji: "📰", label: "Misinformation" },
  { id: "mental-health", emoji: "💬", label: "Mental Health" },
  { id: "privacy", emoji: "🛡️", label: "Privacy" },
  { id: "digital-balance", emoji: "⏳", label: "Digital Balance" },
  { id: "about", emoji: "👥", label: "About Us" },
  { id: "sources", emoji: "📖", label: "Sources" },
];

const NavBar = () => {
  // Smooth scroll to anchor
  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-purpleblue-600 via-purpleblue-500 to-purpleblue-200 shadow-lg px-4 py-2 md:py-0">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <span className="font-bold text-white tracking-wide text-lg md:text-xl font-inter">Trapped in the Feed</span>
        <ul className="flex items-center gap-3 md:gap-5">
          {navList.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={e => handleNav(e, item.id)}
                className="flex items-center gap-1 px-2 py-1 font-semibold text-white hover:bg-purpleblue-100/20 rounded transition cursor-pointer text-base md:text-lg"
                aria-label={item.label}
              >
                <span aria-hidden="true">{item.emoji}</span>
                <span className="hidden md:inline">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
