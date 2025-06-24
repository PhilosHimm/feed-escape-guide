import React from "react";
import {
  Typography,
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyLead,
  TypographyLarge,
  TypographySmall,
  TypographyMuted,
} from "@/components/ui/typography";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function TypographyDemo() {
  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="space-y-8">
        <TypographyH1>Typography Showcase</TypographyH1>
        <TypographyLead>
          This page demonstrates all the available shadcn typography components in your project.
        </TypographyLead>

        <Card>
          <CardHeader>
            <CardTitle>Headings</CardTitle>
            <CardDescription>Various heading levels with proper typography styling</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <TypographyH1>Heading 1</TypographyH1>
            <TypographyH2>Heading 2</TypographyH2>
            <TypographyH3>Heading 3</TypographyH3>
            <TypographyH4>Heading 4</TypographyH4>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Text Components</CardTitle>
            <CardDescription>Different text styles for various content types</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <TypographyLead>
              This is a lead paragraph. It stands out from regular paragraph text.
            </TypographyLead>
            
            <TypographyP>
              This is a regular paragraph with proper leading and spacing. It demonstrates 
              how regular body text should look in your application.
            </TypographyP>

            <TypographyBlockquote>
              "This is a blockquote. It's perfect for highlighting important quotes or 
              testimonials from users."
            </TypographyBlockquote>

            <TypographyLarge>This is large text for emphasis.</TypographyLarge>
            
            <TypographySmall>This is small text for fine print or captions.</TypographySmall>
            
            <TypographyMuted>This is muted text for less important information.</TypographyMuted>

            <div className="space-y-2">
              <TypographyP>Inline code example: <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">const hello = "world";</code></TypographyP>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Components</CardTitle>
            <CardDescription>shadcn UI components styled consistently</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2 flex-wrap">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <Badge>Default Badge</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Usage Example</CardTitle>
            <CardDescription>How to use the Typography component with custom variants</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 p-4 rounded-lg">
              <code className="text-sm">
                {`<Typography variant="h1">Custom Heading</Typography>
<Typography variant="lead">Lead text</Typography>
<Typography variant="p">Regular paragraph</Typography>`}
              </code>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
