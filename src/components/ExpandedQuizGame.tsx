
import React, { useState, useEffect } from "react";
import { Check, X, Info, ExternalLink } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

type Quiz = {
  id: number;
  question: string;
  options: string[];
  answer: number;
  explanation: string;
  category: string;
  source?: string;
};

const expandedQuizData: Quiz[] = [
  {
    id: 1,
    question: "🚨 'Viral Challenge Leads to Miracle Cure for Exams!'",
    options: [
      "Real news – that's a popular trend",
      "Fake news – likely clickbait",
    ],
    answer: 1,
    explanation: "This is a fake headline. Viral 'challenges' promising miracle cures are common clickbait and misinformation.",
    category: "Health Misinformation"
  },
  {
    id: 2,
    question: "📰 'Local University Implements 4-Day School Week Starting Next Month'",
    options: [
      "Real news – check local sources",
      "Fake news – sounds too dramatic",
    ],
    answer: 0,
    explanation: "Always verify local news through multiple sources. This could be real - check your local news outlets!",
    category: "Local News"
  },
  {
    id: 3,
    question: "🔔 'Instagram Now Lets You Control What You See First'",
    options: [
      "Real news – Instagram has this setting",
      "Fake news – you have no control",
    ],
    answer: 0,
    explanation: "This one is real! Instagram lets you set 'Favorites' or 'Following' to customize your feed.",
    category: "Tech Updates"
  },
  {
    id: 4,
    question: "⚡ 'Scientists Discover Phone Batteries Last 10x Longer with This Simple Trick!'",
    options: [
      "Real breakthrough – sounds scientific",
      "Fake news – classic clickbait format",
    ],
    answer: 1,
    explanation: "Classic clickbait! Real scientific breakthroughs are reported by reputable sources with detailed methodology.",
    category: "Tech Misinformation"
  },
  {
    id: 5,
    question: "🏛️ 'New Study Shows 73% of Students Prefer Online Learning'",
    options: [
      "Real study – specific statistics given",
      "Fake news – too convenient a number",
    ],
    answer: 0,
    explanation: "This could be real, but always check: Who conducted the study? What was the sample size? Look for the original research.",
    category: "Research Claims"
  },
  {
    id: 6,
    question: "🌍 'Climate Change Causes More Pizza Cravings, New Research Shows'",
    options: [
      "Real study – climate affects behavior",
      "Fake news – absurd correlation",
    ],
    answer: 1,
    explanation: "This is fake! Beware of absurd correlations presented as scientific fact. Real research follows rigorous methodology.",
    category: "Pseudoscience"
  }
];

const factCheckingTips = [
  "Check the source - Is it a reputable news organization?",
  "Look for author credentials - Are they an expert in the field?",
  "Verify with multiple sources - Does anyone else report this?",
  "Check the date - Is this current or old news being recycled?",
  "Look for evidence - Are there links to studies or official sources?",
  "Check your bias - Does this confirm what you want to believe?"
];

