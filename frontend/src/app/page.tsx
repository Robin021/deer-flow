import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { CaseStudySection } from "@/components/landing/sections/case-study-section";
import { CommunitySection } from "@/components/landing/sections/community-section";
import { SandboxSection } from "@/components/landing/sections/sandbox-section";
import { SkillsSection } from "@/components/landing/sections/skills-section";
import { WhatsNewSection } from "@/components/landing/sections/whats-new-section";

export default function LandingPage() {
  return (
    <div className="dark performance-shell performance-grid bg-background text-foreground min-h-screen w-full">
      <Header />
      <main className="flex w-full flex-col pt-20">
        <Hero />
        <CaseStudySection />
        <SkillsSection />
        <SandboxSection />
        <WhatsNewSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
