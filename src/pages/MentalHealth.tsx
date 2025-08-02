import React, { useState } from "react";
import EmojiSlider from "../components/EmojiSlider";
import MentalHealthCarousel from "../components/MentalHealthCarousel";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { SectionNavigation } from "@/components/SectionNavigation";
import { Heart, AlertTriangle, CheckCircle } from "lucide-react";

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
                      A Canadian study from 2018 found that social media use is associated with six major mental health concerns: poor sleep, trouble concentrating, lack of physical activity, anxiety or depression, irritability, and feeling jealous of others.
                      Between 12% and 22% of users said social media had made at least one of these issues worse in the past year, and younger users were the most affected.
                    </TypographyP>
                  </div>
                  
                  <Alert className="bg-red-100 border-red-300">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>2024 American Psychological Association Study:</strong> 41% of U.S. teens who used social media the most reported having poor or very poor mental health, almost double the rate of those who used it the least (23%). On average, American teens were spending about 4.8 hours a day on social platforms.
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
                  Heavy social media use is linked to emotional ups and downs - to increased rates of anxiety, depression, and psychological distress especially among younger teens. The constant comparison, fear of missing out (FOMO), and exposure to realities can take a toll. But, small consistent steps can build resilience and self-compassion online.
                </TypographyP>
                <div className="text-xs text-orange-700 mt-3">
                  <strong>Reference:</strong> <a href="https://www.mhrc.ca/blog-research-brief/associations-between-social-media-use-personal-screen-time-and-mental-health-indicators-among-canadian-youth" className="underline hover:text-orange-900" target="_blank" rel="noopener noreferrer">Mental Health Research Canada - Social Media Use and Mental Health Indicators Among Canadian Youth</a>
                </div>
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
                  Social media platforms are purposely built to keep you hooked, using tricks that tap into how our brains work. Knowing these tactics helps you spot when you're being pulled in.
                </TypographyP>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Design Features That Keep You Scrolling</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Infinite scroll:</strong> Your feed never ends, so it's hard to stop</li>
                      <li>• <strong>Auto-play:</strong> Videos play one after another without pause</li>
                      <li>• <strong>Typing indicators:</strong> That little "..." on WhatsApp keeps you waiting</li>
                      <li>• <strong>Random rewards:</strong> Likes and notifications pop up unpredictably, like a slot machine</li>
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
                  <TypographyH2 className="text-green-800">Survival Guide: How to Survive the Internet without losing your mind</TypographyH2>
                </div>
                <TypographyP>
                  Digital Wellness Toolkit - Here are some real-deal tips to help you dodge the downsides of social media and keep your mental health in check:
                </TypographyP>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Curate Your Feed</h4>
                    <TypographyP className="text-sm mb-2">
                      Take charge of what you see, your feed should lift you up.
                    </TypographyP>
                    <ul className="space-y-2 text-sm">
                      <li>• Actively unfollow, block, or mute accounts that makes you uncomfortable (click the not interested button)</li>
                      <li>• <strong>Pro Tip:</strong> Follow Accounts that inspire you, teach you something new, make you laugh or spreading positivity</li>
                    </ul>
                    
                    <h4 className="font-semibold">Set Boundaries</h4>
                    <TypographyP className="text-sm mb-2">
                      Create rules to minimize screen time and stick to them. Think of them as healthy defenses around your digital life.
                    </TypographyP>
                    <ul className="space-y-2 text-sm">
                      <li>• Use your phones built in screen time (iOS) or "Digital Well-being" (Android) features to set daily limits on apps you tend to overuse or want to cut back on</li>
                      <li>• Designate no phone zones (no phones at the dinner table or 30 minutes before bed)</li>
                      <li>• <strong>Pro Tip:</strong> Follow the 20/20/20 Rule - for every 20 minutes of screen time, look at something 20 feet away for 20 seconds</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">Be Mindful When You Scroll</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Pay attention to how you feel while you're using social media</li>
                    </ul>
                    
                    <h4 className="font-semibold">Prioritize Real Life Connections</h4>
                    <TypographyP className="text-sm mb-2">
                      The digital world is cool but be sure to make time for your close friends and family as that connection is irreplaceable.
                    </TypographyP>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>In-Person hang outs:</strong> Make time for face-to-face interactions with friends and family</li>
                      <li>• <strong>Hobbies and Interests:</strong> Pick up a hobby or even a new skill that interests you - drawing, playing an instrument, sports, reading, baking, walking in nature</li>
                      <li>• <strong>Sleep matters:</strong> prioritize your well-being and getting enough rest as it impacts how your day would look like, your mood, and ability to cope with stress</li>
                    </ul>
                  </div>
                </div>
                
                <Alert className="bg-green-100 border-green-300">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Science Says:</strong> Treating your digital diet like real food, focusing on nutritious, meaningful content and cutting back on junk can effectively boost your mental well-being.
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
                  Digital resilience means understanding how social media is designed to affect you, using smart "happiness hacks" to take back control, and becoming more aware of how your digital habits impact your emotions and thinking. It's all about slowing down and thinking critically before reacting or sharing online.
                </TypographyP>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Self-Awareness Tips</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Check in with how you feel after scrolling</li>
                      <li>• Notice when certain posts trigger strong emotions or feels</li>
                      <li>• Pause and think before liking, commenting, or sharing heated content</li>
                      <li>• Question where the info is coming from: be a fact-checker</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold">Intentional Tech Use</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• Have a clear goal when you open social media</li>
                      <li>• Set limits on how long you spend online</li>
                      <li>• Focus on meaningful connections, not just mindless scrolling</li>
                      <li>• Take regular breaks from screens to recharge</li>
                    </ul>
                  </div>
                </div>

                <Alert className="bg-blue-100 border-blue-300">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Heads up:</strong> Misinformation is often made to spark big emotional reactions and bypass your logical thinking. Building digital resilience helps you stay calm, think clearly, and avoid getting caught up in the drama.
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
                  If social media is seriously affecting your mood, relationships, sleep, or daily life, it's advisable and smart to talk to a mental health professional. Getting help is a strength, not a weakness.
                </TypographyP>
                <TypographyP className="text-sm text-yellow-800">
                  <strong>When to Get Extra Help:</strong> Seeking help is a sign of strength and self-awareness, not weakness.
                </TypographyP>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Wellness Meme Gallery */}
        <section>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl">😂</span>
                    <h3 className="font-semibold text-lg">Wellness Meme Gallery</h3>
                    <span className="text-2xl">🧠</span>
                  </div>
                  <TypographyP className="text-sm max-w-2xl mx-auto">
                    A curated gallery where students can submit and view mental health-themed memes. Promotes prosumer culture and meme creation, encouraging emotional expression through humor and creativity.
                  </TypographyP>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-2">📱</div>
                    <h4 className="font-semibold text-sm mb-2">Screen Time Struggles</h4>
                    <TypographyP className="text-xs text-gray-600">
                      "Me: I'll just check Instagram for 5 minutes"<br/>
                      "Also me: 3 hours later..."
                    </TypographyP>
                  </div>

                  <div className="bg-green-50 border-2 border-dashed border-green-200 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-2">🧘</div>
                    <h4 className="font-semibold text-sm mb-2">Digital Detox Vibes</h4>
                    <TypographyP className="text-xs text-gray-600">
                      "Phone: *exists*"<br/>
                      "My focus: Aight, I'mma head out"
                    </TypographyP>
                  </div>

                  <div className="bg-purple-50 border-2 border-dashed border-purple-200 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-2">😴</div>
                    <h4 className="font-semibold text-sm mb-2">Sleep vs Social Media</h4>
                    <TypographyP className="text-xs text-gray-600">
                      "Brain at 11 PM: Time to sleep"<br/>
                      "Brain at 2 AM: But did you see this TikTok?"
                    </TypographyP>
                  </div>

                  <div className="bg-yellow-50 border-2 border-dashed border-yellow-200 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-2">🎭</div>
                    <h4 className="font-semibold text-sm mb-2">Online vs Reality</h4>
                    <TypographyP className="text-xs text-gray-600">
                      "Instagram: Living my best life ✨"<br/>
                      "Reality: Ate cereal for dinner again"
                    </TypographyP>
                  </div>

                  <div className="bg-red-50 border-2 border-dashed border-red-200 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-2">🔄</div>
                    <h4 className="font-semibold text-sm mb-2">Scroll Loop</h4>
                    <TypographyP className="text-xs text-gray-600">
                      "Refreshes feed"<br/>
                      "Same posts"<br/>
                      "Refreshes again anyway"
                    </TypographyP>
                  </div>

                  <div className="bg-teal-50 border-2 border-dashed border-teal-200 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-2">💪</div>
                    <h4 className="font-semibold text-sm mb-2">Digital Wellness Win</h4>
                    <TypographyP className="text-xs text-gray-600">
                      "Me: *puts phone in another room*"<br/>
                      "Productivity: Allow me to introduce myself"
                    </TypographyP>
                  </div>
                </div>

                <div className="text-center space-y-4">
                  <TypographyP className="text-sm text-gray-600">
                    <strong>Create Your Own:</strong> Use humor to process your digital wellness journey! Memes help us laugh at shared struggles and build community around mental health awareness.
                  </TypographyP>
                  <div className="flex flex-wrap justify-center gap-2 text-xs">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">#DigitalWellness</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full">#MentalHealthMemes</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full">#ScreenTimeStruggles</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full">#DigitalDetox</span>
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
