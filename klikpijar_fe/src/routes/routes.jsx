import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
]);

export default routes;
