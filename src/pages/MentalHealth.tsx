
import React, { useState } from "react";
import EmojiSlider from "../components/EmojiSlider";

const MentalHealth = () => {
  const [mood, setMood] = useState(2);

  return (
    <div className="py-12 px-4 max-w-4xl mx-auto">
      <h1 className="font-playfair text-4xl md:text-5xl font-bold text-purpleblue-700 mb-4">
        Your Feed and Your Feelings
      </h1>
      <p className="text-xl text-muted-foreground mb-6">
        After 30 minutes of scrolling, how do you truly feel? Check in below, then explore ways to boost your mood.
      </p>
      <div className="mb-8">
        <EmojiSlider value={mood} setValue={setMood} />
      </div>
      <div className="flex flex-col md:flex-row gap-10 items-center mb-10">
        <img
          src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=420&q=80"
          alt="Infographic: Social comparison and mental health online"
          className="rounded-lg border-2 border-purpleblue-100 max-w-sm mb-4 md:mb-0"
        />
        <div className="flex-1 space-y-4">
          <div className="bg-purpleblue-50 border-l-4 border-purpleblue-500 p-3 rounded shadow-sm text-base">
            <strong className="text-purpleblue-700">Tips for digital wellness:</strong>
            <ul className="list-disc ml-4">
              <li>Take regular screen breaks (stand, stretch, walk)</li>
              <li>Unfollow accounts that make you feel bad about yourself</li>
              <li>Mute or hide toxic comment sections</li>
              <li>Try the <span className="font-semibold">“no phone at meals”</span> challenge</li>
            </ul>
          </div>
          <div className="text-purpleblue-700 font-semibold text-sm">
            Based on Module 5 & 6 readings (Visual Culture & Identity)
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded shadow text-sm border border-purpleblue-50">
        <strong>Did you know?</strong> Heavy social media use is linked to emotional ups and downs. Take small steps to build resilience and self-compassion online.
      </div>
    </div>
  );
};

export default MentalHealth;
