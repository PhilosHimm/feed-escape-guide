import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TrackingSimulator from "../components/TrackingSimulator";
import { SectionNavigation } from "@/components/SectionNavigation";
import MagneticButton from "@/components/ui/magnetic-button";

gsap.registerPlugin(ScrollTrigger);

const Privacy = () => {
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
      {/* A. HERO — Control Room Readout */}
      <section className="relative w-full px-8 md:px-16 pt-36 pb-24">
        <div className="max-w-6xl mx-auto">
          <p className="hero-reveal font-['Space_Mono'] text-[#E63B2E] font-bold tracking-widest uppercase text-xs flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-[#E63B2E] rounded-full animate-pulse" />
            Module 04 // Data Sovereignty
          </p>
          <h1 className="hero-reveal text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] uppercase mb-2">
            Protecting Your
          </h1>
          <h1 className="hero-reveal text-5xl md:text-8xl font-['DM_Serif_Display'] italic leading-[1]">
            <span className="text-[#E63B2E]">Digital</span> Self
          </h1>
          <div className="hero-reveal grid md:grid-cols-[1fr_auto] gap-12 items-center mt-12">
            <p className="text-lg md:text-xl font-medium text-[#111111]/70 leading-relaxed max-w-2xl">
              Every click, every like, and every scroll builds your digital profile. It&apos;s like an invisible personality created by companies tracking your interest, habits, even mood, shaping the ads you see and the content you&apos;re shown. See how tracking works, then learn how you can reclaim control.
            </p>
            <img
              src="/privacy.jpg"
              alt="Privacy protection and digital security"
              className="rounded-[2rem] shadow-md max-w-xs w-full h-auto border border-[#111111]/10"
            />
          </div>
          <div className="hero-reveal mt-8 bg-[#E63B2E]/10 border border-[#E63B2E]/30 rounded-[2rem] p-6 max-w-3xl">
            <p className="text-sm text-[#111111]/80">
              <strong className="text-[#E63B2E]">Critical Reality:</strong> Once something is posted online, it is very difficult to get rid of it. Internet content is like a tattoo&mdash;sticking with you for a very long time, and traces may remain even after removal.
            </p>
          </div>
        </div>
      </section>

      {/* B. DATA PROTECTION EDUCATION */}
      <section className="px-8 md:px-16 py-24 bg-[#F5F3EE]">
        <div className="max-w-6xl mx-auto">
          <div className="fade-up mb-12">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-sm tracking-widest uppercase">02 // Awareness</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mt-2">Data Protection Education</h2>
            <p className="text-2xl font-['DM_Serif_Display'] italic text-[#111111]/60 mt-2">Understanding the Value of Your Data</p>
          </div>
          <div className="fade-up bg-[#E8E4DD] rounded-[3rem] border border-[#111111]/10 p-8 md:p-12 mb-8">
            <p className="text-base md:text-lg leading-relaxed text-[#111111]/80 max-w-3xl">
              Algorithms that underpin many digital services are not objective and can reflect biases and prejudices present in their designers&apos; worldviews, potentially impacting areas like credit scores, insurance, interview selections, and even police profiling. This highlights the need for &quot;algorithmic transparency.&quot;
            </p>
          </div>
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-6">
            <div className="fade-up bg-[#E63B2E]/10 border border-[#E63B2E]/30 rounded-[2rem] p-8 md:p-12">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-3">Warning</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Mental Health Impact</h3>
              <p className="text-sm text-[#111111]/70 leading-relaxed">
                Constant self-surveillance required for &quot;self-branding&quot; online can lead to tension and stress due to the contradictory demands of &quot;authenticity&quot; and &quot;business-targeted self-presentation.&quot;
              </p>
            </div>
            <div className="fade-up bg-[#E8E4DD] rounded-[2rem] border border-[#111111]/10 p-8">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-3">Key Insight</span>
              <p className="text-sm text-[#111111]/70 leading-relaxed">
                Personal data has been called &quot;the new oil&quot; marking it as the most valuable resource of the 21st century. Understanding this helps you recognize why your privacy matters so much.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* C. HOW DATA GETS PROFILED — Dark Drama */}
      <section className="relative py-32 bg-[#111111] text-[#F5F3EE] overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="fade-up">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">03 // Surveillance</span>
            <h2 className="text-4xl md:text-7xl font-['DM_Serif_Display'] italic leading-tight mt-4 mb-8">
              How Data Gets <span className="text-[#E63B2E]">Profiled</span>
            </h2>
          </div>
          <div className="fade-up grid md:grid-cols-[2fr_1fr] gap-8 mb-8">
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold uppercase tracking-tight mb-2">Invisible Analysis</h3>
                <p className="text-sm text-[#F5F3EE]/70 leading-relaxed">
                  Sites analyze your visits and clicks, and even when you hover over something - even if you don&apos;t log in! This happens through tracking technologies.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-tight mb-2">Massive Sharing Networks</h3>
                <p className="text-sm text-[#F5F3EE]/70 leading-relaxed">
                  Most apps share data with 10+ partners - including ad networks, analytic companies, and data brokers. Your information flows through an interconnected ecosystem.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold uppercase tracking-tight mb-2">Hyper-targeted Ads</h3>
                <p className="text-sm text-[#F5F3EE]/70 leading-relaxed">
                  Targeted ads are customized just for you based on recent purchases, conversations, and more.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="fade-up bg-[#E63B2E]/10 border border-[#E63B2E]/30 rounded-[2rem] p-8">
                <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-3">PII Risk</span>
                <h3 className="text-lg font-bold uppercase tracking-tight mb-3">Personally Identifiable Information</h3>
                <p className="text-sm text-[#F5F3EE]/70 leading-relaxed">
                  Sometimes due to data breaches or hackers, data from profiles or log in credentials, which can include: name, date of birth, age, phone number, address and more, can be leaked through these digital profiles. With company databases or exposed profiles, it can lead to identity theft, scams or other privacy violations.
                </p>
              </div>
            </div>
          </div>
          <div className="fade-up bg-[#F5F3EE]/10 border border-[#F5F3EE]/20 rounded-[2rem] p-8">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-2">Helpful Tip</span>
            <p className="text-sm text-[#F5F3EE]/70 leading-relaxed">
              Create an unbreakable password using combinations of letters, numbers, and symbols and use a unique password across different accounts. Using a password manager (like LastPass, Bitwarden or your browsers built in one) can help secretly store (or even generate complex) passwords.
            </p>
          </div>
        </div>
      </section>

      {/* D. PRIVACY SETTINGS & POLICY CHANGES */}
      <section className="px-8 md:px-16 py-24 bg-[#F5F3EE]">
        <div className="max-w-6xl mx-auto">
          <div className="fade-up mb-12">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-sm tracking-widest uppercase">04 // Policy</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mt-2">Privacy Settings</h2>
            <p className="text-2xl font-['DM_Serif_Display'] italic text-[#111111]/60 mt-2">&amp; Policy Changes</p>
          </div>
          <div className="fade-up bg-[#E8E4DD] rounded-[3rem] border border-[#111111]/10 p-8 md:p-12 mb-8">
            <p className="text-base md:text-lg leading-relaxed text-[#111111]/80 max-w-3xl">
              Major tech companies have implemented policy changes that affect user control over data, though often with their own strategic interests:
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="fade-up bg-[#E8E4DD] rounded-[2rem] border border-[#111111]/10 p-8">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-3">Apple // 2021</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">App Tracking Transparency</h3>
              <p className="text-sm text-[#111111]/70 leading-relaxed">
                Aimed to give iPhone users greater control over which companies could access their data. However, it was also perceived by many in the industry as Apple&apos;s strategy to consolidate its own control over ad tracking.
              </p>
            </div>
            <div className="fade-up bg-[#E8E4DD] rounded-[2rem] border border-[#111111]/10 p-8">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-3">Google // Chrome</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Third-Party Cookie Phase-Out</h3>
              <p className="text-sm text-[#111111]/70 leading-relaxed">
                Alphabet is phasing out third-party cookies on Chrome, a move also seen as an attempt to gain greater control over user data rather than pure privacy protection.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* E. THIRD-PARTY SHARING — Dark Drama */}
      <section className="relative py-32 bg-[#111111] text-[#F5F3EE] overflow-hidden">
        <div className="max-w-6xl mx-auto px-8 md:px-16">
          <div className="fade-up">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">05 // Threat Landscape</span>
            <h2 className="text-4xl md:text-7xl font-['DM_Serif_Display'] italic leading-tight mt-4 mb-8">
              The Privacy <span className="text-[#E63B2E]">Death Stars</span>
            </h2>
          </div>
          <div className="fade-up bg-[#E63B2E]/10 border border-[#E63B2E]/30 rounded-[2rem] p-8 mb-10">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-2">Data Brokers</span>
            <p className="text-sm text-[#F5F3EE]/80 leading-relaxed">
              Companies like Acxiom, Experian, and Oracle, dubbed &quot;privacy death stars,&quot; actively collect vast amounts of personal information including shopping habits, credit histories, and even ethnic and sexual identities. They classify individuals by commercial value and sell access to the highest bidder.
            </p>
          </div>

          <div className="fade-up grid md:grid-cols-[1.3fr_1fr] gap-8 mb-10">
            <div>
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-4">What Gets Shared &amp; Sold</span>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">Personal Data Types</h3>
              <ul className="text-sm space-y-2 text-[#F5F3EE]/70">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Shopping habits and purchase histories</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Credit histories and financial information</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Ethnic and sexual identities</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Health records and medical information</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Email addresses and PayPal access</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />SIN numbers and government IDs</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 md:mt-8">Who Buys This Data</h3>
              <ul className="text-sm space-y-2 text-[#F5F3EE]/70">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Banks and financial institutions</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Insurance companies</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Credit rating agencies</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Government agencies</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Facebook and Twitter for user profiles</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Criminal organizations (dark web)</li>
              </ul>
            </div>
          </div>

          <div className="fade-up bg-[#F5F3EE]/10 border border-[#F5F3EE]/20 rounded-[2rem] p-8 mb-10">
            <p className="text-sm text-[#F5F3EE]/70 leading-relaxed">
              <strong className="text-[#E63B2E]">Critical Reality:</strong> These dossiers are &quot;not anonymous, but are intimately tied to our real world identities.&quot; The increasing interoperability of digital systems leads to &quot;less privacy (potentially) as more data is shared between more devices.&quot;
            </p>
          </div>

          <div className="fade-up">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-4">Surveillance</span>
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">Government &amp; Criminal Surveillance</h3>
            <ul className="text-sm space-y-3 text-[#F5F3EE]/70">
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />China employs &quot;keyword blocking algorithms&quot; on platforms like WeChat to monitor sensitive political topics</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />These surveillance technologies are being made commercially available outside of China</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Cyber-fraudsters use generative AI to create voice clones and deepfake videos</li>
              <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Stolen data is frequently traded on the dark web</li>
            </ul>
          </div>
        </div>
      </section>

      {/* F. TRACKING SIMULATOR */}
      <section className="px-8 md:px-16 py-24 bg-[#E8E4DD]">
        <div className="max-w-6xl mx-auto">
          <div className="fade-up text-center mb-12">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase">06 // Interactive Lab</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mt-2">Try It Yourself</h2>
            <p className="text-2xl font-['DM_Serif_Display'] italic text-[#111111]/60 mt-2">Tracking Simulator</p>
          </div>
          <div className="fade-up">
            <TrackingSimulator />
          </div>
        </div>
      </section>

      {/* G. PROTECTION STRATEGIES */}
      <section className="px-8 md:px-16 py-24 bg-[#F5F3EE]">
        <div className="max-w-6xl mx-auto">
          <div className="fade-up mb-12">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-sm tracking-widest uppercase">07 // Defense</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mt-2">Protection Strategies</h2>
            <p className="text-2xl font-['DM_Serif_Display'] italic text-[#111111]/60 mt-2">Reclaim Control Over Your Data</p>
          </div>
          <div className="fade-up bg-[#E8E4DD] rounded-[3rem] border border-[#111111]/10 p-8 md:p-12 mb-8">
            <p className="text-base md:text-lg leading-relaxed text-[#111111]/80 max-w-3xl">
              Mitigating privacy risks requires a combination of technological tools and informed user behavior:
            </p>
          </div>
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-6 mb-8">
            <div className="fade-up bg-[#E8E4DD] rounded-[2rem] border border-[#111111]/10 p-8">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-3">Hygiene</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Good Digital Hygiene</h3>
              <ul className="text-sm space-y-2 text-[#111111]/70">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Regularly Google your own name to review online presence</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Close abandoned accounts and update active ones</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Delete or &quot;bury&quot; undesirable content with new positive posts</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Think before you click&mdash;pause and verify before sharing</li>
              </ul>
            </div>
            <div className="fade-up bg-[#E8E4DD] rounded-[2rem] border border-[#111111]/10 p-8">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-3">Ad-Block</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Ad-Blocking &amp; Tracking Protection</h3>
              <ul className="text-sm space-y-2 text-[#111111]/70">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Over 30% of users employ ad-blockers for privacy protection</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Prevent malware and block tracking scripts</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Speed up page loads and minimize data usage</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Deny marketers access to user analytics</li>
              </ul>
            </div>
          </div>
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-6 mb-8">
            <div className="fade-up bg-[#111111] text-[#F5F3EE] rounded-[3rem] p-8 md:p-12 border border-[#111111]/20">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-3">Security</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Cybersecurity Measures</h3>
              <ul className="text-sm space-y-2 text-[#F5F3EE]/70">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Always check for &quot;https://&quot; and verify web addresses</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Use complex, unique passwords with a password manager</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Enable multi-factor authentication wherever possible</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Install reputable anti-virus and malware protection</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Monitor banking and credit accounts for suspicious activity</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Secure your phone with a lock to protect data if lost</li>
              </ul>
            </div>
            <div className="fade-up bg-[#E8E4DD] rounded-[2rem] border border-[#111111]/10 p-8">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-3">Verification</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Information Verification</h3>
              <ul className="text-sm space-y-2 text-[#111111]/70">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Verify sources and check credentials before sharing</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Use reverse image search to detect deceptive content</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Utilize fact-checkers like Snopes, PolitiFact, FactCheck.org</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Check publication dates to prevent recycled misinformation</li>
              </ul>
            </div>
          </div>
          <div className="fade-up bg-[#E8E4DD] rounded-[2rem] border border-[#111111]/10 p-8">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-2">Advanced Protection</span>
            <p className="text-sm text-[#111111]/70 leading-relaxed">
              Edge computing (data processing within devices) and cryptocurrencies like Bitcoin offer enhanced privacy by reducing reliance on central servers and providing partly anonymous transactions.
            </p>
          </div>
        </div>
      </section>

      {/* H. LEGAL RIGHTS & FRAMEWORKS */}
      <section className="px-8 md:px-16 py-24 bg-[#E8E4DD]">
        <div className="max-w-6xl mx-auto">
          <div className="fade-up mb-12">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-sm tracking-widest uppercase">08 // Regulation</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mt-2">Legal Rights</h2>
            <p className="text-2xl font-['DM_Serif_Display'] italic text-[#111111]/60 mt-2">&amp; Frameworks</p>
          </div>

          <div className="fade-up mb-6">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-4">Canadian Privacy Laws</span>
          </div>

          <div className="grid md:grid-cols-[1.3fr_1fr] gap-6 mb-8">
            <div className="flex flex-col gap-6">
              <div className="fade-up bg-[#F5F3EE] rounded-[2rem] border border-[#111111]/10 p-8">
                <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-2">Federal</span>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">PIPEDA</h3>
                <p className="text-sm text-[#111111]/70 leading-relaxed">
                  Personal Information Protection and Electronic Documents Act governs how commercial entities collect and use personal data.
                </p>
              </div>
              <div className="fade-up bg-[#F5F3EE] rounded-[2rem] border border-[#111111]/10 p-8">
                <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-2">2015</span>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">Digital Privacy Act</h3>
                <p className="text-sm text-[#111111]/70 leading-relaxed">
                  Strengthened aspects of PIPEDA, particularly regarding consent for data collection.
                </p>
              </div>
              <div className="fade-up bg-[#F5F3EE] rounded-[2rem] border border-[#111111]/10 p-8">
                <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-2">2014</span>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">CASL</h3>
                <p className="text-sm text-[#111111]/70 leading-relaxed">
                  Canada&apos;s anti-spam law, considered one of the toughest globally.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <div className="fade-up bg-[#111111] text-[#F5F3EE] rounded-[3rem] p-8 md:p-12 border border-[#111111]/20">
                <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-2">2021</span>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">Bill C11</h3>
                <p className="text-sm text-[#F5F3EE]/70 leading-relaxed">
                  Digital Charter Implementation Act aimed for major PIPEDA overhaul, including a &quot;right to deletion&quot; allowing consumers to demand destruction of personal data.
                </p>
              </div>
              <div className="fade-up bg-[#111111] text-[#F5F3EE] rounded-[3rem] p-8 md:p-12 border border-[#111111]/20">
                <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-2">2013</span>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-3">Bill C13</h3>
                <p className="text-sm text-[#F5F3EE]/70 leading-relaxed">
                  Protecting Canadians from Online Crime Act to combat cyberbullying, though controversial for potentially expanding police digital access.
                </p>
              </div>
            </div>
          </div>

          <div className="fade-up">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-4">Global Legal Developments</span>
            <div className="bg-[#F5F3EE] rounded-[2rem] border border-[#111111]/10 p-8">
              <ul className="text-sm space-y-3 text-[#111111]/70">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Germany, Singapore, and Malaysia introducing fines for platforms disseminating hate speech and disinformation</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Brazil blocked X (formerly Twitter) until it paid fines for spreading disinformation</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Growing calls for algorithmic transparency to ensure accountability</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />International movement toward stronger data protection and platform regulation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* I. ALTERNATIVE PRIVACY-FOCUSED TECHNOLOGIES */}
      <section className="px-8 md:px-16 py-24 bg-[#F5F3EE]">
        <div className="max-w-6xl mx-auto">
          <div className="fade-up mb-12">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-sm tracking-widest uppercase">09 // Alternatives</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mt-2">Privacy-Focused</h2>
            <p className="text-2xl font-['DM_Serif_Display'] italic text-[#111111]/60 mt-2">Technologies &amp; Tools</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="fade-up bg-[#E8E4DD] rounded-[2rem] border border-[#111111]/10 p-8">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-3">Network</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Tor Network</h3>
              <p className="text-sm text-[#111111]/70 leading-relaxed">
                Technology that anonymizes online communication, used by human rights organizations, democracy activists, and whistleblowers to communicate securely. Provides means for private online interaction.
              </p>
            </div>
            <div className="fade-up bg-[#E8E4DD] rounded-[2rem] border border-[#111111]/10 p-8">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-3">Finance</span>
              <h3 className="text-xl font-bold uppercase tracking-tight mb-4">Cryptocurrency</h3>
              <p className="text-sm text-[#111111]/70 leading-relaxed">
                Bitcoin and other cryptocurrencies offer fundamentally new forms of value exchange that address privacy concerns related to centralized ledgers and provide partly anonymous transaction methods.
              </p>
            </div>
          </div>
          <div className="fade-up bg-[#111111] text-[#F5F3EE] rounded-[3rem] p-8 md:p-12 border border-[#111111]/20">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-6">Privacy-Focused Tools</span>
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
              <a href="https://privacybadger.org" className="text-sm text-[#F5F3EE]/80 underline underline-offset-4 hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all" target="_blank" rel="noopener noreferrer">
                Privacy Badger &mdash; Block trackers and protect against data collection
              </a>
              <a href="https://duckduckgo.com" className="text-sm text-[#F5F3EE]/80 underline underline-offset-4 hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all" target="_blank" rel="noopener noreferrer">
                DuckDuckGo &mdash; Private search engine that doesn&apos;t track users
              </a>
              <a href="https://www.mozilla.org/firefox/" className="text-sm text-[#F5F3EE]/80 underline underline-offset-4 hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all" target="_blank" rel="noopener noreferrer">
                Firefox &mdash; Privacy-focused browser with enhanced tracking protection
              </a>
              <a href="https://haveibeenpwned.com" className="text-sm text-[#F5F3EE]/80 underline underline-offset-4 hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all" target="_blank" rel="noopener noreferrer">
                Have I Been Pwned &mdash; Check if your data has been compromised
              </a>
              <a href="https://www.torproject.org" className="text-sm text-[#F5F3EE]/80 underline underline-offset-4 hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all" target="_blank" rel="noopener noreferrer">
                Tor Browser &mdash; Anonymous web browsing and communication
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* J. SOURCES */}
      <section className="px-8 md:px-16 py-24 bg-[#E8E4DD]">
        <div className="max-w-6xl mx-auto">
          <div className="fade-up mb-12">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-sm tracking-widest uppercase">10 // References</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mt-2">Sources</h2>
            <p className="text-2xl font-['DM_Serif_Display'] italic text-[#111111]/60 mt-2">for Privacy Module</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="fade-up bg-[#F5F3EE] rounded-[2rem] border border-[#111111]/10 p-8">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-4">Research &amp; Organizations</span>
              <ul className="text-sm space-y-2 text-[#111111]/70">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" /><a href="https://nymity.ch/" className="underline underline-offset-4 hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all" target="_blank" rel="noopener noreferrer">NYM.com - Data Broker Research</a></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" /><a href="https://www.eff.org/" className="underline underline-offset-4 hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all" target="_blank" rel="noopener noreferrer">Electronic Frontier Foundation</a></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" /><a href="https://foundation.mozilla.org/" className="underline underline-offset-4 hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all" target="_blank" rel="noopener noreferrer">Mozilla Foundation - Internet Health</a></li>
              </ul>
            </div>
            <div className="fade-up bg-[#F5F3EE] rounded-[2rem] border border-[#111111]/10 p-8">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-4">Tools &amp; Protection</span>
              <ul className="text-sm space-y-2 text-[#111111]/70">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" /><a href="https://privacybadger.org" className="underline underline-offset-4 hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all" target="_blank" rel="noopener noreferrer">Privacy Badger - Tracking Protection</a></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Password manager research (LastPass, Bitwarden security studies)</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />VPN and encryption technology documentation</li>
              </ul>
            </div>
            <div className="fade-up bg-[#F5F3EE] rounded-[2rem] border border-[#111111]/10 p-8">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-4">Legal &amp; Regulatory</span>
              <ul className="text-sm space-y-2 text-[#111111]/70">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />PIPEDA (Personal Information Protection and Electronic Documents Act)</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />GDPR (General Data Protection Regulation) documentation</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Platform privacy policy analysis and research</li>
              </ul>
            </div>
            <div className="fade-up bg-[#F5F3EE] rounded-[2rem] border border-[#111111]/10 p-8">
              <span className="font-['Space_Mono'] text-[#E63B2E] text-xs tracking-widest uppercase block mb-4">Data Collection Studies</span>
              <ul className="text-sm space-y-2 text-[#111111]/70">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />HTML cookies and tracking technology research</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Cross-device tracking studies</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />IoT (Internet of Things) privacy research</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#E63B2E] mt-1.5 shrink-0" />Data broker ecosystem analysis</li>
              </ul>
            </div>
          </div>
          <div className="fade-up mt-8 text-center">
            <p className="text-xs text-[#111111]/50 font-['Space_Mono'] tracking-wider">
              Sources: NYM.com research on data brokers, PIPEDA documentation, cybersecurity best practices, and digital privacy frameworks
            </p>
          </div>
        </div>
      </section>

      {/* SECTION NAVIGATION */}
      <section className="px-8 md:px-16 py-16 bg-[#F5F3EE]">
        <div className="max-w-6xl mx-auto">
          <SectionNavigation currentPath="/privacy" />
        </div>
      </section>
    </div>
  );
};

export default Privacy;
