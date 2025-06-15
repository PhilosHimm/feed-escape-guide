
import React from "react";
import Checklist from "../components/Checklist";

const DigitalBalance = () => (
  <div className="py-12 px-4 max-w-4xl mx-auto">
    <h1 className="font-playfair text-4xl md:text-5xl font-bold text-purpleblue-700 mb-4">
      Reclaim Your Time
    </h1>
    <p className="text-xl text-muted-foreground mb-5">
      Digital balance is about being intentional. Use these habits and tools to avoid mindless scrolling and feel more present.
    </p>
    <Checklist />
    <div className="mt-8 flex flex-col md:flex-row gap-4 text-base">
      <div className="bg-purpleblue-50 border-l-4 border-purpleblue-500 p-3 rounded flex-1 min-w-xs">
        <strong>Tools:</strong> <a href="https://forestapp.cc/" className="underline text-purpleblue-600" target="_blank" rel="noopener noreferrer">Forest</a>, <a href="https://screenzen.io/" className="underline text-purpleblue-600" target="_blank" rel="noopener noreferrer">ScreenZen</a>, iOS/Android time limits.
        <div className="mt-2">Try blocking your highest-distraction apps for a day and notice the difference.</div>
      </div>
      <div className="flex-1 min-w-xs">
        <div className="mb-2 text-purpleblue-600">
          <strong>Challenge:</strong> Attempt a 24hr “feed detox” — can you spend a full day social-media free?
        </div>
        <div>
          <a href="https://www.humane.tech/module4" className="underline" target="_blank" rel="noopener noreferrer">Stolen Focus by Johann Hari (Course Reading)</a>
        </div>
      </div>
    </div>
    <div className="mt-6 text-sm text-purpleblue-700 bg-white rounded p-3 border border-purpleblue-50 shadow">
      Building healthy habits is a game of small wins. What will your first win be?
    </div>
  </div>
);

export default DigitalBalance;
