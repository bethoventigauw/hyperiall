import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import AddSupplierForm from '../../components/AddSupplierForm/AddSupplierForm'
import './NewSupplier.css'

const NewSupplier = () => {
  return (
    <div>
      <div className="newSupplier">
        <Sidebar/>
          <div className='newSupplierContainer'>
            <Navbar/>
            <h1>New Supplier</h1>
            <div className='newSupplierForm'>
              <AddSupplierForm/>
            </div>
          </div>
      </div>
    </div>
  )
}
export default NewSupplier