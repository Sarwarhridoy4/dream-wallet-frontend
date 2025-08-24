"use client";

import type React from "react";
import { useNavigate } from "react-router"; // <-- import React Router hook
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  BarChart3,
  Wallet,
  History,
  User,
  Users,
  UserCheck,
  CreditCard,
  ArrowUpCircle,
  ArrowDownCircle,
  Settings,
} from "lucide-react";
import { useRole } from "@/hooks/use-role";
import { useNavigation } from "@/hooks/use-navigation";

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const roleMenus: Record<string, NavItem[]> = {
  USER: [
    { title: "Dashboard", href: "/user/stats", icon: BarChart3 },
    { title: "Wallet", href: "/user/wallet", icon: Wallet },
    { title: "Transactions", href: "/user/transactions", icon: History },
    { title: "Profile", href: "/user/profile", icon: User },
  ],
  AGENT: [
    { title: "Dashboard", href: "/agent/stats", icon: BarChart3 },
    { title: "Wallet", href: "/agent/wallet", icon: Wallet },
    { title: "Cash In", href: "/agent/cash-in", icon: ArrowUpCircle },
    { title: "Cash Out", href: "/agent/cash-out", icon: ArrowDownCircle },
    { title: "Transactions", href: "/agent/transactions", icon: History },
    { title: "Profile", href: "/agent/profile", icon: User },
  ],
  ADMIN: [
    { title: "Dashboard", href: "/admin/stats", icon: BarChart3 },
    { title: "Users", href: "/admin/users", icon: Users },
    { title: "Agents", href: "/admin/agents", icon: UserCheck },
    { title: "Wallets", href: "/admin/wallets", icon: CreditCard },
    { title: "Transactions", href: "/admin/transactions", icon: History },
    { title: "Profile", href: "/admin/profile", icon: Settings },
  ],
};

interface DashboardSidebarProps {
  onNavigate?: () => void;
}

export function DashboardSidebar({ onNavigate }: DashboardSidebarProps) {
  const { currentPage, setCurrentPage } = useNavigation();
  const { currentUser } = useRole();
  const menuItems = roleMenus[currentUser.role] || [];

  const navigate = useNavigate(); // React Router's navigation function

  const handleNavigation = (href: string) => {
    setCurrentPage(href);   // update local context state
    navigate(href);          // navigate to the route
    onNavigate?.();
  };

  return (
    <div className="flex h-full flex-col bg-sidebar">
      {/* Logo/Brand */}
      <div className="flex h-16 items-center px-6 border-b border-sidebar-border">
        <h1 className="text-xl font-bold text-sidebar-foreground">Dashboard</h1>
      </div>

      {/* User Info */}
      <div className="p-4">
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 rounded-full bg-sidebar-primary flex items-center justify-center">
            <span className="text-sm font-medium text-sidebar-primary-foreground">
              {currentUser.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="text-sm font-medium text-sidebar-foreground">{currentUser.name}</p>
            <p className="text-xs text-sidebar-foreground/60">{currentUser.role}</p>
          </div>
        </div>
      </div>

      <Separator className="bg-sidebar-border" />

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.href;

          return (
            <Button
              key={item.href}
              variant={isActive ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                isActive && "bg-sidebar-accent text-sidebar-accent-foreground"
              )}
              onClick={() => handleNavigation(item.href)}
            >
              <Icon className="mr-3 h-4 w-4" />
              {item.title}
            </Button>
          );
        })}
      </nav>
    </div>
  );
}
