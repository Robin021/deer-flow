import Link from "next/link";

import { Card } from "@/components/ui/card";
import { pathOfThread } from "@/core/threads/utils";
import { cn } from "@/lib/utils";

import { Section } from "../section";

export function CaseStudySection({ className }: { className?: string }) {
  const caseStudies = [
    {
      threadId: "7cfa5f8f-a2f8-47ad-acbd-da7137baf990",
      title: "Forecast 2026 Agent Trends and Opportunities",
      description:
        "Create a webpage with a Deep Research report forecasting the agent technology trends and opportunities in 2026.",
    },
    {
      threadId: "4f3e55ee-f853-43db-bfb3-7d1a411f03cb",
      title: 'Generate a Video Based On the Novel "Pride and Prejudice"',
      description:
        'Search the specific scene from the novel "Pride and Prejudice", then generate a video as well as a reference image based on the scenes.',
    },
    {
      threadId: "21cfea46-34bd-4aa6-9e1f-3009452fbeb9",
      title: "Doraemon Explains the MOE Architecture",
      description:
        "Generate a Doraemon comic strip explaining the MOE architecture to the teenagers who are interested in AI.",
    },
    {
      threadId: "ad76c455-5bf9-4335-8517-fc03834ab828",
      title: "An Exploratory Data Analysis of the Titanic Dataset",
      description:
        "Explore the Titanic dataset and identify the key factors that influenced survival rates with visualizations and insights.",
    },
    {
      threadId: "d3e5adaf-084c-4dd5-9d29-94f1d6bccd98",
      title: "Watch Y Combinator's Video then Conduct a Deep Research",
      description:
        "Watch the given Y Combinator's YouTube video and conduct a deep research on the YC's tips for technical startup founders.",
    },
    {
      threadId: "3823e443-4e2b-4679-b496-a9506eae462b",
      title: "Collect and Summarize Dr. Fei Fei Li's Podcasts",
      description:
        "Collect all the podcast appearances of Dr. Fei Fei Li in the last 6 months, then summarize them into a comprehensive report.",
    },
  ];
  return (
    <Section
      className={className}
      eyebrow="Proof"
      title="Case Studies"
      subtitle="A few examples of DeerFlow handling research, code, media, and structured analysis inside one operating loop."
    >
      <div
        id="case-studies"
        className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {caseStudies.map((caseStudy, index) => (
          <Link
            key={caseStudy.title}
            href={pathOfThread(caseStudy.threadId) + "?mock=true"}
            target="_blank"
            className="block"
          >
            <Card className="performance-panel group/card relative h-[22rem] gap-0 overflow-hidden rounded-[1.75rem] border-white/10 bg-black/10 py-0">
              <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-300 group-hover/card:scale-110 group-hover/card:brightness-90"
                style={{
                  backgroundImage: `url(/images/${caseStudy.threadId}.jpg)`,
                }}
              />
              <div className="absolute inset-0 z-0 bg-linear-to-b from-black/10 via-black/15 to-black/90 transition-opacity duration-300 group-hover/card:opacity-95" />
              <div className="absolute top-5 left-5 z-10">
                <div className="performance-chip rounded-full px-3 py-1 text-[0.64rem] font-semibold tracking-[0.28em] text-white/72 uppercase">
                  Case {String(index + 1).padStart(2, "0")}
                </div>
              </div>
              <div
                className={cn(
                  "relative z-10 flex h-full flex-col justify-end px-6 py-6 transition-transform duration-300",
                  "group-hover/card:-translate-y-1",
                )}
              >
                <div className="performance-rule mb-5 opacity-55" />
                <h3 className="max-w-[13ch] text-2xl leading-tight font-semibold text-white">
                  {caseStudy.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/68">
                  {caseStudy.description}
                </p>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Section>
  );
}
