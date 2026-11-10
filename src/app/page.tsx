import Link from "next/link";
import { PricingPlans } from "@/components/PricingPlans";

const navLinks = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#pricing", label: "Pricing" },
  { href: "#studio", label: "Studio" },
];

const platforms = ["Instagram Reels", "TikTok", "YouTube Shorts", "Facebook Reels", "Snapchat Spotlight", "LinkedIn Video"];

const clips = [
  "from-brand to-[#1b0b33]",
  "from-[#2a1450] to-[#100a1a]",
  "from-[#b98cff] to-brand",
  "from-[#1d1730] to-[#3a1670]",
  "from-brand to-[#e0b8ff]",
  "from-[#15101f] to-brand",
  "from-[#4c1d95] to-[#120b1e]",
];

const process = [
  { title: "Send the idea", text: "Raw footage, a rough script, or one line in a brief." },
  { title: "We shape it", text: "Editors and AI production working on the same timeline." },
  { title: "You publish", text: "Finished files, sized and ready for every feed." },
];

const problems = [
  "Hours of footage sitting untouched on a drive.",
  "A posting schedule that slips every time work gets busy.",
  "Content that looks different from one week to the next.",
];

const deliverables = [
  { label: "Talking-head Reels", tone: "from-brand to-[#1b0b33]", tilt: "sm:-rotate-3" },
  { label: "AI concept clips", tone: "from-[#b98cff] to-brand", tilt: "sm:rotate-2 sm:translate-y-6" },
  { label: "Product spots", tone: "from-[#2a1450] to-[#100a1a]", tilt: "sm:-rotate-1" },
  { label: "Thumbnails", tone: "from-[#1d1730] to-[#3a1670]", tilt: "sm:rotate-3" },
  { label: "Campaign images", tone: "from-brand to-[#e0b8ff]", tilt: "sm:-rotate-2 sm:translate-y-6" },
  { label: "Launch teasers", tone: "from-[#4c1d95] to-[#120b1e]", tilt: "sm:rotate-1" },
];

const formats = [
  { ratio: "9:16", name: "Reels", size: "aspect-[9/16] w-16 sm:w-24" },
  { ratio: "4:5", name: "Feed", size: "aspect-[4/5] w-20 sm:w-32" },
  { ratio: "1:1", name: "Square", size: "aspect-square w-24 sm:w-36" },
  { ratio: "16:9", name: "Widescreen", size: "aspect-video w-36 sm:w-64" },
];

const services = [
  { title: "Short-form Editing", text: "Tight cuts built around the first three seconds." },
  { title: "Captions & Subtitles", text: "Animated captions that stay readable on mute." },
  { title: "Sound Design", text: "Music, effects, and clean dialogue." },
  { title: "AI Video Production", text: "Scenes that would never fit a shoot budget." },
  { title: "AI Avatars & Voice", text: "Presenters and narration, with your permission." },
  { title: "Motion Graphics", text: "Titles, lower thirds, and animated overlays." },
  { title: "Thumbnails", text: "Covers designed to earn the click." },
  { title: "Campaign Images", text: "Stills for posts, ads, and launches." },
  { title: "Content Repurposing", text: "One long video, many short ones." },
];

const audiences = [
  { title: "Solo Creators", text: "Spend your time on camera and leave the timeline to us.", tone: "from-brand to-[#1b0b33]" },
  { title: "Coaches & Educators", text: "Turn long lessons into clips people finish.", tone: "from-[#2a1450] to-[#100a1a]" },
  { title: "E-commerce Brands", text: "Keep fresh product video running all season.", tone: "from-[#b98cff] to-brand" },
  { title: "Marketing Teams", text: "Add production capacity without adding headcount.", tone: "from-[#1d1730] to-[#3a1670]" },
  { title: "Agencies", text: "Hand off overflow edits and keep your deadlines.", tone: "from-[#4c1d95] to-[#120b1e]" },
];

const principles = [
  {
    title: "Craft first",
    text: "AI speeds up production. Every final cut is still reviewed by a person.",
  },
  {
    title: "Built for everywhere",
    text: "We make work for global audiences, on the platforms they actually use.",
  },
];

const crafts = ["Editors", "AI Producers", "Motion Designers", "Sound Designers", "Art Directors", "Colorists"];

