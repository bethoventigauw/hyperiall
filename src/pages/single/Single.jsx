import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import List from "../../components/list/List";
import "./single.css";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <h1 className="title">Information</h1>
            <span className="editButton">Edit</span>

            <div className="item">
              <img src="/assets/profileb.jpg" alt="" className="itemImg" />

              <div className="details">
                <h1 className="itemTitle">Mauricio Bethoven</h1>
                <div className="detailItem">
                  <span className="itemkey">Email: </span>
                  <span className="itemValue">betho@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Phone: </span>
                  <span className="itemValue">081255317201</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Address: </span>
                  <span className="itemValue">Bandung, Jawa Barat, Indonesia</span>
                </div>
                <div className="detailItem">
                  <span className="itemkey">Country: </span>
                  <span className="itemValue">Indonesia</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="Users Spending ( Last 6 Months )" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
