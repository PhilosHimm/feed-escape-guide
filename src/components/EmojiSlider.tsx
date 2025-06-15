
import React from "react";

type Props = {
  value: number;
  setValue: (v: number) => void;
};

const faces = [
  { label: "😃", meaning: "Great" },
  { label: "🙂", meaning: "Okay" },
  { label: "😐", meaning: "Neutral" },
  { label: "😔", meaning: "Sad" },
  { label: "😖", meaning: "Rough" },
];

const EmojiSlider: React.FC<Props> = ({ value, setValue }) => {
  return (
    <div className="flex flex-col items-center gap-2 w-full">
      <input
        type="range"
        min={0}
        max={4}
        value={value}
        onChange={e => setValue(Number(e.target.value))}
        className="w-60 md:w-72 accent-purpleblue-500"
        aria-valuetext={faces[value]?.meaning}
        aria-label="Mood after scrolling"
      />
      <div className="flex justify-between w-60 md:w-72 mt-1">
        {faces.map((f, idx) => (
          <span key={idx} className={value === idx ? "text-2xl" : "text-base"}>{f.label}</span>
        ))}
      </div>
      <span className="text-muted-foreground mt-2 text-sm" aria-live="polite">{faces[value]?.meaning}</span>
    </div>
  );
};

export default EmojiSlider;
