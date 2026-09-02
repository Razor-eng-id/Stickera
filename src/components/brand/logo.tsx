import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8", className)}
      aria-hidden="true"
    >
      <rect x="2" y="4" width="24" height="24" rx="7" fill="currentColor" />
      <path d="M20 4h4a6 6 0 0 1 6 6v4l-8-8z" fill="currentColor" opacity="0.55" />
      <circle cx="14" cy="15" r="3.2" fill="var(--color-card)" />
      <path
        d="M8.5 21.5c1.6-2.2 3.6-3.3 5.5-3.3s3.9 1.1 5.5 3.3"
        fill="none"
        stroke="var(--color-card)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className, compact }: { className?: string; compact?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2 text-foreground", className)}>
      <LogoMark className="size-7 shrink-0 text-primary sm:size-8" />
      <span
        className={cn(
          "font-display font-semibold tracking-tight",
          compact ? "text-lg" : "text-lg sm:text-xl",
        )}
      >
        Stikera
      </span>
    </span>
  );
        }

