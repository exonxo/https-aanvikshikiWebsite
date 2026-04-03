import { createBrowserRouter } from "react-router";
import { Layout } from "./Layout";
import { Home } from "@/pages/Home";
import { Services } from "@/pages/Services";
import { Approach } from "@/pages/Approach";
import { Ease } from "@/pages/Ease";
import { Contact } from "@/pages/Contact";
import { About } from "@/pages/About";
import { Work } from "@/pages/Work";
import { CaseStudy } from "@/pages/CaseStudy";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/approach", element: <Approach /> },
      { path: "/ease", element: <Ease /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/work", element: <Work /> },
      { path: "/work/:slug", element: <CaseStudy /> },
    ],
  },
]);
