## Feed Escape Guide — Digital Wellness Curriculum

An interactive React + TypeScript web app that teaches digital wellness skills: how feeds work, how to spot misinformation, how to protect privacy, how to balance screen time, and how to make healthier choices online. It’s designed as a cohesive learning experience with research-backed content, interactive activities, and proper academic sourcing.

Live use-cases: classroom modules, independent study, student projects, or workshops.

## Features

- Research-based modules with clear takeaways
	- Algorithms (filter bubbles and feed mechanics)
	- Mental Health (screen time, sleep, mood)
	- Misinformation (verification and literacy)
	- Privacy (tracking, data brokers, protection)
	- Digital Balance (habits, boundaries, tools)
- Interactive learning components
	- Digital Wellness Quiz (choose-your-own scenarios with scoring and feedback)
	- Tracking Simulator (step-by-step demo of cookies, trackers, and profiling)
	- Tip Rating Checklist (try and rate actionable wellness behaviors)
	- Animated Feed Flowchart (how engagement trains the algorithm)
- Consistent sourcing and attribution
	- Sources page consolidates citations used across modules
	- Photo credits included; local assets in `public/`
- Built for classroom use
	- Short sections with clear outcomes, prompts, and challenges
	- Mobile-friendly layouts for on-the-go use
- Modern, accessible UI
	- shadcn/ui + Radix primitives, keyboard-friendly components
	- Responsive Tailwind design with fast Vite dev experience

## Modules in detail

### Algorithms — Why you keep scrolling
- What you’ll learn
	- How recommendation systems optimize for engagement, not wellbeing
	- Filter bubbles, echo chambers, and the role of interactions (likes, watch time)
	- Simple ways to diversify your feed and reset recommendations
- Interactive elements
	- Animated Feed Flowchart to visualize the engagement loop
- Skills and takeaways
	- Identify engagement hooks; add diverse sources; adjust app settings

### Mental Health — Mindful use and your brain
- What you’ll learn
	- Links between heavy social use, sleep quality, attention, and mood
	- How blue light, notifications, and late-night scrolling impact wellbeing
	- Practical habits for mindful consumption and reflection prompts
- Activities and tools
	- “Happiness hacks” list, phone-free zones, wind-down routines
- Skills and takeaways
	- Build sustainable routines; reduce night-time scrolling; protect sleep

### Misinformation — Verify before you share
- What you’ll learn
	- Signals of low-quality claims; how filter bubbles amplify falsehoods
	- Lateral reading, reverse image search, and using reputable fact-checkers
- Interactive elements
	- Quiz content and verification prompts; optional mini-challenges
- Skills and takeaways
	- Pause, verify, and cite; curate high-quality sources; reduce feed anxiety

### Privacy — Tracking, data brokers, and protection
- What you’ll learn
	- What gets tracked online and how profiles are built and shared
	- App permissions, cookies, and third-party trackers
	- Legal frameworks (e.g., PIPEDA/GDPR) and user rights
- Interactive elements
	- Tracking Simulator (follow data from visit → cookie → profile → ad)
- Skills and takeaways
	- Set app/browser privacy controls; use strong passwords and 2FA; spot shady prompts

### Digital Balance — Boundaries and better habits
- What you’ll learn
	- Attention drains (infinite scroll, autoplay, variable rewards)
	- Communication overload and strategies to reclaim focus
	- Tools: Screen Time/Digital Wellbeing, RescueTime, focused modes
- Interactive elements
	- Tip Rating Checklist; 24-hour “feed detox” challenge
- Skills and takeaways
	- Set clear device boundaries; design friction; prioritize in-person time

### Digital Wellness Quiz — Interactive scenarios
- What you’ll learn
	- Apply your skills to realistic situations (permissions, DMs, FOMO, ads)
- Interactive elements
	- Choose-your-own scenarios with points, instant feedback, and tips
- Skills and takeaways
	- Decision-making under pressure; privacy-first defaults; mindful responses

## Tech stack

- Vite, React 18, TypeScript
- Tailwind CSS, shadcn/ui (Radix UI primitives)
- React Router v6
- lucide-react icons

## Getting started

Prerequisites: Node.js (v18+ recommended) and npm.

```powershell
# Install dependencies
npm i

# Start the dev server (http://localhost:5173 by default)
npm run dev

# Type-check, lint (optional)
npm run lint

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

## Project structure (high level)

- `src/pages/`
	- `Index.tsx` — Home page and module cards
	- `Algorithms.tsx`, `MentalHealth.tsx`, `Misinformation.tsx`, `Privacy.tsx`, `DigitalBalance.tsx`
	- `DigitalNavigator.tsx` — Interactive Digital Wellness Quiz
	- `Sources.tsx`, `About.tsx`, `NotFound.tsx`
- `src/components/`
	- `TrackingSimulator.tsx`, `TipRatingChecklist.tsx`, `AnimatedFlowchart.tsx`, etc.
- `src/sections/` — Compact section variants used on the home/landing
- `public/` — Static assets
	- `algorithms.jpg`, `mental-health.jpg`, `misinformation.jpg`, `privacy.jpg`, `digital-balance.jpg`, `quiz.jpg`
	- `digital-wellness-icon.png` (site icon)

Note: The home page card images are served from `public/` and mapped in `src/pages/Index.tsx`.

## Assets and attribution

- All research citations are listed per module and consolidated on the `Sources` page.
- Photo credits (as shown on `Sources`):
	- Algorithms: Photo by Markus Spiske on Unsplash
	- Misinformation: Photo by Jorge Franganillo on Unsplash
	- Mental Health: Photo by Pier Monzon on Unsplash
	- Privacy: Photo by Matthew Henry on Unsplash
	- Digital Balance: Photo by Jeremy Thomas on Unsplash

To change a card image, replace the corresponding file in `public/` with the same name.

## Deployment

This is a standard Vite static site. After `npm run build`, deploy the `dist/` folder to your host of choice (Vercel, Netlify, GitHub Pages, Azure Static Web Apps, etc.).

---
