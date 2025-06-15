
import React, { useState } from "react";
import { Check } from "lucide-react";

const defaultList = [
  { id: 1, label: "Turn off autoplay videos" },
  { id: 2, label: "Set app time limits" },
  { id: 3, label: "Try a focus app (e.g., Forest, ScreenZen)" },
  { id: 4, label: "Check 'Screen Time' or 'Digital Wellbeing'" },
  { id: 5, label: "Leave phone out of reach during study" },
];

const Checklist: React.FC = () => {
  const [checked, setChecked] = useState<number[]>([]);

  const toggle = (id: number) => {
    setChecked((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-2 max-w-md mx-auto">
      <div className="font-bold text-purpleblue-600 mb-2">Try these tips!</div>
      <ul className="list-none space-y-2">
        {defaultList.map((item) => (
          <li key={item.id} className="flex items-center gap-3">
            <button
              onClick={() => toggle(item.id)}
              className={`w-6 h-6 rounded border flex items-center justify-center transition border-purpleblue-200
                ${checked.includes(item.id) ? "bg-purpleblue-500 border-purpleblue-500 text-white" : "bg-white"}
              `}
              aria-pressed={checked.includes(item.id)}
              aria-label={item.label}
            >
              {checked.includes(item.id) && <Check size={18} />}
            </button>
            <span className="text-base">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
