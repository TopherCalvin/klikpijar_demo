import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Fasyankes from "../pages/fasyankes";
import Layout from "./layout";
import Reservasi from "../pages/reservasi";
import AddEditFasyankes from "../pages/addEditFasyankes";

const routes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/admin",
        element: <Dashboard />,
      },
      {
        path: "/admin/Reservasi",
        element: <Reservasi />,
        children: [
          { path: "/admin/Reservasi/Dataview", element: <Reservasi /> },
        ],
      },
      {
        path: "/admin/Pengaturan",
        children: [
          { path: "/admin/Pengaturan/Fasyankes", element: <Fasyankes /> },
          {
            path: "/admin/Pengaturan/Fasyankes/edit/:id",
            element: <AddEditFasyankes />,
          },
          {
            path: "/admin/Pengaturan/Fasyankes/addnew",
            element: <AddEditFasyankes />,
          },
        ],
      },
    ],
  },
  {
    basename: "/admin",
  },
]);

export default routes;

// <Header />
// <Footer />
