import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Fasyankes from "../pages/fasyankes";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  { path: "/Pengaturan/Fasyankes", element: <Fasyankes /> },
]);

export default routes;
