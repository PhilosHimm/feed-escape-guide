
import React from "react";
const team = [
  { name: "Aliyah Chen" },
  { name: "Jamal Stevenson" },
  { name: "Rina Provenzano" },
  { name: "Faculty: Prof. Zhang" },
  { name: "CEID100, Toronto Metropolitan University, Spring 2025" }
];

const About = () => (
  <div className="py-12 px-4 max-w-2xl mx-auto">
    <h1 className="font-playfair text-4xl md:text-5xl font-bold text-purpleblue-700 mb-4">About Us</h1>
    <p className="text-lg mb-6 text-muted-foreground">
      We’re a student team at Toronto Metropolitan University (TMU) passionate about digital wellbeing. This guide was created for CEID100, Spring 2025.
    </p>
    <ul className="flex flex-col gap-2">
      {team.map((person, i) => (
        <li key={i} className="rounded py-2 px-3 bg-white shadow text-purpleblue-700 font-semibold">{person.name}</li>
      ))}
    </ul>
  </div>
);

export default About;
