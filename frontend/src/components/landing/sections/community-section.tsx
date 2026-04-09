"use client";

import { GitHubLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { Section } from "../section";

export function CommunitySection() {
  return (
    <Section
      eyebrow="Open Source"
      title="Built in the open. Tuned by the community."
      subtitle="Contribute new skills, runtime ideas, workflow improvements, or product polish. DeerFlow gets sharper when operators leave the garage door open."
    >
      <div className="performance-panel flex flex-col gap-8 rounded-[2rem] p-8 text-white md:flex-row md:items-end md:justify-between md:p-10">
        <div className="max-w-2xl">
          <p className="text-base leading-7 text-white/66 md:text-lg">
            Start with issues, discussions, or new capabilities. The codebase is
            already structured for extension, which makes outside contributions
            materially useful instead of ornamental.
          </p>
        </div>
        <Button
          className="rounded-full bg-white px-6 text-black hover:bg-[#ebe0cb] md:text-base"
          size="lg"
          asChild
        >
          <Link href="https://github.com/bytedance/deer-flow" target="_blank">
            <GitHubLogoIcon />
            Contribute Now
          </Link>
        </Button>
      </div>
    </Section>
  );
}
