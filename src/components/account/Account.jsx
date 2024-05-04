import React from 'react'
import './account.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Account = () => {
  return (
    <div className='accountField'>
        <Box
         className='boxField'
         component="form"
         sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
         }}
         noValidate
         autoComplete="off"
        >
            <div className='textField'>
                <TextField
                required
                id="first-name"
                label="First Name"
                defaultValue=""
                />
                <TextField
                id="last-name"
                label="Last Name"
                defaultValue=""
                />
                <TextField
                id="email"
                label="Email"
                defaultValue=""
                />
                <TextField
                required
                id="home-address"
                label="Home Address"
                defaultValue=""
                />
                <TextField
                id="phone-number"
                label="Phone Number"
                defaultValue=''
                />
                <TextField 
                id="post-code" 
                label="Post Code" 
                defaultValue=''
                />
            </div>
        </Box>
    </div>
  )
}

export default Account