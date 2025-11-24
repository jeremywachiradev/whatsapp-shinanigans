"use client";

import { LogIn, User2, LogOut } from "lucide-react";
import Logo from "~/components/logo";
import ThemeToggle from "~/components/theme-toggle";
import { Button } from "~/components/ui/button";
import { authClient } from "~/server/better-auth/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export default function NavBar() {
  const { data: session } = authClient.useSession();

  const handleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/", // Redirect to home after login
    });
  };

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="border-b px-4 md:px-6">
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex-1">
          <a href="/" className="text-primary hover:text-primary/90">
            <Logo />
          </a>
        </div>
        {/* Middle area */}
        <div className="grow max-sm:hidden">
         
        </div>
        {/* Right side */}
        <div className="flex flex-1 items-center justify-end gap-2">
          {session ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <User2 className="h-4 w-4" />
                  {session.user.name || "Profile"}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={handleSignOut} className="text-destructive focus:text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button variant="outline" size="sm" onClick={handleSignIn}>
              <LogIn className="mr-2 h-4 w-4" /> LogIn
            </Button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
