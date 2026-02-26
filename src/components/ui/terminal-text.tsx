import React, { useState, useEffect } from "react";

interface TerminalTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function TerminalText({ text, speed = 50, className = "" }: TerminalTextProps) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let index = 0;
    setDisplayed("");
    const interval = setInterval(() => {
      setDisplayed(text.substring(0, index));
      index++;
      if (index > text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <div className={`whitespace-pre-wrap ${className}`}>{displayed}</div>;
}
