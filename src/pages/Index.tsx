
import React from "react";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "../hooks/use-mobile";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TypographyH1, TypographyH2, TypographyLead, TypographyP } from "@/components/ui/typography";
import { SectionNavigation } from "@/components/SectionNavigation";

const sections = [
  {
    name: "How Algorithms Work",
    route: "/algorithms",
    description: "Understand how feeds are personalized and why breaking filter bubbles supports mental wellness.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Your Mental Health Online",
    route: "/mental-health",
    description: "Learn how social media affects your mood, sleep, and well-being—and discover happiness hacks for healthier usage.",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=420&q=80",
  },
  {
    name: "Spotting Misinformation",
    route: "/misinformation",
    description: "Protect your peace of mind by learning to identify false information and reduce anxiety from information overload.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=420&q=80",
  },
  {
    name: "Privacy for Peace of Mind",
    route: "/privacy",
    description: "Feel secure online by understanding data collection and taking control of your personal information.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Digital Balance & Boundaries",
    route: "/digital-balance",
    description: "Build sustainable habits with screen time limits, offline activities, and digital detox strategies.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Digital Wellness Quiz",
    route: "/digital-navigator",
    description: "Test your digital literacy skills with interactive scenarios and measure your progress toward digital wellness mastery.",
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&w=400&q=80",
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
            Digital Wellness Guide
          </TypographyH1>
          <TypographyH2 className="text-muted-foreground">
            Building a Healthier Relationship with Technology
          </TypographyH2>
          <TypographyLead className="max-w-3xl mx-auto">
            Social media has amazing benefits, including connection, learning, and creativity. However, excessive or uneducated use might harm your mental health, privacy, and ability to think critically or logically. This tutorial’s gonna break down how algorithms shape what you see, how to spot fake news, keep your info safe, and build healthy habits online.
          </TypographyLead>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-4xl mx-auto text-left">
            <h3 className="font-semibold text-lg mb-3 text-center">What is Digital Wellness?</h3>
            <TypographyP className="text-sm">
              Digital wellness is all about finding that sweet spot between the advantages and the problems of tech. It means being intentional with how you make use of social media, understanding how the algorithm plays you, spotting fake news, protecting your privacy, and keeping your mental health in check while you're online.
              Studies show that when you use tech more mindfully, it equals you sleeping better, feeling less stressed, and staying focused on what really matters.
            </TypographyP>
          </div>
          <Button
            size="lg"
            className="text-lg px-8 py-3"
            onClick={() => navigate("/Algorithms")}
          >
            Start Your Wellness Journey
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
          ))}        </div>

        <SectionNavigation currentPath="/" />

        <footer className="text-center space-y-4 mt-8">
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
