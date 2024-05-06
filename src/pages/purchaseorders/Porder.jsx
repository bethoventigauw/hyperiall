import React from 'react'
import Navbar from "../../components/navbar/Navbar";
import Sidebar from '../../components/sidebar/Sidebar';
import Order from '../../components/order/Order'
import Overall from '../../components/overallorder/Overall';
import './porder.css'

const Porder = () => {
    return (
        <div>
            <div className='purchaseorder'>
                <Sidebar/>
                <div className='ordercontainer'>
                    <Navbar/>
                    <div className='orderPage'>
                        <span>Purchase Order</span>
                        <div className='overallOrder'>
                            <span>Overall Order</span>
                            <Overall/>
                        </div>
                        <div className='tableOrder'>
                            <span>Order</span>
                            <Order/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Porder;