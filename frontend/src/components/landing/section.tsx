import { cn } from "@/lib/utils";

export function Section({
  className,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  className?: string;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className={cn("mx-auto w-full px-6 py-20 md:px-8", className)}>
      <div className="container-md">
        <div className="performance-rule" />
        <header className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-end">
          <div className="space-y-4">
            {eyebrow && <div className="performance-kicker">{eyebrow}</div>}
            <div className="performance-title max-w-[12ch] text-4xl text-white md:text-6xl">
              {title}
            </div>
          </div>
          {subtitle && (
            <div className="max-w-xl text-sm leading-7 text-white/62 md:text-base lg:justify-self-end lg:text-right">
              {subtitle}
            </div>
          )}
        </header>
        <main className="mt-10">{children}</main>
      </div>
    </section>
  );
}
