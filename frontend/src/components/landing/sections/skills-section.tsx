"use client";

import { cn } from "@/lib/utils";

import ProgressiveSkillsAnimation from "../progressive-skills-animation";
import { Section } from "../section";

export function SkillsSection({ className }: { className?: string }) {
  return (
    <Section
      className={cn("w-full", className)}
      eyebrow="Adaptive Tooling"
      title="Agent Skills"
      subtitle={
        <div>
          Agent Skills are loaded progressively, only when the task demands
          them.
          <br />
          Extend DeerFlow with your own skill files or use the built-in library
          as your tuned parts catalog.
        </div>
      }
    >
      <div className="performance-panel rounded-[2rem] p-4 md:p-6">
        <div className="performance-grid overflow-hidden rounded-[1.5rem] border border-white/8 bg-black/20 px-2 py-4 md:px-4 md:py-6">
          <ProgressiveSkillsAnimation />
        </div>
      </div>
    </Section>
  );
}
