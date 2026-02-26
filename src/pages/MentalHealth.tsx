import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import EmojiSlider from "../components/EmojiSlider";
import MentalHealthCarousel from "../components/MentalHealthCarousel";
import { SectionNavigation } from "@/components/SectionNavigation";
import MagneticButton from "@/components/ui/magnetic-button";

gsap.registerPlugin(ScrollTrigger);

const MentalHealth = () => {
  const [mood, setMood] = useState(2);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".fade-up", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.utils.toArray<HTMLElement>(".section-reveal").forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
          },
          y: 40,
          opacity: 0,
          duration: 1.2,
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
      {/* ── HEADER: Control Room Readout ── */}
      <section className="relative w-full px-8 md:px-16 pt-32 pb-20">
        <p className="fade-up font-['Space_Mono'] text-[#E63B2E] font-bold tracking-widest uppercase text-xs flex items-center gap-2 mb-6">
          <span className="w-2 h-2 bg-[#E63B2E] rounded-full animate-pulse" />
          Module 03 // Cognitive Impact
        </p>
        <h1 className="fade-up text-4xl md:text-6xl font-bold tracking-tighter leading-[1.1] uppercase mb-2">
          Mental Health:
        </h1>
        <h1 className="fade-up text-5xl md:text-7xl font-['DM_Serif_Display'] italic leading-[1]">
          The Foundation of{" "}
          <span className="text-[#E63B2E]">Digital Wellness.</span>
        </h1>

        <div className="fade-up mt-12 grid md:grid-cols-5 gap-10 items-start">
          <div className="md:col-span-3">
            <p className="text-lg font-medium text-[#111111]/70 leading-relaxed">
              The digital environment offers incredible affordances, but it also comes with accompanying burdens. Access to an unimaginable wealth of information online comes at a cost, making it fundamental to understand and navigate challenges such as disinformation, polarization, filter bubbles, and the impact of social media on mental health.
            </p>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <img
              src="/mental-health.jpg"
              alt="Mental health support and digital wellness"
              className="rounded-[2rem] border border-[#111111]/10 max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* ── RESEARCH: The Research is Clear (DARK INVERTED) ── */}
      <section className="section-reveal bg-[#111111] text-[#F5F3EE] px-8 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="font-['Space_Mono'] text-[#E63B2E] tracking-widest uppercase text-xs mb-4">
            Research // Evidence
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            The Research is Clear
          </h2>

          <p className="text-lg text-[#F5F3EE]/70 leading-relaxed max-w-3xl mb-10">
            A Canadian study from 2018 found that social media use is associated with six major mental health concerns: poor sleep, trouble concentrating, lack of physical activity, anxiety or depression, irritability, and feeling jealous of others.
            Between 12% and 22% of users said social media had made at least one of these issues worse in the past year, and younger users were the most affected.
          </p>

          {/* APA Stat Callout */}
          <div className="bg-[#E63B2E] text-[#F5F3EE] rounded-[2rem] p-8 mb-10">
            <p className="font-['Space_Mono'] tracking-widest uppercase text-xs mb-3 opacity-80">
              2024 APA Study // Critical Finding
            </p>
            <p className="text-lg leading-relaxed">
              <strong>2024 American Psychological Association Study:</strong> 41% of U.S. teens who used social media the most reported having poor or very poor mental health, almost double the rate of those who used it the least (23%). On average, American teens were spending about 4.8 hours a day on social platforms.
            </p>
          </div>

          {/* Two-column brutalist split */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#F5F3EE]/10 border border-[#F5F3EE]/20 rounded-[2rem] p-8">
              <h4 className="font-bold text-lg mb-4">Social Isolation &amp; Relationships</h4>
              <ul className="space-y-3 text-sm text-[#F5F3EE]/80">
                <li>• Heavy social media use linked to less time spent with peers in-person</li>
                <li>• In-person encounters tend to be much more emotionally satisfying</li>
                <li>• Heavy users more likely to experience "perceived social isolation" (PSI)</li>
                <li>• Social media can lead to toxic and hateful encounters online</li>
              </ul>
            </div>
            <div className="bg-[#F5F3EE]/10 border border-[#F5F3EE]/20 rounded-[2rem] p-8">
              <h4 className="font-bold text-lg mb-4">Mental Health Impacts</h4>
              <ul className="space-y-3 text-sm text-[#F5F3EE]/80">
                <li>• Lost sleep and difficulties concentrating</li>
                <li>• Physical inertia and anxiety/depression</li>
                <li>• Frustration/anger and envy of others</li>
                <li>• Contributing to low self-esteem and depression</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── DID YOU KNOW ── */}
      <section className="section-reveal px-8 md:px-16 py-20">
        <div className="max-w-5xl mx-auto bg-[#E8E4DD] border border-[#111111]/10 rounded-[3rem] p-10 md:p-14">
          <p className="font-['Space_Mono'] text-[#E63B2E] tracking-widest uppercase text-xs mb-4">
            Signal // Awareness
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Did you know?
          </h2>
          <p className="text-lg text-[#111111]/70 leading-relaxed mb-6">
            Heavy social media use is linked to emotional ups and downs - to increased rates of anxiety, depression, and psychological distress especially among younger teens. The constant comparison, fear of missing out (FOMO), and exposure to realities can take a toll. But, small consistent steps can build resilience and self-compassion online.
          </p>
          <p className="text-xs text-[#111111]/50">
            <strong>Reference:</strong>{" "}
            <a
              href="https://www.mhrc.ca/blog-research-brief/associations-between-social-media-use-personal-screen-time-and-mental-health-indicators-among-canadian-youth"
              className="underline hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mental Health Research Canada - Social Media Use and Mental Health Indicators Among Canadian Youth
            </a>
          </p>
        </div>
      </section>

      {/* ── MOOD CHECK-IN ── */}
      <section className="section-reveal px-8 md:px-16 py-16">
        <div className="max-w-4xl mx-auto bg-[#E8E4DD] border border-[#111111]/10 rounded-[3rem] p-10 md:p-14 text-center">
          <p className="font-['Space_Mono'] text-[#E63B2E] tracking-widest uppercase text-xs mb-4">
            Self-Check // Mood
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How Are You Feeling Right Now?
          </h2>
          <p className="text-lg text-[#111111]/70 leading-relaxed max-w-2xl mx-auto mb-8">
            Interactive polls can help gauge your feelings about social media's impact on your mental health. Being aware of your emotional state is the first step toward digital wellness.
          </p>
          <EmojiSlider value={mood} setValue={setMood} />
          {mood <= 1 && (
            <div className="mt-8 bg-[#E63B2E] text-[#F5F3EE] rounded-[2rem] p-6 text-left">
              <p className="font-['Space_Mono'] tracking-widest uppercase text-xs mb-2 opacity-80">
                Signal // Support
              </p>
              <p className="text-base leading-relaxed">
                If you're feeling down after social media use, you're not alone. The tips below can help break the cycle and improve your mood.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ── EXPLOITATIVE DESIGN (DARK INVERTED) ── */}
      <section className="section-reveal bg-[#111111] text-[#F5F3EE] px-8 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="font-['Space_Mono'] text-[#E63B2E] tracking-widest uppercase text-xs mb-4">
            Exposure // Dark Patterns
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            The Science:
          </h2>
          <h2 className="text-4xl md:text-6xl font-['DM_Serif_Display'] italic mb-8">
            Exploitative <span className="text-[#E63B2E]">Design.</span>
          </h2>

          <p className="text-lg text-[#F5F3EE]/70 leading-relaxed max-w-3xl mb-12">
            Social media platforms are purposely built to keep you hooked, using tricks that tap into how our brains work. Knowing these tactics helps you spot when you're being pulled in.
          </p>

          {/* Asymmetric 3-col + 2-col split */}
          <div className="grid md:grid-cols-5 gap-6 mb-10">
            <div className="md:col-span-3 bg-[#F5F3EE]/10 border border-[#F5F3EE]/20 rounded-[2rem] p-8">
              <h4 className="font-bold text-lg mb-4">Design Features That Keep You Scrolling</h4>
              <ul className="space-y-3 text-sm text-[#F5F3EE]/80">
                <li>• <strong>Infinite scroll:</strong> Your feed never ends, so it's hard to stop</li>
                <li>• <strong>Auto-play:</strong> Videos play one after another without pause</li>
                <li>• <strong>Typing indicators:</strong> That little "..." on WhatsApp keeps you waiting</li>
                <li>• <strong>Random rewards:</strong> Likes and notifications pop up unpredictably, like a slot machine</li>
              </ul>
            </div>
            <div className="md:col-span-2 bg-[#F5F3EE]/10 border border-[#F5F3EE]/20 rounded-[2rem] p-8">
              <h4 className="font-bold text-lg mb-4">Psychological Exploitation</h4>
              <ul className="space-y-3 text-sm text-[#F5F3EE]/80">
                <li>• <strong>Emotion targeting:</strong> Platforms prioritize anger and outrage</li>
                <li>• <strong>Social validation loops:</strong> Likes and comments create dependency</li>
                <li>• <strong>Dopamine triggers:</strong> Updates and streaks release pleasure chemicals</li>
                <li>• <strong>Quantified social behavior:</strong> Numbers make interactions addictive</li>
              </ul>
            </div>
          </div>

          {/* Quote callout */}
          <div className="bg-[#E63B2E] text-[#F5F3EE] rounded-[2rem] p-8">
            <p className="font-['Space_Mono'] tracking-widest uppercase text-xs mb-3 opacity-80">
              Insider Testimony
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Sean Parker (former Facebook President):</strong> Described how Facebook displays messages to create a "social-validation feedback loop." Groups like the Centre for Humane Technology advocate for overhaul of these exploitative design practices.
            </p>
          </div>
        </div>
      </section>

      {/* ── WARNING SIGNS ── */}
      <section className="section-reveal px-8 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="font-['Space_Mono'] text-[#E63B2E] tracking-widest uppercase text-xs mb-4">
            Alert // Red Flags
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Warning Signs &amp; Red Flags
          </h2>
          <p className="text-lg text-[#111111]/70 leading-relaxed max-w-3xl mb-10">
            The compulsive nature of social media use, characterized by difficulty taking a break from constant scrolling, contributes to several physical and mental health issues.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8">
              <h4 className="font-bold text-lg mb-4">Physical &amp; Sleep Impacts</h4>
              <ul className="space-y-3 text-sm text-[#111111]/70">
                <li>• Lost sleep from late night scrolling</li>
                <li>• Physical inactivity and sedentary behavior</li>
                <li>• Blue light disrupting circadian rhythms</li>
                <li>• Eye strain and "text neck" posture problems</li>
              </ul>
            </div>
            <div className="bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8">
              <h4 className="font-bold text-lg mb-4">Social &amp; Emotional Signs</h4>
              <ul className="space-y-3 text-sm text-[#111111]/70">
                <li>• Less time spent with peers in-person</li>
                <li>• Anxiety from constant information processing</li>
                <li>• Difficulty concentrating on single tasks</li>
                <li>• Declining quality of face-to-face interactions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── DAILY WELLNESS CAROUSEL ── */}
      <section className="section-reveal px-8 md:px-16 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-['Space_Mono'] text-[#E63B2E] tracking-widest uppercase text-xs mb-4">
            Protocol // Daily Reset
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">
            Daily Digital Wellness Tips
          </h2>
          <MentalHealthCarousel />
        </div>
      </section>

      {/* ── SURVIVAL GUIDE ── */}
      <section className="section-reveal px-8 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="font-['Space_Mono'] text-[#E63B2E] tracking-widest uppercase text-xs mb-4">
            Toolkit // Survival
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
            Survival Guide:
          </h2>
          <h2 className="text-3xl md:text-4xl font-['DM_Serif_Display'] italic mb-8">
            How to Survive the Internet without losing your mind
          </h2>
          <p className="text-lg text-[#111111]/70 leading-relaxed max-w-3xl mb-10">
            Digital Wellness Toolkit - Here are some real-deal tips to help you dodge the downsides of social media and keep your mental health in check:
          </p>

          {/* Asymmetric 3+2 column layout */}
          <div className="grid md:grid-cols-5 gap-6 mb-8">
            <div className="md:col-span-3 space-y-6">
              <div className="bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8">
                <h4 className="font-bold text-lg mb-3">Curate Your Feed</h4>
                <p className="text-sm text-[#111111]/70 mb-3">
                  Take charge of what you see, your feed should lift you up.
                </p>
                <ul className="space-y-2 text-sm text-[#111111]/70">
                  <li>• Actively unfollow, block, or mute accounts that makes you uncomfortable (click the not interested button)</li>
                  <li>• <strong>Pro Tip:</strong> Follow Accounts that inspire you, teach you something new, make you laugh or spreading positivity</li>
                </ul>
              </div>
              <div className="bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8">
                <h4 className="font-bold text-lg mb-3">Set Boundaries</h4>
                <p className="text-sm text-[#111111]/70 mb-3">
                  Create rules to minimize screen time and stick to them. Think of them as healthy defenses around your digital life.
                </p>
                <ul className="space-y-2 text-sm text-[#111111]/70">
                  <li>• Use your phones built in screen time (iOS) or "Digital Well-being" (Android) features to set daily limits on apps you tend to overuse or want to cut back on</li>
                  <li>• Designate no phone zones (no phones at the dinner table or 30 minutes before bed)</li>
                  <li>• <strong>Pro Tip:</strong> Follow the 20/20/20 Rule - for every 20 minutes of screen time, look at something 20 feet away for 20 seconds</li>
                </ul>
              </div>
            </div>
            <div className="md:col-span-2 space-y-6">
              <div className="bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8">
                <h4 className="font-bold text-lg mb-3">Be Mindful When You Scroll</h4>
                <ul className="space-y-2 text-sm text-[#111111]/70">
                  <li>• Pay attention to how you feel while you're using social media</li>
                </ul>
              </div>
              <div className="bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8">
                <h4 className="font-bold text-lg mb-3">Prioritize Real Life Connections</h4>
                <p className="text-sm text-[#111111]/70 mb-3">
                  The digital world is cool but be sure to make time for your close friends and family as that connection is irreplaceable.
                </p>
                <ul className="space-y-2 text-sm text-[#111111]/70">
                  <li>• <strong>In-Person hang outs:</strong> Make time for face-to-face interactions with friends and family</li>
                  <li>• <strong>Hobbies and Interests:</strong> Pick up a hobby or even a new skill that interests you - drawing, playing an instrument, sports, reading, baking, walking in nature</li>
                  <li>• <strong>Sleep matters:</strong> prioritize your well-being and getting enough rest as it impacts how your day would look like, your mood, and ability to cope with stress</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Science callout */}
          <div className="bg-[#111111] text-[#F5F3EE] rounded-[2rem] p-8">
            <p className="font-['Space_Mono'] tracking-widest uppercase text-xs mb-3 text-[#E63B2E]">
              Science Says
            </p>
            <p className="text-lg leading-relaxed">
              Treating your digital diet like real food, focusing on nutritious, meaningful content and cutting back on junk can effectively boost your mental well-being.
            </p>
          </div>
        </div>
      </section>

      {/* ── DIGITAL RESILIENCE (DARK INVERTED) ── */}
      <section className="section-reveal bg-[#111111] text-[#F5F3EE] px-8 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="font-['Space_Mono'] text-[#E63B2E] tracking-widest uppercase text-xs mb-4">
            Protocol // Resilience
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-8">
            Building Digital Resilience
          </h2>

          <p className="text-lg text-[#F5F3EE]/70 leading-relaxed max-w-3xl mb-12">
            Digital resilience means understanding how social media is designed to affect you, using smart "happiness hacks" to take back control, and becoming more aware of how your digital habits impact your emotions and thinking. It's all about slowing down and thinking critically before reacting or sharing online.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-[#F5F3EE]/10 border border-[#F5F3EE]/20 rounded-[2rem] p-8">
              <h4 className="font-bold text-lg mb-4">Self-Awareness Tips</h4>
              <ul className="space-y-3 text-sm text-[#F5F3EE]/80">
                <li>• Check in with how you feel after scrolling</li>
                <li>• Notice when certain posts trigger strong emotions or feels</li>
                <li>• Pause and think before liking, commenting, or sharing heated content</li>
                <li>• Question where the info is coming from: be a fact-checker</li>
              </ul>
            </div>
            <div className="bg-[#F5F3EE]/10 border border-[#F5F3EE]/20 rounded-[2rem] p-8">
              <h4 className="font-bold text-lg mb-4">Intentional Tech Use</h4>
              <ul className="space-y-3 text-sm text-[#F5F3EE]/80">
                <li>• Have a clear goal when you open social media</li>
                <li>• Set limits on how long you spend online</li>
                <li>• Focus on meaningful connections, not just mindless scrolling</li>
                <li>• Take regular breaks from screens to recharge</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#E63B2E] text-[#F5F3EE] rounded-[2rem] p-8">
            <p className="font-['Space_Mono'] tracking-widest uppercase text-xs mb-3 opacity-80">
              Heads Up
            </p>
            <p className="text-lg leading-relaxed">
              Misinformation is often made to spark big emotional reactions and bypass your logical thinking. Building digital resilience helps you stay calm, think clearly, and avoid getting caught up in the drama.
            </p>
          </div>
        </div>
      </section>

      {/* ── SEEK SUPPORT ── */}
      <section className="section-reveal px-8 md:px-16 py-20">
        <div className="max-w-5xl mx-auto bg-[#E8E4DD] border border-[#111111]/10 rounded-[3rem] p-10 md:p-14">
          <p className="font-['Space_Mono'] text-[#E63B2E] tracking-widest uppercase text-xs mb-4">
            Signal // Support
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            When to Seek Additional Support
          </h2>
          <p className="text-lg text-[#111111]/70 leading-relaxed mb-4">
            If social media is seriously affecting your mood, relationships, sleep, or daily life, it's advisable and smart to talk to a mental health professional. Getting help is a strength, not a weakness.
          </p>
          <p className="text-sm text-[#111111]/50">
            <strong>When to Get Extra Help:</strong> Seeking help is a sign of strength and self-awareness, not weakness.
          </p>
        </div>
      </section>

      {/* ── WELLNESS MEME GALLERY ── */}
      <section className="section-reveal px-8 md:px-16 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-['Space_Mono'] text-[#E63B2E] tracking-widest uppercase text-xs mb-4">
              Community // Expression
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Wellness Meme Gallery
            </h2>
            <p className="text-sm text-[#111111]/70 max-w-2xl mx-auto">
              A curated gallery where students can submit and view mental health-themed memes. Promotes prosumer culture and meme creation, encouraging emotional expression through humor and creativity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8 text-center">
              <div className="text-4xl mb-3">📱</div>
              <h4 className="font-bold text-sm mb-2">Screen Time Struggles</h4>
              <p className="text-xs text-[#111111]/60">
                "Me: I'll just check Instagram for 5 minutes"<br />
                "Also me: 3 hours later..."
              </p>
            </div>

            <div className="bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8 text-center">
              <div className="text-4xl mb-3">🧘</div>
              <h4 className="font-bold text-sm mb-2">Digital Detox Vibes</h4>
              <p className="text-xs text-[#111111]/60">
                "Phone: *exists*"<br />
                "My focus: Aight, I'mma head out"
              </p>
            </div>

            <div className="bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8 text-center">
              <div className="text-4xl mb-3">😴</div>
              <h4 className="font-bold text-sm mb-2">Sleep vs Social Media</h4>
              <p className="text-xs text-[#111111]/60">
                "Brain at 11 PM: Time to sleep"<br />
                "Brain at 2 AM: But did you see this TikTok?"
              </p>
            </div>

            <div className="bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8 text-center">
              <div className="text-4xl mb-3">🎭</div>
              <h4 className="font-bold text-sm mb-2">Online vs Reality</h4>
              <p className="text-xs text-[#111111]/60">
                "Instagram: Living my best life ✨"<br />
                "Reality: Ate cereal for dinner again"
              </p>
            </div>

            <div className="bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8 text-center">
              <div className="text-4xl mb-3">🔄</div>
              <h4 className="font-bold text-sm mb-2">Scroll Loop</h4>
              <p className="text-xs text-[#111111]/60">
                "Refreshes feed"<br />
                "Same posts"<br />
                "Refreshes again anyway"
              </p>
            </div>

            <div className="bg-[#E8E4DD] border border-[#111111]/10 rounded-[2rem] p-8 text-center">
              <div className="text-4xl mb-3">💪</div>
              <h4 className="font-bold text-sm mb-2">Digital Wellness Win</h4>
              <p className="text-xs text-[#111111]/60">
                "Me: *puts phone in another room*"<br />
                "Productivity: Allow me to introduce myself"
              </p>
            </div>
          </div>

          <div className="text-center mt-10 space-y-4">
            <p className="text-sm text-[#111111]/60">
              <strong>Create Your Own:</strong> Use humor to process your digital wellness journey! Memes help us laugh at shared struggles and build community around mental health awareness.
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              <span className="bg-[#E8E4DD] border border-[#111111]/10 px-4 py-1.5 rounded-full">#DigitalWellness</span>
              <span className="bg-[#E8E4DD] border border-[#111111]/10 px-4 py-1.5 rounded-full">#MentalHealthMemes</span>
              <span className="bg-[#E8E4DD] border border-[#111111]/10 px-4 py-1.5 rounded-full">#ScreenTimeStruggles</span>
              <span className="bg-[#E8E4DD] border border-[#111111]/10 px-4 py-1.5 rounded-full">#DigitalDetox</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOURCES ── */}
      <section className="section-reveal px-8 md:px-16 py-20">
        <div className="max-w-5xl mx-auto bg-[#E8E4DD] border border-[#111111]/10 rounded-[3rem] p-10 md:p-14">
          <p className="font-['Space_Mono'] text-[#E63B2E] tracking-widest uppercase text-xs mb-4">
            Index // References
          </p>
          <h3 className="font-bold text-xl mb-6">Sources for Mental Health Module</h3>
          <div className="space-y-6 text-sm">
            <div>
              <h4 className="font-bold mb-3">Research Studies:</h4>
              <ul className="space-y-2 ml-4 text-[#111111]/70">
                <li>• <a href="https://www.mhrc.ca/blog-research-brief/associations-between-social-media-use-personal-screen-time-and-mental-health-indicators-among-canadian-youth" className="underline hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all" target="_blank" rel="noopener noreferrer">Mental Health Research Canada - Social Media Use and Mental Health Indicators Among Canadian Youth (2018)</a></li>
                <li>• American Psychological Association - Social Media Use and Mental Health Study (2024)</li>
                <li>• <a href="https://www.helpguide.org/articles/mental-health/social-media-and-mental-health.htm" className="underline hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all" target="_blank" rel="noopener noreferrer">HelpGuide.org - Social Media and Mental Health</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3">Organizations &amp; Resources:</h4>
              <ul className="space-y-2 ml-4 text-[#111111]/70">
                <li>• <a href="https://www.humanetech.com/" className="underline hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all" target="_blank" rel="noopener noreferrer">Center for Humane Technology</a></li>
                <li>• <a href="https://freedom.to/blog/" className="underline hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all" target="_blank" rel="noopener noreferrer">Freedom.to - Digital Addiction Research</a></li>
                <li>• <a href="https://partnershiponai.org/" className="underline hover:text-[#E63B2E] hover:-translate-y-[1px] transition-all" target="_blank" rel="noopener noreferrer">Partnership on AI - Algorithmic Impact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION NAVIGATION ── */}
      <div className="px-8 md:px-16 pb-20">
        <SectionNavigation currentPath="/mental-health" />
      </div>
    </div>
  );
};

export default MentalHealth;
