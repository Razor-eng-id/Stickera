import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Logo } from "@/components/brand/logo";
import { AccountMenu } from "@/components/layout/account-menu";

export function AppShell({
  children,
  next,
  action,
}: {
  children: ReactNode;
  next?: string;
  action?: ReactNode;
}) {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center gap-2 px-4">
          <Link to="/" className="min-w-0 shrink">
            <Logo />
          </Link>
          <div className="ml-auto flex min-w-0 items-center gap-2">
            {action}
            <AccountMenu next={next} />
          </div>
        </div>
      </header>
      <div className="flex-1">{children}</div>
    </div>
  );
}
