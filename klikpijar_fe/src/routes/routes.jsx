import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/homePage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default routes;
