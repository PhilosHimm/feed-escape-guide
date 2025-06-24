"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export default function SiteNavbar() {
  return <Navbar className="top-2" />;
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <HoveredLink href="/">Home</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="Explore">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/algorithms">Algorithms</HoveredLink>
            <HoveredLink href="/misinformation">Misinformation</HoveredLink>
            <HoveredLink href="/mental-health">Mental Health</HoveredLink>
            <HoveredLink href="/privacy">Privacy</HoveredLink>
            <HoveredLink href="/digital-balance">Digital Balance</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="More">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">About Us</HoveredLink>
            <HoveredLink href="/sources">Sources</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

