/*import React from "react";
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

            <li>
              <LocalGroceryStoreOutlinedIcon className="icon" />
              <span>Purchases</span>
            </li>
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
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
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

export default Sidebar;*/

import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Person3OutlinedIcon from "@mui/icons-material/Person3Outlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import InsertChartOutlinedSharpIcon from "@mui/icons-material/InsertChartOutlinedSharp";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [salesMenuOpen, setSalesMenuOpen] = useState(false);
  const [purchasesMenuOpen, setPurchasesMenuOpen] = useState(false);

  const toggleSalesMenu = () => {
    setSalesMenuOpen(!salesMenuOpen);
  };

  const togglePurchasesMenu = () => {
    setPurchasesMenuOpen(!purchasesMenuOpen);
  };

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

          <li className={salesMenuOpen ? "menu-item active" : "menu-item"} onClick={toggleSalesMenu}>
            <div className="menu-header">
              <Person3OutlinedIcon className="icon" />
              <span>Sales</span>
              <ExpandMoreIcon className="expand-icon" />
            </div>
            {salesMenuOpen && (
              <ul className="sub-menu">
                <Link to="/users" style={{ textDecoration: "none" }}>
                  <li>
                    <span>Sales Order</span>
                  </li>
                </Link>
                <Link to="/sales-analytics" style={{ textDecoration: "none" }}>
                  <li>
                    <span>Sales Analytics</span>
                  </li>
                </Link>
              </ul>
            )}
          </li>

          <li className={purchasesMenuOpen ? "menu-item active" : "menu-item"} onClick={togglePurchasesMenu}>
            <div className="menu-header">
              <LocalGroceryStoreOutlinedIcon className="icon" />
              <span>Purchases</span>
              <ExpandMoreIcon className="expand-icon" />
            </div>
            {purchasesMenuOpen && (
              <ul className="sub-menu">
                <Link to="/purchase-history" style={{ textDecoration: "none" }}>
                  <li>
                    <span>Purchase History</span>
                  </li>
                </Link>
                <Link to="/pending-purchases" style={{ textDecoration: "none" }}>
                  <li>
                    <span>Pending Purchases</span>
                  </li>
                </Link>
              </ul>
            )}
          </li>

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
          <li>
            <SettingsOutlinedIcon className="icon" />
            <span>Settings</span>
          </li>
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




