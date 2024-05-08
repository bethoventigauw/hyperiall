import React from 'react'
import BasicTable from "../../components/purchases/Belibang"
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
                        <span>Purchase Vendors</span>
                        <div className='datavend'>
                            <span>Supplier</span>
                        </div>
                        <BasicTable/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Beliinbang;