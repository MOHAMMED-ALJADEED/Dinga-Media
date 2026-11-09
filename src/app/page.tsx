import Link from "next/link";

const clips = [
  "from-brand to-[#1b0b33]",
  "from-[#2a1450] to-[#100a1a]",
  "from-[#b98cff] to-brand",
  "from-[#1d1730] to-[#3a1670]",
  "from-brand to-[#e0b8ff]",
  "from-[#15101f] to-brand",
  "from-[#4c1d95] to-[#120b1e]",
];

const services = [
  {
    title: "Reels Editing",
    description: "Raw footage shaped into sharp, vertical edits built for the feed.",
  },
  {
    title: "AI Clips",
    description: "Turn an idea into short-form video with AI-driven production.",
  },
  {
    title: "Images",
    description: "Striking visuals for posts, thumbnails, and campaigns.",
  },
  {
    title: "Pro Subscriptions",
    description: "An ongoing plan for creators who publish all the time.",
  },
];

function GetStarted({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      href="/signup"
      className={`bg-brand focus-visible:outline-brand-light inline-flex items-center justify-center rounded-full font-semibold text-white transition duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 ${
        compact
          ? "h-11 px-6 text-sm"
          : "h-14 px-9 text-lg shadow-[0_12px_48px_-8px_#7a1fe0] hover:shadow-[0_18px_64px_-6px_#7a1fe0]"
      }`}
    >
      Get Started
    </Link>
  );
}

export default function Home() {
  return (
    <main className="relative isolate flex min-h-svh flex-1 flex-col overflow-hidden">
      <div aria-hidden className="absolute inset-x-0 top-0 -z-10 h-svh">
        <div className="animate-drift absolute -top-1/3 left-1/2 h-[80vmax] w-[80vmax] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,#7a1fe0_0%,transparent_62%)] opacity-50 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
      </div>

      <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10">
        <span className="font-display text-xl font-bold tracking-tight">
          Dinga<span className="text-brand-light"> Media</span>
        </span>
        <nav className="flex items-center gap-6">
          <a
            href="#services"
            className="text-muted hover:text-foreground hidden text-sm font-medium transition-colors sm:block"
          >
            Services
          </a>
          <GetStarted compact />
        </nav>
      </header>

      <section className="mx-auto flex min-h-[calc(100svh-5.75rem)] w-full max-w-7xl flex-col justify-center px-6 pt-12 pb-10 sm:px-10">
        <div className="flex flex-1 flex-col justify-center">
          <h1 className="animate-rise font-display max-w-5xl text-[clamp(3rem,10vw,7.5rem)] leading-[0.96] font-extrabold tracking-tight">
            Make every{" "}
            <span className="bg-gradient-to-r from-brand-light via-[#d9c2ff] to-white bg-clip-text text-transparent">
              frame count.
            </span>
          </h1>

          <p className="animate-rise text-muted mt-8 max-w-xl text-lg leading-relaxed [animation-delay:120ms] sm:text-xl">
            Reels editing, AI clips, and images for creators everywhere, with
            Pro subscriptions when you&apos;re ready to scale.
          </p>

          <div className="animate-rise mt-10 [animation-delay:240ms]">
            <GetStarted />
          </div>
        </div>

        <div
          aria-hidden
          className="animate-rise relative mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-2 backdrop-blur [animation-delay:360ms]"
        >
          <div className="flex gap-1.5">
            {clips.map((clip, index) => (
              <div
                key={clip}
                className={`h-16 min-w-0 flex-1 rounded-lg bg-gradient-to-br sm:h-20 ${clip} ${index > 3 ? "hidden md:block" : ""}`}
              />
            ))}
          </div>
          <div className="animate-playhead pointer-events-none absolute inset-y-0 left-0 w-full">
            <div className="h-full w-0.5 bg-white shadow-[0_0_14px_2px_#b98cff]" />
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto w-full max-w-7xl scroll-mt-8 px-6 py-24 sm:px-10"
      >
        <h2 className="font-display max-w-3xl text-[clamp(2.25rem,5vw,4rem)] leading-none font-bold tracking-tight">
          One studio for everything you publish.
        </h2>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <li
              key={service.title}
              className="hover:border-brand-light/60 flex min-h-64 flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300"
            >
              <span aria-hidden className="text-brand-light text-sm font-semibold tabular-nums">
                0{index + 1}
              </span>
              <h3 className="font-display mt-auto text-2xl font-bold tracking-tight">
                {service.title}
              </h3>
              <p className="text-muted mt-3 leading-relaxed">
                {service.description}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-24 sm:px-10">
        <div className="flex flex-col items-start gap-8 rounded-3xl border border-white/10 bg-gradient-to-br from-brand/50 via-[#1a0d2e] to-background p-8 sm:p-14 md:flex-row md:items-center md:justify-between">
          <h2 className="font-display max-w-2xl text-[clamp(2rem,4.5vw,3.5rem)] leading-none font-bold tracking-tight">
            Your next post starts here.
          </h2>
          <GetStarted />
        </div>
      </section>

      <footer className="text-muted mx-auto w-full max-w-7xl border-t border-white/10 px-6 py-8 text-sm sm:px-10">
        © {new Date().getFullYear()} DoubleBahm. Dinga Media.
      </footer>
    </main>
  );
}
