"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

import { useI18n } from "@/core/i18n/hooks";
import { cn } from "@/lib/utils";

export function Welcome({
  className,
  mode,
}: {
  className?: string;
  mode?: "ultra" | "pro" | "thinking" | "flash";
}) {
  const { t } = useI18n();
  const searchParams = useSearchParams();
  const isUltra = useMemo(() => mode === "ultra", [mode]);
  const modeLabel = useMemo(() => {
    if (mode === "flash") return t.inputBox.flashMode;
    if (mode === "thinking") return t.inputBox.reasoningMode;
    if (mode === "ultra") return t.inputBox.ultraMode;
    return t.inputBox.proMode;
  }, [
    mode,
    t.inputBox.flashMode,
    t.inputBox.proMode,
    t.inputBox.reasoningMode,
    t.inputBox.ultraMode,
  ]);

  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-col items-center justify-center gap-4 px-8 py-5 text-center",
        className,
      )}
    >
      <div className="workspace-kicker text-foreground/60 inline-flex items-center gap-3 rounded-full px-4 py-2 text-[0.66rem] font-semibold tracking-[0.22em] uppercase">
        <span
          className={cn(
            "h-2 w-2 rounded-full",
            isUltra
              ? "bg-[linear-gradient(135deg,#2152d9_0%,#4e83fd_100%)]"
              : "bg-[linear-gradient(135deg,#3370ff_0%,#94b5ff_100%)]",
          )}
        />
        {modeLabel}
      </div>
      <div className="workspace-display text-foreground max-w-3xl text-[2.45rem] md:text-[3.2rem]">
        {searchParams.get("mode") === "skill"
          ? t.welcome.createYourOwnSkill
          : t.welcome.greeting}
      </div>
      {searchParams.get("mode") === "skill" ? (
        <div className="workspace-copy max-w-xl">
          {t.welcome.createYourOwnSkillDescription.includes("\n") ? (
            <pre className="font-sans whitespace-pre">
              {t.welcome.createYourOwnSkillDescription}
            </pre>
          ) : (
            <p>{t.welcome.createYourOwnSkillDescription}</p>
          )}
        </div>
      ) : (
        <div className="workspace-copy max-w-xl">
          {t.welcome.description.includes("\n") ? (
            <pre className="whitespace-pre">{t.welcome.description}</pre>
          ) : (
            <p>{t.welcome.description}</p>
          )}
        </div>
      )}
    </div>
  );
}
