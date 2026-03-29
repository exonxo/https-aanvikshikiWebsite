import { createBrowserRouter } from "react-router";
import { HomePage } from "./components/HomePage";
import { EaseCarePage } from "./components/EaseCarePage";
import { ScrollToTop } from "./components/ScrollToTop";

export const router = createBrowserRouter([
  {
    Component: ScrollToTop,
    children: [
      {
        path: "/",
        Component: HomePage,
      },
      {
        path: "/easecare",
        Component: EaseCarePage,
      },
    ],
  },
]);