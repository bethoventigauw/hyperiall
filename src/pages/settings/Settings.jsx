import React from 'react'
import './settings.css'
import Account from '../../components/account/Account'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Settings = () => {
  return (
    <div>
            <div className='settings'>
                <Sidebar/>
                <div className='setNavs'>
                    <Navbar/>
                    <div className='formTable'>
                        <div className='dataUser'>
                            <span>Account</span>
                        </div>
                        <Account/>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Settings