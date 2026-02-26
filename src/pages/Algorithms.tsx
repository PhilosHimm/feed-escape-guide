import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeedSimulator from "../components/FeedSimulator";
import { SectionNavigation } from "@/components/SectionNavigation";


gsap.registerPlugin(ScrollTrigger);

const Algorithms = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.utils.toArray(".fade-up").forEach((el) => {
        gsap.from(el as HTMLElement, {
          scrollTrigger: {
            trigger: el as HTMLElement,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: "power3.out",
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen font-['Space_Grotesk'] text-[#111111] bg-[#F5F3EE] selection:bg-[#E63B2E] selection:text-white overflow-x-hidden"
    >
      {/* A. HERO: Control Room Readout */}
      <section className="relative w-full px-8 md:px-16 pt-36 pb-24">
        <div className="max-w-6xl mx-auto">
          <p className="hero-reveal font-['Space_Mono'] text-[#E63B2E] font-bold tracking-widest uppercase text-xs flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-[#E63B2E] rounded-full animate-pulse" />
            Module 01 // Algorithmic Transparency
          </p>
          <h1 className="hero-reveal text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] uppercase mb-2">
            Understanding Algorithms
          </h1>
          <h1 className="hero-reveal text-5xl md:text-8xl font-['DM_Serif_Display'] italic leading-[1]">
            for <span className="text-[#E63B2E]">Digital Wellness</span>
          </h1>
          <div className="hero-reveal grid md:grid-cols-[1fr_auto] gap-12 items-center mt-12">
            <p className="text-lg md:text-xl font-medium text-[#111111]/70 leading-relaxed max-w-2xl">
              Algorithms aren&apos;t just doing their thing randomly, they&apos;ve got goals, like keeping you hooked on content (so companies make more revenue from ads), boosting product sales, or making a service run smoother. They do this by analyzing humongous amounts of data, like Big Data level huge. That means tons of information coming in fast, from all kinds of sources, being crunched to figure out what grabs your attention.
            </p>
            <img
              src="/algorithms.jpg"
              alt="Algorithm visualization with matrix-style code"
              className="rounded-[2rem] shadow-md max-w-xs w-full h-auto border border-[#111111]/10"
            />
          </div>
          <div className="hero-reveal mt-8 bg-[#E8E4DD] rounded-[2rem] border border-[#111111]/10 p-6 max-w-3xl">
            <p className="text-sm text-[#111111]/80">
              <strong className="text-[#E63B2E]">Digital Wellness Connection:</strong> A narrow, sensational content diet can increase stress and contribute to misinformation-driven anxiety. Learning about algorithms helps you diversify your feeds and reduce mental health impacts.
            </p>
          </div>
        </div>
      </section>

      {/* B. HOW ALGORITHMS LEARN */}
      <section className="px-8 md:px-16 py-24 bg-[#F5F3EE]">
        <div className="max-w-6xl mx-auto">
          <div className="fade-up mb-12">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-sm tracking-widest uppercase">02 // The Science</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mt-2">How Algorithms Learn</h2>
            <p className="text-2xl font-['DM_Serif_Display'] italic text-[#111111]/60 mt-2">The Science Behind Your Feed</p>
          </div>
          <div className="fade-up bg-[#E8E4DD] rounded-[3rem] border border-[#111111]/10 p-8 md:p-12 mb-8">
            <p className="text-base md:text-lg leading-relaxed text-[#111111]/80 max-w-3xl">
              Algorithms operate with definite goals in mind, such as selling products, increasing user engagement (which in turn drives advertising revenue), or improving service quality. They achieve this by analyzing vast quantities of Big Data which is an immense volume of information processed with high velocity and variety.
            </p>
          </div>
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-6">
            <div className="fade-up bg-[#111111] text-[#F5F3EE] rounded-[3rem] p-8 md:p-12 border border-[#111111]/20">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">Neural Architecture</span>
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-4 mb-4">Machine Learning &amp; Neural Networks</h3>
              <p className="text-sm text-[#F5F3EE]/70 leading-relaxed mb-6">
                The core method behind how algorithms &quot;learn&quot; is called machine learning. It involves analyzing massive datasets to recognize patterns and make decisions based on the patterns. A common approach uses neural networks, systems made up of thousands or even millions of artificial neurons designed to simulate the layered way the human brain processes information.
              </p>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-4">Deep Learning</h3>
              <p className="text-sm text-[#F5F3EE]/70 leading-relaxed">
                By stacking multiple neural networks together, machine learning can reach higher levels of abstraction and performance, allowing systems to process complex information more effectively.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="fade-up bg-[#E8E4DD] rounded-[2rem] p-8 border border-[#111111]/10 flex-1">
                <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">Data Inputs</span>
                <h3 className="text-xl font-bold uppercase tracking-tight mt-4 mb-4">Engagement Signals</h3>
                <ul className="text-sm space-y-2 text-[#111111]/70">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Every click, like, share generates data points</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Time spent viewing content</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Scroll patterns and pause behavior</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Purchase histories and search volume</li>
                </ul>
              </div>
              <div className="fade-up bg-[#E8E4DD] rounded-[2rem] p-8 border border-[#111111]/10 flex-1">
                <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">User Profiling</span>
                <h3 className="text-xl font-bold uppercase tracking-tight mt-4 mb-4">Behavioral Patterns</h3>
                <ul className="text-sm space-y-2 text-[#111111]/70">
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Your past behavior patterns</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Aggregate behavior of similar users</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Geographic location data</li>
                  <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Device and time-based preferences</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* C. ALGORITHM BIAS — Dark Drama */}
      <section className="relative py-32 bg-[#111111] text-[#F5F3EE] overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="fade-up">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">03 // Critical Analysis</span>
            <h2 className="text-4xl md:text-7xl font-['DM_Serif_Display'] italic leading-tight mt-4 mb-8">
              Inherent Biases and <span className="text-[#E63B2E]">&quot;Weapons of Math Destruction&quot;</span>
            </h2>
          </div>
          <div className="fade-up grid md:grid-cols-[2fr_1fr] gap-12">
            <div className="space-y-6">
              <p className="text-lg text-[#F5F3EE]/80 leading-relaxed">
                It&apos;s important to understand that algorithms aren&apos;t always neutral, they often showcase the biases, assumptions, and limitations of the people who create them. As data scientist Cathy O&apos;Neil explains, many algorithm-driven systems are built on human decisions, which means they can unintentionally carry over prejudice and misunderstanding. This can lead to serious real-world consequences, like reinforcing inequality in areas such as credit scoring, job applications, and even predictive policing. That&apos;s why transparency and human oversight are crucial when designing and using these technologies.
              </p>
              <p className="text-sm text-[#F5F3EE]/60 leading-relaxed">
                This means algorithmic sorting can perpetuate marginalization, impacting areas like credit scores, job applications, or even predictive policing. Transparency and human oversight are crucial to address these concerns.
              </p>
            </div>
            <div className="flex items-start">
              <div className="bg-[#E63B2E]/10 border border-[#E63B2E]/30 rounded-[2rem] p-8">
                <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-2">Key Insight</span>
                <p className="text-[#F5F3EE]/70 text-sm leading-relaxed">Algorithms inherit the biases of their creators. Without oversight, they automate inequality at scale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* D. AI & GENERATIVE AI */}
      <section className="px-8 md:px-16 py-24 bg-[#F5F3EE]">
        <div className="max-w-6xl mx-auto">
          <div className="fade-up grid md:grid-cols-[auto_1fr] gap-12 items-start">
            <div className="md:sticky md:top-32">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">04 // Emerging Tech</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mt-2 mb-2">AI Overviews</h2>
              <p className="text-2xl font-['DM_Serif_Display'] italic text-[#111111]/60">and Generative AI</p>
            </div>
            <div className="space-y-6">
              <div className="fade-up bg-[#E8E4DD] rounded-[2rem] border border-[#111111]/10 p-8">
                <p className="text-base leading-relaxed text-[#111111]/80">
                  The way algorithms deliver information is changing fast, thanks to tools like generative AI. For example, features like Google&apos;s AI Overviews can now summarize web content right in your search results, shifting Google from just a &quot;search engine&quot; to more of a &quot;search and answer engine.&quot; This could seriously impact how much traffic goes to websites and publishers.
                </p>
              </div>
              <div className="fade-up bg-[#E8E4DD] rounded-[2rem] border border-[#111111]/10 p-8">
                <p className="text-sm leading-relaxed text-[#111111]/70">
                  Generative AI, including Large Language Models (LLMs) like ChatGPT, creates original content by learning from patterns in massive datasets. While it&apos;s a powerful tool, it also raises important questions around plagiarism, copyright, and the spread of harmful or misleading content, especially in creative industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E. FEED SIMULATOR */}
      <section className="px-8 md:px-16 py-24 bg-[#E8E4DD]">
        <div className="max-w-6xl mx-auto">
          <div className="fade-up text-center mb-12">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">05 // Interactive Lab</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mt-2">Try It Yourself</h2>
            <p className="text-2xl font-['DM_Serif_Display'] italic text-[#111111]/60 mt-2">Feed Algorithm Simulator</p>
            <p className="mt-6 max-w-2xl mx-auto text-base text-[#111111]/70 leading-relaxed">
              Like posts below and watch how the algorithm learns your preferences in real-time. This is a simplified version of what happens on actual social media platforms.
            </p>
          </div>
          <div className="fade-up">
            <FeedSimulator />
          </div>
        </div>
      </section>

      {/* F. PLATFORM-SPECIFIC ALGORITHMS */}
      <section className="px-8 md:px-16 py-24 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto">
          <div className="fade-up mb-12">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">06 // Platform Intel</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mt-2">Platform-Specific Algorithm Implementations</h2>
            <p className="mt-4 max-w-3xl text-base text-[#111111]/70 leading-relaxed">
              Each platform employs unique algorithmic strategies designed to optimize their specific business models and user engagement patterns.
            </p>
          </div>

          {/* Row 1: TikTok + Instagram */}
          <div className="grid md:grid-cols-[1.4fr_1fr] gap-6 mb-6">
            <div className="fade-up bg-[#111111] text-[#F5F3EE] rounded-[3rem] p-8 md:p-12 border border-[#111111]/20">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">Short-Form Video</span>
              <h3 className="text-3xl font-bold uppercase tracking-tight mt-4 mb-6">TikTok</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-['Space_Mono'] text-xs tracking-widest uppercase text-[#F5F3EE]/50 mb-3">Algorithm Focus</h4>
                  <ul className="text-sm space-y-2 text-[#F5F3EE]/70">
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Prioritizes watch time &amp; completion rate</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Heavy focus on trending sounds/effects</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Rapid content discovery</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Personalization within hours</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-['Space_Mono'] text-xs tracking-widest uppercase text-[#F5F3EE]/50 mb-3">Business Model Impact</h4>
                  <p className="text-sm text-[#F5F3EE]/70 leading-relaxed">
                    Short-form video format maximizes engagement and ad frequency, with algorithms prioritizing completion rates to ensure users see full advertisements.
                  </p>
                </div>
              </div>
            </div>
            <div className="fade-up bg-[#E8E4DD] rounded-[3rem] p-8 md:p-12 border border-[#111111]/10">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">Visual Social</span>
              <h3 className="text-3xl font-bold uppercase tracking-tight mt-4 mb-6">Instagram</h3>
              <h4 className="font-['Space_Mono'] text-xs tracking-widest uppercase text-[#111111]/40 mb-3">Algorithm Focus</h4>
              <ul className="text-sm space-y-2 text-[#111111]/70 mb-6">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Relationship-based ranking</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Recency and engagement matter</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Stories vs Feed algorithms differ</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Creator account boost</li>
              </ul>
              <h4 className="font-['Space_Mono'] text-xs tracking-widest uppercase text-[#111111]/40 mb-3">Business Model Impact</h4>
              <p className="text-sm text-[#111111]/70 leading-relaxed">
                Emphasizes social connections and visual content to drive shopping behaviors and influence purchases through social proof.
              </p>
            </div>
          </div>

          {/* Row 2: Twitter/X + YouTube */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="fade-up bg-[#E8E4DD] rounded-[2rem] p-8 md:p-10 border border-[#111111]/10">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">Real-Time Discourse</span>
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-4 mb-6">Twitter/X</h3>
              <h4 className="font-['Space_Mono'] text-xs tracking-widest uppercase text-[#111111]/40 mb-3">Algorithm Focus</h4>
              <ul className="text-sm space-y-2 text-[#111111]/70 mb-6">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Real-time trending topics</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Engagement-driven ranking</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Following vs &quot;For You&quot; feeds</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Verification status influence</li>
              </ul>
              <h4 className="font-['Space_Mono'] text-xs tracking-widest uppercase text-[#111111]/40 mb-3">Business Model Impact</h4>
              <p className="text-sm text-[#111111]/70 leading-relaxed">
                News and discussion-focused algorithms amplify controversial content to increase engagement and time spent on platform.
              </p>
            </div>
            <div className="fade-up bg-[#E63B2E] text-[#F5F3EE] rounded-[2rem] p-8 md:p-10 border border-[#111111]/10">
              <span className="font-['Space_Mono'] text-[#111111] text-xs tracking-widest uppercase">Long-Form Video</span>
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-4 mb-6">YouTube</h3>
              <h4 className="font-['Space_Mono'] text-xs tracking-widest uppercase text-[#F5F3EE]/50 mb-3">Algorithm Focus</h4>
              <ul className="text-sm space-y-2 text-[#F5F3EE]/80 mb-6">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-1.5 shrink-0" />Watch time optimization</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-1.5 shrink-0" />Session duration priority</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-1.5 shrink-0" />Click-through rate importance</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#111111] mt-1.5 shrink-0" />Subscriber notification weighting</li>
              </ul>
              <h4 className="font-['Space_Mono'] text-xs tracking-widest uppercase text-[#F5F3EE]/50 mb-3">Business Model Impact</h4>
              <p className="text-sm text-[#F5F3EE]/80 leading-relaxed">
                Long-form content algorithms designed to maximize ad revenue through extended viewing sessions and targeted recommendations.
              </p>
            </div>
          </div>

          {/* Row 3: LinkedIn + Spotify */}
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-6">
            <div className="fade-up bg-[#E8E4DD] rounded-[2rem] p-8 md:p-10 border border-[#111111]/10">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">Professional Network</span>
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-4 mb-6">LinkedIn</h3>
              <h4 className="font-['Space_Mono'] text-xs tracking-widest uppercase text-[#111111]/40 mb-3">Algorithm Focus</h4>
              <ul className="text-sm space-y-2 text-[#111111]/70 mb-6">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Professional relevance scoring</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Industry-specific content</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Connection strength weighting</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Career progression signals</li>
              </ul>
              <h4 className="font-['Space_Mono'] text-xs tracking-widest uppercase text-[#111111]/40 mb-3">Business Model Impact</h4>
              <p className="text-sm text-[#111111]/70 leading-relaxed">
                Professional networking algorithms optimize for job placement and premium subscription conversions through career-focused content.
              </p>
            </div>
            <div className="fade-up bg-[#111111] text-[#F5F3EE] rounded-[3rem] p-8 md:p-12 border border-[#111111]/20">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">Audio Intelligence</span>
              <h3 className="text-3xl font-bold uppercase tracking-tight mt-4 mb-6">Spotify</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-['Space_Mono'] text-xs tracking-widest uppercase text-[#F5F3EE]/50 mb-3">Algorithm Focus</h4>
                  <ul className="text-sm space-y-2 text-[#F5F3EE]/70">
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Audio feature analysis</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Collaborative filtering</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Skip rate optimization</li>
                    <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Mood and context detection</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-['Space_Mono'] text-xs tracking-widest uppercase text-[#F5F3EE]/50 mb-3">Business Model Impact</h4>
                  <p className="text-sm text-[#F5F3EE]/70 leading-relaxed">
                    Music recommendation algorithms balance user satisfaction with label licensing costs and promote platform-exclusive content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* G. ATTENTION ECONOMY — Dark Drama */}
      <section className="relative py-32 bg-[#111111] text-[#F5F3EE] overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="fade-up">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">07 // Attention Economy</span>
            <h2 className="text-4xl md:text-7xl font-['DM_Serif_Display'] italic leading-tight mt-4 mb-8">
              The Attention Economy and <span className="text-[#E63B2E]">Your Mental Health</span>
            </h2>
          </div>
          <div className="fade-up">
            <p className="text-lg text-[#F5F3EE]/80 leading-relaxed max-w-3xl mb-12">
              Social media platforms are purposely built to keep you hooked, using tricks that tap into how our brains work. Knowing these tactics helps you spot when you&apos;re being pulled in. As former Google design ethicist Tristan Harris explains, we&apos;re living in an &quot;attention economy&quot; where platforms compete for the most valuable resource: your focus and time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="fade-up bg-[#F5F3EE]/5 rounded-[2rem] p-8 border border-[#F5F3EE]/10">
              <h4 className="text-xl font-bold uppercase tracking-tight mb-6">Design Features That Keep You Scrolling</h4>
              <ul className="text-sm space-y-3 text-[#F5F3EE]/70">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" /><span><strong className="text-[#F5F3EE]">Infinite scroll:</strong> Your feed never ends, so it&apos;s hard to stop</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" /><span><strong className="text-[#F5F3EE]">Auto-play:</strong> Videos play one after another without pause</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" /><span><strong className="text-[#F5F3EE]">Typing indicators:</strong> That little &quot;...&quot; on WhatsApp keeps you waiting</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" /><span><strong className="text-[#F5F3EE]">Random rewards:</strong> Likes and notifications pop up unpredictably, like a slot machine</span></li>
              </ul>
            </div>
            <div className="fade-up bg-[#E63B2E]/10 rounded-[2rem] p-8 border border-[#E63B2E]/30">
              <h4 className="text-xl font-bold uppercase tracking-tight mb-6">Mental Health Impacts</h4>
              <ul className="text-sm space-y-3 text-[#F5F3EE]/70">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Increased rates of anxiety and depression, especially among teens</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Shortened attention spans and difficulty with deep focus</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Social comparison and self-esteem issues</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Sleep disruption from blue light and stimulating content</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Addictive behaviors and compulsive checking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* H. FILTER BUBBLES */}
      <section className="px-8 md:px-16 py-24 bg-[#F5F3EE]">
        <div className="max-w-6xl mx-auto">
          <div className="fade-up mb-12">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">08 // Information Architecture</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mt-2">Filter Bubbles</h2>
            <p className="text-2xl font-['DM_Serif_Display'] italic text-[#111111]/60 mt-2">When Algorithms Limit Your World</p>
          </div>
          <div className="fade-up bg-[#E8E4DD] rounded-[3rem] border border-[#111111]/10 p-8 md:p-12 mb-8">
            <p className="text-base md:text-lg leading-relaxed text-[#111111]/80">
              Algorithms often create personalized &quot;filter bubbles&quot;, showing you content that aligns with what you&apos;ve already liked or watched i.e your interests. While this can make your feed feel familiar, it also limits your exposure to different perspectives. Over time, that narrow perspective can lead to stress, confusion, or even anxiety, especially when false or sensational content is involved. Research from the Fondation Descartes shows that recommender systems that are designed to maximize clicks and watch time, usually push dramatic or polarizing content to keep users engaged.
            </p>
          </div>
          <div className="fade-up bg-[#E63B2E]/5 border border-[#E63B2E]/20 rounded-[2rem] p-6 mb-8">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">Digital Wellness Impact</span>
            <p className="text-sm text-[#111111]/70 leading-relaxed mt-2">
              This kind of media diet, full of hype but lacking variety, can negatively affect mental well-being. Breaking out of filter bubbles helps boost critical thinking, reduce anxiety, and support a healthier relationship with digital content.
            </p>
          </div>
          <div className="fade-up mb-8">
            <h4 className="text-xl font-bold uppercase tracking-tight mb-6">How Filter Bubbles Form</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#E8E4DD] rounded-[2rem] p-8 border border-[#111111]/10">
                <span className="font-['Space_Mono'] text-[#E63B2E] text-2xl font-bold">01</span>
                <h5 className="font-bold uppercase tracking-tight mt-2 mb-3">Initial Engagement</h5>
                <p className="text-sm text-[#111111]/70 leading-relaxed">You interact with certain types of content based on interests, beliefs, or random chance</p>
              </div>
              <div className="bg-[#E8E4DD] rounded-[2rem] p-8 border border-[#111111]/10">
                <span className="font-['Space_Mono'] text-[#E63B2E] text-2xl font-bold">02</span>
                <h5 className="font-bold uppercase tracking-tight mt-2 mb-3">Algorithmic Learning</h5>
                <p className="text-sm text-[#111111]/70 leading-relaxed">The algorithm notes your preferences and begins showing similar content</p>
              </div>
              <div className="bg-[#E8E4DD] rounded-[2rem] p-8 border border-[#111111]/10">
                <span className="font-['Space_Mono'] text-[#E63B2E] text-2xl font-bold">03</span>
                <h5 className="font-bold uppercase tracking-tight mt-2 mb-3">Reinforcement Cycle</h5>
                <p className="text-sm text-[#111111]/70 leading-relaxed">Your bubble becomes more isolated as diverse perspectives are filtered out</p>
              </div>
            </div>
          </div>
          <div className="fade-up bg-[#111111] text-[#F5F3EE] rounded-[2rem] p-8 border border-[#111111]/20">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">Societal Impact</span>
            <p className="text-sm text-[#F5F3EE]/70 leading-relaxed mt-2">
              Filter bubbles can contribute to political polarization, spread of misinformation, and reduced empathy for different viewpoints. They make it harder to have productive conversations across ideological differences.
            </p>
          </div>
        </div>
      </section>

      {/* I. TAKING CONTROL */}
      <section className="px-8 md:px-16 py-24 bg-[#E8E4DD]">
        <div className="max-w-6xl mx-auto">
          <div className="fade-up mb-12 text-center">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">09 // Countermeasures</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mt-2">Taking Control</h2>
            <p className="text-2xl font-['DM_Serif_Display'] italic text-[#111111]/60 mt-2">Evidence-Based Strategies</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="fade-up bg-[#F5F3EE] rounded-[3rem] p-8 md:p-10 border border-[#111111]/10">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">Protocol A</span>
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-4 mb-6">Algorithm Management</h3>
              <h4 className="font-['Space_Mono'] text-xs tracking-widest uppercase text-[#111111]/40 mb-3">Data Control</h4>
              <ul className="text-sm space-y-2 text-[#111111]/70 mb-6">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Regularly clear your watch &amp; search history</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Turn off location tracking when possible</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Use private/incognito browsing modes</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Review and adjust privacy settings quarterly</li>
              </ul>
              <h4 className="font-['Space_Mono'] text-xs tracking-widest uppercase text-[#111111]/40 mb-3">Feed Diversification</h4>
              <ul className="text-sm space-y-2 text-[#111111]/70">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Actively seek out diverse perspectives</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Follow accounts outside your usual interests</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Use &quot;Not Interested&quot; options strategically</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Engage with educational and factual content</li>
              </ul>
            </div>
            <div className="fade-up bg-[#F5F3EE] rounded-[3rem] p-8 md:p-10 border border-[#111111]/10">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">Protocol B</span>
              <h3 className="text-2xl font-bold uppercase tracking-tight mt-4 mb-6">Digital Wellness Practices</h3>
              <h4 className="font-['Space_Mono'] text-xs tracking-widest uppercase text-[#111111]/40 mb-3">Mindful Usage</h4>
              <ul className="text-sm space-y-2 text-[#111111]/70 mb-6">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Set specific times for social media use</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Use app timers and usage tracking</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Practice the &quot;pause before you post&quot; rule</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Take regular digital detox breaks</li>
              </ul>
              <h4 className="font-['Space_Mono'] text-xs tracking-widest uppercase text-[#111111]/40 mb-3">Notification Management</h4>
              <ul className="text-sm space-y-2 text-[#111111]/70">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Turn off non-essential notifications</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Use &quot;Do Not Disturb&quot; modes</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Remove social apps from your home screen</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Check platforms intentionally, not reactively</li>
              </ul>
            </div>
          </div>
          <div className="fade-up bg-[#111111] text-[#F5F3EE] rounded-[2rem] p-8 md:p-10 border border-[#111111]/20">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">Remember</span>
            <h3 className="text-2xl font-bold uppercase tracking-tight mt-4 mb-4">You Have Agency</h3>
            <p className="text-sm text-[#F5F3EE]/70 leading-relaxed max-w-3xl">
              While algorithms are powerful, you&apos;re not powerless. Understanding how they work is the first step toward using technology intentionally rather than being used by it. The goal isn&apos;t to avoid technology entirely, but to develop a healthier, more conscious relationship with digital platforms.
            </p>
          </div>
        </div>
      </section>

      {/* J. FURTHER READING */}
      <section className="px-8 md:px-16 py-24 bg-[#F5F3EE]">
        <div className="max-w-6xl mx-auto">
          <div className="fade-up mb-12">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">10 // Deep Dive</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mt-2">Further Reading &amp; Research</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="fade-up bg-[#E8E4DD] rounded-[2rem] p-8 border border-[#111111]/10">
              <h4 className="font-bold uppercase tracking-tight mb-4">Essential Books</h4>
              <ul className="space-y-3 text-sm text-[#111111]/70">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" /><span><strong className="text-[#111111]">&quot;Weapons of Math Destruction&quot;</strong> by Cathy O&apos;Neil</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" /><span><strong className="text-[#111111]">&quot;The Filter Bubble&quot;</strong> by Eli Pariser</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" /><span><strong className="text-[#111111]">&quot;The Age of Surveillance Capitalism&quot;</strong> by Shoshana Zuboff</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" /><span><strong className="text-[#111111]">&quot;Reclaiming Conversation&quot;</strong> by Sherry Turkle</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" /><span><strong className="text-[#111111]">&quot;Digital Minimalism&quot;</strong> by Cal Newport</span></li>
              </ul>
            </div>
            <div className="fade-up bg-[#E8E4DD] rounded-[2rem] p-8 border border-[#111111]/10">
              <h4 className="font-bold uppercase tracking-tight mb-4">Key Research Areas</h4>
              <ul className="space-y-3 text-sm text-[#111111]/70">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Algorithmic bias in machine learning systems</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Social media&apos;s impact on mental health</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Information filtering and echo chambers</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Attention economy and digital addiction</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />AI ethics and transparency</li>
              </ul>
            </div>
          </div>
          <div className="fade-up bg-[#E8E4DD] rounded-[2rem] p-8 border border-[#111111]/10">
            <h4 className="font-bold uppercase tracking-tight mb-6">Organizations to Follow</h4>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <strong className="text-[#111111]">Center for Humane Technology</strong>
                <p className="text-[#111111]/60 text-xs mt-1">Research on technology&apos;s impact on society</p>
              </div>
              <div>
                <strong className="text-[#111111]">AI Now Institute</strong>
                <p className="text-[#111111]/60 text-xs mt-1">AI accountability and algorithmic justice</p>
              </div>
              <div>
                <strong className="text-[#111111]">Mozilla Foundation</strong>
                <p className="text-[#111111]/60 text-xs mt-1">Internet health and digital rights advocacy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* K. SOURCES */}
      <section className="relative py-24 bg-[#111111] text-[#F5F3EE] overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="fade-up mb-12">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">11 // References</span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter uppercase mt-2">Sources for Algorithms Module</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="fade-up bg-[#F5F3EE]/5 rounded-[2rem] p-8 border border-[#F5F3EE]/10">
              <h4 className="font-['Space_Mono'] text-xs tracking-widest uppercase text-[#E63B2E] mb-4">Algorithm Research</h4>
              <ul className="space-y-3 text-sm text-[#F5F3EE]/70">
                <li><a href="https://fondationdescartes.org/en/" className="text-[#E63B2E] hover:underline hover:-translate-y-[1px] transition-all inline-block" target="_blank" rel="noopener noreferrer">Fondation Descartes - Filter Bubble and Recommender Systems Research</a></li>
                <li><a href="https://www.thefilterbubble.com/" className="text-[#E63B2E] hover:underline hover:-translate-y-[1px] transition-all inline-block" target="_blank" rel="noopener noreferrer">Eli Pariser - The Filter Bubble</a></li>
                <li>Cathy O&apos;Neil - &quot;Weapons of Math Destruction&quot; research on algorithmic bias</li>
              </ul>
            </div>
            <div className="fade-up bg-[#F5F3EE]/5 rounded-[2rem] p-8 border border-[#F5F3EE]/10">
              <h4 className="font-['Space_Mono'] text-xs tracking-widest uppercase text-[#E63B2E] mb-4">Attention Economy &amp; Design</h4>
              <ul className="space-y-3 text-sm text-[#F5F3EE]/70">
                <li><a href="https://www.humanetech.com/" className="text-[#E63B2E] hover:underline hover:-translate-y-[1px] transition-all inline-block" target="_blank" rel="noopener noreferrer">Center for Humane Technology - Tristan Harris research</a></li>
                <li><a href="https://partnershiponai.org/" className="text-[#E63B2E] hover:underline hover:-translate-y-[1px] transition-all inline-block" target="_blank" rel="noopener noreferrer">Partnership on AI - Engagement Optimization Studies</a></li>
                <li>Sean Parker - Facebook social-validation feedback loop statements</li>
              </ul>
            </div>
            <div className="fade-up bg-[#F5F3EE]/5 rounded-[2rem] p-8 border border-[#F5F3EE]/10">
              <h4 className="font-['Space_Mono'] text-xs tracking-widest uppercase text-[#E63B2E] mb-4">Platform-Specific Research</h4>
              <ul className="space-y-3 text-sm text-[#F5F3EE]/70">
                <li>Official platform algorithm documentation (Meta, Google, Twitter/X)</li>
                <li>Academic studies on platform-specific engagement patterns</li>
                <li>Big Data and Machine Learning research papers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION NAVIGATION */}
      <section className="px-8 md:px-16 py-16 bg-[#F5F3EE]">
        <div className="max-w-6xl mx-auto">
          <SectionNavigation currentPath="/algorithms" />
        </div>
      </section>
    </div>
  );
};

export default Algorithms;
