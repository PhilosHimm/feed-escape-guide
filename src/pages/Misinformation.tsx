
import React from "react";
import ExpandedQuizGame from "../components/ExpandedQuizGame";

const Misinformation = () => (
  <div className="py-12 px-4 max-w-4xl mx-auto">
    <h1 className="font-playfair text-4xl md:text-5xl font-bold text-purpleblue-700 mb-4">
      Can You Tell What’s Real?
    </h1>
    <p className="text-xl text-muted-foreground mb-4">
      Your feed might trap you in a <strong className="text-purpleblue-600">filter bubble</strong>, only showing what you agree with. Echo chambers and fake news can trick anyone. Test your skills:
    </p>
    <ExpandedQuizGame />
    <div className="bg-purpleblue-50/70 rounded-xl mt-8 p-6 shadow flex flex-col md:flex-row gap-7 items-center">
      <img
        src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=420&q=80"
        alt="Infographic: Spotting fake news"
        className="rounded-xl border-2 border-purpleblue-100 max-w-sm mb-3 md:mb-0"
      />
      <div>
        <h2 className="text-2xl font-playfair text-purpleblue-700 mb-2">What are Filter Bubbles & Echo Chambers?</h2>
        <ul className="list-disc ml-6 mb-2">
          <li>
            <strong>Filter bubbles:</strong> Algorithms only show you content similar to what you’ve already engaged with, hiding other perspectives.
          </li>
          <li>
            <strong>Echo chambers:</strong> You mostly see posts that reinforce your own opinions.
          </li>
        </ul>
        <p className="mt-2">
          These phenomena make it harder to discover new viewpoints or identify misinformation. Being aware helps you break free and spot fake news!
        </p>
      </div>
    </div>
    <div className="mt-6 text-lg">
      <a href="https://mediasmarts.ca" className="underline text-purpleblue-600" target="_blank" rel="noopener noreferrer">MediaSmarts</a>
      {" · "}
      <a href="https://newslit.org" className="underline text-purpleblue-600" target="_blank" rel="noopener noreferrer">News Literacy Project</a>
    </div>
  </div>
);

export default Misinformation;
