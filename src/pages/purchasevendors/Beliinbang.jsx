import React from 'react'
import BasicTable from "../../components/purchases/Belibang"
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from '../../components/sidebar/Sidebar';
import './beliinbang.css'

const Beliinbang = () => {
    return (
        <div>
            <div className='purchasevend'>
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
                        <BasicTable/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Beliinbang;