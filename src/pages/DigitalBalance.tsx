import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TipRatingChecklist from "../components/TipRatingChecklist";
import { SectionNavigation } from "@/components/SectionNavigation";
import MagneticButton from "@/components/ui/magnetic-button";

gsap.registerPlugin(ScrollTrigger);

const DigitalBalance = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 1.2,
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
    <div ref={containerRef} className="min-h-screen bg-[#F5F3EE] text-[#111111]">
      {/* ── HEADER: Control Room Readout ── */}
      <header className="px-6 md:px-16 pt-20 pb-16 max-w-7xl mx-auto">
        <div className="fade-up">
          <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#111111]/60 block mb-6">
            Module 06 // Equilibrium Protocol
          </span>
          <h1 className="font-['DM_Serif_Display'] italic text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-8">
            Digital Balance:<br />
            <span className="text-[#E63B2E]">Finding Your</span><br />
            Equilibrium
          </h1>
        </div>

        <div className="fade-up grid md:grid-cols-[1.4fr_1fr] gap-10 items-start mt-10">
          <p className="font-['Space_Grotesk'] text-lg md:text-xl leading-relaxed text-[#111111]/80">
            Digital balance is more than just avoiding the internet, it's about intention. It is consciously choosing how and when you engage, so your devices empower you, rather than drain you. Ready to reclaim your focus and time? Try these tools, rate your favorites, and experiment with practical strategies!
          </p>
          <div className="flex justify-center">
            <img
              src="/digital-balance.jpg"
              alt="Digital balance and equilibrium concept"
              className="rounded-[2rem] w-full max-w-sm border border-[#111111]/10"
            />
          </div>
        </div>

        <div className="fade-up mt-10 bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8">
          <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#E63B2E] block mb-3">Key Insight</span>
          <p className="font-['Space_Grotesk'] text-base leading-relaxed">
            Finding balance is not a zero-sum game—you don't have to abandon digital tools entirely, but rather learn to manage their use effectively for optimal mental health and productivity.
          </p>
        </div>
      </header>

      {/* ── HEALTHY USAGE PATTERNS ── */}
      <section className="fade-up px-6 md:px-16 py-16 max-w-7xl mx-auto">
        <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#111111]/50 block mb-4">01 — Patterns</span>
        <h2 className="font-['DM_Serif_Display'] italic text-4xl md:text-5xl mb-8">Healthy Usage Patterns</h2>

        <p className="font-['Space_Grotesk'] text-base md:text-lg leading-relaxed max-w-3xl mb-10 text-[#111111]/80">
          A significant aspect of healthy usage involves understanding the psychological impacts of digital media. Scrolling through curated online portrayals of "idyllic vacation pictures, smiling faces, and new puppies" can unfortunately induce negative comparisons between one's own life and the perceived happiness of others.
        </p>

        <div className="grid md:grid-cols-[1.2fr_1fr] gap-6">
          <div className="fade-up bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8">
            <h4 className="font-['Space_Grotesk'] font-bold text-lg mb-3">Digital Media as Food Analogy</h4>
            <p className="font-['Space_Grotesk'] text-sm leading-relaxed text-[#111111]/70">
              Treat digital media like food: meaningful connection and useful information are "healthy"; mindless scrolling is "junk." While practices like taking selfies can be critiqued for narcissism, they also represent an attempt at social connection.
            </p>
          </div>

          <div className="fade-up bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8">
            <h4 className="font-['Space_Grotesk'] font-bold text-lg mb-3">In-Person vs Digital Connection</h4>
            <p className="font-['Space_Grotesk'] text-sm leading-relaxed text-[#111111]/70">
              Heavy social media use may lead to less time spent on more emotionally satisfying in-person interactions. Research shows face-to-face encounters are "much more emotionally satisfying" than digital engagement.
            </p>
          </div>
        </div>
      </section>

      {/* ── SCREEN TIME AWARENESS (DARK INVERTED) ── */}
      <section className="fade-up bg-[#111111] text-[#F5F3EE] py-20">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#F5F3EE]/40 block mb-4">02 — Awareness</span>
          <h2 className="font-['DM_Serif_Display'] italic text-4xl md:text-5xl mb-8">Screen Time Awareness</h2>

          <div className="fade-up bg-[#E63B2E] rounded-[2rem] p-8 mb-10">
            <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#F5F3EE]/70 block mb-3">Critical Insight</span>
            <p className="font-['Space_Grotesk'] text-base leading-relaxed text-[#F5F3EE]">
              "Multitasking is a myth." Studies show that switching between tasks, especially with digital tools, diverts crucial brain activity and reduces efficiency through "attention residue"—the mind continues thinking about previous tasks even after moving to new ones.
            </p>
          </div>

          <div className="fade-up mb-10">
            <h4 className="font-['Space_Grotesk'] font-bold text-lg mb-3">Communication Overload Reality</h4>
            <p className="font-['Space_Grotesk'] text-sm leading-relaxed text-[#F5F3EE]/70 max-w-3xl">
              Research indicates that individuals spend a considerable portion of their work time (one-third at the office, half at home) reading and answering emails, with a substantial portion being neither urgent nor important. This "communication overload" is exacerbated by mindless "cc'ing" and "reply alls."
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="fade-up border border-[#F5F3EE]/10 rounded-[2rem] p-8">
              <h4 className="font-['Space_Grotesk'] font-bold text-lg mb-4">Exploitative Design Features</h4>
              <ul className="space-y-3 text-sm font-['Space_Grotesk'] text-[#F5F3EE]/70">
                <li>• <strong className="text-[#F5F3EE]">Infinite scroll:</strong> Eliminates natural breaks in user experience</li>
                <li>• <strong className="text-[#F5F3EE]">Automatic play:</strong> Keeps content flowing without user choice</li>
                <li>• <strong className="text-[#F5F3EE]">Intermittent reinforcements:</strong> Unpredictable rewards like slot machines</li>
                <li>• <strong className="text-[#F5F3EE]">Social-validation feedback loops:</strong> Dopamine release from likes/retweets</li>
              </ul>
            </div>

            <div className="fade-up border border-[#F5F3EE]/10 rounded-[2rem] p-8">
              <h4 className="font-['Space_Grotesk'] font-bold text-lg mb-4">Mental Health Impact Statistics</h4>
              <ul className="space-y-3 text-sm font-['Space_Grotesk'] text-[#F5F3EE]/70">
                <li>• Higher social media use → lost sleep, difficulty concentrating</li>
                <li>• Physical inertia and anxiety/depression</li>
                <li>• American teens average 4.8 hours daily on social media</li>
                <li>• Blue light disrupts circadian rhythms and sleep patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── BOUNDARY SETTING ── */}
      <section className="fade-up px-6 md:px-16 py-20 max-w-7xl mx-auto">
        <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#111111]/50 block mb-4">03 — Boundaries</span>
        <h2 className="font-['DM_Serif_Display'] italic text-4xl md:text-5xl mb-6">Boundary Setting Strategies</h2>

        <p className="font-['Space_Grotesk'] text-base md:text-lg leading-relaxed max-w-3xl mb-10 text-[#111111]/80">
          To establish healthy limits and manage digital use, various evidence-based strategies can be employed:
        </p>

        {/* Right to Disconnect callout */}
        <div className="fade-up bg-[#E63B2E] text-[#F5F3EE] rounded-[3rem] p-10 mb-12">
          <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#F5F3EE]/60 block mb-3">Legal Framework</span>
          <h4 className="font-['DM_Serif_Display'] italic text-2xl md:text-3xl mb-4">Right to Disconnect</h4>
          <p className="font-['Space_Grotesk'] text-sm md:text-base leading-relaxed text-[#F5F3EE]/90">
            France has established a "right to disconnect" law for workers, and Ontario mandates that companies with over 25 employees have written policies for disconnecting from work communications.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-8">
          <div className="space-y-8">
            <div className="fade-up bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8">
              <h4 className="font-['Space_Grotesk'] font-bold text-lg mb-4">Email &amp; Communication Management</h4>
              <ul className="space-y-2 text-sm font-['Space_Grotesk'] text-[#111111]/70">
                <li>• Check inbox only once per hour instead of constantly</li>
                <li>• Unsubscribe from unnecessary newsletters</li>
                <li>• Don't respond immediately—some "urgent" messages resolve themselves</li>
                <li>• Be succinct and use assertive statements</li>
                <li>• Aim for "inbox zero" by end of each day</li>
              </ul>
            </div>

            <div className="fade-up bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8">
              <h4 className="font-['Space_Grotesk'] font-bold text-lg mb-4">Screen Time Tools</h4>
              <ul className="space-y-2 text-sm font-['Space_Grotesk'] text-[#111111]/70">
                <li>• Apple's ScreenTime or Google's Digital Wellbeing</li>
                <li>• RescueTime for website time tracking</li>
                <li>• Browser extensions for selective blocking</li>
                <li>• Airplane mode for concentration periods</li>
              </ul>
            </div>
          </div>

          <div className="space-y-8">
            <div className="fade-up bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8">
              <h4 className="font-['Space_Grotesk'] font-bold text-lg mb-4">"Happiness Hacks"</h4>
              <ul className="space-y-2 text-sm font-['Space_Grotesk'] text-[#111111]/70">
                <li>• Avoid screens in the hour before bed</li>
                <li>• Turn off notifications and alerts</li>
                <li>• Remove unnecessary apps from home screen</li>
                <li>• Apply blue light filters or greyscale at night</li>
                <li>• Create phone-free zones (dinner table, bedroom)</li>
              </ul>
            </div>

            <div className="fade-up bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8">
              <h4 className="font-['Space_Grotesk'] font-bold text-lg mb-4">Physical Boundaries</h4>
              <ul className="space-y-2 text-sm font-['Space_Grotesk'] text-[#111111]/70">
                <li>• Don't bring phone to dinner table</li>
                <li>• Leave device behind during walks</li>
                <li>• Prioritize in-person social interactions</li>
                <li>• Schedule device-free activities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIP RATING CHECKLIST ── */}
      <section className="fade-up px-6 md:px-16 py-10 max-w-7xl mx-auto">
        <TipRatingChecklist />
      </section>

      {/* ── ALTERNATIVE ACTIVITIES ── */}
      <section className="fade-up px-6 md:px-16 py-16 max-w-7xl mx-auto">
        <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#111111]/50 block mb-4">04 — Alternatives</span>
        <h2 className="font-['DM_Serif_Display'] italic text-4xl md:text-5xl mb-6">Alternative Activities</h2>

        <p className="font-['Space_Grotesk'] text-base md:text-lg leading-relaxed max-w-3xl mb-10 text-[#111111]/80">
          To foster a balanced lifestyle, it's important to consciously integrate offline experiences:
        </p>

        <div className="grid md:grid-cols-[1fr_1.3fr] gap-6">
          <div className="fade-up bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8">
            <h4 className="font-['Space_Grotesk'] font-bold text-lg mb-4">Unplugging Strategies</h4>
            <ul className="space-y-2 text-sm font-['Space_Grotesk'] text-[#111111]/70">
              <li>• Simple actions like not bringing phone to dinner</li>
              <li>• Device-free walks and outdoor activities</li>
              <li>• Scheduled offline time blocks</li>
              <li>• Engaging in hands-on hobbies</li>
            </ul>
          </div>

          <div className="fade-up bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8">
            <h4 className="font-['Space_Grotesk'] font-bold text-lg mb-4">Social Connection Priority</h4>
            <ul className="space-y-2 text-sm font-['Space_Grotesk'] text-[#111111]/70">
              <li>• In-person interactions are "much more emotionally satisfying"</li>
              <li>• Face-to-face conversations over digital messaging</li>
              <li>• Group activities without devices</li>
              <li>• Community involvement and volunteering</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── MINDFUL CONSUMPTION (DARK INVERTED) ── */}
      <section className="fade-up bg-[#111111] text-[#F5F3EE] py-20">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#F5F3EE]/40 block mb-4">05 — Mindfulness</span>
          <h2 className="font-['DM_Serif_Display'] italic text-4xl md:text-5xl mb-6">Mindful Consumption</h2>

          <p className="font-['Space_Grotesk'] text-base md:text-lg leading-relaxed max-w-3xl mb-10 text-[#F5F3EE]/70">
            In an environment characterized by information overload, mindful consumption involves a critical and curated approach to digital content:
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="fade-up border border-[#F5F3EE]/10 rounded-[2rem] p-8">
                <h4 className="font-['Space_Grotesk'] font-bold text-lg mb-4">Critical Information Processing</h4>
                <ul className="space-y-2 text-sm font-['Space_Grotesk'] text-[#F5F3EE]/70">
                  <li>• Be aware of "filter bubbles" creating narrow information ranges</li>
                  <li>• "Think through" initial emotional reactions before acting</li>
                  <li>• Apply critical thinking—disinformation exploits emotions</li>
                  <li>• Verify sources by checking website/publisher reputation</li>
                </ul>
              </div>

              <div className="fade-up border border-[#F5F3EE]/10 rounded-[2rem] p-8">
                <h4 className="font-['Space_Grotesk'] font-bold text-lg mb-4">Verification Techniques</h4>
                <ul className="space-y-2 text-sm font-['Space_Grotesk'] text-[#F5F3EE]/70">
                  <li>• Check article dates to prevent recycled misinformation</li>
                  <li>• Use reverse image search for deceptive content</li>
                  <li>• Utilize fact-checkers: Snopes, PolitiFact, FactCheck.org</li>
                  <li>• Browser extensions like "Know News" for credible sources</li>
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="fade-up border border-[#F5F3EE]/10 rounded-[2rem] p-8">
                <h4 className="font-['Space_Grotesk'] font-bold text-lg mb-4">Content Curation Strategies</h4>
                <ul className="space-y-2 text-sm font-['Space_Grotesk'] text-[#F5F3EE]/70">
                  <li>• Set up Google Alerts for topics of interest</li>
                  <li>• Use RSS feeds for website updates</li>
                  <li>• Streamline social media with dashboards like Buffer</li>
                  <li>• Social bookmarking sites (Reddit, Digg) for collective intelligence</li>
                </ul>
              </div>

              <div className="fade-up border border-[#F5F3EE]/10 rounded-[2rem] p-8">
                <h4 className="font-['Space_Grotesk'] font-bold text-lg mb-4">Good Digital Hygiene</h4>
                <ul className="space-y-2 text-sm font-['Space_Grotesk'] text-[#F5F3EE]/70">
                  <li>• Regularly Google your own name</li>
                  <li>• Close abandoned accounts and update active ones</li>
                  <li>• Delete or "bury" undesirable content with positive posts</li>
                  <li>• Take online courses on navigating disinformation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIGITAL DETOX CHALLENGE ── */}
      <section className="fade-up px-6 md:px-16 py-20 max-w-7xl mx-auto">
        <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#111111]/50 block mb-4">06 — Challenge</span>
        <h2 className="font-['DM_Serif_Display'] italic text-4xl md:text-5xl mb-10">Unplug and Discover</h2>

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8">
          <div className="fade-up bg-[#E8E4DD] border border-[#111111]/10 rounded-[3rem] p-10">
            <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#E63B2E] block mb-4">The Challenge</span>
            <h4 className="font-['DM_Serif_Display'] italic text-2xl md:text-3xl mb-4">24hr "Feed Detox"</h4>
            <p className="font-['Space_Grotesk'] text-sm leading-relaxed text-[#111111]/70 mb-4">
              Attempt a 24hr "feed detox" — can you spend a full day social-media free?
            </p>
            <p className="font-['Space_Grotesk'] text-sm leading-relaxed text-[#111111]/70">
              Try and block your top distractions for a day and see what happens! Use your phones' built in limits or apps to stay strong. What did you gain?
            </p>
          </div>

          <div className="fade-up bg-[#E8E4DD] border border-[#111111]/10 rounded-[3rem] p-10 flex flex-col justify-between">
            <div>
              <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#E63B2E] block mb-4">Deep Dive</span>
              <h4 className="font-['DM_Serif_Display'] italic text-2xl mb-4">The Attention Crisis</h4>
              <p className="font-['Space_Grotesk'] text-sm leading-relaxed text-[#111111]/70 mb-3">
                For a powerful look at why our focus is stolen, check out:
              </p>
              <p className="font-['Space_Grotesk'] text-sm leading-relaxed text-[#111111]/70">
                <strong className="text-[#111111]">Stolen Focus by Johann Hari (Course Reading):</strong> This book explores how constant digital distractions, fueled by tech companies' agendas and designs, have fragmented our attention. Hari argues that our inability to focus isn't a personal failing, but a societal problem designed into our digital world. Understanding these can empower you to fight back more effectively.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="https://johnhari.com/stolen-focus/"
                className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#E63B2E] underline hover:-translate-y-[1px] hover:text-[#E63B2E] transition-transform inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── LONG-TERM SUSTAINABILITY ── */}
      <section className="fade-up px-6 md:px-16 py-16 max-w-7xl mx-auto">
        <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#111111]/50 block mb-4">07 — Sustainability</span>
        <h2 className="font-['DM_Serif_Display'] italic text-4xl md:text-5xl mb-6">Long-term Sustainability</h2>

        <p className="font-['Space_Grotesk'] text-base md:text-lg leading-relaxed max-w-3xl mb-10 text-[#111111]/80">
          Building lasting healthy habits is an ongoing process that encompasses the consistent application of digital wellness strategies:
        </p>

        <div className="fade-up bg-[#E63B2E] text-[#F5F3EE] rounded-[2rem] p-8 mb-10">
          <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#F5F3EE]/60 block mb-3">Continuous Practice</span>
          <p className="font-['Space_Grotesk'] text-base leading-relaxed text-[#F5F3EE]/90">
            The constant innovation in digital media means that adaptability and strategic thinking about digital tools are key to maintaining a healthy and effective online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="fade-up bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8">
            <h4 className="font-['Space_Grotesk'] font-bold text-lg mb-3">Ongoing Digital Hygiene</h4>
            <p className="font-['Space_Grotesk'] text-sm leading-relaxed text-[#111111]/70">
              Your online presence is ever-evolving and requires regular review and management. Consistent application of good digital hygiene practices is fundamental to long-term digital wellness.
            </p>
          </div>

          <div className="fade-up bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8">
            <h4 className="font-['Space_Grotesk'] font-bold text-lg mb-3">Adaptive Strategy</h4>
            <p className="font-['Space_Grotesk'] text-sm leading-relaxed text-[#111111]/70">
              As technology evolves, so must your approach to digital balance. Stay informed about new platforms, features, and their potential impacts on your well-being.
            </p>
          </div>
        </div>
      </section>

      {/* ── TOOLS & RESOURCES + CTA ── */}
      <section className="fade-up bg-[#111111] text-[#F5F3EE] py-20">
        <div className="px-6 md:px-16 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1.3fr_1fr] gap-8 mb-12">
            <div className="fade-up border border-[#F5F3EE]/10 rounded-[2rem] p-8">
              <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#F5F3EE]/40 block mb-4">Recommended Tools</span>
              <p className="font-['Space_Grotesk'] text-base leading-relaxed text-[#F5F3EE]/80 mb-4">
                <a href="https://forestapp.cc/" className="underline hover:-translate-y-[1px] hover:text-[#E63B2E] transition-all inline-block" target="_blank" rel="noopener noreferrer">Forest</a>,{" "}
                <a href="https://www.screentimezen.com/" className="underline hover:-translate-y-[1px] hover:text-[#E63B2E] transition-all inline-block" target="_blank" rel="noopener noreferrer">ScreenZen</a>,{" "}
                <a href="https://rescuetime.com/" className="underline hover:-translate-y-[1px] hover:text-[#E63B2E] transition-all inline-block" target="_blank" rel="noopener noreferrer">RescueTime</a>, iOS/Android built-in time limits.
              </p>
              <p className="font-['Space_Grotesk'] text-sm text-[#F5F3EE]/60">
                Try blocking your top distractions for a day and observe the impact on your focus and well-being!
              </p>
            </div>

            <div className="fade-up border border-[#F5F3EE]/10 rounded-[2rem] p-8 flex flex-col justify-center">
              <p className="font-['Space_Grotesk'] text-base leading-relaxed text-[#F5F3EE]/80 mb-6">
                <strong className="text-[#F5F3EE]">Ready to try it?</strong> Start your 24-hour challenge today! Notice the difference in your attention, mood, and social connections.
              </p>
              <div>
                <MagneticButton onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                  Start Now
                </MagneticButton>
              </div>
            </div>
          </div>

          <div className="fade-up border border-[#F5F3EE]/10 rounded-[3rem] p-10 text-center">
            <p className="font-['DM_Serif_Display'] italic text-xl md:text-2xl text-[#F5F3EE]/90">
              <strong>Remember:</strong> Building healthy digital habits is a game of small wins. Focus on sustainable changes rather than dramatic overhauls. What will your first small win be?
            </p>
          </div>
        </div>
      </section>

      {/* ── SOURCES ── */}
      <section className="fade-up px-6 md:px-16 py-20 max-w-7xl mx-auto">
        <span className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#111111]/50 block mb-4">References</span>
        <h3 className="font-['DM_Serif_Display'] italic text-3xl md:text-4xl mb-10">Sources for Digital Balance Module</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="fade-up bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8">
            <h4 className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#111111]/50 mb-4">Course Materials</h4>
            <ul className="space-y-2 text-sm font-['Space_Grotesk']">
              <li>• <a href="https://johnhari.com/stolen-focus/" className="underline hover:-translate-y-[1px] hover:text-[#E63B2E] transition-all inline-block" target="_blank" rel="noopener noreferrer">Stolen Focus by Johann Hari (Course Reading)</a></li>
              <li>• Course Module 5 - Digital Wellness (TMU CEID100 internal course content)</li>
            </ul>
          </div>

          <div className="fade-up bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8">
            <h4 className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#111111]/50 mb-4">Digital Wellness Tools</h4>
            <ul className="space-y-2 text-sm font-['Space_Grotesk']">
              <li>• <a href="https://forestapp.cc/" className="underline hover:-translate-y-[1px] hover:text-[#E63B2E] transition-all inline-block" target="_blank" rel="noopener noreferrer">Forest App</a></li>
              <li>• <a href="https://www.screentimezen.com/" className="underline hover:-translate-y-[1px] hover:text-[#E63B2E] transition-all inline-block" target="_blank" rel="noopener noreferrer">ScreenZen</a></li>
              <li>• <a href="https://rescuetime.com/" className="underline hover:-translate-y-[1px] hover:text-[#E63B2E] transition-all inline-block" target="_blank" rel="noopener noreferrer">RescueTime</a></li>
              <li>• iOS Screen Time and Android Digital Wellbeing documentation</li>
            </ul>
          </div>

          <div className="fade-up bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8">
            <h4 className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#111111]/50 mb-4">Research &amp; Studies</h4>
            <ul className="space-y-2 text-sm font-['Space_Grotesk']">
              <li>• <a href="https://www.humanetech.com/" className="underline hover:-translate-y-[1px] hover:text-[#E63B2E] transition-all inline-block" target="_blank" rel="noopener noreferrer">Center for Humane Technology - Attention Economy Research</a></li>
              <li>• Digital wellness and mental health correlation studies</li>
              <li>• Screen time impact research</li>
              <li>• Sleep and blue light studies</li>
            </ul>
          </div>

          <div className="fade-up bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8">
            <h4 className="font-['Space_Mono'] uppercase tracking-widest text-xs text-[#111111]/50 mb-4">Behavioral Science</h4>
            <ul className="space-y-2 text-sm font-['Space_Grotesk']">
              <li>• Habit formation and behavior change research</li>
              <li>• Digital minimalism studies</li>
              <li>• Mindfulness and technology integration research</li>
              <li>• 20/20/20 rule and eye health studies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION NAVIGATION ── */}
      <div className="px-6 md:px-16 pb-20 max-w-7xl mx-auto">
        <SectionNavigation currentPath="/digital-balance" />
      </div>
    </div>
  );
};

export default DigitalBalance;