const ExpandedQuizGame: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState<number[]>([]);
  const [showTips, setShowTips] = useState(false);

  // Load saved progress from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("expandedQuizProgress");
    if (saved) {
      try {
        const data = JSON.parse(saved);
        if (typeof data.current === "number") setCurrent(data.current);
        if (typeof data.score === "number") setScore(data.score);
        if (Array.isArray(data.completed)) setCompleted(data.completed);
      } catch (_) {
        /* ignore parse errors */
      }
    }
  }, []);

  useEffect(() => {
    const payload = { current, score, completed };
    localStorage.setItem("expandedQuizProgress", JSON.stringify(payload));
  }, [current, score, completed]);

  const handleOption = (idx: number) => {
    setSelected(idx);
    setShowExplanation(true);

    if (idx === expandedQuizData[current].answer && !completed.includes(current)) {
      setScore(prev => prev + 1);
      setCompleted(prev => [...prev, current]);
      toast({ title: "Correct!", description: "Nice job." });
    } else if (idx !== expandedQuizData[current].answer) {
      toast({
        title: "Oops",
        description: "That's not quite right.",
        variant: "destructive",
      });
    }
  };

  const handleNext = () => {
    setSelected(null);
    setShowExplanation(false);
    const next = (current + 1) % expandedQuizData.length;
    if (next === 0) {
      toast({ title: "Quiz completed", description: `Score: ${score}/${expandedQuizData.length}` });
    }
    setCurrent(next);
  };

  const resetQuiz = () => {
    setSelected(null);
    setShowExplanation(false);
    setCurrent(0);
    setScore(0);
    setCompleted([]);
    toast({ title: "Quiz reset" });
  };

  const currentQuiz = expandedQuizData[current];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      {/* Quiz Header */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h3 className="font-bold text-xl text-purpleblue-600">Advanced Misinformation Quiz</h3>
            <p className="text-sm text-gray-600">Question {current + 1} of {expandedQuizData.length}</p>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-green-600">Score: {score}/{expandedQuizData.length}</div>
            <div className="text-xs text-gray-500">{Math.round((score / expandedQuizData.length) * 100)}% accuracy</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div 
            className="bg-purpleblue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((current + 1) / expandedQuizData.length) * 100}%` }}
          ></div>
        </div>

        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block bg-purpleblue-100 text-purpleblue-700 px-3 py-1 rounded-full text-sm font-medium">
            {currentQuiz.category}
          </span>
        </div>

        {/* Question */}
        <div className="text-lg md:text-xl mb-4 font-medium">{currentQuiz.question}</div>

        {/* Options */}
        <div className="flex flex-col gap-3 mb-4">
          {currentQuiz.options.map((opt, idx) => (
            <button
              key={idx}
              className={`w-full rounded-lg py-3 px-4 text-left border-2 transition-all
                ${selected === idx
                  ? idx === currentQuiz.answer
                    ? "bg-green-100 border-green-400 text-green-800"
                    : "bg-red-100 border-red-400 text-red-800"
                  : "border-gray-200 hover:bg-purpleblue-50 hover:border-purpleblue-200"}
              `}
              onClick={() => handleOption(idx)}
              disabled={selected !== null}
            >
              <div className="flex items-center justify-between">
                <span>{opt}</span>
                {selected === idx && (
                  idx === currentQuiz.answer ? 
                    <Check className="text-green-600" size={20} /> : 
                    <X className="text-red-600" size={20} />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Explanation */}
        {showExplanation && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <div className="flex items-start gap-2">
              <Info className="text-blue-500 mt-1" size={18} />
              <div>
                <p className="text-blue-800">{currentQuiz.explanation}</p>
                {currentQuiz.source && (
                  <a 
                    href={currentQuiz.source} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm mt-2"
                  >
                    Learn more <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex justify-between items-center">
          {showExplanation ? (
            <button 
              className="bg-purpleblue-600 text-white px-6 py-2 rounded-lg hover:bg-purpleblue-700 transition"
              onClick={handleNext}
            >
              {current === expandedQuizData.length - 1 ? 'Start Over' : 'Next Question →'}
            </button>
          ) : (
            <div></div>
          )}
          
          <button 
            onClick={resetQuiz}
            className="text-purpleblue-600 hover:text-purpleblue-700 font-medium"
          >
            Reset Quiz
          </button>
        </div>
      </div>

      {/* Fact-Checking Tips */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <button
          onClick={() => setShowTips(!showTips)}
          className="w-full flex items-center justify-between text-left"
        >
          <h3 className="font-bold text-lg text-purpleblue-700">Fact-Checking Toolkit</h3>
          <span className="text-purpleblue-500">{showTips ? '−' : '+'}</span>
        </button>
        
        {showTips && (
          <div className="mt-4 space-y-3">
            {factCheckingTips.map((tip, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-purpleblue-50 rounded-lg">
                <span className="bg-purpleblue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {idx + 1}
                </span>
                <p className="text-purpleblue-700">{tip}</p>
              </div>
            ))}
            
            <div className="mt-4 pt-4 border-t border-purpleblue-200">
              <h4 className="font-semibold text-purpleblue-700 mb-2">Recommended Fact-Checking Sites:</h4>
              <div className="flex flex-wrap gap-2">
                {['Snopes.com', 'FactCheck.org', 'PolitiFact.com', 'AP Fact Check'].map(site => (
                  <span key={site} className="bg-purpleblue-100 text-purpleblue-700 px-3 py-1 rounded-full text-sm">
                    {site}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpandedQuizGame;
