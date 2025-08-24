import App from "@/App";
import { DashboardLayout } from "@/LayOuts/Dashboard";
import About from "@/pages/About/About";
import ForgotPassword from "@/pages/Auth/ForgotPassword/ForgotPassword";
import { Login } from "@/pages/Auth/Login/Login";
import { Register } from "@/pages/Auth/Register/Register";
import ResetPassword from "@/pages/Auth/ResetPassword/ResetPassword";
import Contact from "@/pages/Contact/Contact";
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
        path: "dashboard",
        Component: DashboardLayout,
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
