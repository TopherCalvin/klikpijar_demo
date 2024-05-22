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
} from "@mui/material";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../components/dashboard/css/header.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(false);
  const navigate = useNavigate();
  const currentPath = useLocation();
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
          <Box className="header-mobile">
            <IconButton
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
        </Box>
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
            transform: user ? "translateY(100%)" : "translateY(0%)",
            opacity: user ? "1" : "0",
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
      </AppBar>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        closeAfterTransition
      >
        <Fade in={open}>
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
                                  <FiberManualRecordIcon />
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
      </Modal>
      <Box
        sx={{
          width: "100%",
          height: "43px",
          bgcolor: "#1ec8b7",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography paddingLeft={"15px"} color={"white"}>
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
