import {
  AppBar,
  Box,
  IconButton,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ColorizeIcon from "@mui/icons-material/Colorize";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import HandymanIcon from "@mui/icons-material/Handyman";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./css/header.css";
import SideMenu from "./sideMenu";

const Header = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [appear, setAppear] = useState(false);
  const [user, setUser] = useState(false);
  const currentPath = useLocation();
  const navigate = useNavigate();
  const md = useMediaQuery("(min-width: 1024px)");
  const page = [
    {
      title: "Dashboard",
      to: "/",
      icon: <HomeOutlinedIcon />,
    },
    {
      title: "Reservasi",
      subMenu: [
        { title: "Data Test HIV", to: "/Reservasi/Dataview" },
        { title: "Data Refil ARV", to: "/" },
        { title: "Data Viral Load", to: "/" },
      ],
      icon: <CalendarTodayOutlinedIcon />,
    },
    {
      title: "Notifikasi Pasangan",
      subMenu: [
        { title: "Data View", to: "/" },
        { title: "Data Komunitas", to: "/" },
      ],
      icon: <FavoriteIcon />,
    },
    {
      title: "Skrining HIV Mandiri",
      subMenu: [{ title: "Data View", to: "/" }],
      icon: <ColorizeIcon />,
    },
    {
      title: "Info Prep",
      subMenu: [{ title: "Data View", to: "/" }],
      icon: <CalendarTodayOutlinedIcon />,
    },
    {
      title: "Cascade",
      subMenu: [
        { title: "Cascade Total", to: "/" },
        { title: "Cascade Tes HIV", to: "/" },
        { title: "Cascade Refil ARV", to: "/" },
        { title: "Cascade VIral Load", to: "/" },
      ],
      icon: <BarChartOutlinedIcon />,
    },
    { title: "Users", to: "/", icon: <PersonOutlinedIcon /> },
    {
      title: "Help",
      to: "/",
      icon: <HelpOutlineOutlinedIcon />,
    },
    {
      title: "Pengaturan",
      subMenu: [
        {
          title: "Fasyankes",
          to: "/Pengaturan/Fasyankes",
        },
      ],
      icon: <HandymanIcon />,
    },
  ];

  return (
    <>
      <AppBar position="sticky">
        <Box className="header">
          {/* HEADER MOBILE */}
          <Box className="header-mobile">
            <IconButton
              className="mobile-only"
              onClick={() => {
                navigate("/");
              }}
              disableRipple
            >
              <img
                className="logo-transition"
                height={"40px"}
                alt="Klikpijar"
                src={"https://klikpijar.id/public/assets/img/co.png"}
              />
            </IconButton>

            <Box sx={{ color: "#4e4c5f" }}>
              <Button
                variant="text"
                disableRipple
                onClick={() => {
                  setIsCollapsed(!isCollapsed);
                  setAppear(!appear);
                }}
                sx={{
                  transform: isCollapsed ? "rotate(90deg)" : "rotate(270deg)",
                }}
              >
                <LeaderboardIcon />
              </Button>
              <Button
                onClick={() => {
                  setUser(!user);
                }}
                variant="text"
                disableRipple
              >
                <MoreVertIcon />
              </Button>
            </Box>
          </Box>

          {/* TULISAN NAVBAR DESKTOP */}
          <Box
            display={md ? "flex" : "none"}
            justifyContent={"center"}
            alignItems={"center"}
            onMouseEnter={() => {
              md && setAppear(true);
            }}
            onMouseLeave={() => {
              md && setAppear(false);
            }}
            sx={{
              transition: "all 1s ease-in-out",
              minWidth: "20%",
              height: "100%",
            }}
          >
            <IconButton
              className="mobile-only"
              onClick={() => {
                navigate("/");
              }}
              sx={{ display: appear ? "block" : "none" }}
              disableRipple
            >
              <img
                className="logo-transition"
                height={"50px"}
                alt="Klikpijar"
                src={"https://klikpijar.id/public/assets/img/co.png"}
              />
            </IconButton>
            <IconButton
              color="inherit"
              onClick={() => {
                setIsCollapsed(!isCollapsed);
              }}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: md ? "flex" : "none",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
              width: "20%",
              height: "100%",
            }}
          >
            <Typography>Hi, Epic Team</Typography>
            <AccountCircleIcon fontSize="large" />
          </Box>

          {/* TULISAN NAVBAR MOBILE */}
          <Box
            sx={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              width: "100%",
              height: "100%",
              bgcolor: "white",
              zIndex: "-20",
              transform: user && !md ? "translateY(100%)" : "translateY(0%)",
              opacity: user && !md ? "1" : "0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "5px",
                width: "20%",
                height: "100%",
              }}
            >
              <Typography>Hi, Epic Team</Typography>
              <AccountCircleIcon fontSize="large" />
            </Box>
          </Box>
        </Box>

        {/* SIDE BAR */}
        <Box
          position={"absolute"}
          marginTop={md ? "65px" : "56px"}
          sx={{ display: appear ? "block" : "none" }}
          onMouseEnter={() => {
            md && setAppear(true);
          }}
          onMouseLeave={() => {
            md && setAppear(false);
          }}
        >
          <SideMenu page={page} isCollapsed={isCollapsed} />
        </Box>
      </AppBar>

      {/* JUDUL HALAMAN */}
      <Box
        sx={{
          width: "100%",
          height: "43px",
          bgcolor: "#1ec8b7",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: md ? "65px" : "0",
        }}
      >
        <Typography
          maxWidth={"1024px"}
          width={"100%"}
          paddingLeft={"15px"}
          color={"white"}
        >
          {page.map((val) => {
            if (val?.subMenu) {
              return val.subMenu.map((child) => {
                return currentPath.pathname == child.to ? child.title : "";
              });
            } else {
              return currentPath.pathname == val.to && val.title;
            }
          })}
        </Typography>
      </Box>
    </>
  );
};

export default Header;
