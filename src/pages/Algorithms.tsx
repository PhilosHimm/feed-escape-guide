import React from "react";
import FeedSimulator from "../components/FeedSimulator";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { SectionNavigation } from "@/components/SectionNavigation";
import { CheckCircle, AlertTriangle, ExternalLink } from "lucide-react";

const Algorithms = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <TypographyH1>🤖 Understanding Algorithms for Digital Wellness</TypographyH1>
          <TypographyP className="text-xl max-w-4xl mx-auto">
            Algorithms aren’t just doing their thing randomly, they’ve got goals, like keeping you hooked on content (so companies make more revenue from ads), boosting product sales, or making a service run smoother. They do this by analyzing humongous amounts of data, like Big Data level huge. That means tons of information coming in fast, from all kinds of sources, being crunched to figure out what grabs your attention. 
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
                  Algorithms operate with definite goals in mind, such as selling products, increasing user engagement (which in turn drives advertising revenue), or improving service quality. They achieve this by analyzing vast quantities of Big Data which is an immense volume of information processed with high velocity and variety.
                </TypographyP>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Machine Learning & Neural Networks</h4>
                    <TypographyP className="text-sm">
                      The core method behind how algorithms “learn” is called machine learning. It involves analyzing massive datasets to recognize patterns and make decisions based on the patterns. A common approach uses neural networks, systems made up of thousands or even millions of artificial neurons designed to simulate the layered way the human brain processes information.
                    </TypographyP>
                    
                    <h4 className="font-semibold text-lg">Deep Learning</h4>
                    <TypographyP className="text-sm">
                      By stacking multiple neural networks together, machine learning can reach higher levels of abstraction and performance, allowing systems to process complex information more effectively.
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
                  It’s important to understand that algorithms aren’t always neutral, they often showcase the biases, assumptions, and limitations of the people who create them. As data scientist Cathy O'Neil explains, many algorithm-driven systems are built on human decisions, which means they can unintentionally carry over prejudice and misunderstanding. This can lead to serious real-world consequences, like reinforcing inequality in areas such as credit scoring, job applications, and even predictive policing. That’s why transparency and human oversight are crucial when designing and using these technologies.
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
                  The way algorithms deliver information is changing fast, thanks to tools like generative AI. For example, features like Google’s AI Overviews can now summarize web content right in your search results, shifting Google from just a “search engine” to more of a “search and answer engine.” This could seriously impact how much traffic goes to websites and publishers.
                </TypographyP>
                <TypographyP className="text-sm">
                  Generative AI, including Large Language Models (LLMs) like ChatGPT, creates original content by learning from patterns in massive datasets. While it’s a powerful tool, it also raises important questions around plagiarism, copyright, and the spread of harmful or misleading content, especially in creative industries.
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
                  Social media platforms are purposely built to keep you hooked, using tricks that tap into how our brains work. Knowing these tactics helps you spot when you're being pulled in. As former Google design ethicist Tristan Harris explains, we're living in an "attention economy" where platforms compete for the most valuable resource: your focus and time.
                </TypographyP>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-lg">Design Features That Keep You Scrolling</h4>
                    <ul className="text-sm space-y-2">
                      <li>• <strong>Infinite scroll:</strong> Your feed never ends, so it's hard to stop</li>
                      <li>• <strong>Auto-play:</strong> Videos play one after another without pause</li>
                      <li>• <strong>Typing indicators:</strong> That little "..." on WhatsApp keeps you waiting</li>
                      <li>• <strong>Random rewards:</strong> Likes and notifications pop up unpredictably, like a slot machine</li>
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
                  Algorithms often create personalized "filter bubbles",  showing you content that aligns with what you’ve already liked or watched i.e your interests. While this can make your feed feel familiar, it also limits your exposure to different perspectives. Over time, that narrow perspective can lead to stress, confusion, or even anxiety, especially when false or sensational content is involved.
                  Research from the Fondation Descartes shows that recommender systems that are designed to maximize clicks and watch time, usually push dramatic or polarizing content to keep users engaged.
                </TypographyP>
                
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h4 className="font-semibold text-sm mb-2">Digital Wellness Impact</h4>
                  <TypographyP className="text-sm">
                    This kind of media diet, full of hype but lacking variety, can negatively affect mental well-being. Breaking out of filter bubbles helps boost critical thinking, reduce anxiety, and support a healthier relationship with digital content.
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

        {/* Sources for Algorithms Module */}
        <section>
          <Card className="border-gray-200 bg-gray-50/50">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  <ExternalLink className="h-5 w-5" />
                  Sources for Algorithms Module
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Algorithm Research:</h4>
                    <ul className="space-y-1 ml-4">
                      <li>• <a href="https://fondationdescartes.org/en/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Fondation Descartes - Filter Bubble and Recommender Systems Research</a></li>
                      <li>• <a href="https://www.thefilterbubble.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Eli Pariser - The Filter Bubble</a></li>
                      <li>• Cathy O'Neil - "Weapons of Math Destruction" research on algorithmic bias</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Attention Economy & Design:</h4>
                    <ul className="space-y-1 ml-4">
                      <li>• <a href="https://www.humanetech.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Center for Humane Technology - Tristan Harris research</a></li>
                      <li>• <a href="https://partnershiponai.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Partnership on AI - Engagement Optimization Studies</a></li>
                      <li>• Sean Parker - Facebook social-validation feedback loop statements</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Platform-Specific Research:</h4>
                    <ul className="space-y-1 ml-4">
                      <li>• Official platform algorithm documentation (Meta, Google, Twitter/X)</li>
                      <li>• Academic studies on platform-specific engagement patterns</li>
                      <li>• Big Data and Machine Learning research papers</li>
                    </ul>
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
