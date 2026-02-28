import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ExpandedQuizGame from "../components/ExpandedQuizGame";
import { SectionNavigation } from "@/components/SectionNavigation";
import MagneticButton from "@/components/ui/magnetic-button";

gsap.registerPlugin(ScrollTrigger);

const Misinformation = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F5F3EE] text-[#111111] font-['Space_Grotesk']">

      {/* Header: Control Room Readout */}
      <header className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="fade-up">
          <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#111111]/60 block mb-6">
            Module 05 // Signal Verification
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-6">
            <span className="font-['DM_Serif_Display'] italic text-[#E63B2E]">Misinformation</span>
            <br />
            <span className="font-['Space_Grotesk']">Navigating the Complex</span>
            <br />
            <span className="font-['Space_Grotesk']">Digital Information Landscape</span>
          </h1>
        </div>

        <div className="fade-up grid md:grid-cols-[1.4fr_1fr] gap-10 items-center mt-12">
          <p className="text-lg md:text-xl leading-relaxed text-[#111111]/80">
            Your feed might trap you in a filter bubble, only showing content what you already believe. This creates echo chambers where the information you hear is similar to your opinion. Both echo chambers and fake news can trick anyone.
            <br /><br />
            It's important to sharpen and navigate those skills through the complex landscapes of information. Think you can spot the difference between fact and fiction? Test your skills with our quiz below:
          </p>
          <div className="flex justify-center">
            <img
              src="/misinformation.jpg"
              alt="Misinformation awareness and digital literacy"
              className="rounded-[3rem] border border-[#111111]/10 max-w-full h-auto"
            />
          </div>
        </div>
      </header>

      {/* Problem Overview: Dark Inverted Section */}
      <section className="bg-[#111111] text-[#F5F3EE] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="fade-up mb-4">
            <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#F5F3EE]/50 block mb-4">
              Signal Threat
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              <span className="font-['DM_Serif_Display'] italic text-[#E63B2E]">Problem Overview:</span>{" "}
              The Algorithmic Spread of False Information
            </h2>
          </div>

          <div className="fade-up grid md:grid-cols-[1fr_1.2fr] gap-10">
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-[#F5F3EE]/80">
                Misinformation isn't new, but the internet has made it spread faster and louder than ever. At the heart of this issue are the algorithms behind our search results, social media feeds, and content recommendations.
              </p>

              <div className="bg-[#E63B2E]/15 border border-[#E63B2E]/30 rounded-[2rem] p-6">
                <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#E63B2E] block mb-2">Warning</span>
                <p className="text-sm leading-relaxed text-[#F5F3EE]/90">
                  <strong className="text-[#F5F3EE]">The Economics of Emotion:</strong> These algorithms, often described as today's most powerful gatekeepers of information, are built to maximize user engagement and generate ad revenue. This has led to what's known as the Emotional Economy, where sensational or emotionally charged content gets prioritized because it keeps people clicking.
                </p>
              </div>

              <div className="bg-[#F5F3EE]/5 border border-[#F5F3EE]/10 rounded-[2rem] p-6">
                <p className="text-sm leading-relaxed text-[#F5F3EE]/80">
                  <strong className="text-[#F5F3EE]">Key Insight:</strong> Algorithms are not perfectly objective; they can reflect the prejudices, biases, and presumptions of their designers. As data scientist Cathy O'Neil describes, these "math-powered applications" can encode human prejudice into systems that manage our lives, often punishing the poor and oppressed.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-base leading-relaxed text-[#F5F3EE]/80">
                This algorithmic filtering contributes to phenomena like "filter bubbles" and "echo chambers." A filter bubble occurs when algorithms present an artificially narrow range of sources based on your past interests. An echo chamber involves individuals seeking out like-minded people and information that corroborates their existing views. Both can lead to group polarization and allow false information to circulate unchallenged.
              </p>

              <div className="border-l-4 border-[#E63B2E] pl-6">
                <p className="text-sm leading-relaxed text-[#F5F3EE]/80">
                  <strong className="text-[#F5F3EE]">Generative AI Complexity:</strong> Generative AI models like ChatGPT can fabricate or "hallucinate" information, making them unreliable sources. They can also perpetuate biases and stereotypes present in their training data. Cyber-fraudsters are already using generative AI to create voice clones and deepfake videos to deceive victims.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Techniques */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="fade-up mb-4">
            <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#111111]/50 block mb-4">
              Detection Protocol
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Recognition Techniques:{" "}
              <span className="font-['DM_Serif_Display'] italic text-[#E63B2E]">How to Identify Unreliable Sources</span>
            </h2>
          </div>

          <p className="fade-up text-base md:text-lg leading-relaxed text-[#111111]/80 max-w-3xl mb-10">
            To critically assess information, it's essential to develop critical digital media literacy skills. Before reacting to or sharing content, especially if it elicits a strong emotional response, "think through" your initial reaction.
          </p>

          <div className="fade-up grid md:grid-cols-[1.3fr_1fr] gap-6">
            <div className="bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8 space-y-4">
              <h4 className="font-['Space_Mono'] uppercase tracking-widest text-xs">Source Verification</h4>
              <ul className="space-y-3 text-sm leading-relaxed text-[#111111]/80">
                <li>• Research the reputation of the website or publisher</li>
                <li>• Check if you've heard of them before</li>
                <li>• Examine what other content they produce</li>
                <li>• Verify individual profiles and credentials</li>
              </ul>
            </div>
            <div className="bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8 space-y-4">
              <h4 className="font-['Space_Mono'] uppercase tracking-widest text-xs">Content Analysis</h4>
              <ul className="space-y-3 text-sm leading-relaxed text-[#111111]/80">
                <li>• Check the publication date (old events can be "recycled")</li>
                <li>• Use reverse image search (Google Image Search)</li>
                <li>• Look for signs of manipulation in images/videos</li>
                <li>• Watch for deepfake indicators (unnatural features, lighting)</li>
              </ul>
            </div>
          </div>

          <div className="fade-up bg-[#E63B2E]/10 border border-[#E63B2E]/20 rounded-[2rem] p-8 mt-8">
            <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#E63B2E] block mb-2">Red Flags</span>
            <p className="text-sm leading-relaxed text-[#111111]/80">
              Avatar profile pictures, repetitive content posting, unverified accounts, and content designed to provoke strong emotional reactions are common indicators of unreliable sources.
            </p>
          </div>
        </div>
      </section>

      {/* Fact Checking Toolkit */}
      <section className="py-20 px-6 bg-[#E8E4DD]">
        <div className="max-w-7xl mx-auto">
          <div className="fade-up mb-4">
            <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#111111]/50 block mb-4">
              Verification Arsenal
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-10">
              <span className="font-['DM_Serif_Display'] italic text-[#E63B2E]">Fact Checking</span> Toolkit
            </h2>
          </div>

          <div className="fade-up bg-[#F5F3EE] border border-[#111111]/10 rounded-[3rem] p-10 mb-8">
            <ul className="space-y-4 text-base leading-relaxed text-[#111111]/80">
              <li>• <strong>Check the source</strong> — Is it a reputable news organization?</li>
              <li>• <strong>Look for author credentials</strong> — Are they an expert in the field?</li>
              <li>• <strong>Verify with multiple sources</strong> — Does anyone else report the same information?</li>
              <li>• <strong>Check the date</strong> — Is this current or old news being recycled?</li>
              <li>• <strong>Look for evidence</strong> — Are there links to studies, official sources, or other verifiable data?</li>
              <li>• <strong>Check your bias</strong> — Does this confirm what you want to believe?</li>
            </ul>
          </div>

          <div className="fade-up grid md:grid-cols-[1fr_1.2fr] gap-6">
            <div className="bg-[#F5F3EE] border border-[#111111]/10 rounded-[2rem] p-8 space-y-4">
              <h4 className="font-['Space_Mono'] uppercase tracking-widest text-xs">Fact-Checking Resources</h4>
              <ul className="space-y-3 text-sm leading-relaxed text-[#111111]/80">
                <li>• <a href="https://snopes.com" className="text-[#E63B2E] hover:-translate-y-[1px] inline-block transition-transform underline" target="_blank" rel="noopener noreferrer">Snopes</a> — Comprehensive fact-checking</li>
                <li>• <a href="https://politifact.com" className="text-[#E63B2E] hover:-translate-y-[1px] inline-block transition-transform underline" target="_blank" rel="noopener noreferrer">PolitiFact</a> — Political claim verification</li>
                <li>• <a href="https://factcheck.org" className="text-[#E63B2E] hover:-translate-y-[1px] inline-block transition-transform underline" target="_blank" rel="noopener noreferrer">FactCheck.org</a> — Nonpartisan fact-checking</li>
                <li>• Browser extensions like Know News for credible sources</li>
              </ul>
            </div>
            <div className="bg-[#F5F3EE] border border-[#111111]/10 rounded-[2rem] p-8 space-y-4">
              <h4 className="font-['Space_Mono'] uppercase tracking-widest text-xs">Training &amp; Detection Tools</h4>
              <ul className="space-y-3 text-sm leading-relaxed text-[#111111]/80">
                <li>• MIT resources on deepfake detection</li>
                <li>• First Draft disinformation courses</li>
                <li>• Reverse image search tools</li>
                <li>• Cross-reference multiple sources</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Building Digital Resilience: Dark Inverted Section */}
      <section className="bg-[#111111] text-[#F5F3EE] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="fade-up mb-4">
            <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#F5F3EE]/50 block mb-4">
              Defense Layer
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Building{" "}
              <span className="font-['DM_Serif_Display'] italic text-[#E63B2E]">Digital Resilience</span>
            </h2>
          </div>

          <p className="fade-up text-base md:text-lg leading-relaxed text-[#F5F3EE]/80 max-w-3xl mb-12">
            Digital resilience means understanding how social media is designed to affect you, using smart strategies to take back control, and becoming more aware of how your digital habits impact your emotions and thinking. It's all about slowing down and thinking critically before reacting or sharing online.
          </p>

          <div className="fade-up grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#F5F3EE]/5 border border-[#F5F3EE]/10 rounded-[2rem] p-8 space-y-4">
              <h4 className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#F5F3EE]/60">Self-Awareness Tips</h4>
              <ul className="space-y-3 text-sm leading-relaxed text-[#F5F3EE]/80">
                <li>• Check in with how you feel after scrolling</li>
                <li>• Notice when certain posts trigger strong emotions or feels</li>
                <li>• Pause and think before liking, commenting, or sharing heated content</li>
                <li>• Question where the info is coming from: be a fact-checker</li>
              </ul>
            </div>
            <div className="bg-[#F5F3EE]/5 border border-[#F5F3EE]/10 rounded-[2rem] p-8 space-y-4">
              <h4 className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#F5F3EE]/60">Intentional Tech Use</h4>
              <ul className="space-y-3 text-sm leading-relaxed text-[#F5F3EE]/80">
                <li>• Have a clear goal when you open social media</li>
                <li>• Set limits on how long you spend online</li>
                <li>• Focus on meaningful connections, not just mindless scrolling</li>
                <li>• Take regular breaks from screens to recharge</li>
              </ul>
            </div>
          </div>

          <div className="fade-up bg-[#E63B2E]/15 border border-[#E63B2E]/30 rounded-[2rem] p-8">
            <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#E63B2E] block mb-2">Heads Up</span>
            <p className="text-sm leading-relaxed text-[#F5F3EE]/90">
              Misinformation is often made to spark big emotional reactions and bypass your logical thinking. Building digital resilience helps you stay calm, think clearly, and avoid getting caught up in the drama.
            </p>
          </div>
        </div>
      </section>

      {/* Platform-Specific Issues */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="fade-up mb-4">
            <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#111111]/50 block mb-4">
              Platform Analysis
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
              Platform-Specific Issues:{" "}
              <span className="font-['DM_Serif_Display'] italic text-[#E63B2E]">How Different Platforms Handle Misinformation</span>
            </h2>
          </div>

          <p className="fade-up text-base md:text-lg leading-relaxed text-[#111111]/80 max-w-3xl mb-12">
            Platforms serve as our new information gatekeepers, making decisions through algorithms and content moderation on what content to show and to whom. They are effectively "visibility machines."
          </p>

          <div className="fade-up space-y-6">
            <div className="bg-[#E8E4DD] border border-[#111111]/10 rounded-[3rem] p-10 md:ml-0 md:mr-24">
              <h4 className="font-['Space_Mono'] uppercase tracking-widest text-xs mb-4">Social Media Platforms (Facebook, X/Twitter, Instagram)</h4>
              <ul className="space-y-3 text-sm leading-relaxed text-[#111111]/80">
                <li>• Engage in massive-scale content moderation using technical systems and policy frameworks</li>
                <li>• Employ tens of thousands of moderators, often in the Global South, exposed to disturbing content</li>
                <li>• Use machine learning for detection and removal, identify fake/bot accounts</li>
                <li>• Introduce user education measures like PSAs and reading reminders before sharing</li>
              </ul>
            </div>

            <div className="bg-[#E8E4DD] border border-[#111111]/10 rounded-[3rem] p-10 md:ml-24 md:mr-0">
              <h4 className="font-['Space_Mono'] uppercase tracking-widest text-xs mb-4">Search Engines (Google)</h4>
              <ul className="space-y-3 text-sm leading-relaxed text-[#111111]/80">
                <li>• Use proprietary algorithms to classify and rank content based on freshness, quality, and links</li>
                <li>• Provide highly personalized results based on search history, location, and device</li>
                <li>• AI Overviews create automatic summaries, potentially changing from "search engine" to "search and answer engine"</li>
                <li>• "Googlearchy" concerns: few heavily-linked websites dominate results</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quiz */}
      <section className="py-20 px-6 bg-[#E8E4DD]">
        <div className="max-w-7xl mx-auto fade-up">
          <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#111111]/50 block mb-4">
            Signal Test
          </span>
          <ExpandedQuizGame />
        </div>
      </section>

      {/* Action Steps */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="fade-up mb-4">
            <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#111111]/50 block mb-4">
              Action Protocol
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-10">
              Action Steps:{" "}
              <span className="font-['DM_Serif_Display'] italic text-[#E63B2E]">Practical Ways to Avoid and Combat False Information</span>
            </h2>
          </div>

          <div className="fade-up grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-6">
              <div className="bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8 space-y-4">
                <h4 className="font-['Space_Mono'] uppercase tracking-widest text-xs">Digital Literacy &amp; Verification</h4>
                <ul className="space-y-3 text-sm leading-relaxed text-[#111111]/80">
                  <li>• Cultivate critical digital media literacy skills</li>
                  <li>• Think critically about emotional responses to content</li>
                  <li>• Utilize fact-checking tools and websites</li>
                  <li>• Cross-reference information before sharing</li>
                </ul>
              </div>
              <div className="bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8 space-y-4">
                <h4 className="font-['Space_Mono'] uppercase tracking-widest text-xs">Digital Environment Management</h4>
                <ul className="space-y-3 text-sm leading-relaxed text-[#111111]/80">
                  <li>• Turn off unnecessary notifications and alerts</li>
                  <li>• Remove distracting apps from home screen</li>
                  <li>• Use ScreenTime or Digital Wellbeing features</li>
                  <li>• Practice "airplane mode" for deep focus</li>
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8 space-y-4">
                <h4 className="font-['Space_Mono'] uppercase tracking-widest text-xs">Mindful Consumption</h4>
                <ul className="space-y-3 text-sm leading-relaxed text-[#111111]/80">
                  <li>• Recognize dopamine design in social media interfaces</li>
                  <li>• Resist endless scrolling and intermittent reinforcements</li>
                  <li>• Remember online personas show "best selves" only</li>
                  <li>• Practice good digital hygiene regularly</li>
                </ul>
              </div>
              <div className="bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8 space-y-4">
                <h4 className="font-['Space_Mono'] uppercase tracking-widest text-xs">Information Curation</h4>
                <ul className="space-y-3 text-sm leading-relaxed text-[#111111]/80">
                  <li>• Set up Google Alerts for meaningful topics</li>
                  <li>• Use RSS readers and social media dashboards</li>
                  <li>• Explore social bookmarking for collective intelligence</li>
                  <li>• Diversify your information sources</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="fade-up bg-[#E63B2E]/10 border border-[#E63B2E]/20 rounded-[2rem] p-8">
            <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#E63B2E] block mb-2">Digital Wellness Connection</span>
            <p className="text-sm leading-relaxed text-[#111111]/80">
              The Center for Humane Technology advocates for ethical technology design. Being aware of how platforms are designed to capture attention helps you maintain control over your information consumption and mental well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Resource Links */}
      <section className="py-10 px-6">
        <div className="fade-up max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-4 font-['Space_Mono'] text-xs uppercase tracking-widest">
          <a href="https://mediasmarts.ca" className="hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all underline" target="_blank" rel="noopener noreferrer">MediaSmarts</a>
          <span className="text-[#111111]/30">&middot;</span>
          <a href="https://newslit.org" className="hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all underline" target="_blank" rel="noopener noreferrer">News Literacy Project</a>
          <span className="text-[#111111]/30">&middot;</span>
          <a href="https://reporterslab.org/fact-checking/" className="hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all underline" target="_blank" rel="noopener noreferrer">Duke Reporters' Lab</a>
          <span className="text-[#111111]/30">&middot;</span>
          <a href="https://humanetech.com" className="hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all underline" target="_blank" rel="noopener noreferrer">Center for Humane Technology</a>
        </div>
      </section>

      {/* Sources: Dark Inverted Section */}
      <section className="bg-[#111111] text-[#F5F3EE] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="fade-up mb-10">
            <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#F5F3EE]/50 block mb-4">
              Signal Sources
            </span>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">
              Sources for <span className="font-['DM_Serif_Display'] italic text-[#E63B2E]">Misinformation Module</span>
            </h3>
          </div>

          <div className="fade-up grid md:grid-cols-3 gap-6">
            <div className="bg-[#F5F3EE]/5 border border-[#F5F3EE]/10 rounded-[2rem] p-8 space-y-4">
              <h4 className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#F5F3EE]/60">Fact-Checking Organizations</h4>
              <ul className="space-y-3 text-sm leading-relaxed text-[#F5F3EE]/80">
                <li>• <a href="https://snopes.com" className="text-[#E63B2E] hover:-translate-y-[1px] inline-block transition-transform underline" target="_blank" rel="noopener noreferrer">Snopes &mdash; Comprehensive Fact-Checking</a></li>
                <li>• <a href="https://politifact.com" className="text-[#E63B2E] hover:-translate-y-[1px] inline-block transition-transform underline" target="_blank" rel="noopener noreferrer">PolitiFact &mdash; Political Claim Verification</a></li>
                <li>• <a href="https://factcheck.org" className="text-[#E63B2E] hover:-translate-y-[1px] inline-block transition-transform underline" target="_blank" rel="noopener noreferrer">FactCheck.org &mdash; Nonpartisan Fact-Checking</a></li>
              </ul>
            </div>
            <div className="bg-[#F5F3EE]/5 border border-[#F5F3EE]/10 rounded-[2rem] p-8 space-y-4">
              <h4 className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#F5F3EE]/60">Digital Literacy Resources</h4>
              <ul className="space-y-3 text-sm leading-relaxed text-[#F5F3EE]/80">
                <li>• <a href="https://mediasmarts.ca" className="text-[#E63B2E] hover:-translate-y-[1px] inline-block transition-transform underline" target="_blank" rel="noopener noreferrer">MediaSmarts Canada</a></li>
                <li>• <a href="https://newslit.org" className="text-[#E63B2E] hover:-translate-y-[1px] inline-block transition-transform underline" target="_blank" rel="noopener noreferrer">News Literacy Project</a></li>
                <li>• <a href="https://reporterslab.org/fact-checking/" className="text-[#E63B2E] hover:-translate-y-[1px] inline-block transition-transform underline" target="_blank" rel="noopener noreferrer">Duke Reporters' Lab &mdash; Fact-Checking Research</a></li>
              </ul>
            </div>
            <div className="bg-[#F5F3EE]/5 border border-[#F5F3EE]/10 rounded-[2rem] p-8 space-y-4">
              <h4 className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#F5F3EE]/60">Research &amp; Technology</h4>
              <ul className="space-y-3 text-sm leading-relaxed text-[#F5F3EE]/80">
                <li>• <a href="https://humanetech.com" className="text-[#E63B2E] hover:-translate-y-[1px] inline-block transition-transform underline" target="_blank" rel="noopener noreferrer">Center for Humane Technology</a></li>
                <li>• Cathy O'Neil &mdash; Algorithmic bias research</li>
                <li>• MIT resources on deepfake detection</li>
                <li>• Generative AI and Large Language Model studies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-6 py-12 fade-up">
        <SectionNavigation currentPath="/misinformation" />
      </div>
    </div>
  );
};

export default Misinformation;
