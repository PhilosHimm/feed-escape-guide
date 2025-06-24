import React from "react";
import NavBar from "@/components/NavBar";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

export default function Layout({ children, className }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <main className={className}>
        {children}
      </main>
    </div>
  );
}
