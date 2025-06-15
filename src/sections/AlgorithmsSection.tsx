import React from "react";

const AlgorithmsSection = () => {
  return (
    <section id="algorithms" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2 text-purpleblue-600 flex items-center gap-2">
          Why You Keep Scrolling
        </h2>
        <p className="text-lg text-muted-foreground mb-5">
          Algorithms shape what you see by showing more of what you <span className="font-semibold text-purpleblue-500">like, watch, and share</span>. The more you interact, the more the app learns about you—keeping you “trapped” in the feed.
        </p>
        <div className="rounded-lg shadow bg-gradient-to-br from-purpleblue-50/70 via-purpleblue-50/60 to-purpleblue-100/80 p-6 my-6 flex flex-col md:flex-row items-center gap-6">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
            alt="Abstract digital algorithm diagram"
            className="rounded-2xl w-52 h-52 object-cover border-2 border-purpleblue-100"
          />
          <div className="flex-1">
            <div className="flex flex-col gap-2">
              <div className="text-base font-semibold mb-1">How it works:</div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="rounded-full bg-purpleblue-200 px-3 py-1 text-sm font-medium">You scroll</span>
                <span>→</span>
                <span className="rounded-full bg-purpleblue-50 px-3 py-1 text-sm">App tracks actions</span>
                <span>→</span>
                <span className="rounded-full bg-purpleblue-200 px-3 py-1 text-sm">Algo shows more</span>
                <span>→</span>
                <span className="rounded-full bg-purpleblue-100 px-3 py-1 text-sm">You keep scrolling 👀</span>
              </div>
            </div>
            <div className="mt-4 bg-purpleblue-50 border-l-4 border-purpleblue-500 p-3 rounded shadow-sm">
              <strong className="text-purpleblue-600">Tip:</strong> Reset your feed! Clear your watch/search history or follow new accounts to break the loop.
            </div>
            <div className="mt-2 text-sm text-purpleblue-600">
              <a href="https://www.humanetech.com/" className="underline" target="_blank" rel="noopener noreferrer">Center for Humane Tech</a>
              {" · "}
              <a href="https://www.humane.tech/module5" className="underline" target="_blank" rel="noopener noreferrer">Course Reading</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlgorithmsSection;
