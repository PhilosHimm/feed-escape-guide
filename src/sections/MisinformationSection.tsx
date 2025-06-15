
import React from "react";
import QuizGame from "../components/QuizGame";

const MisinformationSection = () => {
  return (
    <section id="misinformation" className="py-16 bg-purpleblue-50/50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold font-inter mb-2 text-purpleblue-600 flex items-center gap-2">
          <span>📰</span>
          Can You Tell What’s Real?
        </h2>
        <p className="text-lg text-muted-foreground mb-5">
          Your feed might trap you in a <span className="font-semibold text-purpleblue-500">filter bubble</span>—showing only what you already agree with. Echo chambers and fake news can fool anyone. Try the quiz:
        </p>
        <QuizGame />
        <div className="mt-8 flex flex-col md:flex-row gap-6 items-center">
          <img
            src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=420&q=80"
            alt="Infographic: Spotting fake news on devices"
            className="rounded-xl border-2 border-purpleblue-100 max-w-sm"
          />
          <div className="text-sm flex-1 space-y-2">
            <div>
              <span role="img" aria-label="bubble">🔄</span> <strong>Filter bubbles:</strong> Algorithms show you more of the same, hiding other viewpoints.
            </div>
            <div>
              <span role="img" aria-label="echo chamber">🔊</span> <strong>Echo chambers:</strong> You mostly see posts that reinforce what you already believe.
            </div>
            <div className="mt-2 text-purpleblue-600">
              <a href="https://mediasmarts.ca" className="underline" target="_blank" rel="noopener noreferrer">MediaSmarts</a>
              {" · "}
              <a href="https://newslit.org" className="underline" target="_blank" rel="noopener noreferrer">News Literacy Project</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MisinformationSection;
