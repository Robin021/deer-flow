"use client";

import {
  AnimatedSpan,
  Terminal,
  TypingAnimation,
} from "@/components/ui/terminal";

import { Section } from "../section";

export function SandboxSection({ className }: { className?: string }) {
  return (
    <Section
      className={className}
      eyebrow="Runtime Cell"
      title="Agent Runtime Environment"
      subtitle={
        <p>
          DeerFlow ships with a controllable computer: commands, files, browser,
          and long tasks running inside a secure Docker-based sandbox.
        </p>
      }
    >
      <div className="flex w-full flex-col items-stretch gap-6 lg:flex-row">
        <div className="performance-panel w-full rounded-[2rem] p-4 lg:flex-1">
          <Terminal className="h-[360px] w-full rounded-[1.5rem] border-white/8 bg-black/35">
            {/* Scene 1: Build a Game */}
            <TypingAnimation>$ cat requirements.txt</TypingAnimation>
            <AnimatedSpan delay={800} className="text-zinc-400">
              pygame==2.5.0
            </AnimatedSpan>

            <TypingAnimation delay={1200}>
              $ pip install -r requirements.txt
            </TypingAnimation>
            <AnimatedSpan delay={2000} className="text-green-500">
              ✔ Installed pygame
            </AnimatedSpan>

            <TypingAnimation delay={2400}>
              $ write game.py --lines 156
            </TypingAnimation>
            <AnimatedSpan delay={3200} className="text-blue-500">
              ✔ Written 156 lines
            </AnimatedSpan>

            <TypingAnimation delay={3600}>
              $ python game.py --test
            </TypingAnimation>
            <AnimatedSpan delay={4200} className="text-green-500">
              ✔ All sprites loaded
            </AnimatedSpan>
            <AnimatedSpan delay={4500} className="text-green-500">
              ✔ Physics engine OK
            </AnimatedSpan>
            <AnimatedSpan delay={4800} className="text-green-500">
              ✔ 60 FPS stable
            </AnimatedSpan>

            {/* Scene 2: Data Analysis */}
            <TypingAnimation delay={5400}>
              $ curl -O sales-2024.csv
            </TypingAnimation>
            <AnimatedSpan delay={6200} className="text-zinc-400">
              Downloaded 12.4 MB
            </AnimatedSpan>
          </Terminal>
        </div>

        <div className="performance-panel w-full rounded-[2rem] p-8 text-white lg:flex-1">
          <div className="space-y-4">
            <p className="text-[0.68rem] font-semibold tracking-[0.3em] text-[#d6bf92] uppercase">
              Open-source Runtime
            </p>
            <h2 className="performance-title max-w-[10ch] text-4xl lg:text-5xl">
              <a
                href="https://github.com/agent-infra/sandbox"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d6bf92]"
              >
                AIO Sandbox
              </a>
            </h2>
          </div>

          <div className="space-y-4 text-base leading-7 text-white/66 md:text-lg">
            <p>
              We recommend using{" "}
              <a
                href="https://github.com/agent-infra/sandbox"
                className="underline decoration-[#8a0e1c] underline-offset-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                All-in-One Sandbox
              </a>{" "}
              that combines Browser, Shell, File, MCP and VSCode Server in a
              single Docker container.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <span className="performance-chip rounded-full px-4 py-3 text-sm text-white/72">
              Isolated
            </span>
            <span className="performance-chip rounded-full px-4 py-3 text-sm text-white/72">
              Safe
            </span>
            <span className="performance-chip rounded-full px-4 py-3 text-sm text-white/72">
              Persistent
            </span>
            <span className="performance-chip rounded-full px-4 py-3 text-sm text-white/72">
              Mountable FS
            </span>
            <span className="performance-chip rounded-full px-4 py-3 text-sm text-white/72">
              Long-running
            </span>
            <span className="performance-chip rounded-full px-4 py-3 text-sm text-white/72">
              Browser + MCP
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}
