
import React from "react";
import { useNavigate } from "react-router-dom";

const sections = [
  {
    name: "Algorithms",
    route: "/algorithms",
    description: "See how platforms shape what you scroll and why it's so hard to stop.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Misinformation",
    route: "/misinformation",
    description: "Test your skills at spotting fake news, and discover the filter bubbles around you.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=420&q=80",
  },
  {
    name: "Mental Health",
    route: "/mental-health",
    description: "Explore how feeds affect mood and learn strategies for better digital wellness.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=420&q=80",
  },
  {
    name: "Privacy",
    route: "/privacy",
    description: "Discover what apps know about you, ad tracking, and privacy tools you can use.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Digital Balance",
    route: "/digital-balance",
    description: "Reclaim your time with digital balance tips, apps, and a 24hr detox challenge.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "About Us",
    route: "/about",
    description: "Meet the CEID100 team at TMU driving this guide on digital wellbeing.",
    image: "",
  },
  {
    name: "Sources",
    route: "/sources",
    description: "References and image credits used throughout this guide.",
    image: "",
  },
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-purpleblue-100 via-purpleblue-50 to-white min-h-screen font-inter pb-10">
      <main className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <div className="w-full text-center mt-12">
          <h1 className="text-5xl md:text-6xl font-extrabold font-playfair tracking-tight text-purpleblue-700 mb-3 drop-shadow">
            Trapped in the Feed
          </h1>
          <h2 className="text-2xl font-playfair font-medium text-purpleblue-600/90 mb-8">
            How your social media feed is shaping what you see, think, and feel.
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full mt-10">
          {sections.map((section, idx) => (
            <div
              key={section.name}
              className="group bg-white/60 shadow-xl rounded-3xl border border-purpleblue-50 p-6 flex flex-col items-center transition hover:scale-[1.025] hover:shadow-2xl cursor-pointer"
              onClick={() => navigate(section.route)}
              tabIndex={0}
              aria-label={`Go to ${section.name}`}
              onKeyDown={e => { if (e.key === "Enter") navigate(section.route); }}
            >
              {section.image &&
                <img
                  src={section.image}
                  alt={`${section.name} section card`}
                  className="rounded-2xl w-full max-w-xs h-44 object-cover mb-4 shadow-md border border-purpleblue-100"
                />
              }
              <div className="w-full">
                <h3 className="font-playfair font-bold text-2xl text-purpleblue-700 mb-2">
                  {section.name}
                </h3>
                <p className="text-base text-muted-foreground mb-3 min-h-16">
                  {section.description}
                </p>
              </div>
              <button className="mt-auto px-5 py-2 rounded-full bg-purpleblue-700 hover:bg-purpleblue-600 text-white font-medium text-lg shadow transition">
                Go
              </button>
            </div>
          ))}
        </div>
        <div className="mt-16 text-xs text-muted-foreground text-center w-full">
          &copy; 2025 TMU CEID100 · Trapped in the Feed — <a href="/about" className="underline px-1">About Us</a>
        </div>
      </main>
    </div>
  );
};

export default Index;
