import { createBrowserRouter } from "react-router";
import { Layout } from "./Layout";
import { Home } from "@/pages/Home";
import { About } from "@/pages/About";
import { Services } from "@/pages/Services";
import { Approach } from "@/pages/Approach";
import { Work } from "@/pages/Work";
import { Insights } from "@/pages/Insights";
import { Contact } from "@/pages/Contact";
import { Products } from "@/pages/Products";
import { Team } from "@/pages/Team";
import { Ease } from "@/pages/Ease";
import { Pricing } from "@/pages/Pricing";
import { FAQ } from "@/pages/FAQ";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/about", element: <About /> },
      { path: "/team", element: <Team /> },
      { path: "/services", element: <Services /> },
      { path: "/approach", element: <Approach /> },
      { path: "/work", element: <Work /> },
      { path: "/insights", element: <Insights /> },
      { path: "/contact", element: <Contact /> },
      { path: "/ease", element: <Ease /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/faq", element: <FAQ /> },
    ],
  },
]);
