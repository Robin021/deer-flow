"use client";

import { BotIcon } from "lucide-react";

import { type Agent } from "@/core/agents";
import { cn } from "@/lib/utils";

export function AgentWelcome({
  className,
  agent,
  agentName,
}: {
  className?: string;
  agent: Agent | null | undefined;
  agentName: string;
}) {
  const displayName = agent?.name ?? agentName;
  const description = agent?.description;

  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-col items-center justify-center gap-4 px-8 py-5 text-center",
        className,
      )}
    >
      <div className="performance-panel flex h-16 w-16 items-center justify-center rounded-[1.55rem] border-white/70">
        <BotIcon className="text-primary h-6 w-6" />
      </div>
      <div className="workspace-display text-foreground max-w-2xl text-[2.3rem] md:text-[2.85rem]">
        {displayName}
      </div>
      {description && <p className="workspace-copy max-w-sm">{description}</p>}
    </div>
  );
}
