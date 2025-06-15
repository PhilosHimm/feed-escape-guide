
import React from "react";
import TrackingSimulator from "../components/TrackingSimulator";
import { Shield } from "lucide-react";

const Privacy = () => (
  <div className="py-12 px-4 max-w-4xl mx-auto">
    <h1 className="font-playfair text-4xl md:text-5xl font-bold text-purpleblue-700 mb-4">
      What They Know About You
    </h1>
    <p className="text-xl text-muted-foreground mb-6">
      Every click builds your digital profile. See how tracking works, then learn how you can reclaim control.
    </p>
    <TrackingSimulator />
    <div className="flex flex-col md:flex-row gap-7 items-center bg-purpleblue-50/60 rounded-xl shadow p-6 mb-7 mt-8">
      <img
        src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80"
        alt="Abstract digital privacy lock illustration"
        className="rounded-lg border-2 border-purpleblue-100 max-w-xs"
      />
      <div className="flex-1 bg-white rounded-lg shadow p-4 mt-4 md:mt-0">
        <div className="font-bold text-base text-purpleblue-600 mb-2">How Data Gets Profiled</div>
        <ul className="list-disc ml-6 mb-2 text-base">
          <li>Sites analyze your visits, even if you don’t log in</li>
          <li>Most apps share data with 10+ partners</li>
          <li>Targeted ads are customized just for you</li>
        </ul>
      </div>
    </div>
    <div className="grid md:grid-cols-2 gap-5 mt-6">
      <div className="bg-purpleblue-50 border-l-4 border-purpleblue-500 p-3 rounded shadow text-base">
        <strong>Tips to regain control:</strong>
        <ul className="list-disc ml-5 mt-1">
          <li>Disable personalized ads in your device’s settings</li>
          <li>Take browser privacy tests</li>
          <li>Review app permissions often</li>
        </ul>
      </div>
      <div className="text-base flex flex-col gap-2">
        <a href="https://privacybadger.org" className="underline text-purpleblue-600" target="_blank" rel="noopener noreferrer">Privacy Badger</a>
        <a href="https://duckduckgo.com" className="underline text-purpleblue-600" target="_blank" rel="noopener noreferrer">DuckDuckGo</a>
        <a href="https://www.cbc.ca/radio/podcastnews/reset" className="underline text-purpleblue-600" target="_blank" rel="noopener noreferrer">CBC Reset Podcast</a>
      </div>
    </div>
  </div>
);

export default Privacy;
