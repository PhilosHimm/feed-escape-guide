import React from "react";
import ExpandedQuizGame from "../components/ExpandedQuizGame";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { SectionNavigation } from "@/components/SectionNavigation";

const Misinformation = () => (
  <div className="container mx-auto py-8 px-4">
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <TypographyH1>Can You Tell What's Real?</TypographyH1>
        <TypographyP className="text-xl">
          Your feed might trap you in a <strong className="font-semibold">filter bubble</strong>, only showing what you agree with. Echo chambers and fake news can trick anyone. Test your skills:
        </TypographyP>
      </div>
      
      <ExpandedQuizGame />
      
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=420&q=80"
              alt="Infographic: Spotting fake news"
              className="rounded-lg border max-w-sm"
            />
            <div className="space-y-4">
              <TypographyH2>What are Filter Bubbles & Echo Chambers?</TypographyH2>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <strong>Filter bubbles:</strong> Algorithms only show you content similar to what you've already engaged with, hiding other perspectives.
                </li>
                <li>
                  <strong>Echo chambers:</strong> You mostly see posts that reinforce your own opinions.
                </li>
              </ul>
              <TypographyP>
                These phenomena make it harder to discover new viewpoints or identify misinformation. Being aware helps you break free and spot fake news!
              </TypographyP>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="text-center space-x-4">
        <a href="https://mediasmarts.ca" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">MediaSmarts</a>
        <span>·</span>
        <a href="https://newslit.org" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">News Literacy Project</a>
      </div>

      <SectionNavigation currentPath="/misinformation" />
    </div>
  </div>
);

export default Misinformation;
