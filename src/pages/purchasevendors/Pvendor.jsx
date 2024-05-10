import React from 'react'
import BasicTable from "../../components/purchases/Belibang"
import Navbar from "../../components/navbar/Navbar";
import Sidebar from '../../components/sidebar/Sidebar';
import './pvendor.css'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

const Pvendor = () => {
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
                        <div className='addSupplier'>
                            <Link to="/addsupplier" style={{ textDecoration: "none" }}>
                                <Button variant="contained" >New Supplier</Button>
                            </Link>
                        </div>
                        <BasicTable/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Pvendor;