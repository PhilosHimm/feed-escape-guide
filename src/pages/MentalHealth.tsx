import React, { useState } from "react";
import EmojiSlider from "../components/EmojiSlider";
import MentalHealthCarousel from "../components/MentalHealthCarousel";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionNavigation } from "@/components/SectionNavigation";
import { Download } from "lucide-react";

const wallpaperUrl = "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=480&q=80";

const MentalHealth = () => {
  const [mood, setMood] = useState(2);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="space-y-4">
          <TypographyH1>My Feed, My Mood</TypographyH1>
          <TypographyP className="text-xl">
            After 30 minutes of scrolling, how do you truly feel? Check in below—then try our daily digital wellness tips.
          </TypographyP>
        </div>
        
        <div className="space-y-6">
          <EmojiSlider value={mood} setValue={setMood} />
          <MentalHealthCarousel />
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=420&q=80"
                alt="Infographic: Social comparison and mental health online"
                className="rounded-lg border max-w-sm"
              />
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Quick Reset: Download Daily Affirmation</h3>
                  <Button asChild>
                    <a
                      href={wallpaperUrl}
                      download="daily-affirmation-wallpaper.jpg"
                      className="inline-flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download Daily Affirmation Wallpaper
                    </a>
                  </Button>
                </div>
                <Card className="bg-muted/50">
                  <CardContent className="pt-4">
                    <TypographyP className="text-sm">
                      <strong>Did you know?</strong> Heavy social media use is linked to emotional ups and downs. Small steps can build resilience and self-compassion online.
                    </TypographyP>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        <SectionNavigation currentPath="/mental-health" />
      </div>
    </div>
  );
};

export default MentalHealth;
