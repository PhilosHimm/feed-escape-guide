import React from "react";
import TipRatingChecklist from "../components/TipRatingChecklist";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { SectionNavigation } from "@/components/SectionNavigation";
import { Clock, Target } from "lucide-react";

const DigitalBalance = () => (
  <div className="container mx-auto py-8 px-4">
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <TypographyH1>Take Back Your Time</TypographyH1>
        <TypographyP className="text-xl">
          Digital balance is about intention. Try these tools, rate your favorites, and experiment with app demos!
        </TypographyP>
      </div>
      
      <TipRatingChecklist />
      
      <div className="grid md:grid-cols-2 gap-6">
        <Alert>
          <Clock className="h-4 w-4" />
          <AlertDescription>
            <strong>Tools:</strong>{" "}
            <a href="https://forestapp.cc/" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">Forest</a>,{" "}
            <a href="https://screenzen.io/" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">ScreenZen</a>, iOS/Android time limits.
            <div className="mt-2">
              Try blocking your top distractions for a day and see what happens!
            </div>
          </AlertDescription>
        </Alert>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Target className="h-5 w-5 mt-1 text-primary" />
              <div className="space-y-3">
                <div>
                  <strong>Challenge:</strong> Attempt a 24hr "feed detox" — can you spend a full day social-media free?
                </div>
                <div>
                  <a href="https://www.humane.tech/module4" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">Stolen Focus by Johann Hari (Course Reading)</a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Alert>
        <AlertDescription className="text-center">
          Building healthy habits is a game of small wins. What will your first win be?
        </AlertDescription>
      </Alert>

      <SectionNavigation currentPath="/digital-balance" />
    </div>
  </div>
);

export default DigitalBalance;
