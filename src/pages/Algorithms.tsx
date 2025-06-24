
import React from "react";
import AnimatedFlowchart from "../components/AnimatedFlowchart";
import FeedSimulator from "../components/FeedSimulator";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";
import { SectionNavigation } from "@/components/SectionNavigation";

const Algorithms = () => (
  <div className="container mx-auto py-8 px-4">
    <div className="max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <TypographyH1>Why You Keep Scrolling</TypographyH1>
        <TypographyP className="text-xl max-w-3xl mx-auto">
          Social media feeds are powered by algorithms that adapt with every action. 
          Understanding how they work is the first step to taking control.
        </TypographyP>
      </div>      {/* Algorithm Process Flow */}
      <section>
        <TypographyH2 className="text-center mb-6">
          How Algorithms Shape Your Experience
        </TypographyH2>
        <AnimatedFlowchart />
      </section>

      {/* Interactive Feed Simulator */}
      <section>
        <TypographyH2 className="text-center mb-6">
          Try It Yourself: Feed Algorithm Simulator
        </TypographyH2>        <TypographyP className="text-center mb-6 max-w-2xl mx-auto">
          Like posts below and watch how the algorithm learns your preferences in real-time. 
          This is a simplified version of what happens on actual social media platforms.
        </TypographyP>
      <FeedSimulator />
    </section>

    {/* Algorithm Types Comparison */}
    <section className="mb-12">
      <h2 className="text-2xl font-playfair font-bold text-purpleblue-700 mb-6 text-center">
        Different Platforms, Different Algorithms
      </h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-pink-500">
          <h3 className="font-bold text-lg mb-3 text-pink-600">TikTok</h3>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>• Prioritizes watch time & completion rate</li>
            <li>• Heavy focus on trending sounds/effects</li>
            <li>• Rapid content discovery</li>
            <li>• Personalization within hours</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
          <h3 className="font-bold text-lg mb-3 text-blue-600">Instagram</h3>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>• Relationship-based ranking</li>
            <li>• Recency and engagement matter</li>
            <li>• Stories vs Feed algorithms differ</li>
            <li>• Creator account boost</li>
          </ul>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-400">
          <h3 className="font-bold text-lg mb-3 text-blue-500">Twitter/X</h3>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>• Real-time trending topics</li>
            <li>• Engagement-driven ranking</li>
            <li>• Following vs "For You" feeds</li>
            <li>• Verification status influence</li>
          </ul>
        </div>
      </div>
    </section>

    {/* Action Items */}
    <div className="bg-white shadow border-l-4 border-purpleblue-500 rounded-lg p-6 mb-8">
      <h3 className="font-bold text-purpleblue-700 text-lg mb-3">Take Control of Your Feed:</h3>
      <ul className="space-y-2 text-purpleblue-600">
        <li>✓ Regularly clear your watch & search history</li>
        <li>✓ Diversify who you follow - add different perspectives</li>
        <li>✓ Use "Not Interested" options when available</li>
        <li>✓ Turn off notifications for non-essential apps</li>
        <li>✓ Set specific times for social media use</li>
      </ul>
    </div>

    {/* Resources */}
    <div className="text-center space-x-6">
      <a 
        href="https://www.humanetech.com/" 
        className="inline-flex items-center gap-2 underline text-purpleblue-600 hover:text-purpleblue-700" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Center for Humane Tech
      </a>
      <a 
        href="https://algorithmwatch.org/" 
        className="inline-flex items-center gap-2 underline text-purpleblue-600 hover:text-purpleblue-700" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        Algorithm Watch
      </a>
      <a 
        href="https://www.humane.tech/module5" 
        className="inline-flex items-center gap-2 underline text-purpleblue-600 hover:text-purpleblue-700" 
        target="_blank" 
        rel="noopener noreferrer"
      >        Module 5 Course Reading
      </a>
    </div>

    <SectionNavigation currentPath="/algorithms" />
    </div>
  </div>
);

export default Algorithms;
