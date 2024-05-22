import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import OrderSummary from '../../components/salesorder/OrderSummary'
import TableOrder from '../../components/tableorder/TableOrder'
import './sales.css';


function Psales() {
    return (
        <div className="sales">
            <Sidebar/>
            <div className="salescontainer">
                <Navbar />
                <div className='salesstable'>  
                </div>
                <OrderSummary />
                <TableOrder />
            </div>
        </div>
    );
}

export default Psales;