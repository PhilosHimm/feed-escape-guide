
import React, { useState, useEffect } from "react";

const navList = [
  { id: "home", label: "Home" },
  { id: "algorithms", label: "Algorithms" },
  { id: "misinformation", label: "Misinformation" },
  { id: "mental-health", label: "Mental Health" },
  { id: "privacy", label: "Privacy" },
  { id: "digital-balance", label: "Digital Balance" },
  { id: "about", label: "About Us" },
  { id: "sources", label: "Sources" },
];

const NavBar = () => {
  const [activeId, setActiveId] = useState("home");

  // Highlight nav based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Find the section closest to top
      let closest = "home";
      let minDist = Infinity;
      navList.forEach(item => {
        const el = document.getElementById(item.id);
        if (el) {
          const dist = Math.abs(el.getBoundingClientRect().top - 80); // header offset
          if (dist < minDist) {
            minDist = dist;
            closest = item.id;
          }
        }
      });
      setActiveId(closest);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveId(id);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-purpleblue-100 shadow px-4 py-2 md:py-0">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <span className="font-playfair font-bold tracking-wide text-2xl md:text-3xl text-purpleblue-600 select-none">Trapped in the Feed</span>
        <ul className="flex items-center gap-2 md:gap-6">
          {navList.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={e => handleNav(e, item.id)}
                className={`
                  px-2 py-1 text-base md:text-lg font-semibold transition 
                  border-b-2 border-transparent hover:border-purpleblue-500 hover:text-purpleblue-600
                  ${activeId === item.id ? "border-purpleblue-600 text-purpleblue-600" : "text-muted-foreground"}
                `}
                style={{ fontFamily: 'Inter, sans-serif' }}
                aria-label={item.label}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
