import React from "react";
import TrackingSimulator from "../components/TrackingSimulator";
import { Shield, Lock, AlertTriangle, Eye, CheckCircle, Database, Globe } from "lucide-react";
import { TypographyH1, TypographyH2, TypographyP } from "@/components/ui/typography";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { SectionNavigation } from "@/components/SectionNavigation";

const Privacy = () => (
  <div className="container mx-auto py-8 px-4">
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="space-y-4">
        <TypographyH1>🔒 Privacy: Protecting Your Digital Self</TypographyH1>
        <TypographyP className="text-xl">
          Understanding the importance of digital privacy begins with recognizing that personal data is a precious resource, sought after by both corporations and criminals for profit. The availability of "free" communication tools online is often premised upon the commodification of your personal behavior.
        </TypographyP>
        <Alert className="bg-red-50 border-red-200">
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            <strong>Critical Reality:</strong> Once something is posted online, it is very difficult to get rid of it. Internet content is like a tattoo—sticking with you for a very long time, and traces may remain even after removal.
          </AlertDescription>
        </Alert>
      </div>

      {/* Data Protection Education */}
      <section>
        <Card className="border-purple-200 bg-purple-50/50">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Lock className="h-5 w-5 text-purple-600" />
                <TypographyH2 className="text-purple-800">Data Protection Education</TypographyH2>
              </div>
              
              <div className="space-y-4">
                <TypographyP>
                  Algorithms that underpin many digital services are not objective and can reflect biases and prejudices present in their designers' worldviews, potentially impacting areas like credit scores, insurance, interview selections, and even police profiling. This highlights the need for "algorithmic transparency."
                </TypographyP>
                
                <Alert className="bg-yellow-50 border-yellow-200">
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Mental Health Impact:</strong> Constant self-surveillance required for "self-branding" online can lead to tension and stress due to the contradictory demands of "authenticity" and "business-targeted self-presentation."
                  </AlertDescription>
                </Alert>
                
                <div className="bg-purple-100 p-4 rounded-lg">
                  <TypographyP className="text-sm">
                    <strong>Key Insight:</strong> Personal data has been called "the new oil"—marking it as the most valuable resource of the 21st century. Understanding this helps you recognize why your privacy matters so much.
                  </TypographyP>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Data Collection */}
      <section>
        <Card className="border-red-200 bg-red-50/50">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Database className="h-5 w-5 text-red-600" />
                <TypographyH2 className="text-red-800">Data Collection: The Extraction Apparatus</TypographyH2>
              </div>
              
              <TypographyP>
                Digital platforms, especially major players like Google and Facebook, collect vast amounts of behavioral data from users. This extensive data collection is driven by the industry's view that "personal data will be the new oil." Platforms constantly "hoover up all of that juicy data" from user interactions, acting as an "extractive apparatus for data."
              </TypographyP>

              <div className="space-y-4">
                <h4 className="font-semibold">Primary Collection Method: HTML Cookies</h4>
                <TypographyP className="text-sm">
                  A small file placed on your computer by websites to assign a unique identifier and record your activity, which is then repurposed for behavioral profiling and targeted advertising. This enables advertising to become progressively more "precise, targeted and data-driven."
                </TypographyP>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Platform-Specific Examples</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>Google:</strong> Personalizes search results by analyzing search history, location, and device</li>
                    <li>• <strong>Facebook:</strong> Tailors newsfeed based on engagement history with users and content</li>
                    <li>• <strong>Smartphones:</strong> Tracking capabilities can be "hijacked by bad actors"</li>
                    <li>• <strong>IoT Devices:</strong> Tiny sensors in everyday objects sending data over internet</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Collection Sources</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Cross-device tracking (sites, searches, purchases, locations)</li>
                    <li>• Public records (court records, census, birth certificates)</li>
                    <li>• Commercial lists (mailing lists, warranty registrations)</li>
                    <li>• Credit card purchases and subscription data</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Privacy Settings */}
      <section>
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Eye className="h-5 w-5 text-blue-600" />
                <TypographyH2 className="text-blue-800">Privacy Settings & Policy Changes</TypographyH2>
              </div>
              
              <TypographyP>
                Major tech companies have implemented policy changes that affect user control over data, though often with their own strategic interests:
              </TypographyP>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Apple's App Tracking Transparency (2021)</h4>
                  <TypographyP className="text-sm">
                    Aimed to give iPhone users greater control over which companies could access their data. However, it was also perceived by many in the industry as Apple's strategy to consolidate its own control over ad tracking.
                  </TypographyP>
                </div>
                
                <div className="bg-blue-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Google's Third-Party Cookie Phase-Out</h4>
                  <TypographyP className="text-sm">
                    Alphabet is phasing out third-party cookies on Chrome, a move also seen as an attempt to gain greater control over user data rather than pure privacy protection.
                  </TypographyP>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Third-Party Sharing */}
      <section>
        <Card className="border-red-200 bg-red-50/50">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="h-5 w-5 text-red-600" />
                <TypographyH2 className="text-red-800">Third-Party Sharing: The Privacy Death Stars</TypographyH2>
              </div>
              
              <Alert className="bg-red-100 border-red-300">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Data Brokers:</strong> Companies like Acxiom, Experian, and Oracle, dubbed "privacy death stars," actively collect vast amounts of personal information including shopping habits, credit histories, and even ethnic and sexual identities. They classify individuals by commercial value and sell access to the highest bidder.
                </AlertDescription>
              </Alert>

              <div className="space-y-4">
                <h4 className="font-semibold">What Gets Shared & Sold</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <h5 className="font-medium">Personal Data Types:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Shopping habits and purchase histories</li>
                      <li>• Credit histories and financial information</li>
                      <li>• Ethnic and sexual identities</li>
                      <li>• Health records and medical information</li>
                      <li>• Email addresses and PayPal access</li>
                      <li>• SIN numbers and government IDs</li>
                    </ul>
                  </div>
                  
                  <div className="space-y-2">
                    <h5 className="font-medium">Who Buys This Data:</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• Banks and financial institutions</li>
                      <li>• Insurance companies</li>
                      <li>• Credit rating agencies</li>
                      <li>• Government agencies</li>
                      <li>• Facebook and Twitter for user profiles</li>
                      <li>• Criminal organizations (dark web)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-red-100 p-4 rounded-lg">
                <TypographyP className="text-sm">
                  <strong>Critical Reality:</strong> These dossiers are "not anonymous, but are intimately tied to our real world identities." The increasing interoperability of digital systems leads to "less privacy (potentially) as more data is shared between more devices."
                </TypographyP>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold">Government & Criminal Surveillance</h4>
                <ul className="space-y-1 text-sm">
                  <li>• China employs "keyword blocking algorithms" on platforms like WeChat to monitor sensitive political topics</li>
                  <li>• These surveillance technologies are being made commercially available outside of China</li>
                  <li>• Cyber-fraudsters use generative AI to create voice clones and deepfake videos</li>
                  <li>• Stolen data is frequently traded on the dark web</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Interactive Tracking Simulator */}
      <TrackingSimulator />

      {/* Protection Strategies */}
      <section>
        <Card className="border-green-200 bg-green-50/50">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-green-600" />
                <TypographyH2 className="text-green-800">Protection Strategies</TypographyH2>
              </div>
              
              <TypographyP>
                Mitigating privacy risks requires a combination of technological tools and informed user behavior:
              </TypographyP>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold">Good Digital Hygiene</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Regularly Google your own name to review online presence</li>
                    <li>• Close abandoned accounts and update active ones</li>
                    <li>• Delete or "bury" undesirable content with new positive posts</li>
                    <li>• Think before you click—pause and verify before sharing</li>
                  </ul>
                  
                  <h4 className="font-semibold">Ad-Blocking & Tracking Protection</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Over 30% of users employ ad-blockers for privacy protection</li>
                    <li>• Prevent malware and block tracking scripts</li>
                    <li>• Speed up page loads and minimize data usage</li>
                    <li>• Deny marketers access to user analytics</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold">Cybersecurity Measures</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Always check for "https://" and verify web addresses</li>
                    <li>• Use complex, unique passwords with a password manager</li>
                    <li>• Enable multi-factor authentication wherever possible</li>
                    <li>• Install reputable anti-virus and malware protection</li>
                    <li>• Monitor banking and credit accounts for suspicious activity</li>
                    <li>• Secure your phone with a lock to protect data if lost</li>
                  </ul>
                  
                  <h4 className="font-semibold">Information Verification</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Verify sources and check credentials before sharing</li>
                    <li>• Use reverse image search to detect deceptive content</li>
                    <li>• Utilize fact-checkers like Snopes, PolitiFact, FactCheck.org</li>
                    <li>• Check publication dates to prevent recycled misinformation</li>
                  </ul>
                </div>
              </div>

              <Alert className="bg-green-100 border-green-300">
                <CheckCircle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Advanced Protection:</strong> Edge computing (data processing within devices) and cryptocurrencies like Bitcoin offer enhanced privacy by reducing reliance on central servers and providing partly anonymous transactions.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Legal Rights */}
      <section>
        <Card className="border-blue-200 bg-blue-50/50">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Globe className="h-5 w-5 text-blue-600" />
                <TypographyH2 className="text-blue-800">Legal Rights & Frameworks</TypographyH2>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold">Canadian Privacy Laws</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="bg-blue-100 p-3 rounded">
                      <h5 className="font-medium">PIPEDA</h5>
                      <TypographyP className="text-sm">Personal Information Protection and Electronic Documents Act governs how commercial entities collect and use personal data.</TypographyP>
                    </div>
                    
                    <div className="bg-blue-100 p-3 rounded">
                      <h5 className="font-medium">Digital Privacy Act (2015)</h5>
                      <TypographyP className="text-sm">Strengthened aspects of PIPEDA, particularly regarding consent for data collection.</TypographyP>
                    </div>
                    
                    <div className="bg-blue-100 p-3 rounded">
                      <h5 className="font-medium">CASL (2014)</h5>
                      <TypographyP className="text-sm">Canada's anti-spam law, considered one of the toughest globally.</TypographyP>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-blue-100 p-3 rounded">
                      <h5 className="font-medium">Bill C11 (2021)</h5>
                      <TypographyP className="text-sm">Digital Charter Implementation Act aimed for major PIPEDA overhaul, including a "right to deletion" allowing consumers to demand destruction of personal data.</TypographyP>
                    </div>
                    
                    <div className="bg-blue-100 p-3 rounded">
                      <h5 className="font-medium">Bill C13 (2013)</h5>
                      <TypographyP className="text-sm">Protecting Canadians from Online Crime Act to combat cyberbullying, though controversial for potentially expanding police digital access.</TypographyP>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Global Legal Developments</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Germany, Singapore, and Malaysia introducing fines for platforms disseminating hate speech and disinformation</li>
                  <li>• Brazil blocked X (formerly Twitter) until it paid fines for spreading disinformation</li>
                  <li>• Growing calls for algorithmic transparency to ensure accountability</li>
                  <li>• International movement toward stronger data protection and platform regulation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Alternative Platforms */}
      <section>
        <Card className="border-purple-200 bg-purple-50/50">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Lock className="h-5 w-5 text-purple-600" />
                <TypographyH2 className="text-purple-800">Alternative Privacy-Focused Technologies</TypographyH2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Tor Network</h4>
                  <TypographyP className="text-sm">
                    Technology that anonymizes online communication, used by human rights organizations, democracy activists, and whistleblowers to communicate securely. Provides means for private online interaction.
                  </TypographyP>
                </div>
                
                <div className="bg-purple-100 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Cryptocurrency</h4>
                  <TypographyP className="text-sm">
                    Bitcoin and other cryptocurrencies offer fundamentally new forms of value exchange that address privacy concerns related to centralized ledgers and provide partly anonymous transaction methods.
                  </TypographyP>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold">Privacy-Focused Tools</h4>
                <div className="flex flex-col gap-2 text-sm">
                  <a href="https://privacybadger.org" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
                    Privacy Badger - Block trackers and protect against data collection
                  </a>
                  <a href="https://duckduckgo.com" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
                    DuckDuckGo - Private search engine that doesn't track users
                  </a>
                  <a href="https://www.mozilla.org/firefox/" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
                    Firefox - Privacy-focused browser with enhanced tracking protection
                  </a>
                  <a href="https://haveibeenpwned.com" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
                    Have I Been Pwned - Check if your data has been compromised
                  </a>
                  <a href="https://www.torproject.org" className="underline hover:text-primary" target="_blank" rel="noopener noreferrer">
                    Tor Browser - Anonymous web browsing and communication
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <div className="text-center">
        <TypographyP className="text-xs text-muted-foreground">
          Sources: NYM.com research on data brokers, PIPEDA documentation, cybersecurity best practices, and digital privacy frameworks
        </TypographyP>
      </div>

      <SectionNavigation currentPath="/privacy" />
    </div>
  </div>
);

export default Privacy;
