import React, { useState } from "react";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { SectionNavigation } from "@/components/SectionNavigation";
import { Trophy, Target, CheckCircle, AlertTriangle, Navigation } from "lucide-react";

interface Scenario {
  id: number;
  title: string;
  description: string;
  options: {
    text: string;
    points: number;
    isCorrect?: boolean;
    isClose?: boolean;
  }[];
  explanation: string;
}

const scenarios: Scenario[] = [
  {
    id: 1,
    title: "The Viral Cure",
    description: "You see a TikTok video claiming a 'secret smoothie ingredient' instantly boosts your brainpower for exams. It has millions of views, but the creator isn't a doctor or scientist. What's your smartest move?",
    options: [
      { text: "Share it immediately with your study group – gotta pass that exam!", points: 0 },
      { text: "Look up the 'ingredient' on a reputable health website (like Mayo Clinic or Health Canada) to see if there's scientific evidence.", points: 5, isCorrect: true },
      { text: "Try the smoothie, it's just fruit and veggies, right?", points: 2, isClose: true }
    ],
    explanation: "Always verify health claims with reputable sources before believing or sharing them. Millions of views don't equal scientific validity."
  },
  {
    id: 2,
    title: "The Photo Tag",
    description: "Your friend just tagged you in a blurry, unflattering photo on Instagram from last night's party. It's not terrible, but you really don't want it online. What's your smartest move?",
    options: [
      { text: "Immediately untag yourself and ask your friend to remove the photo, explaining your privacy concerns.", points: 5, isCorrect: true },
      { text: "Like the photo anyway to avoid awkwardness, hoping it gets lost in the feed.", points: 2, isClose: true },
      { text: "Post an even more unflattering photo of your friend in retaliation.", points: 0 }
    ],
    explanation: "You have the right to control your digital image. Communicate respectfully with friends about your privacy boundaries."
  },
  {
    id: 3,
    title: "The Endless Scroll",
    description: "It's 11 PM, you have a big assignment due tomorrow, but you've been scrolling through TikTok for two hours, feeling more tired than inspired. What's your smartest move?",
    options: [
      { text: 'Keep scrolling for "just 5 more minutes" to see if something interesting pops up.', points: 0 },
      { text: 'Close the app immediately, turn on your phone\'s "Do Not Disturb," and put your phone in another room.', points: 5, isCorrect: true },
      { text: "Text a friend complaining about how much homework you have while still scrolling.", points: 2, isClose: true }
    ],
    explanation: "Break the doom-scroll cycle with decisive action. Physical separation from your device is often the most effective strategy."
  },
  {
    id: 4,
    title: "The 'Free' App",
    description: "You want to download a new, free game. When you install it, it asks for permission to access your microphone, camera, and contacts. What's your smartest move?",
    options: [
      { text: "Accept all permissions – it's just a game, they probably need it.", points: 0 },
      { text: "Decline the unnecessary permissions (microphone, contacts) and only allow camera if the game explicitly needs it (e.g., for AR features).", points: 5, isCorrect: true },
      { text: "Delete the app. It's too suspicious.", points: 2, isClose: true }
    ],
    explanation: "Only grant permissions that make sense for the app's functionality. Your personal data is valuableprotect it."
  },
  {
    id: 5,
    title: "The Echo Chamber Effect",
    description: "All your social media feeds are filled with posts from people who share the exact same political views as you. You rarely see anything that challenges your perspective. What's your smartest move?",
    options: [
      { text: "Enjoy the agreement – it's nice to feel understood!", points: 0 },
      { text: "Actively seek out and follow a few reputable news sources or commentators with different (but respectful) viewpoints to broaden your perspective.", points: 5, isCorrect: true },
      { text: "Unfollow anyone who occasionally shares something you disagree with.", points: 2, isClose: true }
    ],
    explanation: "Diverse perspectives help you think critically and understand complex issues. Seek out respectful viewpoints that challenge your thinking."
  },
  {
    id: 6,
    title: "The Targeted Ad Mystery",
    description: "You were just talking with your friends about getting new running shoes, and now you're seeing ads for those exact shoes everywhere on your feed. What's your smartest move?",
    options: [
      { text: "Wow, social media is reading my mind! This is so convenient.", points: 0 },
      { text: "Ignore it, it's just a coincidence.", points: 2, isClose: true },
      { text: "Remember your app's lesson on ad tracking and data profiling. Check your device's ad personalization settings and consider using a privacy-focused browser for shopping.", points: 5, isCorrect: true }
    ],
    explanation: "This is data tracking in action. Understanding how your data is used empowers you to make informed privacy decisions."
  },
  {
    id: 7,
    title: "The Late-Night FOMO",
    description: "It's late, you're trying to wind down for bed, but your friends are posting exciting stories from a party you decided not to go to. You feel a pang of FOMO. What's your smartest move?",
    options: [
      { text: "Keep scrolling through their stories to see everything you're missing.", points: 0 },
      { text: "Put your phone away (maybe in another room), and choose a non-screen activity like reading a physical book or listening to calm music.", points: 5, isCorrect: true },
      { text: "Text your friends that you're bored and demand they leave the party to hang out with you.", points: 2, isClose: true }
    ],
    explanation: "FOMO is a natural feeling, but scrolling late at night hurts your sleep and mental health. Choose calming offline activities instead."
  },
  {
    id: 8,
    title: "The Suspicious DM",
    description: "You receive a direct message from someone you don't know, claiming you've won a new gaming console, but you need to click a link and enter your personal details to claim it. What's your smartest move?",
    options: [
      { text: "Click the link immediately – free console!", points: 0 },
      { text: "Realize it's likely a phishing scam. Delete the message, block the sender, and report it if possible.", points: 5, isCorrect: true },
      { text: "Reply asking for more details about the console before clicking anything.", points: 2, isClose: true }
    ],
    explanation: "This is a classic phishing scam. Legitimate companies don't randomly DM people with prizes. Trust your instincts and report suspicious messages."
  },
  {
    id: 9,
    title: "The Mindless Habit",
    description: "You realize you automatically open social media apps every time you feel bored, even for a few seconds (e.g., waiting for the bus, in line). What's your smartest move?",
    options: [
      { text: "Just accept it, it's what everyone does.", points: 0 },
      { text: "Replace the habit: instead of opening social media, open a book app, a podcast, or a quick brain game.", points: 5, isCorrect: true },
      { text: "Delete all your social media apps permanently.", points: 2, isClose: true }
    ],
    explanation: "Habit replacement works better than elimination. Choose positive alternatives that engage your mind in meaningful ways."
  },
  {
    id: 10,
    title: "The Content Creator's Dilemma",
    description: "You created an amazing digital artwork you want to share online. You want people to see it and even remix it, but you also want credit for your work. What's your smartest move?",
    options: [
      { text: "Just post it; if someone uses it, they'll credit you, right?", points: 0 },
      { text: "Use a Creative Commons license (like CC BY or CC BY-SA) to specify how others can use and share your work while ensuring you get attribution.", points: 5, isCorrect: true },
      { text: 'Put a huge "DO NOT USE" watermark over the entire image.', points: 2, isClose: true }
    ],
    explanation: "Creative Commons licenses let you share your work while maintaining control. They're a perfect balance between openness and protection."
  }
];

