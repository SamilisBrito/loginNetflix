import { createBrowserRouter } from "react-router-dom";
import { Login } from "./pages/login";
import { Home } from "./pages/home";
import { Layout } from "./components/Layout";
import { Search } from "./pages/Search";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);
