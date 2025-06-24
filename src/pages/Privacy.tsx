import React from "react";
import TrackingSimulator from "../components/TrackingSimulator";
import { Shield } from "lucide-react";
import { TypographyH1, TypographyP } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { SectionNavigation } from "@/components/SectionNavigation";

const Privacy = () => (
  <div className="container mx-auto py-8 px-4">
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <TypographyH1>What They Know About You</TypographyH1>
        <TypographyP className="text-xl">
          Every click builds your digital profile. See how tracking works, then learn how you can reclaim control.
        </TypographyP>
      </div>
      
      <TrackingSimulator />
      
      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <img
              src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80"
              alt="Abstract digital privacy lock illustration"
              className="rounded-lg border max-w-xs"
            />
            <div className="flex-1 space-y-4">
              <div className="font-semibold text-lg">How Data Gets Profiled</div>
              <ul className="list-disc ml-6 space-y-1">
                <li>Sites analyze your visits, even if you don't log in</li>
                <li>Most apps share data with 10+ partners</li>
                <li>Targeted ads are customized just for you</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6">
        <Alert>
          <Shield className="h-4 w-4" />
          <AlertDescription>
            <strong>Tips to regain control:</strong>
            <ul className="list-disc ml-5 mt-2 space-y-1">
              <li>Disable personalized ads in your device's settings</li>
              <li>Take browser privacy tests</li>
              <li>Review app permissions often</li>
            </ul>
          </AlertDescription>
        </Alert>
        
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-3">
              <h3 className="font-semibold">Privacy Resources:</h3>
              <div className="flex flex-col gap-2">
                <a href="https://privacybadger.org" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">Privacy Badger</a>
                <a href="https://duckduckgo.com" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">DuckDuckGo</a>
                <a href="https://www.cbc.ca/radio/podcastnews/reset" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">CBC Reset Podcast</a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <SectionNavigation currentPath="/privacy" />
    </div>
  </div>
);

export default Privacy;
