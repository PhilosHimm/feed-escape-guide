import React, { useState } from "react";
import EmojiSlider from "../components/EmojiSlider";
import MentalHealthCarousel from "../components/MentalHealthCarousel";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { SectionNavigation } from "@/components/SectionNavigation";
import { Download, Heart, AlertTriangle, CheckCircle } from "lucide-react";

const wallpaperUrl = "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=480&q=80";

const MentalHealth = () => {
  const [mood, setMood] = useState(2);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <TypographyH1>🧠 Mental Health: The Foundation of Digital Wellness</TypographyH1>
          <TypographyP className="text-xl max-w-3xl mx-auto">
            The digital environment offers incredible affordances, but it also comes with accompanying burdens. Access to an unimaginable wealth of information online comes at a cost, making it fundamental to understand and navigate challenges such as disinformation, polarization, filter bubbles, and the impact of social media on mental health.
          </TypographyP>
        </div>

        {/* Research-Based Evidence */}
        <section>
          <Card className="border-red-200 bg-red-50/50">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <TypographyH2 className="text-red-800">The Research is Clear</TypographyH2>
                </div>
                <div className="space-y-6">
                  <div>
                    <TypographyP className="mb-4">
                      Research conducted in Canada in 2018 identified six mental health issues connected to social media use: lost sleep, difficulties concentrating, physical inertia, anxiety/depression, frustration/anger, and becoming envious of others. Between 12% and 22% of all users reported that social media exacerbated one of these factors in the last 12 months, with these numbers being higher among younger users.
                    </TypographyP>
                  </div>
                  
                  <Alert className="bg-red-100 border-red-300">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>2024 American Psychology Association Study:</strong> 41% of US teens with the highest social media use rated their mental health as poor or very poor, in contrast to 23% in the lowest use bracket. The average time spent on social media by an American teen was 4.8 hours per day.
                    </AlertDescription>
                  </Alert>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Social Isolation & Relationships</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Heavy social media use linked to less time spent with peers in-person</li>
                        <li>• In-person encounters tend to be much more emotionally satisfying</li>
                        <li>• Heavy users more likely to experience "perceived social isolation" (PSI)</li>
                        <li>• Social media can lead to toxic and hateful encounters online</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Mental Health Impacts</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Lost sleep and difficulties concentrating</li>
                        <li>• Physical inertia and anxiety/depression</li>
                        <li>• Frustration/anger and envy of others</li>
                        <li>• Contributing to low self-esteem and depression</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Did You Know Section */}
        <section>
          <Card className="border-orange-200 bg-orange-50">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  <TypographyH2 className="text-orange-800">Did you know?</TypographyH2>
                </div>
                <TypographyP className="text-orange-900">
                  Scrolling through idyllic vacation pictures, smiling faces, and new puppies on social media can induce users to make unfortunate comparisons between their own lives and the perceived happiness of others. This constant comparison, combined with FOMO and exposure to curated realities, can significantly impact mental health and self-esteem.
                </TypographyP>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Mood Check-In */}
        <section>
          <Card>
            <CardContent className="pt-6">
              <div className="text-center space-y-6">
                <TypographyH2>How Are You Feeling Right Now?</TypographyH2>
                <TypographyP>
                  Interactive polls can help gauge your feelings about social media's impact on your mental health. Being aware of your emotional state is the first step toward digital wellness.
                </TypographyP>
                <EmojiSlider value={mood} setValue={setMood} />
                {mood <= 1 && (
                  <Alert className="text-left">
                    <Heart className="h-4 w-4" />
                    <AlertDescription>
                      If you're feeling down after social media use, you're not alone. The tips below can help break the cycle and improve your mood.
                    </AlertDescription>
                  </Alert>
                )}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* The Science Behind Design */}
        <section>
          <Card className="border-purple-200 bg-purple-50/50">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-5 w-5 text-purple-600" />
                  <TypographyH2 className="text-purple-800">The Science: Exploitative Design</TypographyH2>
                </div>
                
                <TypographyP>
                  Social media interfaces are consciously designed to induce a sense of compulsion and exploit human evolutionary psychology. Understanding these mechanisms helps you recognize when you're being manipulated.
                </TypographyP>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Design Features That Hook You</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Infinite scroll:</strong> Newsfeeds never end, compelling users to stay longer</li>
                      <li>• <strong>Automatic play:</strong> YouTube and Netflix keep content flowing</li>
                      <li>• <strong>Flickering ellipsis:</strong> WhatsApp typing indicators create anticipation</li>
                      <li>• <strong>Intermittent reinforcements:</strong> Like slot machines, unpredictable rewards</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">Psychological Exploitation</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Emotion targeting:</strong> Platforms prioritize anger and outrage</li>
                      <li>• <strong>Social validation loops:</strong> Likes and comments create dependency</li>
                      <li>• <strong>Dopamine triggers:</strong> Updates and streaks release pleasure chemicals</li>
                      <li>• <strong>Quantified social behavior:</strong> Numbers make interactions addictive</li>
                    </ul>
                  </div>
                </div>

                <Alert className="bg-purple-100 border-purple-300">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Sean Parker (former Facebook President):</strong> Described how Facebook displays messages to create a "social-validation feedback loop." Groups like the Centre for Humane Technology advocate for overhaul of these exploitative design practices.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Warning Signs */}
        <section>
          <Card className="border-red-200 bg-red-50/50">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                  <TypographyH2 className="text-red-800">Warning Signs & Red Flags</TypographyH2>
                </div>
                
                <TypographyP>
                  The compulsive nature of social media use, characterized by difficulty taking a break from constant scrolling, contributes to several physical and mental health issues.
                </TypographyP>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Physical & Sleep Impacts</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Lost sleep from late night scrolling</li>
                      <li>• Physical inactivity and sedentary behavior</li>
                      <li>• Blue light disrupting circadian rhythms</li>
                      <li>• Eye strain and "text neck" posture problems</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">Social & Emotional Signs</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Less time spent with peers in-person</li>
                      <li>• Anxiety from constant information processing</li>
                      <li>• Difficulty concentrating on single tasks</li>
                      <li>• Declining quality of face-to-face interactions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Digital Wellness Tips Carousel */}
        <section>
          <TypographyH2 className="text-center mb-6">Daily Digital Wellness Tips</TypographyH2>
          <MentalHealthCarousel />
        </section>

        {/* Happiness Hacks */}
        <section>
          <Card className="border-green-200 bg-green-50/50">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <TypographyH2 className="text-green-800">Evidence-Based Happiness Hacks</TypographyH2>
                </div>
                <TypographyP>
                  Several practical tips and strategies are recommended to mitigate the negative impacts of social media on mental health:
                </TypographyP>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Sleep & Screen Management</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Avoid screens in the hour before bed</li>
                      <li>• Apply blue light filters or use greyscale at nighttime</li>
                      <li>• Turn off notifications and alerts</li>
                      <li>• Remove unnecessary apps from your home screen or phone</li>
                    </ul>
                    
                    <h4 className="font-semibold">Digital Boundaries</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Use Airplane mode when concentration is required</li>
                      <li>• Actively unplug: avoid phones at dinner table</li>
                      <li>• Don't bring phones on outdoor activities like dog walks</li>
                      <li>• Utilize screen time tracking apps (ScreenTime, Digital Wellbeing)</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">Mindful Consumption</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Remember people display only their "best selves" online</li>
                      <li>• No one's life consists of "unalloyed happiness"</li>
                      <li>• Treat digital media like food: meaningful connection is "healthy"</li>
                      <li>• Mindless scrolling is "junk" - consume intentionally</li>
                    </ul>
                    
                    <h4 className="font-semibold">Reality Check</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Recognize curated online personas vs. reality</li>
                      <li>• Focus on quality connections over quantity</li>
                      <li>• Prioritize useful information over entertainment</li>
                      <li>• Schedule regular offline activities and hobbies</li>
                    </ul>
                  </div>
                </div>
                
                <Alert className="bg-green-100 border-green-300">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Evidence-Based Tip:</strong> Studies show that treating digital media consumption like food - focusing on "nutritious" content (meaningful connections, useful information) while limiting "junk" (mindless scrolling) - significantly improves mental well-being.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Digital Resilience */}
        <section>
          <Card className="border-blue-200 bg-blue-50/50">
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <TypographyH2 className="text-blue-800">Building Digital Resilience</TypographyH2>
                </div>
                
                <TypographyP>
                  Digital resilience involves understanding social media's design, applying "happiness hacks" to gain control, and developing self-awareness about your digital interactions. This aligns with critical thinking strategies that encourage you to "think through" initial emotional reactions before acting on or sharing content.
                </TypographyP>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Self-Awareness Strategies</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Monitor your emotional state after social media use</li>
                      <li>• Recognize when content triggers strong emotions</li>
                      <li>• Pause before reacting to or sharing emotional content</li>
                      <li>• Practice critical thinking about information sources</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">Intentional Technology Use</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Set specific purposes for social media sessions</li>
                      <li>• Create time boundaries for digital consumption</li>
                      <li>• Choose quality connections over passive scrolling</li>
                      <li>• Regular digital detox periods for mental reset</li>
                    </ul>
                  </div>
                </div>

                <Alert className="bg-blue-100 border-blue-300">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Remember:</strong> Disinformation is often designed to trigger intense emotional responses that bypass rational thought. Building digital resilience helps you maintain critical thinking and emotional stability online.
                  </AlertDescription>
                </Alert>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Professional Help Note */}
        <section>
          <Card className="border-yellow-200 bg-yellow-50">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-yellow-600" />
                  <TypographyH2 className="text-yellow-800">When to Seek Additional Support</TypographyH2>
                </div>
                <TypographyP className="text-yellow-900">
                  While digital wellness strategies can significantly improve mental health, some situations may benefit from professional support. If social media use is significantly impacting your daily life, relationships, sleep, or overall well-being, consider speaking with a mental health professional who can provide personalized guidance and support.
                </TypographyP>
                <TypographyP className="text-sm text-yellow-800">
                  <strong>Remember:</strong> Seeking help is a sign of strength and self-awareness, not weakness.
                </TypographyP>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Downloadable Resource */}
        <section>
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <img
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=420&q=80"
                  alt="Daily digital wellness reminder"
                  className="rounded-lg border max-w-sm"
                />
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Daily Wellness Reminder</h3>
                    <TypographyP className="text-sm mb-4">
                      Download this wallpaper as a daily reminder to check in with your mental health and practice digital wellness.
                    </TypographyP>
                    <Button asChild>
                      <a
                        href={wallpaperUrl}
                        download="digital-wellness-reminder.jpg"
                        className="inline-flex items-center gap-2"
                      >
                        <Download className="h-4 w-4" />
                        Download Wellness Reminder
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <SectionNavigation currentPath="/mental-health" />
      </div>
    </div>
  );
};

export default MentalHealth;
