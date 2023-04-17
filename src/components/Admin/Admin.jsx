import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { FaBars } from "react-icons/fa";
import "./Admin.scss";

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const handleCollapseSidebar = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <Sidebar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <FaBars onClick={() => handleCollapseSidebar()} />
      </div>
    </div>
  );
};

export default Admin;
