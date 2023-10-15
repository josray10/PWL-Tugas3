import { createBrowserRouter } from "react-router-dom";
import About from "./page/About";
import Home from "./page/Home";
import Contact from "./page/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
