import {
  AppBar,
  Box,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import klikpijar from "../assets/logo-default-slim.png";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../css/home.css";

const Home = () => {
  const theme = useTheme();
  const mediaQuery = useMediaQuery("(min-width: 991.5px");
  const page = [
    { name: "BERANDA", path: "/" },
    { name: "FOKUS KAMI", path: "/1" },
    { name: "ADVERS EVENT", path: "/2" },
    { name: "INFO DASAR HIV", path: "/3" },
    { name: "MITRA", path: "/4" },
    { name: "FAQ", path: "/5" },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(false);

  function handleMenu() {
    setAnchorEl(!anchorEl);
  }

  return (
    <AppBar position="sticky">
      <Box color={theme.palette.secondary.main} className="header">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            maxWidth: {
              xs: "100%",
              sm: "540px",
              md: "720px",
              lg: "960px",
              xl: "1140px",
            },
          }}
        >
          <Box
            height={"114px"}
            width={"305px"}
            display={"flex"}
            alignItems={"center"}
          >
            <IconButton href="/" disableRipple>
              <img
                className="logo-transition"
                alt="Klikpijar"
                src={klikpijar}
              />
            </IconButton>
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            height={"100%"}
            width={"100%"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              height={"50%"}
              gap={"10px"}
            >
              <Button
                size="small"
                className="about-us"
                disableRipple
                sx={{ color: "#afaca9", textTransform: "none" }}
              >
                <Box
                  className="right-arrow"
                  display={"flex"}
                  alignItems={"center"}
                >
                  <ChevronRightIcon fontSize="" />
                </Box>
                Tentang Kami
              </Button>
              <Box
                display={"flex"}
                justifyContent={"flex-end"}
                borderLeft={"solid 1px #fafafa"}
                width={"30px"}
              >
                <SearchIcon sx={{ color: "black", fontSize: "20px" }} />
              </Box>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"flex-end"}
              height={"50%"}
              gap={"10px"}
            >
              {mediaQuery ? (
                page.map((page) => (
                  <Button
                    className="navbar-buttons"
                    key={page.path}
                    onClick={() => {
                      navigate(`${page.path}`);
                    }}
                    sx={{
                      fontWeight: 600,
                      color:
                        location.pathname === page.path ? "white" : "inherit",
                      bgcolor:
                        location.pathname === page.path ? "#4c7c9e" : "inherit",
                      outline: "none",
                      "&:focus": {
                        boxShadow: "none",
                        border: "1px solid rgba(0, 0, 0, 0.2)",
                        color:
                          location.pathname === page.path ? "white" : "inherit",
                        bgcolor:
                          location.pathname === page.path
                            ? "#4c7c9e"
                            : "inherit",
                      },
                    }}
                  >
                    {page.name}
                  </Button>
                ))
              ) : (
                <Box
                  className="menu-button"
                  sx={{
                    color: "white",
                    bgcolor: "#4c7c9e",
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "6px",
                  }}
                  onClick={handleMenu}
                >
                  <MenuIcon />
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          transition: "transform 1s ease-in-out",
          transform: `${anchorEl ? "translateY(170px)" : "translateY(-75px)"}`,
        }}
        position={"absolute"}
        zIndex={"-1"}
      >
        {page.map((page) => (
          <Box
            className="menu-navbar"
            sx={{
              width: "100%",
              maxWidth: {
                xs: "100%",
                sm: "540px",
                md: "720px",
                lg: "960px",
                xl: "1140px",
              },
              borderBottom: "solid #f5f5f5 1px",
            }}
          >
            <Button
              key={page.path}
              onClick={() => {
                navigate(`${page.path}`);
              }}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                maxWidth: {
                  xs: "100%",
                  sm: "540px",
                  md: "720px",
                  lg: "960px",
                  xl: "1140px",
                },
                outline: "none",
                "&:focus": {
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.2)",
                  color: location.pathname === page.path ? "white" : "inherit",
                  bgcolor:
                    location.pathname === page.path ? "#4c7c9e" : "inherit",
                },
                fontWeight: 600,
                color: location.pathname === page.path ? "white" : "inherit",
                bgcolor:
                  location.pathname === page.path ? "#4c7c9e" : "inherit",
                borderRadius: "5px",
              }}
            >
              {page.name}
            </Button>
          </Box>
        ))}
      </Box>
    </AppBar>
  );
};

export default Home;
