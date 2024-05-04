import React from 'react'
import Purchases from "../../components/purchases/Belibang"
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import './beliinbang.css'

const Purchasevendors = () => {
    return (
        <div className='puchasevend'>
            <Sidebar/>
            <div className='vendorscontainer'>
                <Navbar/>
                <div className='vendorstable'>
                    <div className='datavend'>
                        <span>Supplier</span>
                        <Link to="/products/productId/new" style={{ textDecoration: "none" }}>
                            <span className="link">Add New </span>
                        </Link>
                    </div>
                    <Purchases/>
                </div>
            </div>
        </div>
    );
};
export default Purchasevendors;