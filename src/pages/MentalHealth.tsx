
import React, { useState } from "react";
import EmojiSlider from "../components/EmojiSlider";
import MentalHealthCarousel from "../components/MentalHealthCarousel";

const wallpaperUrl = "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=480&q=80";

const MentalHealth = () => {
  const [mood, setMood] = useState(2);

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="font-playfair text-4xl md:text-5xl font-bold text-purpleblue-700 mb-4">
        My Feed, My Mood
      </h1>
      <p className="text-xl text-muted-foreground mb-4">
        After 30 minutes of scrolling, how do you truly feel? Check in below—then try our daily digital wellness tips.
      </p>
      <div className="mb-6">
        <EmojiSlider value={mood} setValue={setMood} />
      </div>
      <MentalHealthCarousel />
      <div className="flex flex-col md:flex-row gap-10 items-center mt-10 mb-10">
        <img
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=420&q=80"
          alt="Infographic: Social comparison and mental health online"
          className="rounded-lg border-2 border-purpleblue-100 max-w-sm mb-4 md:mb-0"
        />
        <div className="flex-1 space-y-4">
          <div className="text-purpleblue-700 font-semibold text-base">
            Based on Module 5 & 6 readings (Visual Culture & Identity)
          </div>
          <a
            href={wallpaperUrl}
            download="digital-affirmation-wallpaper.jpg"
            className="inline-block px-4 py-2 bg-purpleblue-600 text-white rounded shadow hover:bg-purpleblue-700 font-semibold transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download Daily Affirmation Wallpaper
          </a>
          <div className="bg-white p-4 rounded shadow text-sm border border-purpleblue-50">
            <strong>Did you know?</strong> Heavy social media use is linked to emotional ups and downs. Small steps can build resilience and self-compassion online.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentalHealth;
