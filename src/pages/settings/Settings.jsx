import React from 'react'
import './settings.css'
import Account from '../../components/account/Account'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Settings = () => {
  return (
    <div className='accBar'>
        <Sidebar/>
        <span>Account</span>
        <div className='profileBox'>
            <Navbar/>
            <Account/>
        </div>
    </div>
  )
}

export default Settings