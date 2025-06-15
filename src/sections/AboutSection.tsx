
import React from "react";
const team = [
  { name: "Aliyah Chen" },
  { name: "Jamal Stevenson" },
  { name: "Rina Provenzano" },
  { name: "Faculty: Prof. Zhang" },
  { name: "CEID100, Toronto Metropolitan University, Spring 2025" }
];

const AboutSection = () => (
  <section id="about" className="py-16 bg-purpleblue-50/70 border-t border-purpleblue-100">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold font-inter mb-3 text-purpleblue-600 flex items-center gap-2">
        <span>👥</span>
        About Us
      </h2>
      <p className="text-base mb-6 text-muted-foreground">
        We’re a student team at Toronto Metropolitan University (TMU) passionate about digital wellbeing. This guide was created for CEID100, Spring 2025.
      </p>
      <ul className="flex flex-col gap-2">
        {team.map((person, i) => (
          <li key={i} className="rounded py-2 px-3 bg-white shadow text-purpleblue-600 font-semibold">{person.name}</li>
        ))}
      </ul>
    </div>
  </section>
);

export default AboutSection;
