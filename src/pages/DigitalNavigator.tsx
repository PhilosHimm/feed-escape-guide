import React, { useState } from "react";
import { SectionNavigation } from "@/components/SectionNavigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TypographyH1, TypographyP } from "@/components/ui/typography";

const redesignDirections = [
  'Preset A — "The Precision Lab" (Clinical Evolution)',
  'Preset B — "The Sovereign Vault" (Luxe Transformation)',
  'Preset C — "The Kinetic Signal" (Brutalist Modernization)',
  'Preset D — "The Neon Pulse" (Cybernetic Overhaul)',
];

const DigitalNavigator = () => {
  const [brandAndFlaw, setBrandAndFlaw] = useState("");
  const [direction, setDirection] = useState(redesignDirections[0]);
  const [pillars, setPillars] = useState("");
  const [conversionGoal, setConversionGoal] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <header className="space-y-3 text-center">
          <TypographyH1>Cinematic Redesign Engine</TypographyH1>
          <TypographyP>AskUserQuestion (single call): answer all 4 prompts below.</TypographyP>
        </header>

        <Card>
          <CardHeader>
            <CardTitle>Transformation Intake</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="brandFlaw">"What is the brand name and what is the 'fatal flaw' of the current site?"</Label>
                <Input id="brandFlaw" value={brandAndFlaw} onChange={(event) => setBrandAndFlaw(event.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="direction">"Pick the Redesign Direction"</Label>
                <select
                  id="direction"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  value={direction}
                  onChange={(event) => setDirection(event.target.value)}
                >
                  {redesignDirections.map((preset) => (
                    <option key={preset} value={preset}>
                      {preset}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pillars">"What are the 3 core pillars of this new experience?"</Label>
                <Input id="pillars" value={pillars} onChange={(event) => setPillars(event.target.value)} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="conversionGoal">"What is the ultimate conversion goal?"</Label>
                <Input id="conversionGoal" value={conversionGoal} onChange={(event) => setConversionGoal(event.target.value)} />
              </div>

              <Button type="submit">Submit AskUserQuestion Payload</Button>
            </form>

            {submitted && (
              <TypographyP className="mt-4 text-sm text-muted-foreground">
                Captured in a single call with no follow-up questions.
              </TypographyP>
            )}
          </CardContent>
        </Card>

        <SectionNavigation currentPath="/digital-navigator" />
      </div>
    </div>
  );
};

export default DigitalNavigator;
