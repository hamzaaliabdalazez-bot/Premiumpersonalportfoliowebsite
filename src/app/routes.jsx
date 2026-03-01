import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/projects",
    Component: AllProjects,
  },
]);
