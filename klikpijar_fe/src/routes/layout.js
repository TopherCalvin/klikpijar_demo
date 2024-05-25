import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Header />
      <Box>
        <Outlet />
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
