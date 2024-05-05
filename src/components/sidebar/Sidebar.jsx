import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import InsertChartOutlinedSharpIcon from "@mui/icons-material/InsertChartOutlinedSharp";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="top">
          <Link to="/home" style={{ textDecoration: "none" }}>
            <span className="logo">Hyperial</span>
          </Link>
        </div>
        <hr />
        <div className="bottom">
          <ul>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <Person3OutlinedIcon className="icon" />
              <span>Sales</span>
            </li>
          </Link>

          <Link to="/purchasevendors" style={{ textDecoration: "none" }}>
            <li>
              <LocalGroceryStoreOutlinedIcon className="icon" />
              <span>Purchases</span>
            </li>
            </Link>

          <Link to="/inventory" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardOutlinedIcon className="icon" />
              <span>Inventory</span>
            </li>
          </Link>
            <li>
              <InsertChartOutlinedSharpIcon className="icon" />
              <span>Projects</span>
            </li>
          <Link to = "/settings" style={{ textDecoration: "none" }}>
            <li>
              <SettingsOutlinedIcon className="icon" />
              <span>Settings</span>
            </li>
          </Link>
          <li>
            <ManageAccountsOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <li>
              <ExitToAppOutlinedIcon className="icon" />
              <span>Logout</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;


