import React from "react";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaBars,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
import sidebarBg from "../../assets/images/bg2.jpg";
const Sidebar = ({ image, collapsed, rtl, toggled, handleToggleSidebar }) => {
  return (
    <ProSidebar
      image={sidebarBg}
      rtl={rtl}
      collapsed={collapsed}
      toggled={toggled}
      breakPoint="md"
      onToggle={handleToggleSidebar}
    >
      <Menu iconShape="square">
        <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
        <SubMenu title="Components" icon={<FaHeart />}>
          <MenuItem>Component 1</MenuItem>
          <MenuItem>Component 2</MenuItem>
        </SubMenu>
      </Menu>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span
              style={{
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                overflow: "hidden",
              }}
            ></span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  );
};

export default Sidebar;
