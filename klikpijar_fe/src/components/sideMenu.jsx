import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Typography, colors } from "@mui/material";
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

const SideMenu = ({ page, isCollapsed }) => {
  const [selected, setSelected] = useState("Dashboard");
  const navigate = useNavigate();

  return (
    <Sidebar collapsed={isCollapsed}>
      <Menu
        menuItemStyles={{
          button: ({ level, active }) => {
            if (level === 0) {
              return {
                color: active ? "white" : "#7c87a6",
                backgroundColor: active ? "#db1430" : "#282733",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#2f2e3c",
                },
              };
            } else if (level === 1) {
              return {
                color: active ? "white" : "#7c87a6",
                backgroundColor: "#282733",
                "&:hover": {
                  color: "white",
                  backgroundColor: "#2f2e3c",
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
