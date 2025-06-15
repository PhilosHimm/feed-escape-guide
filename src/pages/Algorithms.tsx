
import React from "react";

const Algorithms = () => (
  <div className="py-12 px-4 max-w-4xl mx-auto">
    <h1 className="font-playfair text-4xl md:text-5xl font-bold text-purpleblue-700 mb-4">
      Why You Keep Scrolling
    </h1>
    <p className="text-xl text-muted-foreground mb-7">
      Social media feeds are powered by complex algorithms that track everything you do — likes, shares, watches — to keep you engaged. These engagement loops are designed to constantly deliver content that keeps you scrolling, often with little regard for your wellbeing.
    </p>

    <div className="bg-gradient-to-br from-purpleblue-50/70 via-purpleblue-50/60 to-purpleblue-100/80 rounded-lg shadow p-5 mb-7">
      <img
        src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=500&q=80"
        alt="Algorithm flowchart"
        className="rounded-xl border-2 border-purpleblue-100 w-full max-w-sm mx-auto mb-4"
      />
      <ol className="list-decimal ml-5 space-y-2 text-lg">
        <li><span className="font-semibold text-purpleblue-700">You scroll:</span> The feed never ends.</li>
        <li><span className="font-semibold text-purpleblue-700">Platform tracks your actions:</span> Clicks, likes, comments, watch time, shares.</li>
        <li><span className="font-semibold text-purpleblue-700">Algorithm learns your interests:</span> More of similar content is served to you.</li>
        <li><span className="font-semibold text-purpleblue-700">You stay longer:</span> The loop continues.</li>
      </ol>
    </div>
    <div className="bg-purpleblue-50 border-l-4 border-purpleblue-500 p-4 rounded shadow-sm mb-5">
      <strong>Tip:</strong> Reset your feed every so often. Clear your watch and search history. Follow a few new, diverse accounts to see different content and break the algorithmic bubble!
    </div>
    <div className="mt-4 space-x-4">
      <a href="https://www.humanetech.com/" className="underline text-purpleblue-600" target="_blank" rel="noopener noreferrer">Center for Humane Tech</a>
      <a href="https://www.humane.tech/module5" className="underline text-purpleblue-600" target="_blank" rel="noopener noreferrer">Module 5 Course Reading</a>
    </div>
  </div>
);

export default Algorithms;
