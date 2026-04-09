"use client";

import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { WordRotate } from "@/components/ui/word-rotate";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    label: "Runtime",
    title: "Sandboxed execution",
    description:
      "Shell, browser, files, and long-running tasks inside one controllable chassis.",
  },
  {
    label: "Control",
    title: "Memory and tools",
    description:
      "Context, skills, MCP, and subagents kept on a disciplined operating line.",
  },
  {
    label: "Output",
    title: "Research to delivery",
    description:
      "Reports, apps, slides, media, and code produced inside the same workflow.",
  },
];

const sequence = [
  {
    id: "01",
    title: "Acquire context",
    copy: "Search, inspect, and gather the exact information the task calls for.",
  },
  {
    id: "02",
    title: "Plan the route",
    copy: "Break work into stages, choose the right model, and set the reasoning depth.",
  },
  {
    id: "03",
    title: "Execute in-system",
    copy: "Code, browse, run tools, and coordinate subagents without losing state.",
  },
  {
    id: "04",
    title: "Ship the result",
    copy: "Return polished outputs with artifacts, links, and a full audit trail.",
  },
];

const telemetry = [
  { value: "Long-form", label: "agent tasks" },
  { value: "Self-hosted", label: "deployment path" },
  { value: "Multi-model", label: "drive modes" },
  { value: "Open-source", label: "ownership model" },
];

export function Hero({ className }: { className?: string }) {
  return (
    <section
      className={cn(
        "container-md relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] items-center px-6 pb-16 md:px-8",
        className,
      )}
    >
      <div className="grid w-full gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)] lg:gap-12">
        <div className="flex flex-col justify-between gap-10 text-white">
          <div className="space-y-8">
            <div className="performance-kicker">
              Performance-Oriented Agent Runtime
            </div>
            <div className="space-y-6">
              <div className="performance-title max-w-[10.5ch] text-6xl sm:text-7xl md:text-[5.75rem]">
                Engineered for
                <span className="mt-3 block min-h-[1.1em] text-[#d6bf92]">
                  <WordRotate
                    words={["Research", "Execution", "Delivery"]}
                    className="performance-title text-6xl sm:text-7xl md:text-[5.75rem]"
                  />
                </span>
              </div>
              <p className="max-w-2xl text-base leading-7 text-white/68 md:text-xl md:leading-8">
                DeerFlow turns deep research into an operating system for
                agents: memory-aware, tool-rich, and able to drive from planning
                to finished output without dropping context.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                asChild
                className="rounded-full bg-white px-6 text-black hover:bg-[#ebe0cb]"
              >
                <Link href="/workspace">
                  Enter Workspace
                  <ArrowUpRightIcon className="size-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="performance-chip rounded-full border-white/12 bg-white/5 px-6 text-white hover:bg-white/10"
              >
                <Link href="#case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {capabilities.map((item) => (
              <div
                key={item.label}
                className="performance-panel rounded-[1.6rem] p-5"
              >
                <div className="text-[0.65rem] font-semibold tracking-[0.3em] text-white/42 uppercase">
                  {item.label}
                </div>
                <h2 className="mt-4 text-xl font-semibold text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-white/62">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="performance-panel rounded-[2rem] p-6 text-white md:p-8">
          <div className="flex items-end justify-between gap-4 border-b border-white/8 pb-6">
            <div>
              <div className="performance-kicker text-white/62">
                Launch Sequence
              </div>
              <p className="mt-5 max-w-xs text-sm leading-6 text-white/58">
                A restrained control panel for agents that need to stay fast,
                deliberate, and accountable over longer runs.
              </p>
            </div>
            <div className="text-right">
              <div className="text-[0.62rem] tracking-[0.32em] text-white/42 uppercase">
                Model Year
              </div>
              <div className="mt-2 text-4xl font-semibold text-[#d6bf92]">
                2.0
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {sequence.map((item) => (
              <div
                key={item.id}
                className="rounded-[1.35rem] border border-white/8 bg-white/3 px-4 py-4"
              >
                <div className="flex items-start gap-4">
                  <div className="min-w-10 text-[0.72rem] font-semibold tracking-[0.26em] text-[#d6bf92]">
                    {item.id}
                  </div>
                  <div>
                    <div className="text-sm font-semibold tracking-[0.16em] text-white uppercase">
                      {item.title}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/58">
                      {item.copy}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {telemetry.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.4rem] border border-white/8 bg-black/20 px-4 py-5"
              >
                <div className="text-lg font-semibold text-white">
                  {item.value}
                </div>
                <div className="mt-2 text-[0.68rem] tracking-[0.26em] text-white/44 uppercase">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
