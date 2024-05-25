import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import { useNavigate } from "react-router-dom";

function Item({ title, to, icon, selected, setSelected, subMenu, navigate }) {
  return !subMenu ? (
    <MenuItem
      active={selected === title}
      onClick={() => {
        setSelected(title);
        navigate(to);
      }}
      icon={icon}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  ) : (
    <SubMenu active={selected === title} label={title} icon={icon}>
      {subMenu.map((val) => {
        return (
          <MenuItem
            onClick={() => {
              setSelected(title);
              navigate(val.to);
            }}
          >
            <Typography>{val.title}</Typography>
          </MenuItem>
        );
      })}
    </SubMenu>
  );
}

const SideMenu = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const navigate = useNavigate();
  const page = [
    {
      title: "Dashboard",
      to: "/",
      icon: <HomeOutlinedIcon />,
    },
    {
      title: "Reservasi",
      subMenu: [
        { title: "Data Test HIV", to: "/" },
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
    },
    {
      title: "Skrining HIV Mandiri",
      subMenu: [{ title: "Data View", to: "/" }],
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
    },
  ];

  return (
    <Sidebar collapsed={isCollapsed}>
      <Menu>
        {page.map((val) => {
          return (
            <Item
              title={val.title}
              to={val.to}
              selected={selected}
              setSelected={setSelected}
              icon={val?.icon}
              subMenu={val?.subMenu}
              navigate={navigate}
            />
          );
        })}
      </Menu>
    </Sidebar>
  );
};

export default SideMenu;
