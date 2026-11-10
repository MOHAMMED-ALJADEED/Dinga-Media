"use client";

import Link from "next/link";
import { useState } from "react";

const tracks = [
  {
    id: "reels",
    label: "Reels Editing",
    unit: "Reels",
    project: ["Pacing, cuts, and hooks", "Captions and sound design", "Vertical export for every platform"],
    pro: ["A steady monthly edit queue", "A style guide for your channel", "Priority turnaround"],
  },
  {
    id: "ai-clips",
    label: "AI Clips",
    unit: "AI clips",
    project: ["Concept and script", "AI-generated scenes", "Human polish on the final cut"],
    pro: ["Fresh concepts every month", "A consistent visual world", "Priority turnaround"],
  },
  {
    id: "images",
    label: "Images",
    unit: "images",
    project: ["Posts, thumbnails, or campaigns", "Art direction to your brief", "Sized for every placement"],
    pro: ["A monthly visual drop", "A reusable brand look", "Priority turnaround"],
  },
  {
    id: "full-studio",
    label: "Full Studio",
    unit: "pieces",
    project: ["Reels, AI clips, and images", "One launch or campaign", "One creative lead throughout"],
    pro: ["Everything you publish, in one plan", "A shared content calendar", "Priority turnaround"],
  },
];

const MIN_VOLUME = 4;
const MAX_VOLUME = 40;
const STEP = 4;

function Checklist({ items }: { items: string[] }) {
  return (
    <ul className="mt-8 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-snug">
          <span aria-hidden className="text-brand-light">
            ✓
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

const stepperButton =
  "focus-visible:outline-brand-light grid size-11 place-items-center rounded-full border border-white/20 text-xl transition-colors hover:border-brand-light focus-visible:outline-2 disabled:cursor-not-allowed disabled:opacity-40";

export function PricingPlans() {
  const [activeId, setActiveId] = useState(tracks[0].id);
  const [volume, setVolume] = useState(8);
  const track = tracks.find(({ id }) => id === activeId) ?? tracks[0];

  return (
    <div className="mt-12">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Choose a service">
        {tracks.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            aria-pressed={id === activeId}
            onClick={() => setActiveId(id)}
            className={`focus-visible:outline-brand-light min-h-11 rounded-full border px-5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 ${
              id === activeId
                ? "bg-brand border-brand text-white"
                : "text-muted hover:text-foreground border-white/15"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <article className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
          <h3 className="font-display text-3xl font-bold tracking-tight">One Project</h3>
          <p className="text-muted mt-2">A single, scoped piece of work.</p>
          <Checklist items={track.project} />
          <p className="font-display mt-auto pt-10 text-2xl font-bold">Quoted per project</p>
          <Link
            href={`/signup?service=${track.id}&plan=project`}
            className="focus-visible:outline-brand-light mt-5 inline-flex h-12 items-center justify-center rounded-full border border-white/25 font-semibold transition-colors hover:border-white focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Start a Project
          </Link>
        </article>

        <article className="from-brand/40 flex flex-col rounded-3xl border border-brand-light/40 bg-gradient-to-br to-[#120b1e] p-8 sm:p-10">
          <h3 className="font-display text-3xl font-bold tracking-tight">Pro Subscription</h3>
          <p className="text-muted mt-2">Ongoing output for people who publish all the time.</p>

          <div className="mt-8 flex items-center justify-between gap-4 rounded-2xl bg-black/30 p-3 pl-5">
            <span className="text-sm font-medium">
              <output className="font-display text-xl font-bold tabular-nums">{volume}</output>{" "}
              {track.unit} / month
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Decrease monthly volume"
                className={stepperButton}
                disabled={volume <= MIN_VOLUME}
                onClick={() => setVolume(volume - STEP)}
              >
                −
              </button>
              <button
                type="button"
                aria-label="Increase monthly volume"
                className={stepperButton}
                disabled={volume >= MAX_VOLUME}
                onClick={() => setVolume(volume + STEP)}
              >
                +
              </button>
            </div>
          </div>

          <Checklist items={track.pro} />
          <p className="font-display mt-auto pt-10 text-2xl font-bold">Quoted by monthly volume</p>
          <Link
            href={`/signup?service=${track.id}&plan=pro&volume=${volume}`}
            className="bg-brand focus-visible:outline-brand-light mt-5 inline-flex h-12 items-center justify-center rounded-full font-semibold text-white transition duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4"
          >
            Go Pro
          </Link>
        </article>
      </div>
    </div>
  );
}
