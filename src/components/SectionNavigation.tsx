import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";

// Define the section order for navigation
export const sectionOrder = [
  { path: "/", label: "Home" },
  { path: "/algorithms", label: "Algorithms" },
  { path: "/misinformation", label: "Misinformation" },
  { path: "/mental-health", label: "Mental Health" },
  { path: "/privacy", label: "Privacy" },
  { path: "/digital-balance", label: "Digital Balance" },
  { path: "/digital-navigator", label: "Quiz" },
  { path: "/about", label: "About Us" },
  { path: "/sources", label: "Sources" },
];

interface SectionNavigationProps {
  currentPath: string;
  className?: string;
}

export function SectionNavigation({ currentPath, className }: SectionNavigationProps) {
  const navigate = useNavigate();
  
  const currentIndex = sectionOrder.findIndex(section => section.path === currentPath);
  const prevSection = currentIndex > 0 ? sectionOrder[currentIndex - 1] : null;
  const nextSection = currentIndex < sectionOrder.length - 1 ? sectionOrder[currentIndex + 1] : null;

  return (
    <div className={`flex justify-between items-center pt-8 border-t ${className}`}>
      {prevSection ? (
        <Button
          variant="outline"
          onClick={() => navigate(prevSection.path)}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          {prevSection.label}
        </Button>
      ) : (
        <div />
      )}

      {nextSection && (
        <Button
          onClick={() => navigate(nextSection.path)}
          className="flex items-center gap-2"
        >
          {nextSection.label}
          <ArrowRight className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
