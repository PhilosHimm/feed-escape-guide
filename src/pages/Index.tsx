import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Terminal, Activity, MousePointer2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// --- PRESET C "Kinetic Signal" DESIGN TOKENS ---
const colors = {
  primary: "#E8E4DD", // Paper
  accent: "#E63B2E",  // Signal Red
  bg: "#F5F3EE",      // Off-white
  text: "#111111",    // Black
};

export default function Index() {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  // Animation Lifecycle
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      gsap.from(".hero-reveal", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2,
      });

      // Philosophy Parallax & Text Split Reveal
      gsap.from(".philosophy-text", {
        scrollTrigger: {
          trigger: ".philosophy-section",
          start: "top 70%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      });

      // Protocol Stacking Cards
      const protocolCards = gsap.utils.toArray(".protocol-card") as HTMLElement[];
      protocolCards.forEach((card, i) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          pin: true,
          pinSpacing: false,
          end: "+=100%",
          animation: gsap.to(card, {
            scale: 0.95,
            opacity: i === protocolCards.length - 1 ? 1 : 0.4,
            filter: i === protocolCards.length - 1 ? "blur(0px)" : "blur(10px)",
            ease: "none",
          }),
          scrub: true,
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
      {/* GLOBAL CSS NOISE OVERLAY */}
      <div className="pointer-events-none fixed inset-0 z-50 opacity-5 mix-blend-multiply">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>

      {/* NAVBAR: The Floating Island */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-6 bg-[#E8E4DD]/80 backdrop-blur-xl px-6 py-3 rounded-full border border-[#111111]/10 shadow-lg transition-all duration-300 hover:border-[#E63B2E]/50 whitespace-nowrap">
        <span className="font-bold tracking-tight uppercase text-sm">Feed Escape</span>
        <div className="flex gap-4 text-xs font-medium">
          <button onClick={() => navigate("/algorithms")} className="hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all">Algorithms</button>
          <button onClick={() => navigate("/misinformation")} className="hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all">Misinformation</button>
          <button onClick={() => navigate("/mental-health")} className="hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all">Mental Health</button>
          <button onClick={() => navigate("/privacy")} className="hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all">Privacy</button>
          <button onClick={() => navigate("/digital-balance")} className="hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all">Balance</button>
          <button onClick={() => navigate("/about")} className="hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all">About</button>
          <button onClick={() => navigate("/sources")} className="hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all">Sources</button>
        </div>
        <MagneticButton onClick={() => navigate("/digital-navigator")}>
          Initiate Quiz
        </MagneticButton>
      </nav>

      {/* A. HERO SECTION: The Opening Shot */}
      <section className="relative w-full px-8 md:px-16 pt-36 pb-24">

        <div className="relative z-10 max-w-5xl">
          <p className="hero-reveal font-['Space_Mono'] text-[#E63B2E] font-bold tracking-widest uppercase mb-4 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-[#E63B2E] rounded-full animate-pulse" />
            System Override Initialized
          </p>
          <h1 className="hero-reveal text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] text-[#111111] uppercase mb-2">
            The Feed Escape used to be a safe textbook.
          </h1>
          <h1 className="hero-reveal text-6xl md:text-8xl font-['DM_Serif_Display'] italic text-[#111111] leading-[1]">
            Now, it is an <span className="text-[#E63B2E]">Urgent Intervention.</span>
          </h1>
          <p className="hero-reveal mt-8 max-w-2xl text-lg font-medium text-[#111111]/70 leading-relaxed">
            Algorithms are optimizing for engagement, not your wellbeing. It's time to stop scrolling and start understanding the machinery dictating your attention.
          </p>
          <div className="hero-reveal mt-10">
            <MagneticButton size="lg" onClick={() => navigate("/algorithms")}>
              Deploy Countermeasures <ArrowRight className="ml-2 h-5 w-5 inline" />
            </MagneticButton>
          </div>
        </div>
      </section>

      {/* B. FEATURES: Interactive Functional Artifacts */}
      <section className="py-32 px-8 md:px-16 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Card 1: Diagnostic Shuffler (Algorithmic Transparency) */}
          <div className="bg-[#E8E4DD] rounded-[2rem] p-8 border border-[#111111]/5 shadow-sm overflow-hidden flex flex-col h-[400px]">
            <h3 className="text-xl font-bold uppercase tracking-tight mb-2">Algorithmic Transparency</h3>
            <p className="text-sm text-[#111111]/60 font-medium mb-8">Exposing the hidden filters dictating your reality.</p>
            <div className="relative flex-1">
              <DiagnosticShuffler />
            </div>
          </div>

          {/* Card 2: Telemetry Typewriter (Data Sovereignty) */}
          <div className="bg-[#111111] text-[#F5F3EE] rounded-[2rem] p-8 border border-[#111111]/5 shadow-sm overflow-hidden flex flex-col h-[400px]">
            <h3 className="text-xl font-bold uppercase tracking-tight mb-2 flex items-center gap-3">
              Data Sovereignty
              <span className="px-2 py-0.5 rounded-full bg-[#E63B2E]/20 text-[#E63B2E] text-[10px] font-['Space_Mono'] uppercase tracking-wider flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-[#E63B2E] rounded-full animate-pulse"/> Live
              </span>
            </h3>
            <p className="text-sm text-[#F5F3EE]/60 font-medium mb-6">Reclaiming ownership of your digital footprint.</p>
            <div className="flex-1 bg-[#0A0A0A] rounded-xl p-4 font-['Space_Mono'] text-xs text-[#E63B2E] leading-relaxed border border-[#E63B2E]/20 overflow-hidden relative">
              <TelemetryTypewriter />
            </div>
          </div>

          {/* Card 3: Cursor Protocol Scheduler (Attentional Autonomy) */}
          <div className="bg-[#E8E4DD] rounded-[2rem] p-8 border border-[#111111]/5 shadow-sm overflow-hidden flex flex-col h-[400px]">
            <h3 className="text-xl font-bold uppercase tracking-tight mb-2">Attentional Autonomy</h3>
            <p className="text-sm text-[#111111]/60 font-medium mb-8">Engineering friction to break the scroll loop.</p>
            <div className="flex-1 relative bg-white/50 rounded-xl border border-[#111111]/10 p-4">
              <CursorProtocol />
            </div>
          </div>

        </div>
      </section>

      {/* C. PHILOSOPHY: The Manifesto */}
      <section className="philosophy-section relative py-40 bg-[#111111] text-[#F5F3EE] overflow-hidden">
        <div className="absolute inset-0 opacity-20 grayscale mix-blend-luminosity">
          <img src="https://images.unsplash.com/photo-1558244402-286dd748c593?q=80&w=2560&auto=format&fit=crop" className="w-full h-full object-cover" alt="texture" />
        </div>
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
          <p className="philosophy-text font-['Space_Mono'] text-sm tracking-widest text-[#F5F3EE]/60 uppercase mb-8">
            The Industry Standard focuses on: Passive scrolling & endless data harvesting.
          </p>
          <h2 className="philosophy-text text-5xl md:text-8xl font-['DM_Serif_Display'] italic leading-tight">
            We focus on: <span className="text-[#E63B2E]">Attentional Autonomy.</span>
          </h2>
        </div>
      </section>

      {/* D. PROTOCOL: Sticky Stacking Archive */}
      <section className="bg-[#F5F3EE] pb-32">
        <div className="h-screen w-full protocol-card bg-[#E8E4DD] rounded-[3rem] p-12 md:p-24 flex flex-col justify-center border-t border-[#111111]/10 sticky top-0">
          <div className="max-w-4xl">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-2xl">01 //</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mt-4 mb-6 text-[#111111]">Recognize the Loop</h2>
            <p className="text-2xl text-[#111111]/70 max-w-2xl font-['DM_Serif_Display'] italic">Understand how variable rewards and filter bubbles manipulate your dopamine baselines.</p>
          </div>
          <Activity className="absolute right-12 md:right-32 bottom-24 w-48 h-48 text-[#111111]/5" />
        </div>
        
        <div className="h-screen w-full protocol-card bg-[#E63B2E] rounded-[3rem] p-12 md:p-24 flex flex-col justify-center border-t border-[#111111]/10 sticky top-0 text-[#F5F3EE]">
          <div className="max-w-4xl">
            <span className="font-['Space_Mono'] text-[#111111] text-2xl">02 //</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mt-4 mb-6">Reclaim the Data</h2>
            <p className="text-2xl text-[#F5F3EE]/80 max-w-2xl font-['DM_Serif_Display'] italic">Map out the data brokers, sever third-party trackers, and deploy privacy-first defaults.</p>
          </div>
          <Terminal className="absolute right-12 md:right-32 bottom-24 w-48 h-48 text-[#111111]/20" />
        </div>

        <div className="h-screen w-full protocol-card bg-[#111111] rounded-[3rem] p-12 md:p-24 flex flex-col justify-center border-t border-[#111111]/10 sticky top-0 text-[#F5F3EE]">
          <div className="max-w-4xl">
            <span className="font-['Space_Mono'] text-[#E63B2E] text-2xl">03 //</span>
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mt-4 mb-6">Establish Boundaries</h2>
            <p className="text-2xl text-[#F5F3EE]/70 max-w-2xl font-['DM_Serif_Display'] italic">Design friction into your devices to protect your sleep, mood, and critical thinking.</p>
          </div>
          <MousePointer2 className="absolute right-12 md:right-32 bottom-24 w-48 h-48 text-[#E63B2E]/20" />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111111] text-[#F5F3EE] rounded-t-[4rem] px-8 py-16 mt-[-4rem] relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-tighter mb-2">Feed Escape Guide</h3>
            <p className="font-['Space_Mono'] text-sm text-[#F5F3EE]/50">Digital Wellness Curriculum © 2026</p>
          </div>
          <div className="flex items-center gap-3 bg-[#2A2A2A] px-4 py-2 rounded-full font-['Space_Mono'] text-xs">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            SYSTEM OPERATIONAL
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- MICRO-INTERACTION COMPONENTS ---

function MagneticButton({ children, onClick, size = "md", className = "" }: any) {
  return (
    <button
      onClick={onClick}
      className={`relative group overflow-hidden bg-[#E63B2E] text-[#F5F3EE] rounded-full font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-105 active:scale-95 ${
        size === "lg" ? "px-10 py-5 text-lg" : "px-6 py-2.5 text-xs"
      } ${className}`}
      style={{ transitionTimingFunction: "cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
    >
      <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
      <span className="relative z-10 flex items-center justify-center">{children}</span>
    </button>
  );
}

function DiagnosticShuffler() {
  const [cards, setCards] = useState([
    { id: 1, text: "Echo Chamber Filter Active", bg: "bg-[#111111] text-[#F5F3EE]" },
    { id: 2, text: "Confirmation Bias Detected", bg: "bg-white text-[#111111]" },
    { id: 3, text: "Engagement Hook Deployed", bg: "bg-[#E63B2E] text-white" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prev) => {
        const newArr = [...prev];
        const last = newArr.pop();
        if (last) newArr.unshift(last);
        return newArr;
      });
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {cards.map((card, i) => (
        <div
          key={card.id}
          className={`absolute w-full p-4 rounded-xl border border-[#111111]/10 font-['Space_Mono'] text-sm shadow-lg transition-all duration-700 ${card.bg}`}
          style={{
            transform: `translateY(${i * 12}px) scale(${1 - i * 0.05})`,
            opacity: 1 - i * 0.2,
            zIndex: 10 - i,
            transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          {card.text}
        </div>
      ))}
    </div>
  );
}

function TelemetryTypewriter() {
  const codeString = `> Analyzing network traffic...
> Tracking cookie intercept: SUCCESS
> 14 Data brokers blocked
> Location spoofing: ENABLED
> Securing personal identifier hashes...
> Status: ANONYMOUS

Intercepting ad-profile payload...
_`;
  
  const [text, setText] = useState("");
  
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(codeString.substring(0, index));
      index++;
      if (index >= codeString.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return <div className="whitespace-pre-wrap">{text}</div>;
}

function CursorProtocol() {
  const cursorRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
      tl.set(cursorRef.current, { x: 0, y: 0, scale: 1 })
        .to(cursorRef.current, { x: 60, y: 50, duration: 1, ease: "power2.inOut" })
        .to(cursorRef.current, { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 })
        .to(btnRef.current, { backgroundColor: "#E63B2E", color: "#FFF", duration: 0.2 }, "-=0.1")
        .to(cursorRef.current, { x: 120, y: 150, duration: 1, ease: "power2.inOut", delay: 0.5 })
        .to(btnRef.current, { backgroundColor: "#E8E4DD", color: "#111", duration: 0.2 })
        .to(cursorRef.current, { opacity: 0, duration: 0.3 });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-full relative">
      <div className="grid grid-cols-7 gap-1 mb-4">
        {["S","M","T","W","T","F","S"].map((d, i) => (
          <div key={i} className="text-center text-[10px] font-bold text-[#111111]/40">{d}</div>
        ))}
        {Array.from({length: 14}).map((_, i) => (
          <div key={i} className="aspect-square bg-[#111111]/5 rounded-sm" />
        ))}
      </div>
      <div ref={btnRef} className="mx-auto w-3/4 py-2 mt-4 bg-[#E8E4DD] rounded-md text-center text-xs font-bold transition-colors">
        App Limit: 30m
      </div>
      <MousePointer2 ref={cursorRef} className="absolute top-0 left-0 w-6 h-6 text-[#111111] drop-shadow-md z-10" fill="#111" />
    </div>
  );
}
