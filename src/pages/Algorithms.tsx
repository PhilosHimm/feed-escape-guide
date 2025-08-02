import React from "react";
import FeedSimulator from "../components/FeedSimulator";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { SectionNavigation } from "@/components/SectionNavigation";
import { CheckCircle, AlertTriangle } from "lucide-react";

const Algorithms = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <TypographyH1>🤖 Understanding Algorithms for Digital Wellness</TypographyH1>
          <TypographyP className="text-xl max-w-4xl mx-auto">
            Your social media feed isn't random—it's carefully personalized by algorithms designed to keep you engaged. While this can show you relevant content, it can also create "filter bubbles" that limit diverse perspectives and contribute to stress, anxiety, and misinformation. Understanding how algorithms work empowers you to take control of your digital wellness.
          </TypographyP>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-3xl mx-auto">
            <TypographyP className="text-sm">
              <strong>Digital Wellness Connection:</strong> A narrow, sensational content diet can increase stress and contribute to misinformation-driven anxiety. Learning about algorithms helps you diversify your feeds and reduce mental health impacts.
            </TypographyP>
          </div>
        </div>

        {/* Algorithm Learning Process */}
        <section>
          <TypographyH2 className="text-center mb-6">
            How Algorithms Learn: The Science Behind Your Feed
          </TypographyH2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <TypographyP>
                  Algorithms operate with definite goals in mind, such as selling products, increasing user engagement (which in turn drives advertising revenue), or improving service quality. They achieve this by analyzing vast quantities of Big Data—an immense volume of information processed with high velocity and variety.
                </TypographyP>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Machine Learning & Neural Networks</h4>
                    <TypographyP className="text-sm">
                      The core of how algorithms "learn" lies in machine learning, a process where algorithms are taught to recognize patterns in the world through the automated analysis of large datasets. This often involves neural networks, which mimic the human brain's layered perception using thousands or millions of processing nodes (artificial neurons).
                    </TypographyP>
                    
                    <h4 className="font-semibold text-lg">Deep Learning</h4>
                    <TypographyP className="text-sm">
                      This takes machine learning further by stacking multiple neural networks, allowing for higher levels of abstraction and performance.
                    </TypographyP>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Engagement Signals</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Every click, like, share generates data points</li>
                      <li>• Time spent viewing content</li>
                      <li>• Scroll patterns and pause behavior</li>
                      <li>• Purchase histories and search volume</li>
                    </ul>
                    
                    <h4 className="font-semibold text-lg">Behavioral Patterns</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Your past behavior patterns</li>
                      <li>• Aggregate behavior of similar users</li>
                      <li>• Geographic location data</li>
                      <li>• Device and time-based preferences</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Algorithm Bias Section */}
        <section>
          <Card className="border-orange-200 bg-orange-50/50">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <TypographyH2>Inherent Biases and "Weapons of Math Destruction"</TypographyH2>
                <TypographyP>
                  It's critical to understand that algorithms are not perfectly objective; they can reflect the prejudices, biases, and presumptions of their designers. As data scientist Cathy O'Neil describes, "the math-powered applications powering the data economy were based on choices made by fallible human beings... many of these models encoded human prejudice, misunderstanding and bias into the software systems that increasingly managed our lives".
                </TypographyP>
                <TypographyP className="text-sm">
                  This means algorithmic sorting can perpetuate marginalization, impacting areas like credit scores, job applications, or even predictive policing. Transparency and human oversight are crucial to address these concerns.
                </TypographyP>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* AI and Generative AI Section */}
        <section>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <TypographyH2>AI Overviews and Generative AI</TypographyH2>
                <TypographyP>
                  Newer developments like Generative AI are changing how algorithms deliver information. Services like Google's AI Overviews use generative AI to create automatic summaries of web content in search results, potentially shifting Google from a "search engine" to a "search and answer engine" and impacting traffic to web publishers.
                </TypographyP>
                <TypographyP className="text-sm">
                  Generative AI, including Large Language Models (LLMs) like ChatGPT, learns from the underlying distribution of data to produce original content, impacting various creative industries and raising significant ethical concerns around copyright, harmful content, and plagiarism.
                </TypographyP>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Interactive Feed Simulator */}
        <section>
          <TypographyH2 className="text-center mb-6">
            Try It Yourself: Feed Algorithm Simulator
          </TypographyH2>
          <TypographyP className="text-center mb-6 max-w-2xl mx-auto">
            Like posts below and watch how the algorithm learns your preferences in real-time. 
            This is a simplified version of what happens on actual social media platforms.
          </TypographyP>
          <FeedSimulator />
        </section>

        {/* Platform-Specific Algorithm Analysis */}
        <section>
          <TypographyH2 className="text-center mb-6">
            Platform-Specific Algorithm Implementations
          </TypographyH2>
          <TypographyP className="text-center mb-8 max-w-3xl mx-auto">
            Each platform employs unique algorithmic strategies designed to optimize their specific business models and user engagement patterns.
          </TypographyP>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="border-l-4 border-l-pink-500">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3 text-pink-600">TikTok</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm">Algorithm Focus:</h4>
                    <ul className="text-sm space-y-1 ml-2">
                      <li>• Prioritizes watch time & completion rate</li>
                      <li>• Heavy focus on trending sounds/effects</li>
                      <li>• Rapid content discovery</li>
                      <li>• Personalization within hours</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Business Model Impact:</h4>
                    <TypographyP className="text-xs">
                      Short-form video format maximizes engagement and ad frequency, with algorithms prioritizing completion rates to ensure users see full advertisements.
                    </TypographyP>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-blue-500">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3 text-blue-600">Instagram</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm">Algorithm Focus:</h4>
                    <ul className="text-sm space-y-1 ml-2">
                      <li>• Relationship-based ranking</li>
                      <li>• Recency and engagement matter</li>
                      <li>• Stories vs Feed algorithms differ</li>
                      <li>• Creator account boost</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Business Model Impact:</h4>
                    <TypographyP className="text-xs">
                      Emphasizes social connections and visual content to drive shopping behaviors and influence purchases through social proof.
                    </TypographyP>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-blue-400">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3 text-blue-500">Twitter/X</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm">Algorithm Focus:</h4>
                    <ul className="text-sm space-y-1 ml-2">
                      <li>• Real-time trending topics</li>
                      <li>• Engagement-driven ranking</li>
                      <li>• Following vs "For You" feeds</li>
                      <li>• Verification status influence</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Business Model Impact:</h4>
                    <TypographyP className="text-xs">
                      News and discussion-focused algorithms amplify controversial content to increase engagement and time spent on platform.
                    </TypographyP>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-red-500">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3 text-red-600">YouTube</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm">Algorithm Focus:</h4>
                    <ul className="text-sm space-y-1 ml-2">
                      <li>• Watch time optimization</li>
                      <li>• Session duration priority</li>
                      <li>• Click-through rate importance</li>
                      <li>• Subscriber notification weighting</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Business Model Impact:</h4>
                    <TypographyP className="text-xs">
                      Long-form content algorithms designed to maximize ad revenue through extended viewing sessions and targeted recommendations.
                    </TypographyP>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-green-500">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3 text-green-600">LinkedIn</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm">Algorithm Focus:</h4>
                    <ul className="text-sm space-y-1 ml-2">
                      <li>• Professional relevance scoring</li>
                      <li>• Industry-specific content</li>
                      <li>• Connection strength weighting</li>
                      <li>• Career progression signals</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Business Model Impact:</h4>
                    <TypographyP className="text-xs">
                      Professional networking algorithms optimize for job placement and premium subscription conversions through career-focused content.
                    </TypographyP>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-purple-500">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-3 text-purple-600">Spotify</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm">Algorithm Focus:</h4>
                    <ul className="text-sm space-y-1 ml-2">
                      <li>• Audio feature analysis</li>
                      <li>• Collaborative filtering</li>
                      <li>• Skip rate optimization</li>
                      <li>• Mood and context detection</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Business Model Impact:</h4>
                    <TypographyP className="text-xs">
                      Music recommendation algorithms balance user satisfaction with label licensing costs and promote platform-exclusive content.
                    </TypographyP>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Attention Economy and Digital Wellness */}
        <section>
          <Card className="border-blue-200 bg-blue-50/50">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <TypographyH2>The Attention Economy and Your Mental Health</TypographyH2>
                <TypographyP>
                  Algorithms are specifically designed to capture and monetize human attention. As former Google design ethicist Tristan Harris explains, we're living in an "attention economy" where platforms compete for the most valuable resource: your focus and time.
                </TypographyP>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Psychological Mechanisms</h4>
                    <ul className="text-sm space-y-2">
                      <li>• <strong>Variable Reward Schedules:</strong> Like slot machines, unpredictable rewards (likes, comments) create addiction-like patterns</li>
                      <li>• <strong>Social Validation Loops:</strong> Algorithms amplify our need for peer approval through engagement metrics</li>
                      <li>• <strong>Fear of Missing Out (FOMO):</strong> Constant updates create anxiety about staying informed</li>
                      <li>• <strong>Confirmation Bias:</strong> Algorithms show us content that confirms our existing beliefs</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Mental Health Impacts</h4>
                    <ul className="text-sm space-y-2">
                      <li>• Increased rates of anxiety and depression, especially among teens</li>
                      <li>• Shortened attention spans and difficulty with deep focus</li>
                      <li>• Social comparison and self-esteem issues</li>
                      <li>• Sleep disruption from blue light and stimulating content</li>
                      <li>• Addictive behaviors and compulsive checking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Filter Bubbles and Digital Wellness */}
        <section>
          <Card className="border-red-200 bg-red-50/50">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <TypographyH2>Filter Bubbles: When Algorithms Limit Your World</TypographyH2>
                <TypographyP>
                  Algorithms create personalized "filter bubbles" that can isolate you from diverse perspectives, contributing to stress, anxiety, and misinformation-driven confusion. Research from the Fondation Descartes shows how engagement-optimized recommender systems may promote sensational or polarizing content because they prioritize click-throughs and watch time.
                </TypographyP>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2">Digital Wellness Impact</h4>
                  <TypographyP className="text-sm">
                    A narrow, sensational content diet can increase stress and contribute to misinformation-driven anxiety. Breaking out of filter bubbles supports better mental health and critical thinking.
                  </TypographyP>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg">How Filter Bubbles Form</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-sm mb-2">1. Initial Engagement</h5>
                      <TypographyP className="text-xs">
                        You interact with certain types of content based on interests, beliefs, or random chance
                      </TypographyP>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-sm mb-2">2. Algorithmic Learning</h5>
                      <TypographyP className="text-xs">
                        The algorithm notes your preferences and begins showing similar content
                      </TypographyP>
                    </div>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold text-sm mb-2">3. Reinforcement Cycle</h5>
                      <TypographyP className="text-xs">
                        Your bubble becomes more isolated as diverse perspectives are filtered out
                      </TypographyP>
                    </div>
                  </div>
                  
                  <Alert className="bg-orange-50 border-orange-200">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertDescription>
                      <strong>Societal Impact:</strong> Filter bubbles can contribute to political polarization, spread of misinformation, and reduced empathy for different viewpoints. They make it harder to have productive conversations across ideological differences.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Comprehensive Action Steps */}
        <section>
          <TypographyH2 className="text-center mb-6">
            Taking Control: Evidence-Based Strategies
          </TypographyH2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-4 text-green-600">Algorithm Management</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm">Data Control:</h4>
                    <ul className="text-sm space-y-1 ml-2">
                      <li>• Regularly clear your watch & search history</li>
                      <li>• Turn off location tracking when possible</li>
                      <li>• Use private/incognito browsing modes</li>
                      <li>• Review and adjust privacy settings quarterly</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm">Feed Diversification:</h4>
                    <ul className="text-sm space-y-1 ml-2">
                      <li>• Actively seek out diverse perspectives</li>
                      <li>• Follow accounts outside your usual interests</li>
                      <li>• Use "Not Interested" options strategically</li>
                      <li>• Engage with educational and factual content</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-4 text-blue-600">Digital Wellness Practices</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold text-sm">Mindful Usage:</h4>
                    <ul className="text-sm space-y-1 ml-2">
                      <li>• Set specific times for social media use</li>
                      <li>• Use app timers and usage tracking</li>
                      <li>• Practice the "pause before you post" rule</li>
                      <li>• Take regular digital detox breaks</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-sm">Notification Management:</h4>
                    <ul className="text-sm space-y-1 ml-2">
                      <li>• Turn off non-essential notifications</li>
                      <li>• Use "Do Not Disturb" modes</li>
                      <li>• Remove social apps from your home screen</li>
                      <li>• Check platforms intentionally, not reactively</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Alert className="mt-6">
            <CheckCircle className="h-4 w-4" />
            <AlertDescription>
              <div className="space-y-2">
                <h3 className="font-bold text-lg">Remember: You Have Agency</h3>
                <TypographyP className="text-sm">
                  While algorithms are powerful, you're not powerless. Understanding how they work is the first step toward using technology intentionally rather than being used by it. The goal isn't to avoid technology entirely, but to develop a healthier, more conscious relationship with digital platforms.
                </TypographyP>
              </div>
            </AlertDescription>
          </Alert>
        </section>

        {/* Academic Resources */}
        <section>
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold text-center mb-6">Further Reading & Research</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Essential Books:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>"Weapons of Math Destruction"</strong> by Cathy O'Neil</li>
                    <li>• <strong>"The Filter Bubble"</strong> by Eli Pariser</li>
                    <li>• <strong>"The Age of Surveillance Capitalism"</strong> by Shoshana Zuboff</li>
                    <li>• <strong>"Reclaiming Conversation"</strong> by Sherry Turkle</li>
                    <li>• <strong>"Digital Minimalism"</strong> by Cal Newport</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Key Research Areas:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Algorithmic bias in machine learning systems</li>
                    <li>• Social media's impact on mental health</li>
                    <li>• Information filtering and echo chambers</li>
                    <li>• Attention economy and digital addiction</li>
                    <li>• AI ethics and transparency</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t">
                <h4 className="font-semibold mb-3">Organizations to Follow:</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <strong>Center for Humane Technology</strong>
                    <p className="text-xs">Research on technology's impact on society</p>
                  </div>
                  <div>
                    <strong>AI Now Institute</strong>
                    <p className="text-xs">AI accountability and algorithmic justice</p>
                  </div>
                  <div>
                    <strong>Mozilla Foundation</strong>
                    <p className="text-xs">Internet health and digital rights advocacy</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <SectionNavigation currentPath="/algorithms" />
      </div>
    </div>
  );
};

export default Algorithms;
