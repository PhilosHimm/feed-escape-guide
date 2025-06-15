
import React from "react";
import NavBar from "../components/NavBar";
import HomeSection from "../sections/HomeSection";
import AlgorithmsSection from "../sections/AlgorithmsSection";
import MisinformationSection from "../sections/MisinformationSection";
import MentalHealthSection from "../sections/MentalHealthSection";
import PrivacySection from "../sections/PrivacySection";
import DigitalBalanceSection from "../sections/DigitalBalanceSection";
import AboutSection from "../sections/AboutSection";
import SourcesSection from "../sections/SourcesSection";

const Index = () => {
  return (
    <div className="font-inter bg-background min-h-screen">
      <NavBar />
      <main className="flex flex-col">
        <HomeSection />
        <AlgorithmsSection />
        <MisinformationSection />
        <MentalHealthSection />
        <PrivacySection />
        <DigitalBalanceSection />
        <AboutSection />
        <SourcesSection />
      </main>
      <footer className="text-center text-xs text-muted-foreground py-6">
        &copy; 2025 TMU CEID100 · Trapped in the Feed — 
        <a href="#about" className="underline px-1">About Us</a>
      </footer>
    </div>
  );
};

export default Index;
