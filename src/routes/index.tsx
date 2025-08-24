import App from "@/App";
import About from "@/pages/About/About";
import { Login } from "@/pages/Auth/Login/Login";
import { Register } from "@/pages/Auth/Register/Register";
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
        Component: UnAuthorised,
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
    ],
    errorElement: <NotFound />,
  },
]);
