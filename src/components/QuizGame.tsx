
import React, { useState } from "react";
import { Check, Eye } from "lucide-react";

type Quiz = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

const quizData: Quiz[] = [
  {
    question: "🚨 'Viral Challenge Leads to Miracle Cure for Exams!'",
    options: [
      "Real news – that's a popular trend",
      "Fake news – likely clickbait",
    ],
    answer: 1,
    explanation: "This is a fake headline. Viral 'challenges' promising miracle cures are common clickbait and misinformation.",
  },
  {
    question: "📰 'Toronto School to Replace Textbooks With TikTok Lessons'",
    options: [
      "Real news – big change in education",
      "Fake news – sounds unlikely",
    ],
    answer: 1,
    explanation: "This headline is fake and exaggerates trends for attention; always check for credible sources.",
  },
  {
    question: "🔔 'Instagram Now Lets You Control What You See First'",
    options: [
      "Real news – Instagram has this setting",
      "Fake news – you have no control",
    ],
    answer: 0,
    explanation: "This one is real! Instagram lets you set 'Favorites' or 'Following' to customize your feed.",
  },
];

const QuizGame: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleOption = (idx: number) => {
    setSelected(idx);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setSelected(null);
    setShowExplanation(false);
    setCurrent((c) => (c + 1) % quizData.length);
  };

  return (
    <div className="w-full max-w-lg mx-auto rounded-2xl bg-white dark:bg-background/90 shadow-lg p-4">
      <div className="font-bold text-base text-purpleblue-600 mb-2">Misinformation Quiz</div>
      <div className="text-lg md:text-xl mb-4 font-medium">{quizData[current].question}</div>
      <div className="flex flex-col gap-2">
        {quizData[current].options.map((opt, idx) => (
          <button
            key={idx}
            className={`w-full rounded py-2 px-3 text-left border transition
              ${selected === idx
                ? idx === quizData[current].answer
                  ? "bg-green-100 border-green-400"
                  : "bg-red-100 border-red-400"
                : "border-gray-200 hover:bg-purpleblue-50"}
            `}
            onClick={() => handleOption(idx)}
            disabled={selected !== null}
            aria-label={opt}
          >
            {opt}
          </button>
        ))}
      </div>
      {showExplanation && (
        <div className="mt-4 flex flex-col gap-2">
          <span className="flex items-center gap-2 text-sm">
            {selected === quizData[current].answer ? (
              <Check className="text-green-500" size={18} aria-label="Correct" />
            ) : (
              <Eye className="text-blue-400" size={18} aria-label="Explanation" />
            )}
            <span>
              {quizData[current].explanation}
            </span>
          </span>
          <button className="self-end mt-2 text-purpleblue-600 font-semibold underline" onClick={handleNext}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizGame;
