import React from "react";
import { Outlet } from "react-router-dom";
import "./Layout.css"

const Layout = () => {
  return (
    <div className="Layout">
      <h1>Layout</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