const DigitalNavigator = () => {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const handleAnswerSelection = (optionIndex: number) => {
    if (selectedAnswer !== null) return; // Prevent multiple selections
    
    setSelectedAnswer(optionIndex);
    const points = scenarios[currentScenario].options[optionIndex].points;
    setScore(score + points);
    setUserAnswers([...userAnswers, optionIndex]);
    setShowExplanation(true);
  };

  const handleNextScenario = () => {
    if (currentScenario < scenarios.length - 1) {
      setCurrentScenario(currentScenario + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setGameCompleted(true);
    }
  };

  const restartGame = () => {
    setCurrentScenario(0);
    setScore(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setGameCompleted(false);
    setUserAnswers([]);
  };

  const getScoreMessage = () => {
    const percentage = (score / 50) * 100;
    if (percentage >= 90) return { message: "Digital Literacy Master! 🏆", color: "text-green-600" };
    if (percentage >= 75) return { message: "Digital Navigator! 🧭", color: "text-blue-600" };
    if (percentage >= 60) return { message: "Getting There! 📈", color: "text-yellow-600" };
    return { message: "Keep Learning! 📚", color: "text-red-600" };
  };

  if (gameCompleted) {
    const scoreMessage = getScoreMessage();
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-6">
            <TypographyH1>🎉 Quiz Complete!</TypographyH1>
            <Card className="border-2 border-green-200 bg-green-50">
              <CardContent className="pt-6">
                <div className="text-center space-y-4">
                  <Trophy className="h-16 w-16 mx-auto text-yellow-500" />
                  <TypographyH2 className={scoreMessage.color}>
                    {scoreMessage.message}
                  </TypographyH2>
                  <div className="text-4xl font-bold">
                    {score} / 50 points ({Math.round((score / 50) * 100)}%)
                  </div>
                  <TypographyP>
                    You've completed the Digital Wellness Quiz! Your choices show how well you can navigate common digital scenarios.
                  </TypographyP>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Your Digital Wellness Score Breakdown:</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Perfect answers (5 points):</span>
                      <span className="font-semibold text-green-600">
                        {userAnswers.filter((answer, index) => scenarios[index].options[answer].isCorrect).length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Close answers (2 points):</span>
                      <span className="font-semibold text-yellow-600">
                        {userAnswers.filter((answer, index) => scenarios[index].options[answer].isClose).length}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Areas for improvement:</span>
                      <span className="font-semibold text-red-600">
                        {userAnswers.filter((answer, index) => !scenarios[index].options[answer].isCorrect && !scenarios[index].options[answer].isClose).length}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-4">Keep Building Your Digital Wellness:</h3>
                  <div className="space-y-2 text-sm">
                    <div>• Review the Mental Health section for mood management</div>
                    <div>• Explore Privacy settings on your devices</div>
                    <div>• Practice the Digital Balance strategies daily</div>
                    <div>• Share this challenge with friends and family</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={restartGame} size="lg">
                <Target className="h-4 w-4 mr-2" />
                Retake Quiz
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/about">Continue to About Us</a>
              </Button>
            </div>
          </div>

          <SectionNavigation currentPath="/digital-navigator" />
        </div>
      </div>
    );
  }

  const scenario = scenarios[currentScenario];
  const progress = ((currentScenario + 1) / scenarios.length) * 100;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <TypographyH1>🧭 Digital Wellness Quiz</TypographyH1>
          <TypographyP className="text-xl">
            Test your digital literacy skills with real-world scenarios. Make the smartest choices to earn points and become a digital wellness expert!
          </TypographyP>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-sm text-gray-600">
            Scenario {currentScenario + 1} of {scenarios.length} • Score: {score}/50
          </div>
        </div>

        {/* Current Scenario */}
        <Card className="border-2 border-blue-200">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Navigation className="h-5 w-5 text-blue-600" />
                <TypographyH2 className="text-blue-800">{scenario.title}</TypographyH2>
              </div>
              
              <TypographyP className="text-lg">
                {scenario.description}
              </TypographyP>

              <div className="space-y-3">
                {scenario.options.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedAnswer === index ? "default" : "outline"}
                    className={`w-full text-left justify-start p-4 h-auto min-h-[60px] ${
                      selectedAnswer !== null
                        ? selectedAnswer === index
                          ? option.isCorrect
                            ? "bg-green-100 border-green-500 text-green-800"
                            : option.isClose
                            ? "bg-yellow-100 border-yellow-500 text-yellow-800"
                            : "bg-red-100 border-red-500 text-red-800"
                          : "opacity-50"
                        : "hover:bg-blue-50"
                    }`}
                    onClick={() => handleAnswerSelection(index)}
                    disabled={selectedAnswer !== null}
                  >
                    <div className="flex items-start gap-3 w-full">
                      <span className="font-semibold text-lg flex-shrink-0 mt-0.5">
                        {String.fromCharCode(65 + index)}.
                      </span>
                      <span className="flex-1 text-wrap break-words leading-relaxed">
                        {option.text}
                      </span>
                      {selectedAnswer === index && (
                        <div className="flex-shrink-0 flex items-center gap-1 ml-2">
                          {option.isCorrect ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : option.isClose ? (
                            <AlertTriangle className="h-5 w-5 text-yellow-600" />
                          ) : (
                            <AlertTriangle className="h-5 w-5 text-red-600" />
                          )}
                          <span className="font-semibold">+{option.points}</span>
                        </div>
                      )}
                    </div>
                  </Button>
                ))}
              </div>

              {showExplanation && (
                <Alert className="bg-blue-50 border-blue-200">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Explanation:</strong> {scenario.explanation}
                  </AlertDescription>
                </Alert>
              )}

              {showExplanation && (
                <div className="flex justify-center">
                  <Button onClick={handleNextScenario} size="lg">
                    {currentScenario < scenarios.length - 1 ? "Next Scenario" : "View Results"}
                    <Navigation className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <SectionNavigation currentPath="/digital-navigator" />
      </div>
    </div>
  );
};

export default DigitalNavigator;
