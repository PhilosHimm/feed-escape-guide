
import React from "react";
import AnimatedFlowchart from "../components/AnimatedFlowchart";

const Algorithms = () => (
  <div className="py-12 px-4 max-w-4xl mx-auto">
    <h1 className="font-playfair text-4xl md:text-5xl font-bold text-purpleblue-700 mb-4">
      Why You Keep Scrolling
    </h1>
    <p className="text-xl text-muted-foreground mb-5">
      Social media feeds are powered by algorithms that adapt with every action. 
      See how your journey looks:
    </p>
    <AnimatedFlowchart />
    <div className="bg-white shadow border-l-4 border-purpleblue-500 rounded-lg mt-10 p-5">
      <strong className="text-purpleblue-700">Tip:</strong> Reset your feed! Clear watch & search history, and follow some new accounts.
    </div>
    <div className="mt-5 space-x-5">
      <a href="https://www.humanetech.com/" className="underline text-purpleblue-600" target="_blank" rel="noopener noreferrer">
        Center for Humane Tech
      </a>
      <a href="https://www.humane.tech/module5" className="underline text-purpleblue-600" target="_blank" rel="noopener noreferrer">
        Module 5 Course Reading
      </a>
    </div>
  </div>
);

export default Algorithms;
