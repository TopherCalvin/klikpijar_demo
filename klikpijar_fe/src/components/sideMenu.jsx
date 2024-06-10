import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@emotion/react";

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

const SideMenu = ({ page, isCollapsed }) => {
  const [selected, setSelected] = useState("Dashboard");
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Sidebar collapsed={isCollapsed}>
      <Menu
        menuItemStyles={{
          button: ({ level, active }) => {
            if (level === 0) {
              return {
                color: active ? "white" : theme.palette.primary.main,
                backgroundColor: active ? "#db1430" : "#2A363B",
                "&:hover": {
                  color: "white",
                  backgroundColor: theme.palette.secondary.main,
                },
              };
            } else if (level === 1) {
              return {
                color: active ? "white" : theme.palette.primary.main,
                backgroundColor: active ? "#db1430" : "#2A363B",
                "&:hover": {
                  color: "white",
                  backgroundColor: theme.palette.secondary.main,
                },
              };
            }
          },
        }}
      >
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
