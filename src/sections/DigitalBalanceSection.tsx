import React from "react";
import Checklist from "../components/Checklist";

const DigitalBalanceSection = () => {
  return (
    <section id="digital-balance" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2 text-purpleblue-600 flex items-center gap-2">
          Reclaim Your Time
        </h2>
        <p className="text-lg text-muted-foreground mb-5">
          Take back control with simple habits. Chill with Forest 🌲, ScreenZen ⏱️, or try a phone-free meal!
        </p>
        <Checklist />
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <div className="bg-purpleblue-50 border-l-4 border-purpleblue-500 p-3 rounded flex-1 min-w-xs">
            <strong>Tools:</strong> <a href="https://forestapp.cc/" className="underline text-purpleblue-600" target="_blank" rel="noopener noreferrer">Forest</a>, <a href="https://screenzen.io/" className="underline text-purpleblue-600" target="_blank" rel="noopener noreferrer">ScreenZen</a>, iOS/Android time limits
          </div>
          <div className="flex-1 min-w-xs">
            <div className="mb-2 text-purpleblue-600">
              <strong>Challenge:</strong> Try a 24hr “feed detox” — can you do it? 💡
            </div>
            <div>
              <a href="https://www.humane.tech/module4" className="underline" target="_blank" rel="noopener noreferrer">Stolen Focus by Johann Hari (Course Reading)</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalBalanceSection;
