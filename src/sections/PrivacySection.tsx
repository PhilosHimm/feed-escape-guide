import React from "react";
import { Shield } from "lucide-react";

const PrivacySection = () => {
  return (
    <section id="privacy" className="py-16 bg-purpleblue-50/60">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-2 text-purpleblue-600 flex items-center gap-2">
          What They Know About You
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Every click, like, and watch builds a digital profile. This helps companies serve targeted ads and content—sometimes to change your behavior.
        </p>
        <div className="flex flex-col md:flex-row gap-7 items-center py-6">
          <div className="bg-white rounded-lg shadow flex-1 p-4">
            <div className="flex flex-col gap-3">
              <div className="font-bold text-base text-purpleblue-600">How Ad Tracking Works</div>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex flex-col items-center">
                  <span className="rounded-full bg-purpleblue-200 w-16 h-16 flex items-center justify-center text-2xl">👆</span>
                  <span className="mt-1 text-sm text-muted-foreground">Clicks</span>
                </div>
                <span className="text-2xl">→</span>
                <div className="flex flex-col items-center">
                  <span className="rounded-full bg-purpleblue-100 w-16 h-16 flex items-center justify-center text-2xl">📊</span>
                  <span className="mt-1 text-sm text-muted-foreground">Your profile</span>
                </div>
                <span className="text-2xl">→</span>
                <div className="flex flex-col items-center">
                  <span className="rounded-full bg-purpleblue-500 text-white w-16 h-16 flex items-center justify-center text-2xl">💸</span>
                  <span className="mt-1 text-sm text-muted-foreground">Targeted ad</span>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80"
            alt="Abstract digital privacy lock illustration"
            className="rounded-lg border-2 border-purpleblue-100 max-w-xs"
          />
        </div>
        <div className="grid md:grid-cols-2 gap-5 mt-6">
          <div className="bg-purpleblue-50 border-l-4 border-purpleblue-500 p-3 rounded shadow text-sm">
            <strong>Tips:</strong>
            <ul className="list-disc ml-5 mt-1">
              <li>Disable personalized ads in your phone/app settings</li>
              <li>Review app permissions regularly</li>
              <li>Take browser privacy tests</li>
            </ul>
          </div>
          <div className="text-sm flex flex-col justify-between gap-2">
            <a href="https://privacybadger.org" className="underline text-purpleblue-600" target="_blank" rel="noopener noreferrer">Privacy Badger</a>
            <a href="https://www.cbc.ca/radio/podcastnews/reset" className="underline text-purpleblue-600" target="_blank" rel="noopener noreferrer">CBC Reset Podcast</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