const container = "mx-auto w-full max-w-7xl px-6 sm:px-10";
const heading = "font-display text-[clamp(2.25rem,5vw,4rem)] leading-none font-bold tracking-tight text-balance";
const focusRing = "focus-visible:outline-brand-light focus-visible:outline-2 focus-visible:outline-offset-4";

function PrimaryCta({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/signup"
      className={`bg-brand inline-flex items-center justify-center rounded-full font-semibold text-white transition duration-300 hover:-translate-y-0.5 ${focusRing} ${
        compact
          ? "h-11 px-6 text-sm"
          : "h-14 px-9 text-lg shadow-[0_12px_48px_-8px_#7a1fe0] hover:shadow-[0_18px_64px_-6px_#7a1fe0]"
      }`}
    >
      Get Started
    </Link>
  );
}

function SecondaryCta() {
  return (
    <a
      href="#work"
      className={`inline-flex h-14 items-center justify-center rounded-full border border-white/25 px-9 text-lg font-semibold transition-colors hover:border-white ${focusRing}`}
    >
      See the Work
    </a>
  );
}

function Header() {
  return (
    <header className="bg-background/70 sticky top-0 z-50 border-b border-white/10 backdrop-blur-xl">
      <div className={`${container} flex h-[4.5rem] items-center justify-between`}>
        <a href="#top" className={`font-display text-xl font-bold tracking-tight ${focusRing}`}>
          Dinga<span className="text-brand-light"> Media</span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className={`text-muted hover:text-foreground text-sm font-medium transition-colors ${focusRing}`}>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <PrimaryCta compact />
          <details className="group md:hidden">
            <summary
              aria-label="Toggle menu"
              className={`grid size-11 cursor-pointer list-none place-items-center rounded-full border border-white/20 [&::-webkit-details-marker]:hidden ${focusRing}`}
            >
              <span aria-hidden className="text-lg group-open:hidden">☰</span>
              <span aria-hidden className="hidden text-lg group-open:inline">✕</span>
            </summary>
            <nav aria-label="Mobile" className="bg-background absolute inset-x-0 top-full flex flex-col border-b border-white/10 px-6 py-3">
              {navLinks.map(({ href, label }) => (
                <a key={href} href={href} className="py-3 text-lg font-medium">
                  {label}
                </a>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className={`${container} flex min-h-[calc(100svh-4.5rem)] flex-col items-center justify-center pt-16 pb-12 text-center`}>
      <p className="animate-rise text-brand-light text-sm font-semibold tracking-[0.2em] uppercase">
        For creators and businesses worldwide
      </p>
      <h1 className="animate-rise font-display mt-6 max-w-5xl text-[clamp(3rem,10vw,7.5rem)] leading-[0.96] font-extrabold tracking-tight [animation-delay:80ms]">
        Make every{" "}
        <span className="from-brand-light bg-gradient-to-r via-[#d9c2ff] to-white bg-clip-text text-transparent">
          frame count.
        </span>
      </h1>
      <p className="animate-rise text-muted mt-8 max-w-xl text-lg leading-relaxed [animation-delay:160ms] sm:text-xl">
        Reels editing, AI clips, and images for creators everywhere, with Pro
        subscriptions when you&apos;re ready to scale.
      </p>
      <div className="animate-rise mt-10 flex flex-wrap justify-center gap-3 [animation-delay:240ms]">
        <PrimaryCta />
        <SecondaryCta />
      </div>

      <div className="animate-rise mt-auto w-full pt-16 [animation-delay:360ms]">
        <p className="text-muted text-sm">Made for the feeds your audience lives in</p>
        <ul className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-3">
          {platforms.map((platform) => (
            <li key={platform} className="font-display text-foreground/70 text-lg font-semibold">
              {platform}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Showreel() {
  return (
    <section id="how-it-works" className={`${container} scroll-mt-24 py-20`}>
      <div className="from-brand/60 relative grid aspect-[4/5] place-items-center overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br via-[#1a0d2e] to-background sm:aspect-video">
        <p className="font-display text-center text-3xl font-bold tracking-tight sm:text-5xl">
          Showreel
          <span className="text-muted mt-2 block text-base font-medium tracking-normal">Coming soon</span>
        </p>
        <div aria-hidden className="absolute inset-x-3 bottom-3 rounded-2xl border border-white/10 bg-black/40 p-2 backdrop-blur">
          <div className="flex gap-1.5">
            {clips.map((clip, index) => (
              <div key={clip} className={`h-10 min-w-0 flex-1 rounded-lg bg-gradient-to-br sm:h-14 ${clip} ${index > 3 ? "hidden md:block" : ""}`} />
            ))}
          </div>
          <div className="animate-playhead pointer-events-none absolute inset-y-0 left-0 w-full">
            <div className="h-full w-0.5 bg-white shadow-[0_0_14px_2px_#b98cff]" />
          </div>
        </div>
      </div>

      <ol className="mt-12 grid gap-8 md:grid-cols-3">
        {process.map(({ title, text }, index) => (
          <li key={title} className="border-t border-white/15 pt-5">
            <span aria-hidden className="text-brand-light text-sm font-semibold tabular-nums">0{index + 1}</span>
            <h2 className="font-display mt-3 text-2xl font-bold tracking-tight">{title}</h2>
            <p className="text-muted mt-2 leading-relaxed">{text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Problem() {
  return (
    <section className={`${container} py-20`}>
      <div className="mx-auto max-w-3xl">
        <p className="text-brand-light text-sm font-semibold tracking-[0.3em] uppercase">Sound familiar?</p>
        <h2 className={`${heading} mt-5`}>Good ideas die in the edit.</h2>
        <ul className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {problems.map((problem) => (
            <li key={problem} className="text-muted py-5 text-lg sm:text-xl">{problem}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section id="work" className={`${container} scroll-mt-24 py-20`}>
      <h2 className={`${heading} mx-auto max-w-3xl text-center`}>One studio for everything you publish.</h2>
      <ul className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 sm:pb-6">
        {deliverables.map(({ label, tone, tilt }) => (
          <li
            key={label}
            className={`relative flex aspect-[4/5] items-end rounded-2xl border border-white/15 bg-gradient-to-br p-4 shadow-2xl shadow-black/60 transition duration-500 hover:z-10 hover:rotate-0 sm:p-6 ${tone} ${tilt}`}
          >
            <span aria-hidden className="absolute top-3 left-1/2 size-3 -translate-x-1/2 rounded-full bg-white/80 shadow-[0_0_12px_#b98cff]" />
            <span className="font-display rounded-lg bg-black/50 px-3 py-1.5 font-bold tracking-tight backdrop-blur sm:text-xl">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Statement() {
  return (
    <section className={`${container} py-24 text-center`}>
      <p className="font-display mx-auto max-w-4xl text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] font-bold tracking-tight text-balance">
        The care of a{" "}
        <span className="text-brand-light underline decoration-brand decoration-4 underline-offset-8">production studio</span>
        , at the pace of your feed.
      </p>
    </section>
  );
}

function Range() {
  return (
    <section className={`${container} py-20`}>
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-14">
        <h2 className={`${heading} max-w-2xl`}>One look, in every shape.</h2>
        <p className="text-muted mt-5 max-w-xl text-lg leading-relaxed">
          Your style carries across every format, so viewers know it&apos;s you
          before they read your name.
        </p>
        <ul className="mt-12 flex flex-wrap items-end gap-4 sm:gap-8">
          {formats.map(({ ratio, name, size }) => (
            <li key={ratio}>
              <div aria-hidden className={`from-brand rounded-lg border border-white/15 bg-gradient-to-br to-[#1b0b33] ${size}`} />
              <p className="mt-3 text-sm font-semibold tabular-nums">{ratio}</p>
              <p className="text-muted text-sm">{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className={`${container} scroll-mt-24 py-20`}>
      <h2 className={`${heading} max-w-3xl`}>Every part of the post, handled.</h2>
      <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, text }, index) => (
          <li key={title} className="hover:border-brand-light/60 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300">
            <span aria-hidden className="text-brand-light text-sm font-semibold tabular-nums">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display mt-8 text-2xl font-bold tracking-tight">{title}</h3>
            <p className="text-muted mt-2 leading-relaxed">{text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className={`${container} scroll-mt-24 py-20`}>
      <h2 className={`${heading} max-w-3xl`}>Pay per project, or go Pro.</h2>
      <PricingPlans />
    </section>
  );
}

function Audiences() {
  return (
    <section aria-labelledby="audiences-heading" className="py-20">
      <div className={container}>
        <h2 id="audiences-heading" className={`${heading} max-w-3xl`}>Who we make it for.</h2>
      </div>
      {/* Keyboard users can scroll this region, so it needs a focus stop. */}
      <ul
        tabIndex={0}
        aria-label="Audiences, scrollable"
        className="focus-visible:outline-brand-light mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 [scrollbar-width:none] focus-visible:outline-2 sm:px-10 xl:px-[max(2.5rem,calc((100vw-80rem)/2+2.5rem))]"
      >
        {audiences.map(({ title, text, tone }) => (
          <li key={title} className={`flex aspect-[3/4] w-[78vw] shrink-0 snap-center flex-col justify-end rounded-3xl border border-white/10 bg-gradient-to-br p-6 sm:w-80 ${tone}`}>
            <div className="rounded-2xl bg-black/50 p-4 backdrop-blur">
              <h3 className="font-display text-2xl font-bold tracking-tight">{title}</h3>
              <p className="mt-2 leading-relaxed text-white/85">{text}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Standard() {
  return (
    <section className={`${container} py-24 text-center`}>
      <blockquote className="font-display mx-auto max-w-4xl text-[clamp(1.75rem,4vw,3rem)] leading-tight font-semibold tracking-tight text-balance">
        If it wouldn&apos;t stop your own thumb, it doesn&apos;t leave the studio.
      </blockquote>
      <p className="text-brand-light mt-6 text-sm font-semibold tracking-[0.2em] uppercase">The Dinga standard</p>
    </section>
  );
}

function Studio() {
  return (
    <section id="studio" className="scroll-mt-24 overflow-hidden py-20">
      <div className={container}>
        <h2 className={`${heading} max-w-3xl`}>A DoubleBahm studio.</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {principles.map(({ title, text }) => (
            <article key={title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
              <h3 className="font-display text-3xl font-bold tracking-tight">{title}</h3>
              <p className="text-muted mt-3 text-lg leading-relaxed">{text}</p>
            </article>
          ))}
        </div>
      </div>
      <p className="sr-only">Our crafts: {crafts.join(", ")}.</p>
      <div aria-hidden className="mt-12 flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="animate-marquee flex shrink-0">
            {[...crafts, ...crafts].map((craft, index) => (
              <span key={`${craft}-${index}`} className="font-display text-foreground/60 flex items-center text-3xl font-bold tracking-tight sm:text-5xl">
                {craft}
                <span className="text-brand mx-8">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className={`${container} pt-10 pb-24`}>
      <div className="from-brand/50 flex flex-col items-center rounded-3xl border border-white/10 bg-gradient-to-br via-[#1a0d2e] to-background px-8 py-20 text-center">
        <h2 className={`${heading} max-w-2xl`}>Your next post starts here.</h2>
        <p className="text-muted mt-6 italic">The team at DoubleBahm</p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <PrimaryCta />
          <SecondaryCta />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className={`${container} text-muted flex flex-col gap-4 border-t border-white/10 py-8 text-sm sm:flex-row sm:items-center sm:justify-between`}>
      <p>© {new Date().getFullYear()} DoubleBahm. Dinga Media.</p>
      <nav aria-label="Footer" className="flex gap-6">
        {navLinks.slice(0, 3).map(({ href, label }) => (
          <a key={href} href={href} className={`hover:text-foreground py-2 transition-colors ${focusRing}`}>
            {label}
          </a>
        ))}
      </nav>
    </footer>
  );
}

export default function Home() {
  return (
    <div id="top" className="relative isolate flex min-h-svh flex-1 flex-col overflow-x-clip">
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-svh overflow-hidden">
        <div className="animate-drift absolute -top-1/3 left-1/2 h-[80vmax] w-[80vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#7a1fe0_0%,transparent_62%)] opacity-50 blur-3xl" />
        <div className="via-background/60 to-background absolute inset-0 bg-gradient-to-b from-transparent" />
      </div>

      <Header />
      <main>
        <Hero />
        <Showreel />
        <Problem />
        <Solution />
        <Statement />
        <Range />
        <Services />
        <Pricing />
        <Audiences />
        <Standard />
        <Studio />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
