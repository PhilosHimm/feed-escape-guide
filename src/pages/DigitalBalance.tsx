import React from "react";
import TipRatingChecklist from "../components/TipRatingChecklist";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { SectionNavigation } from "@/components/SectionNavigation";
import { Clock, Target, Scale, Shield, Brain, Users, Smartphone, CheckCircle } from "lucide-react";

const DigitalBalance = () => (
  <div className="container mx-auto py-8 px-4">
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <TypographyH1>⚖️ Digital Balance: Finding Your Equilibrium</TypographyH1>
        <TypographyP className="text-xl">
          Maintaining a healthy digital balance is crucial in an online environment where constant self-surveillance for "self-branding" can lead to tension and stress. While digital communication tools offer incredible opportunities, they also carry the burden of potential distraction and commodification of personal behavior.
        </TypographyP>
        <Alert className="bg-green-50 border-green-200">
          <Scale className="h-4 w-4" />
          <AlertDescription>
            <strong>Key Insight:</strong> Finding balance is not a zero-sum game—you don't have to abandon digital tools entirely, but rather learn to manage their use effectively for optimal mental health and productivity.
          </AlertDescription>
        </Alert>
      </div>

      {/* Healthy Usage Patterns */}
      <section>
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Users className="h-5 w-5 text-blue-600" />
                <TypographyH2 className="text-blue-800">Healthy Usage Patterns</TypographyH2>
              </div>
              
              <TypographyP>
                A significant aspect of healthy usage involves understanding the psychological impacts of digital media. Scrolling through curated online portrayals of "idyllic vacation pictures, smiling faces, and new puppies" can unfortunately induce negative comparisons between one's own life and the perceived happiness of others.
              </TypographyP>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Digital Media as Food Analogy</h4>
                  <TypographyP className="text-sm">
                    Treat digital media like food: meaningful connection and useful information are "healthy"; mindless scrolling is "junk." While practices like taking selfies can be critiqued for narcissism, they also represent an attempt at social connection.
                  </TypographyP>
                </div>
                
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">In-Person vs Digital Connection</h4>
                  <TypographyP className="text-sm">
                    Heavy social media use may lead to less time spent on more emotionally satisfying in-person interactions. Research shows face-to-face encounters are "much more emotionally satisfying" than digital engagement.
                  </TypographyP>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Screen Time Awareness */}
      <section>
        <Card className="border-red-200 bg-red-50/50">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Smartphone className="h-5 w-5 text-red-600" />
                <TypographyH2 className="text-red-800">Screen Time Awareness</TypographyH2>
              </div>
              
              <Alert className="bg-red-100 border-red-300">
                <Brain className="h-4 w-4" />
                <AlertDescription>
                  <strong>Critical Insight:</strong> "Multitasking is a myth." Studies show that switching between tasks, especially with digital tools, diverts crucial brain activity and reduces efficiency through "attention residue"—the mind continues thinking about previous tasks even after moving to new ones.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <h4 className="font-semibold">Communication Overload Reality</h4>
                <TypographyP className="text-sm">
                  Research indicates that individuals spend a considerable portion of their work time (one-third at the office, half at home) reading and answering emails, with a substantial portion being neither urgent nor important. This "communication overload" is exacerbated by mindless "cc'ing" and "reply alls."
                </TypographyP>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Exploitative Design Features</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Infinite scroll:</strong> Eliminates natural breaks in user experience</li>
                    <li>• <strong>Automatic play:</strong> Keeps content flowing without user choice</li>
                    <li>• <strong>Intermittent reinforcements:</strong> Unpredictable rewards like slot machines</li>
                    <li>• <strong>Social-validation feedback loops:</strong> Dopamine release from likes/retweets</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Mental Health Impact Statistics</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Higher social media use → lost sleep, difficulty concentrating</li>
                    <li>• Physical inertia and anxiety/depression</li>
                    <li>• American teens average 4.8 hours daily on social media</li>
                    <li>• Blue light disrupts circadian rhythms and sleep patterns</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Boundary Setting */}
      <section>
        <Card className="border-green-200 bg-green-50/50">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-green-600" />
                <TypographyH2 className="text-green-800">Boundary Setting Strategies</TypographyH2>
              </div>
              
              <TypographyP>
                To establish healthy limits and manage digital use, various evidence-based strategies can be employed:
              </TypographyP>

              <div className="space-y-4">
                <h4 className="font-semibold">Legal Framework Recognition</h4>
                <div className="bg-green-100 p-4 rounded-lg">
                  <TypographyP className="text-sm">
                    <strong>Right to Disconnect:</strong> France has established a "right to disconnect" law for workers, and Ontario mandates that companies with over 25 employees have written policies for disconnecting from work communications.
                  </TypographyP>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Email & Communication Management</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Check inbox only once per hour instead of constantly</li>
                    <li>• Unsubscribe from unnecessary newsletters</li>
                    <li>• Don't respond immediately—some "urgent" messages resolve themselves</li>
                    <li>• Be succinct and use assertive statements</li>
                    <li>• Aim for "inbox zero" by end of each day</li>
                  </ul>
                  
                  <h4 className="font-semibold">Screen Time Tools</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Apple's ScreenTime or Google's Digital Wellbeing</li>
                    <li>• RescueTime for website time tracking</li>
                    <li>• Browser extensions for selective blocking</li>
                    <li>• Airplane mode for concentration periods</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">"Happiness Hacks"</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Avoid screens in the hour before bed</li>
                    <li>• Turn off notifications and alerts</li>
                    <li>• Remove unnecessary apps from home screen</li>
                    <li>• Apply blue light filters or greyscale at night</li>
                    <li>• Create phone-free zones (dinner table, bedroom)</li>
                  </ul>
                  
                  <h4 className="font-semibold">Physical Boundaries</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Don't bring phone to dinner table</li>
                    <li>• Leave device behind during walks</li>
                    <li>• Prioritize in-person social interactions</li>
                    <li>• Schedule device-free activities</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Interactive Tip Rating */}
      <TipRatingChecklist />

      {/* Alternative Activities */}
      <section>
        <Card className="border-purple-200 bg-purple-50/50">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-5 w-5 text-purple-600" />
                <TypographyH2 className="text-purple-800">Alternative Activities</TypographyH2>
              </div>
              
              <TypographyP>
                To foster a balanced lifestyle, it's important to consciously integrate offline experiences:
              </TypographyP>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Unplugging Strategies</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Simple actions like not bringing phone to dinner</li>
                    <li>• Device-free walks and outdoor activities</li>
                    <li>• Scheduled offline time blocks</li>
                    <li>• Engaging in hands-on hobbies</li>
                  </ul>
                </div>
                
                <div className="bg-purple-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Social Connection Priority</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• In-person interactions are "much more emotionally satisfying"</li>
                    <li>• Face-to-face conversations over digital messaging</li>
                    <li>• Group activities without devices</li>
                    <li>• Community involvement and volunteering</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Mindful Consumption */}
      <section>
        <Card className="border-orange-200 bg-orange-50/50">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="h-5 w-5 text-orange-600" />
                <TypographyH2 className="text-orange-800">Mindful Consumption</TypographyH2>
              </div>
              
              <TypographyP>
                In an environment characterized by information overload, mindful consumption involves a critical and curated approach to digital content:
              </TypographyP>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Critical Information Processing</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Be aware of "filter bubbles" creating narrow information ranges</li>
                    <li>• "Think through" initial emotional reactions before acting</li>
                    <li>• Apply critical thinking—disinformation exploits emotions</li>
                    <li>• Verify sources by checking website/publisher reputation</li>
                  </ul>
                  
                  <h4 className="font-semibold">Verification Techniques</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Check article dates to prevent recycled misinformation</li>
                    <li>• Use reverse image search for deceptive content</li>
                    <li>• Utilize fact-checkers: Snopes, PolitiFact, FactCheck.org</li>
                    <li>• Browser extensions like "Know News" for credible sources</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Content Curation Strategies</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Set up Google Alerts for topics of interest</li>
                    <li>• Use RSS feeds for website updates</li>
                    <li>• Streamline social media with dashboards like Buffer</li>
                    <li>• Social bookmarking sites (Reddit, Digg) for collective intelligence</li>
                  </ul>
                  
                  <h4 className="font-semibold">Good Digital Hygiene</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Regularly Google your own name</li>
                    <li>• Close abandoned accounts and update active ones</li>
                    <li>• Delete or "bury" undesirable content with positive posts</li>
                    <li>• Take online courses on navigating disinformation</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Digital Detox */}
      <section>
        <Card className="border-teal-200 bg-teal-50/50">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-teal-600" />
                <TypographyH2 className="text-teal-800">Digital Detox</TypographyH2>
              </div>
              
              <TypographyP>
                The overarching strategy of "taking time to unplug" serves as a primary method for taking breaks from digital engagement:
              </TypographyP>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-teal-100 p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Micro-Detoxes</h4>
                  <TypographyP className="text-sm">
                    Leave devices behind during specific activities or times of day
                  </TypographyP>
                </div>
                
                <div className="bg-teal-100 p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Scheduled Breaks</h4>
                  <TypographyP className="text-sm">
                    Conscious decisions to disconnect at regular intervals
                  </TypographyP>
                </div>
                
                <div className="bg-teal-100 p-4 rounded-lg text-center">
                  <h4 className="font-semibold mb-2">Activity-Based</h4>
                  <TypographyP className="text-sm">
                    Device-free meals, walks, and social gatherings
                  </TypographyP>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Long-term Sustainability */}
      <section>
        <Card className="border-indigo-200 bg-indigo-50/50">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="h-5 w-5 text-indigo-600" />
                <TypographyH2 className="text-indigo-800">Long-term Sustainability</TypographyH2>
              </div>
              
              <TypographyP>
                Building lasting healthy habits is an ongoing process that encompasses the consistent application of digital wellness strategies:
              </TypographyP>

              <div className="space-y-4">
                <Alert className="bg-indigo-100 border-indigo-300">
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Continuous Practice:</strong> The constant innovation in digital media means that adaptability and strategic thinking about digital tools are key to maintaining a healthy and effective online presence.
                  </AlertDescription>
                </Alert>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Ongoing Digital Hygiene</h4>
                    <TypographyP className="text-sm">
                      Your online presence is ever-evolving and requires regular review and management. Consistent application of good digital hygiene practices is fundamental to long-term digital wellness.
                    </TypographyP>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Adaptive Strategy</h4>
                    <TypographyP className="text-sm">
                      As technology evolves, so must your approach to digital balance. Stay informed about new platforms, features, and their potential impacts on your well-being.
                    </TypographyP>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Tools and Resources */}
      <div className="grid md:grid-cols-2 gap-6">
        <Alert>
          <Clock className="h-4 w-4" />
          <AlertDescription>
            <strong>Recommended Tools:</strong>{" "}
            <a href="https://forestapp.cc/" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">Forest</a>,{" "}
            <a href="https://screenzen.io/" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">ScreenZen</a>,{" "}
            <a href="https://rescuetime.com/" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">RescueTime</a>, iOS/Android built-in time limits.
            <div className="mt-2">
              Try blocking your top distractions for a day and observe the impact on your focus and well-being!
            </div>
          </AlertDescription>
        </Alert>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <Target className="h-5 w-5 mt-1 text-primary" />
              <div className="space-y-3">
                <div>
                  <strong>24-Hour Challenge:</strong> Attempt a full day "feed detox"—can you spend 24 hours social-media free? Notice the difference in your attention, mood, and social connections.
                </div>
                <div>
                  <a href="https://www.humane.tech/module4" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">Stolen Focus by Johann Hari (Course Reading)</a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Alert>
        <AlertDescription className="text-center">
          <strong>Remember:</strong> Building healthy digital habits is a game of small wins. Focus on sustainable changes rather than dramatic overhauls. What will your first small win be?
        </AlertDescription>
      </Alert>

      <SectionNavigation currentPath="/digital-balance" />
    </div>
  </div>
);

export default DigitalBalance;
