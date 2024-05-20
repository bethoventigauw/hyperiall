import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import AddPOrderForm from '../../components/AddPOrderForm/AddPOrderForm'
import './NewPorder.css'

const NewPOrder = () => {
    return (
        <div>
          <div className="newTableOrder">
            <Sidebar/>
              <div className='newTableOrderContainer'>
                <Navbar/>
                <h1>New Order</h1>
                <div className='newTableOrderForm'>
                  <AddPOrderForm/>
                </div>
              </div>
          </div>
        </div>
    )
}

export default NewPOrder;