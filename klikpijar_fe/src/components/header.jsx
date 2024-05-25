import {
  AppBar,
  Box,
  IconButton,
  Button,
  Modal,
  Fade,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  useMediaQuery,
} from "@mui/material";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuIcon from "@mui/icons-material/Menu";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./css/header.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);
  const currentPath = useLocation();
  const navigate = useNavigate();
  const md = useMediaQuery("(min-width: 1024px)");
  const page = [
    {
      pageName: "Dashboard",
      pagePath: "/",
      accordion: false,
      title: "Dashboard",
    },
    {
      pageName: "Reservasi",
      child: [
        { childName: "Data Test HIV", pagePath: "/", title: "" },
        { childName: "Data Refil ARV", pagePath: "/", title: "" },
        { childName: "Data Viral Load", pagePath: "/", title: "" },
      ],
      accordion: true,
    },
    {
      pageName: "Notifikasi Pasangan",
      child: [
        { childName: "Data View", pagePath: "/", title: "" },
        { childName: "Data Komunitas", pagePath: "/", title: "" },
      ],
      accordion: true,
    },
    {
      pageName: "Skrining HIV Mandiri",
      child: [{ childName: "Data View", pagePath: "/", title: "" }],
      accordion: true,
    },
    {
      pageName: "Info Prep",
      child: [{ childName: "Data View", pagePath: "/", title: "" }],
      accordion: true,
    },
    {
      pageName: "Cascade",
      child: [
        { childName: "Cascade Total", pagePath: "/", title: "" },
        { childName: "Cascade Tes HIV", pagePath: "/", title: "" },
        { childName: "Cascade Refil ARV", pagePath: "/", title: "" },
        { childName: "Cascade VIral Load", pagePath: "/", title: "" },
      ],
      accordion: true,
    },
    { pageName: "Users", pagePath: "/6", accordion: false, title: "" },
    {
      pageName: "Pengaturan",
      child: [
        {
          childName: "Fasyankes",
          pagePath: "/Pengaturan/Fasyankes",
          title: "Dataview Fasyankes/Klinik",
        },
      ],
      accordion: true,
    },
  ];

  const handleChange = (pageExpanded) => (event, isExpanded) => {
    setExpanded(!expanded || expanded != pageExpanded ? pageExpanded : false);
  };

  return (
    <>
      <AppBar position="sticky" sx={{ bgcolor: "black" }}>
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
                  setOpen(true);
                }}
                sx={{ transform: open ? "rotate(90deg)" : "rotate(270deg)" }}
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
          <Box width={"150px"} display={"flex"} justifyContent={"flex-end"}>
            <IconButton
              color="inherit"
              onClick={() => {
                setOpen(!open);
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

        {/* SIDE BAR DESKTOP */}
        {/* <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            width: 400,
            bgcolor: "black",
            height: "100vh",
            zIndex: "100",
            display: open && md ? "flex" : "none",
          }}
        >
          <List sx={{ width: "100%", color: "white" }} component={"nav"}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"space-around"}
            >
              <Box>
                <ListItemIcon></ListItemIcon>
                <IconButton
                  onClick={() => {
                    navigate("/");
                  }}
                  disableRipple
                >
                  <img
                    className="logo-transition"
                    height={"50px"}
                    alt="Klikpijar"
                    src={"https://klikpijar.id/public/assets/img/co.png"}
                  />
                </IconButton>
              </Box>
              <IconButton
                color="inherit"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                <HighlightOffOutlinedIcon fontSize="large" />
              </IconButton>
            </Box>
            {page.map((menu) => {
              return (
                <>
                  <ListItemButton
                    onClick={
                      menu.accordion
                        ? handleChange(menu.pageName)
                        : () => {
                            navigate(menu.pagePath);
                          }
                    }
                  >
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary={menu.pageName} />
                    {menu.accordion ? (
                      expanded == menu.pageName ? (
                        <ExpandLessIcon />
                      ) : (
                        <ExpandMoreIcon />
                      )
                    ) : null}
                  </ListItemButton>
                  <Collapse
                    in={expanded == menu.pageName}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {menu.accordion &&
                        menu.child.map((child) => {
                          return (
                            <ListItemButton
                              sx={{ pl: 4 }}
                              onClick={() => {
                                navigate(child.pagePath);
                              }}
                            >
                              <ListItemIcon>
                                <FiberManualRecordIcon
                                  fontSize="10px"
                                  sx={{ color: "white" }}
                                />
                              </ListItemIcon>
                              <ListItemText primary={child.childName} />
                            </ListItemButton>
                          );
                        })}
                    </List>
                  </Collapse>
                </>
              );
            })}
          </List>
        </Box> */}
      </AppBar>

      {/* SIDE BAR MOBILE */}
      {/* <Modal
        className="sideBar"
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={md ? false : open}
        onClose={() => {
          setOpen(false);
        }}
        closeAfterTransition
      >
        <Fade in={md ? false : open}>
          <Box
            sx={{
              position: "absolute",
              top: "0",
              left: "0",
              width: 400,
              bgcolor: "#282733",
              height: "100%",
            }}
          >
            <List sx={{ width: "100%", color: "white" }} component={"nav"}>
              {page.map((menu) => {
                return (
                  <>
                    <ListItemButton
                      onClick={
                        menu.accordion
                          ? handleChange(menu.pageName)
                          : () => {
                              navigate(menu.pagePath);
                            }
                      }
                    >
                      <ListItemIcon></ListItemIcon>
                      <ListItemText primary={menu.pageName} />
                      {menu.accordion ? (
                        expanded == menu.pageName ? (
                          <ExpandLessIcon />
                        ) : (
                          <ExpandMoreIcon />
                        )
                      ) : null}
                    </ListItemButton>
                    <Collapse
                      in={expanded == menu.pageName}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {menu.accordion &&
                          menu.child.map((child) => {
                            return (
                              <ListItemButton
                                sx={{ pl: 4 }}
                                onClick={() => {
                                  navigate(child.pagePath);
                                }}
                              >
                                <ListItemIcon>
                                  <FiberManualRecordIcon
                                    fontSize="10px"
                                    sx={{ color: "white" }}
                                  />
                                </ListItemIcon>
                                <ListItemText primary={child.childName} />
                              </ListItemButton>
                            );
                          })}
                      </List>
                    </Collapse>
                  </>
                );
              })}
            </List>
          </Box>
        </Fade>
      </Modal> */}

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
            if (val.accordion) {
              return val.child.map((child) => {
                return currentPath.pathname == child.pagePath
                  ? child.title
                  : "";
              });
            } else {
              return currentPath.pathname == val.pagePath && val.title;
            }
          })}
        </Typography>
      </Box>
    </>
  );
};

export default Header;
