import React from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import "./widget.css";

const Widget = ({ type }) => {
  let data;
  // temp
  const amount = 824;
  const diff = 75;

  switch (type) {
    case "customer":
      data = {
        title: "SALES",
        isMoney: false,
        link: "See details",
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{ color: "#0F4C75", backgroundColor: "#BBE1FB" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{ color: "#0F4C75", backgroundColor: "#BBE1FB" }}
          />
        ),
      };
      break;
    case "earnings":
      data = {
        title: "TOTAL EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ color: "#0F4C75", backgroundColor: "#BBE1FB" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "MY BALANCE",
        isMoney: true,
        link: "Withdraw money",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{ color: "#0F4C75", backgroundColor: "#BBE1FB" }}
          />
        ),
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "Rp."} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff}%
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
