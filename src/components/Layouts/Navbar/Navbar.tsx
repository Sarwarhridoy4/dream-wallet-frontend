import {
  HomeIcon,
  InfoIcon,
  MailIcon,
  HelpCircleIcon,
  StarIcon,
  LayoutDashboardIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Logo from "@/components/logo";

import UserMenu from "@/components/user-menu";
import { Link } from "react-router";
import { ModeToggle } from "@/components/theme-toggle";

// Navigation links with icons for desktop icon-only navigation
const navigationLinks = [
  { href: "/", label: "Home", icon: HomeIcon, active: true },
  { href: "/about", label: "About", icon: InfoIcon },
  { href: "/features", label: "Features", icon: StarIcon },
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboardIcon },
  { href: "/faq", label: "FAQ", icon: HelpCircleIcon },
  { href: "/contact", label: "Contact", icon: MailIcon },
];

export default function Navbar() {
  const isAuthenticated = false; // Replace with your auth state

  return (
    <header className='w-full border-b px-4 md:px-6 bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/20 dark:to-pink-950/20'>
      <div className='flex h-16 items-center justify-between gap-4'>
        {/* Left side */}
        <div className='flex flex-1 items-center gap-2'>
          {/* Mobile menu trigger */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className='group size-8 md:hidden hover:bg-rose-100 dark:hover:bg-rose-900/20'
                variant='ghost'
                size='icon'
                aria-label='Open navigation menu'
              >
                <svg
                  className='pointer-events-none'
                  width={16}
                  height={16}
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4 12L20 12'
                    className='origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]'
                  />
                  <path
                    d='M4 12H20'
                    className='origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45'
                  />
                  <path
                    d='M4 12H20'
                    className='origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]'
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent
              align='start'
              className='w-36 p-1 md:hidden border-rose-200 dark:border-rose-800'
            >
              <NavigationMenu className='max-w-none *:w-full'>
                <NavigationMenuList className='flex-col items-start gap-0 md:gap-2'>
                  {navigationLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <NavigationMenuItem key={index} className='w-full'>
                        <Link
                          to={link.href}
                          className='flex-row items-center gap-2 py-1.5 hover:bg-rose-50 dark:hover:bg-rose-900/20 rounded-md px-2 transition-colors'
                        >
                          <Icon
                            size={16}
                            className='text-muted-foreground'
                            aria-hidden='true'
                          />
                          <span>{link.label}</span>
                        </Link>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
          <div className='flex items-center gap-6'>
            {/* Logo */}
            <Link
              to='/'
              className='text-primary hover:text-primary/90 transition-colors'
            >
              <Logo />
            </Link>
            {/* Desktop navigation - icon only */}
            <NavigationMenu className='hidden md:flex md:items-center md: justify-center'>
              <NavigationMenuList className='gap-2'>
                <TooltipProvider>
                  {navigationLinks.map((link) => (
                    <NavigationMenuItem key={link.label}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link
                            to={link.href}
                            className='flex size-8 items-center justify-center p-1.5 hover:bg-rose-100 dark:hover:bg-rose-900/20 rounded-md transition-colors'
                          >
                            <link.icon size={20} aria-hidden='true' />
                            <span className='sr-only'>{link.label}</span>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent
                          side='bottom'
                          className='px-2 py-1 text-xs border-rose-200 dark:border-rose-800'
                        >
                          <p>{link.label}</p>
                        </TooltipContent>
                      </Tooltip>
                    </NavigationMenuItem>
                  ))}
                </TooltipProvider>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
        {/* Right side */}
        <div className='flex items-center gap-2'>
          {/* Theme toggle */}
          <ModeToggle />

          {isAuthenticated ? (
            <UserMenu />
          ) : (
            <div className='flex items-center gap-2'>
              {/* Get Started Button */}
              <Button
                variant='outline'
                size='sm'
                className='hidden sm:inline-flex border-rose-200 text-rose-700 hover:bg-rose-50 hover:text-rose-800 dark:border-rose-800 dark:text-rose-300 dark:hover:bg-rose-900/20 dark:hover:text-rose-200 transition-colors'
                asChild
              >
                <Link to='/get-started'>Get Started</Link>
              </Button>

              {/* Sign Up Button */}
              <Button
                size='sm'
                className='bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105'
                asChild
              >
                <Link to='/signup'>Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
