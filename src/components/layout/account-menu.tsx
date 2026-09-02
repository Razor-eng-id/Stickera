import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { LogOut, UserRound } from "lucide-react";
import { signOut } from "@/lib/auth/client";
import { useCurrentUserState } from "@/lib/auth/use-current-user";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";

export function AccountMenu({ next }: { next?: string }) {
  const { user, isPending } = useCurrentUserState();
  const [signingOut, setSigningOut] = useState(false);

  if (isPending) {
    return <Skeleton className="size-10 rounded-full" />;
  }

  if (!user) {
    return (
      <Button asChild variant="outline" size="sm">
        <Link to="/login" search={{ next: next ?? "/" }}>
          Masuk
        </Link>
      </Button>
    );
  }

  const label = user.displayName ?? user.primaryEmail ?? "Akun";
  const initial = label.charAt(0).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          className="flex size-10 items-center justify-center overflow-hidden rounded-full bg-secondary text-sm font-medium text-secondary-foreground shadow-(--shadow-border) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
          aria-label="Menu akun"
        >
          {user.profileImageUrl ? (
            <img src={user.profileImageUrl} alt="" className="size-full object-cover" />
          ) : (
            initial
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>
          <div className="truncate text-foreground">{label}</div>
          {user.primaryEmail ? (
            <div className="truncate font-normal">{user.primaryEmail}</div>
          ) : null}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/profile">
            <UserRound className="size-4" />
            Profil
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          disabled={signingOut}
          onSelect={() => {
            setSigningOut(true);
            void signOut("/").catch(() => setSigningOut(false));
          }}
        >
          <LogOut className="size-4" />
          {signingOut ? "Keluar…" : "Keluar"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

