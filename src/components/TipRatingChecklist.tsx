
import React, { useState } from "react";
import { toast } from "@/components/ui/use-toast";
import { Star } from "lucide-react";

type Tip = {
  id: number;
  label: string;
  appLink?: string;
};

const defaultList: Tip[] = [
  { id: 1, label: "Turn off autoplay videos" },
  { id: 2, label: "Set app time limits (iOS/Android)", appLink: "https://support.google.com/android/answer/9346420?hl=en" },
  { id: 3, label: "Try Forest or ScreenZen for focus", appLink: "https://forestapp.cc/" },
  { id: 4, label: "Review Screen Time/Digital Wellbeing" },
  { id: 5, label: "Leave phone out of reach during study" },
];

const TipRatingChecklist: React.FC = () => {
  const [checked, setChecked] = useState<number[]>([]);
  const [ratings, setRatings] = useState<Record<number, number>>({});

  const toggle = (id: number) => {
    setChecked(prev => {
      const updated = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
      toast({ title: prev.includes(id) ? "Unchecked" : "Completed" });
      return updated;
    });
  };

  const rateTip = (id: number, rating: number) => {
    setRatings((r) => ({ ...r, [id]: rating }));
    toast({ title: `Rated ${rating}/5` });
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow space-y-2 max-w-lg mx-auto">
      <div className="font-bold text-purpleblue-600 mb-2">Digital Wellness Tools — Try & Rate!</div>
      <ul className="list-none space-y-3">
        {defaultList.map((item) => (
          <li key={item.id} className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <button
                onClick={() => toggle(item.id)}
                className={`w-6 h-6 rounded border flex items-center justify-center transition border-purpleblue-200
                  ${checked.includes(item.id) ? "bg-purpleblue-500 border-purpleblue-500 text-white" : "bg-white"}
                `}
                aria-pressed={checked.includes(item.id)}
                aria-label={item.label}
              >
                {checked.includes(item.id) && <span>✓</span>}
              </button>
              <span className="text-base">{item.label}</span>
              {item.appLink &&
                <a
                  href={item.appLink}
                  className="ml-2 underline text-purpleblue-600 text-xs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Demo
                </a>
              }
            </div>
            <div className="flex gap-1 ml-9">
              {[1,2,3,4,5].map(star => (
                <button
                  key={star}
                  className={star <= (ratings[item.id] || 0)
                    ? "text-yellow-400"
                    : "text-muted-foreground opacity-60"}
                  aria-label={`Rate tip ${star} star`}
                  onClick={() => rateTip(item.id, star)}
                >
                  <Star size={18} />
                </button>
              ))}
              <span className="ml-2 text-xs text-purpleblue-600">
                {ratings[item.id] ? `${ratings[item.id]}/5` : "Rate"}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TipRatingChecklist;
