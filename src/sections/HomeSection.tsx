
import React from "react";

const HomeSection = () => {
  return (
    <section id="home" className="flex flex-col md:flex-row items-center justify-center min-h-[60vh] bg-gradient-to-br from-purpleblue-100 via-purpleblue-50 to-white py-12 md:py-20 border-b border-purpleblue-50">
      <div className="md:w-1/2 w-full flex flex-col items-center md:items-start justify-center px-4 md:px-8">
        <h1 className="text-4xl md:text-5xl font-extrabold font-inter tracking-tight text-purpleblue-600 mb-2 drop-shadow">
          Trapped in the Feed
        </h1>
        <h2 className="text-xl md:text-2xl font-roboto mb-6 font-thin text-purpleblue-600/90">
          How your social media feed is shaping what you see, think, and feel.
        </h2>
        <a href="#algorithms" className="mt-4 px-6 py-3 rounded-full bg-purpleblue-500 hover:bg-purpleblue-600 text-white font-semibold text-lg shadow-lg transition story-link">
          🚀 Enter the Feed
        </a>
      </div>
      <div className="md:w-1/2 w-full flex items-center justify-center mt-8 md:mt-0 px-8">
        <img
          src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
          alt="Glitchy phone feed illustration"
          className="rounded-2xl w-full max-w-xs shadow-2xl border-4 border-white"
          style={{ filter: "contrast(1.1) grayscale(0.2)" }}
        />
      </div>
    </section>
  );
};

export default HomeSection;
