
import React, { useState } from "react";
import EmojiSlider from "../components/EmojiSlider";

const MentalHealthSection = () => {
  const [mood, setMood] = useState(2); // neutral default

  return (
    <section id="mental-health" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-inter mb-2 text-purpleblue-600 flex items-center gap-2">
          <span>💬</span>
          Your Feed and Your Feelings
        </h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
          After 30 minutes on social media: How do you feel? <span role="img" aria-label="mood">🧠</span>
        </p>
        <EmojiSlider value={mood} setValue={setMood} />
        <div className="mt-8 flex flex-col md:flex-row gap-7 items-center">
          <img
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=420&q=80"
            alt="Infographic: Social comparison and mental health online"
            className="rounded-lg border-2 border-purpleblue-100 max-w-sm"
          />
          <div className="flex-1 space-y-3">
            <div className="bg-purpleblue-50 border-l-4 border-purpleblue-500 p-3 rounded shadow-sm text-sm">
              <strong className="text-purpleblue-600">Tips for screen breaks:</strong>
              <ul className="list-disc ml-4">
                <li>Take a walk after heavy scrolling</li>
                <li>Pause before comparing yourself to others online</li>
                <li>Unfollow accounts that make you feel bad</li>
                <li>Try the “no phone at meals” challenge</li>
              </ul>
            </div>
            <div className="mt-1 text-purpleblue-600 text-sm">
              Based on <span className="underline">Module 5 & 6 readings</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentalHealthSection;
