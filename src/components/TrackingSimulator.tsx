
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "You visit a website",
    detail: "Websites start tracking as soon as you arrive.",
  },
  {
    title: "Accept cookies",
    detail: "Cookies store your activity—sites love when you accept everything.",
  },
  {
    title: "Tracked across the web",
    detail: "Trackers follow you to other sites, aggregating data to build your digital profile.",
  },
  {
    title: "Targeted ad appears",
    detail: "Suddenly, what you viewed shows up as an ad everywhere!",
  },
];

const TrackingSimulator = () => {
  const [current, setCurrent] = useState(0);

  return (
    <div className="w-full max-w-lg mx-auto bg-purpleblue-50 rounded-xl shadow-lg p-6 flex flex-col gap-3">
      <div className="font-bold text-lg text-purpleblue-700 mb-2 flex items-center gap-2">
        Web Tracking Simulator
      </div>
      <div className="mb-4">
        <div className="rounded-lg bg-white border border-purpleblue-100 p-4 min-h-20 flex items-center gap-4">
          <span className="text-3xl">{["🌐", "🍪", "👀", "🎯"][current]}</span>
          <div>
            <div className="font-semibold text-base">{steps[current].title}</div>
            <div className="text-sm text-purpleblue-600">{steps[current].detail}</div>
          </div>
        </div>
      </div>
      <div className="flex gap-3 justify-end">
        <button
          className="px-4 py-1 rounded bg-purpleblue-700 text-white font-medium hover:bg-purpleblue-600 transition"
          onClick={() => setCurrent((c) => (c + 1) % steps.length)}
        >
          {current === steps.length - 1 ? "Restart" : "Next"}
          <ArrowRight className="inline ml-1 -mt-1" size={18} />
        </button>
      </div>
      <div className="text-xs text-purpleblue-600 mt-2">
        Each step, your data profile grows. Try <a href="https://privacybadger.org" className="underline" target="_blank" rel="noopener noreferrer">Privacy Badger</a> or <a href="https://duckduckgo.com" className="underline" target="_blank" rel="noopener noreferrer">DuckDuckGo</a> to help reduce tracking!
      </div>
    </div>
  );
};

export default TrackingSimulator;
