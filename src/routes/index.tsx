import App from "@/App";
import { DashboardLayout } from "@/LayOuts/Dashboard";
import About from "@/pages/About/About";
import ForgotPassword from "@/pages/Auth/ForgotPassword/ForgotPassword";
import { Login } from "@/pages/Auth/Login/Login";
import { Register } from "@/pages/Auth/Register/Register";
import ResetPassword from "@/pages/Auth/ResetPassword/ResetPassword";
import Contact from "@/pages/Contact/Contact";
import { AdminAgents } from "@/pages/dashboard/admin/admin-agents";
import { AdminProfile } from "@/pages/dashboard/admin/admin-profile";
import { AdminStats } from "@/pages/dashboard/admin/admin-stats";
import { AdminTransactions } from "@/pages/dashboard/admin/admin-transactions";
import { AdminUsers } from "@/pages/dashboard/admin/admin-users";
import { AdminWallets } from "@/pages/dashboard/admin/admin-wallets";
import { AgentCashIn } from "@/pages/dashboard/agent/agent-cash-in";
import { AgentCashOut } from "@/pages/dashboard/agent/agent-cash-out";
import { AgentProfile } from "@/pages/dashboard/agent/agent-profile";
import { AgentStats } from "@/pages/dashboard/agent/agent-stats";
import { AgentTransactions } from "@/pages/dashboard/agent/agent-transactions";
import { AgentWallet } from "@/pages/dashboard/agent/agent-wallet";
import { UserProfile } from "@/pages/dashboard/user/user-profile";
import { UserStats } from "@/pages/dashboard/user/user-stats";
import { UserTransactions } from "@/pages/dashboard/user/user-transactions";
import { UserWallet } from "@/pages/dashboard/user/user-wallet";
import FaqPage from "@/pages/FAQ/FaqPage";
import Features from "@/pages/Features/Features";
import Home from "@/pages/Home/Home";
import NotFound from "@/pages/NotFound/NotFound";
import UnAuthorised from "@/pages/UnAuthorised/UnAuthorised";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Home,
        index: true,
      },
      {
        Component: About,
        path: "about",
      },
      {
        Component: Features,
        path: "features",
      },
      {
        Component: FaqPage,
        path: "faq",
      },
      {
        Component: Contact,
        path: "contact",
      },
      {
        path: "dashboard/user/stats",
        element: <DashboardLayout />,
        children: [
          // USER routes
          { path: "user/stats", element: <UserStats /> },
          { path: "user/wallet", element: <UserWallet /> },
          { path: "user/transactions", element: <UserTransactions /> },
          { path: "user/profile", element: <UserProfile /> },

          // AGENT routes
          { path: "agent/stats", element: <AgentStats /> },
          { path: "agent/wallet", element: <AgentWallet /> },
          { path: "agent/cash-in", element: <AgentCashIn /> },
          { path: "agent/cash-out", element: <AgentCashOut /> },
          { path: "agent/transactions", element: <AgentTransactions /> },
          { path: "agent/profile", element: <AgentProfile /> },

          // ADMIN routes
          { path: "admin/stats", element: <AdminStats /> },
          { path: "admin/users", element: <AdminUsers /> },
          { path: "admin/agents", element: <AdminAgents /> },
          { path: "admin/wallets", element: <AdminWallets /> },
          { path: "admin/transactions", element: <AdminTransactions /> },
          { path: "admin/profile", element: <AdminProfile /> },
        ],
      },
      {
        Component: Login,
        path: "/login",
      },
      {
        Component: Register,
        path: "/signup",
      },

      {
        Component: UnAuthorised,
        path: "/unauthorized",
      },
      {
        path: "forgot-password",
        Component: ForgotPassword,
      },
      {
        path: "reset-password",
        Component: ResetPassword,
      },

      {
        path: "*",
        Component: NotFound,
      },
    ],
    errorElement: <NotFound />,
  },
]);
