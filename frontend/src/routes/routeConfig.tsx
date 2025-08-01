import Home from "../pages/Home.tsx"; // Make sure ../pages/Home.tsx or ../pages/Home/index.tsx exists and is correctly named
import About from "../pages/About.tsx";
import Contact from "../pages/Contact.tsx";
import Projects from "../pages/Projects";
import ProjectDetails from "../pages/ProjectDetails.tsx";
// If NotFound.tsx does not exist, create it in ../pages/ with a default export:
import NotFound from "../pages/NotFound.tsx";
// or update the path/filename to match the actual file if it differs
import Login from "../pages/Login.tsx";
import Dashboard from "../pages/Dashboard.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />, // 🔁 Added route for /home
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/projects/:id",
    element: <ProjectDetails />,
  },
  {
    path: "/login",
    element: <Login />,
  },
//   {
//   path: "/dashboard",
//   element:<Dashboard />,
// },
  {
  path: "/dashboard",
  element: (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  ),
},
  {
    path: "*",
    element: <NotFound />,
  },
];
