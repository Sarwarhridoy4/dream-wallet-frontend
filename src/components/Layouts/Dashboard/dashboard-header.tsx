import { useTheme } from "next-themes";
import { Bell, Moon, Sun, LogOut, UserCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useRole } from "@/hooks/use-role";
import type { UserRole } from "@/types";

export function DashboardHeader() {
  const { theme, setTheme } = useTheme();
  const { currentUser, setCurrentRole } = useRole();

  const handleRoleSwitch = (role: UserRole) => {
    setCurrentRole(role);
    // In a real app, this would also update the URL to the appropriate dashboard
    window.location.href = `/dashboard/${role.toLowerCase()}/stats`;
  };

  return (
    <header className='flex h-16 items-center justify-between border-b border-border bg-background px-6'>
      <div className='flex items-center space-x-4'>
        <h2 className='text-lg font-semibold text-foreground'>
          Welcome back, {currentUser.name}
        </h2>
        <Badge variant='outline' className='text-xs'>
          {currentUser.role}
        </Badge>
      </div>

      <div className='flex items-center space-x-4'>
        {/* Theme Toggle */}
        <Button
          variant='ghost'
          size='icon'
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className='h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>

        {/* Notifications */}
        <Button variant='ghost' size='icon'>
          <Bell className='h-4 w-4' />
          <span className='sr-only'>Notifications</span>
        </Button>

        {/* Profile Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
              <Avatar className='h-8 w-8'>
                <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56' align='end' forceMount>
            <div className='flex items-center justify-start gap-2 p-2'>
              <div className='flex flex-col space-y-1 leading-none'>
                <p className='font-medium'>{currentUser.name}</p>
                <p className='w-[200px] truncate text-sm text-muted-foreground'>
                  {currentUser.email}
                </p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Switch Role (Demo)</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => handleRoleSwitch("USER")}>
              <UserCheck className='mr-2 h-4 w-4' />
              <span>User Dashboard</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleRoleSwitch("AGENT")}>
              <UserCheck className='mr-2 h-4 w-4' />
              <span>Agent Dashboard</span>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => handleRoleSwitch("ADMIN")}>
              <UserCheck className='mr-2 h-4 w-4' />
              <span>Admin Dashboard</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile Settings</DropdownMenuItem>
            <DropdownMenuItem>Account Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className='mr-2 h-4 w-4' />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
