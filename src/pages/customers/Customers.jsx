import React from "react";
import Sales from "../../pages/sales/Sales";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "./../../components/navbar/Navbar";
import "./customers.css";

const Customers = () => {
  return (
    <div className="customers">
      <Sidebar />
      <div className="customersContainer">
        <Navbar />
        <Sales />
      </div>
    </div>
  );
};

export default Customers;
