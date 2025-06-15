
import React, { useState } from "react";
import { ArrowRight, Info } from "lucide-react";

const steps = [
  {
    label: "You Like or Scroll",
    details: "Every scroll, like, or comment is tracked by the platform.",
    icon: "👍",
  },
  {
    label: "Algorithm Analyzes",
    details: "Algorithms process your activity to learn what grabs your attention.",
    icon: "🧠",
  },
  {
    label: "Similar Posts Delivered",
    details: "You get more posts like what you engaged with.",
    icon: "🔄",
  },
  {
    label: "You Engage Again",
    details: "The more you interact, the deeper the feed loop becomes.",
    icon: "🔁",
  },
];

const AnimatedFlowchart = () => {
  const [show, setShow] = useState<number | null>(null);

  return (
    <div className="flex flex-col items-center gap-6 animate-fade-in mt-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative">
        {steps.map((step, idx) => (
          <React.Fragment key={step.label}>
            <div
              className={`group bg-purpleblue-50 border border-purpleblue-100 rounded-2xl px-7 py-6 flex flex-col items-center shadow-lg cursor-pointer relative transition hover:scale-105`}
              onMouseEnter={() => setShow(idx)}
              onMouseLeave={() => setShow(null)}
              tabIndex={0}
              aria-label={step.label}
              onFocus={() => setShow(idx)}
              onBlur={() => setShow(null)}
            >
              <span className="text-3xl mb-2">{step.icon}</span>
              <div className="font-bold text-purpleblue-700 font-playfair mb-1">{step.label}</div>
              {show === idx && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 z-10 bg-white border border-purpleblue-100 rounded-lg shadow p-3 w-64 text-sm animate-fade-in">
                  <Info className="inline mr-2 text-purpleblue-500" size={16} />
                  {step.details}
                </div>
              )}
            </div>
            {idx < steps.length - 1 && (
              <ArrowRight className="text-purpleblue-400 mx-3 my-2 animate-slide-in-right" size={32} />
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-2 text-purpleblue-600 text-sm font-medium">
        Your activity shapes your entire experience—be mindful of what you click!
      </div>
    </div>
  );
};

export default AnimatedFlowchart;
