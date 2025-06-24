
import React from "react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "../hooks/use-mobile";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyH1, TypographyH2, TypographyLead, TypographyP } from "@/components/ui/typography";

const sections = [
  {
    name: "Why You Keep Scrolling",
    route: "/algorithms",
    description: "Explore how algorithms deliver the feed that keeps you glued to your phone.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Real or Fake?",
    route: "/misinformation",
    description: "Test your digital detective skills: can you spot misinformation?",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=420&q=80",
  },
  {
    name: "My Feed, My Mood",
    route: "/mental-health",
    description: "Reflect on the mental health impact of endless scrolling.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=420&q=80",
  },
  {
    name: "What They Know About You",
    route: "/privacy",
    description: "See how your data is tracked and shared across the web.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Take Back Your Time",
    route: "/digital-balance",
    description: "Tools and tricks for a healthier relationship with your devices.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
  }
];

const Index = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center space-y-6 mb-16">
          <TypographyH1 className="text-6xl md:text-7xl">
            Trapped in the Feed
          </TypographyH1>
          <TypographyH2 className="text-muted-foreground">
            How Social Media Shapes What You See, Think, and Feel
          </TypographyH2>
          <TypographyLead className="max-w-2xl mx-auto">
            Ever wonder why your feed knows you better than your friends?
          </TypographyLead>
          <Button
            size="lg"
            className="text-lg px-8 py-3"
            onClick={() => navigate("/algorithms")}
          >
            Explore the Feed
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {sections.map((section, idx) => (
            <Card
              key={section.name}
              className="cursor-pointer hover:shadow-lg transition-shadow group"
              onClick={() => navigate(section.route)}
            >
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={section.image}
                  alt={`${section.name} section`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="group-hover:text-primary transition-colors">
                  {section.name}
                </CardTitle>
                <CardDescription>
                  {section.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center text-primary font-medium group-hover:underline">
                  Start
                  <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <footer className="text-center space-y-4">
          <TypographyP className="text-sm text-muted-foreground">
            &copy; 2025 TMU CEID100 · Trapped in the Feed —{" "}
            <a href="/about" className="underline hover:text-foreground">
              About Us
            </a>
          </TypographyP>
          {isMobile && (
            <TypographyP className="text-xs text-muted-foreground">
              Tip: swipe horizontally to explore sections on mobile.
            </TypographyP>
          )}
        </footer>
      </div>
    </div>
  );
};

export default Index;
