import { StarFilledIcon, GitHubLogoIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { NumberTicker } from "@/components/ui/number-ticker";
import { env } from "@/env";

export function Header() {
  return (
    <header className="container-md fixed top-0 right-0 left-0 z-30 mx-auto px-4 py-4">
      <div className="performance-panel flex items-center justify-between rounded-full px-5 py-3 text-white">
        <a
          href="https://github.com/bytedance/deer-flow"
          target="_blank"
          className="flex items-center gap-3"
        >
          <div className="h-2 w-2 rounded-full bg-[#8a0e1c]" />
          <div>
            <div className="performance-wordmark text-[0.7rem]">
              Deer<span>Flow</span>
            </div>
            <div className="mt-1 text-[0.62rem] tracking-[0.32em] text-white/42 uppercase">
              SuperAgent Harness
            </div>
          </div>
        </a>
        <Button
          variant="outline"
          size="sm"
          asChild
          className="performance-chip group rounded-full border-white/12 bg-white/4 px-4 text-white hover:bg-white/9"
        >
          <a href="https://github.com/bytedance/deer-flow" target="_blank">
            <GitHubLogoIcon className="size-4" />
            Star on GitHub
            {env.NEXT_PUBLIC_STATIC_WEBSITE_ONLY === "true" &&
              env.GITHUB_OAUTH_TOKEN && <StarCounter />}
          </a>
        </Button>
      </div>
    </header>
  );
}

async function StarCounter() {
  let stars = 10000; // Default value

  try {
    const response = await fetch(
      "https://api.github.com/repos/bytedance/deer-flow",
      {
        headers: env.GITHUB_OAUTH_TOKEN
          ? {
              Authorization: `Bearer ${env.GITHUB_OAUTH_TOKEN}`,
              "Content-Type": "application/json",
            }
          : {},
        next: {
          revalidate: 3600,
        },
      },
    );

    if (response.ok) {
      const data = await response.json();
      stars = data.stargazers_count ?? stars; // Update stars if API response is valid
    }
  } catch (error) {
    console.error("Error fetching GitHub stars:", error);
  }
  return (
    <>
      <StarFilledIcon className="size-4 transition-colors duration-300 group-hover:text-yellow-500" />
      {stars && (
        <NumberTicker className="font-mono tabular-nums" value={stars} />
      )}
    </>
  );
}
