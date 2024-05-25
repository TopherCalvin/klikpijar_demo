import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Fasyankes from "../pages/fasyankes";
import Layout from "./layout";
import Reservasi from "../pages/reservasi";

const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/Reservasi",
        element: <Reservasi />,
        children: [{ path: "/Reservasi/Dataview", element: <Reservasi /> }],
      },
      {
        path: "/Pengaturan",
        children: [{ path: "/Pengaturan/Fasyankes", element: <Fasyankes /> }],
      },
    ],
  },
]);

export default routes;

// <Header />
// <Footer />
