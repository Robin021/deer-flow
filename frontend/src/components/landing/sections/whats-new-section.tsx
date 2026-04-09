"use client";

import MagicBento, { type BentoCardProps } from "@/components/ui/magic-bento";
import { cn } from "@/lib/utils";

import { Section } from "../section";

const COLOR = "rgba(11, 11, 13, 0.72)";
const features: BentoCardProps[] = [
  {
    color: COLOR,
    label: "Context Engineering",
    title: "Long/Short-term Memory",
    description: "Now the agent can better understand you",
  },
  {
    color: COLOR,
    label: "Long Task Running",
    title: "Planning and Sub-tasking",
    description:
      "Plans ahead, reasons through complexity, then executes sequentially or in parallel",
  },
  {
    color: COLOR,
    label: "Extensible",
    title: "Skills and Tools",
    description:
      "Plug, play, or even swap built-in tools. Build the agent you want.",
  },

  {
    color: COLOR,
    label: "Persistent",
    title: "Sandbox with File System",
    description: "Read, write, run — like a real computer",
  },
  {
    color: COLOR,
    label: "Flexible",
    title: "Multi-Model Support",
    description: "Doubao, DeepSeek, OpenAI, Gemini, etc.",
  },
  {
    color: COLOR,
    label: "Free",
    title: "Open Source",
    description: "MIT License, self-hosted, full control",
  },
];

export function WhatsNewSection({ className }: { className?: string }) {
  return (
    <Section
      className={cn("", className)}
      eyebrow="Model Year 2.0"
      title="Whats New in DeerFlow 2.0"
      subtitle="DeerFlow is evolving from a deep research agent into a full-stack super agent with longer reach, tighter control, and a broader output profile."
    >
      <div className="performance-panel rounded-[2rem] p-4 md:p-6">
        <div className="flex w-full items-center justify-center rounded-[1.5rem] border border-white/8 bg-black/18 py-2">
          <MagicBento
            data={features}
            enableStars={false}
            enableSpotlight={false}
            enableMagnetism={false}
            clickEffect={false}
            glowColor="138, 14, 28"
            textAutoHide={false}
          />
        </div>
      </div>
    </Section>
  );
}
