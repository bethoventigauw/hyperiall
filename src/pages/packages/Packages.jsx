import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import OrderSummary from '../../components/salesorder/OrderSummary'
import TableOrder from '../../components/tableorder/TableOrder'
import './packages.css';

const Packages = () => {
    return (
        <div className="packages">
            <Sidebar />
            <div className="packagescontainer">
                <Navbar />
                <div className='packagesstable'></div>
                <OrderSummary />
                <TableOrder />  
            </div>
        </div>
    )
}

export default Packages;