
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const sections = [
  {
    name: "Why You Keep Scrolling",
    route: "/algorithms",
    description: "Explore how algorithms deliver the feed that keeps you glued to your phone.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Real or Fake?",
    route: "/misinformation",
    description: "Test your digital detective skills: can you spot misinformation?",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=420&q=80",
  },
  {
    name: "My Feed, My Mood",
    route: "/mental-health",
    description: "Reflect on the mental health impact of endless scrolling.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=420&q=80",
  },
  {
    name: "What They Know About You",
    route: "/privacy",
    description: "See how your data is tracked and shared across the web.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Take Back Your Time",
    route: "/digital-balance",
    description: "Tools and tricks for a healthier relationship with your devices.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
  }
];

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-purpleblue-100 via-purpleblue-50 to-white min-h-screen font-inter pb-10">
      <main className="max-w-6xl mx-auto px-4 flex flex-col items-center">
        <header className="w-full text-center mt-12 mb-10">
          <h1 className="text-5xl md:text-6xl font-extrabold font-playfair tracking-tight text-purpleblue-700 mb-3 drop-shadow">
            Trapped in the Feed
          </h1>
          <h2 className="text-2xl font-playfair text-purpleblue-600/90 mb-6">
            How Social Media Shapes What You See, Think, and Feel
          </h2>
          <div className="text-xl font-playfair text-muted-foreground mb-8 animate-fade-in">
            Ever wonder why your feed knows you better than your friends?
          </div>
          <button
            className="px-8 py-3 rounded-full bg-purpleblue-700 hover:bg-purpleblue-600 text-white font-bold text-lg shadow transition animate-enter"
            onClick={() => navigate("/algorithms")}
          >
            Explore the Feed
            <ArrowRight className="ml-2 inline -mt-1" size={22} />
          </button>
        </header>
        <div className="grid auto-rows-fr grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full mt-8">
          {sections.map((section, idx) => (
            <div
              key={section.name}
              className="group relative bg-white/80 shadow-2xl rounded-3xl border border-purpleblue-100 p-0 flex flex-col items-center cursor-pointer hover-scale transition"
              onClick={() => navigate(section.route)}
              tabIndex={0}
              aria-label={`Go to ${section.name}`}
              onKeyDown={e => { if (e.key === "Enter") navigate(section.route); }}
            >
              <img
                src={section.image}
                alt={`${section.name} section card`}
                className="rounded-t-3xl w-full h-44 object-cover shadow-md"
              />
              <div className="w-full p-6 flex flex-col flex-1">
                <h3 className="font-playfair font-bold text-2xl text-purpleblue-700 mb-2">
                  {section.name}
                </h3>
                <p className="text-base text-muted-foreground mb-4 min-h-16">
                  {section.description}
                </p>
                <span className="mt-auto flex items-center gap-1 text-purpleblue-700 font-semibold group-hover:underline transition">
                  Start
                  <ArrowRight className="inline -mt-1" size={18} />
                </span>
              </div>
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
