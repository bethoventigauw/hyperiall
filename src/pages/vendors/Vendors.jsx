import React from 'react'
import Purchases from "../../components/purchases/Belibang"
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import './vendors.css'

const Vendors = () => {
  return (
    <div className='puchasevend'>
            <Sidebar/>
            <div className='vendorscontainer'>
                <Navbar/>
                <div className='vendorstable'>
                    <div className='datavend'>
                        <span>Add new product</span>
                        <Link to="/products/productId/new" style={{ textDecoration: "none" }}>
                            <span className="link">Add New </span>
                        </Link>
                    </div>
                </div>
                <Purchases/>
            </div>
        </div>
  )
}

export default Vendors