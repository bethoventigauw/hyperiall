import React, { useState } from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import "./sidebar.css";

const Sidebar = () => {
  /* Sales */
  const [salesOpen, setSalesOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);
  const [packagesOpen, setPackagesOpen] = useState(false);
  const [shipmentsOpen, setShipmentsOpen] = useState(false);
  const [invoiceOpen, setInvoiceOpen] = useState(false);

  const toggleSales = () => {
    setSalesOpen(!salesOpen);
  };

  const toggleOrder = () => {
    setOrderOpen(!orderOpen);
    // Close other sales submenus
    setPackagesOpen(false);
    setShipmentsOpen(false);
    setInvoiceOpen(false);
  };

  const togglePackages = () => {
    setPackagesOpen(!packagesOpen);
    // Close other sales submenus
    setOrderOpen(false);
    setShipmentsOpen(false);
    setInvoiceOpen(false);
  };

  const toggleShipments = () => {
    setShipmentsOpen(!shipmentsOpen);
    // Close other sales submenus
    setOrderOpen(false);
    setPackagesOpen(false);
    setInvoiceOpen(false);
  };

  const toggleInvoice = () => {
    setInvoiceOpen(!invoiceOpen);
    // Close other sales submenus
    setOrderOpen(false);
    setPackagesOpen(false);
    setShipmentsOpen(false);
  };

  /* Sales */
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const [vendorOpen, setVendorOpen] = useState(false);
  const [ordersOpen, setOrdersOpen] = useState(false);
  const [billsOpen, setBillsOpen] = useState(false);
  const [vendorcreditsOpen, setVendorcreditsOpen] = useState(false);

  const togglePurchase = () => {
    setPurchaseOpen(!purchaseOpen);
  };

  const toggleVendor = () => {
    setVendorOpen(!vendorOpen);
    // Close other sales submenus
    setOrdersOpen(false);
    setBillsOpen(false);
    setVendorcreditsOpen(false);
  };

  const toggleOrders = () => {
    setOrdersOpen(!ordersOpen);
    // Close other sales submenus
    setVendorOpen(false);
    setBillsOpen(false);
    setVendorcreditsOpen(false);
  };

  const toggleBills = () => {
    setBillsOpen(!billsOpen);
    // Close other sales submenus
    setVendorOpen(false);
    setOrdersOpen(false);
    setVendorcreditsOpen(false);
  };

  const toggleVendorcredits = () => {
    setVendorcreditsOpen(!vendorcreditsOpen);
    // Close other sales submenus
    setVendorOpen(false);
    setOrdersOpen(false);
    setBillsOpen(false);
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

          {/* Dashboard */}
          <Link to="/home" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>

          {/* Sales */}
          <li onClick={toggleSales} className="dropdown">
            <ShoppingBagIcon className="icon" />
            <span>Sales</span>
            <ExpandMoreIcon className="dropdown-icon" />
            {(salesOpen || orderOpen || packagesOpen || shipmentsOpen || invoiceOpen) && (
              <ul className="submenu">
                <Link to="/order" style={{ textDecoration: "none" }}>
                  <li onClick={toggleOrder} className={orderOpen ? "active" : ""}>
                    <span>Order</span>
                  </li>
                </Link>
                <Link to="/packages" style={{ textDecoration: "none" }}>
                  <li onClick={togglePackages} className={packagesOpen ? "active" : ""}>
                    <span>Packages</span>
                  </li>
                </Link>
                <Link to="/shipments" style={{ textDecoration: "none" }}>
                  <li onClick={toggleShipments} className={shipmentsOpen ? "active" : ""}>
                    <span>Shipments</span>
                  </li>
                </Link>
                <Link to="/invoice" style={{ textDecoration: "none" }}>
                  <li onClick={toggleInvoice} className={invoiceOpen ? "active" : ""}>
                    <span>Invoice</span>
                  </li>
                </Link>
              </ul>
            )}
          </li>
          
          {/* Purchases */}
          <li onClick={togglePurchase} className="dropdown">
            <LocalGroceryStoreOutlinedIcon className="icon" />
            <span>Purchase</span>
            <ExpandMoreIcon className="dropdown-icon" />
            {(purchaseOpen || vendorOpen || ordersOpen || billsOpen || vendorcreditsOpen) && (
              <ul className="submenu">
                <Link to="/vendor" style={{ textDecoration: "none" }}>
                  <li onClick={toggleVendor} className={vendorOpen ? "active" : ""}>
                    <span>Vendor</span>
                  </li>
                </Link>
                <Link to="/orders" style={{ textDecoration: "none" }}>
                  <li onClick={toggleOrders} className={ordersOpen ? "active" : ""}>
                    <span>Orders</span>
                  </li>
                </Link>
                <Link to="/bills" style={{ textDecoration: "none" }}>
                  <li onClick={toggleBills} className={billsOpen ? "active" : ""}>
                    <span>Bills</span>
                  </li>
                </Link>
                <Link to="/vendorcredits" style={{ textDecoration: "none" }}>
                  <li onClick={toggleVendorcredits} className={vendorcreditsOpen ? "active" : ""}>
                    <span>Vendor Credits</span>
                  </li>
                </Link>
              </ul>
            )}
          </li>
          
          {/* Inventory */}
          <Link to="/inventory" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardOutlinedIcon className="icon" />
              <span>Inventory</span>
            </li>
          </Link>

          {/* Settings */}
          <Link to="/settings" style={{ textDecoration: "none" }}>
            <li>
              <SettingsOutlinedIcon className="icon" />
              <span>Settings</span>
            </li>
          </Link>

          {/* Profiles */}
          <Link to = "/">
            <li>
              <ManageAccountsOutlinedIcon className="icon" />
              <span>Profile</span>
            </li>
          </Link>

          {/* Logout */}
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
