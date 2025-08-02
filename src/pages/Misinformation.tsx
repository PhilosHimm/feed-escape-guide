import React from "react";
import ExpandedQuizGame from "../components/ExpandedQuizGame";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { SectionNavigation } from "@/components/SectionNavigation";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Search, Eye, CheckCircle, AlertTriangle, Shield } from "lucide-react";

const Misinformation = () => (
  <div className="container mx-auto py-8 px-4">
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <TypographyH1>🎭 Misinformation: Navigating the Complex Digital Information Landscape</TypographyH1>
        <TypographyP className="text-xl">
          In our hyper-connected digital environment, we have access to an unimaginable wealth of information. However, this "info-glut" comes with significant challenges, notably the proliferation of misinformation, disinformation, and mal-information that can impact our mental health and decision-making.
        </TypographyP>
      </div>

      {/* Problem Overview */}
      <section>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-red-500" />
                <TypographyH2>Problem Overview: The Algorithmic Spread of False Information</TypographyH2>
              </div>
              
              <div className="space-y-4">
                <TypographyP>
                  While the circulation of falsehoods is not a new phenomenon, the internet has massively accelerated and amplified it. At the heart of this challenge are the algorithms that power our social media feeds, search results, and recommendations.
                </TypographyP>
                
                <Alert className="bg-red-50 border-red-200">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>The Economics of Emotion:</strong> These algorithms, often described as our most important information gatekeepers, are programmed to maximize user engagement and advertising revenue. This creates an economic incentive for disinformation to be recommended, as sensational or emotionally charged content drives higher engagement through "dopamine design" and "social-validation feedback loops."
                  </AlertDescription>
                </Alert>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <TypographyP className="text-sm">
                    <strong>Key Insight:</strong> Algorithms are not perfectly objective; they can reflect the prejudices, biases, and presumptions of their designers. As data scientist Cathy O'Neil describes, these "math-powered applications" can encode human prejudice into systems that manage our lives, often punishing the poor and oppressed.
                  </TypographyP>
                </div>

                <TypographyP>
                  This algorithmic filtering contributes to phenomena like "filter bubbles" and "echo chambers." A filter bubble occurs when algorithms present an artificially narrow range of sources based on your past interests. An echo chamber involves individuals seeking out like-minded people and information that corroborates their existing views. Both can lead to group polarization and allow false information to circulate unchallenged.
                </TypographyP>

                <div className="border-l-4 border-blue-500 pl-4">
                  <TypographyP className="text-sm">
                    <strong>Generative AI Complexity:</strong> Generative AI models like ChatGPT can fabricate or "hallucinate" information, making them unreliable sources. They can also perpetuate biases and stereotypes present in their training data. Cyber-fraudsters are already using generative AI to create voice clones and deepfake videos to deceive victims.
                  </TypographyP>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Recognition Techniques */}
      <section>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Eye className="h-6 w-6 text-blue-500" />
                <TypographyH2>Recognition Techniques: How to Identify Unreliable Sources</TypographyH2>
              </div>

              <TypographyP>
                To critically assess information, it's essential to develop critical digital media literacy skills. Before reacting to or sharing content, especially if it elicits a strong emotional response, "think through" your initial reaction.
              </TypographyP>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold">Source Verification</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Research the reputation of the website or publisher</li>
                    <li>• Check if you've heard of them before</li>
                    <li>• Examine what other content they produce</li>
                    <li>• Verify individual profiles and credentials</li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold">Content Analysis</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Check the publication date (old events can be "recycled")</li>
                    <li>• Use reverse image search (Google Image Search)</li>
                    <li>• Look for signs of manipulation in images/videos</li>
                    <li>• Watch for deepfake indicators (unnatural features, lighting)</li>
                  </ul>
                </div>
              </div>

              <Alert className="bg-blue-50 border-blue-200">
                <Eye className="h-4 w-4" />
                <AlertDescription>
                  <strong>Red Flags:</strong> Avatar profile pictures, repetitive content posting, unverified accounts, and content designed to provoke strong emotional reactions are common indicators of unreliable sources.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Critical Thinking Tools */}
      <section>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <TypographyH2>Critical Thinking Tools: Methods for Fact-Checking</TypographyH2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Fact-Checking Resources</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <a href="https://snopes.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Snopes</a> - Comprehensive fact-checking</li>
                    <li>• <a href="https://politifact.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">PolitiFact</a> - Political claim verification</li>
                    <li>• <a href="https://factcheck.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">FactCheck.org</a> - Nonpartisan fact-checking</li>
                    <li>• Browser extensions like Know News for credible sources</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Training & Detection Tools</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• MIT resources on deepfake detection</li>
                    <li>• First Draft disinformation courses</li>
                    <li>• Reverse image search tools</li>
                    <li>• Cross-reference multiple sources</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Platform-Specific Issues */}
      <section>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Search className="h-6 w-6 text-purple-500" />
                <TypographyH2>Platform-Specific Issues: How Different Platforms Handle Misinformation</TypographyH2>
              </div>

              <TypographyP>
                Platforms serve as our new information gatekeepers, making decisions through algorithms and content moderation on what content to show and to whom. They are effectively "visibility machines."
              </TypographyP>

              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Social Media Platforms (Facebook, X/Twitter, Instagram)</h4>
                  <div className="space-y-2 text-sm">
                    <TypographyP className="text-sm">
                      • Engage in massive-scale content moderation using technical systems and policy frameworks
                    </TypographyP>
                    <TypographyP className="text-sm">
                      • Employ tens of thousands of moderators, often in the Global South, exposed to disturbing content
                    </TypographyP>
                    <TypographyP className="text-sm">
                      • Use machine learning for detection and removal, identify fake/bot accounts
                    </TypographyP>
                    <TypographyP className="text-sm">
                      • Introduce user education measures like PSAs and reading reminders before sharing
                    </TypographyP>
                  </div>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-semibold mb-3">Search Engines (Google)</h4>
                  <div className="space-y-2 text-sm">
                    <TypographyP className="text-sm">
                      • Use proprietary algorithms to classify and rank content based on freshness, quality, and links
                    </TypographyP>
                    <TypographyP className="text-sm">
                      • Provide highly personalized results based on search history, location, and device
                    </TypographyP>
                    <TypographyP className="text-sm">
                      • AI Overviews create automatic summaries, potentially changing from "search engine" to "search and answer engine"
                    </TypographyP>
                    <TypographyP className="text-sm">
                      • "Googlearchy" concerns: few heavily-linked websites dominate results
                    </TypographyP>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Interactive Quiz */}
      <ExpandedQuizGame />

      {/* Action Steps */}
      <section>
        <Card>
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-green-600" />
                <TypographyH2>Action Steps: Practical Ways to Avoid and Combat False Information</TypographyH2>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Digital Literacy & Verification</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Cultivate critical digital media literacy skills</li>
                    <li>• Think critically about emotional responses to content</li>
                    <li>• Utilize fact-checking tools and websites</li>
                    <li>• Cross-reference information before sharing</li>
                  </ul>
                  
                  <h4 className="font-semibold">Digital Environment Management</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Turn off unnecessary notifications and alerts</li>
                    <li>• Remove distracting apps from home screen</li>
                    <li>• Use ScreenTime or Digital Wellbeing features</li>
                    <li>• Practice "airplane mode" for deep focus</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Mindful Consumption</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Recognize dopamine design in social media interfaces</li>
                    <li>• Resist endless scrolling and intermittent reinforcements</li>
                    <li>• Remember online personas show "best selves" only</li>
                    <li>• Practice good digital hygiene regularly</li>
                  </ul>
                  
                  <h4 className="font-semibold">Information Curation</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Set up Google Alerts for meaningful topics</li>
                    <li>• Use RSS readers and social media dashboards</li>
                    <li>• Explore social bookmarking for collective intelligence</li>
                    <li>• Diversify your information sources</li>
                  </ul>
                </div>
              </div>

              <Alert className="bg-green-50 border-green-200">
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  <strong>Digital Wellness Connection:</strong> The Center for Humane Technology advocates for ethical technology design. Being aware of how platforms are designed to capture attention helps you maintain control over your information consumption and mental well-being.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="text-center space-x-4">
        <a href="https://mediasmarts.ca" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">MediaSmarts</a>
        <span>·</span>
        <a href="https://newslit.org" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">News Literacy Project</a>
        <span>·</span>
        <a href="https://firstdraftnews.org" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">First Draft</a>
        <span>·</span>
        <a href="https://humanetech.com" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">Center for Humane Technology</a>
      </div>

      <SectionNavigation currentPath="/misinformation" />
    </div>
  </div>
);

export default Misinformation;
