import React from 'react'
import { Button,Typography,ButtonGroup,TextField } from '@mui/material'
import '../styles/home.css'
function Butfoot() {
  return (
    <div>

<label id='footown'>Own Me</label>

<ButtonGroup orientation='vertical'  variant='string' id='butgroup1'>
   <Button>Home</Button>
   <Button>About</Button>
   <Button>Buy Nfts</Button>
   <Button>Sell Nfts</Button>
</ButtonGroup>

<label id="market">Market</label>
<ButtonGroup orientation='vertical' variant='string' id='butgroup2'>
    <Button>Browse Nfts</Button>
    <Button>Buy Nfts</Button>
    <Button>Sell Nfts</Button>
</ButtonGroup>

<label id='footcont'>Contact</label>
<ButtonGroup orientation='vertical' variant='string' id="butgroup3">
    <Button>Email</Button>
    <Button>Linkedin</Button>
    <Button>Instagram</Button>
    <Button>Twitter</Button>
</ButtonGroup>

<Typography id="join">Join Our NewsLetter</Typography>
<div >
<TextField  placeholder='Email' typeof='email' variant='filled' autoFocus='false'  style={{
 position: 'absolute',
 width: '400px',
 height: '53px',
 left: 'calc(50% + 15rem)',
 top: '4600px',
 
 background: '#13124F',
 borderRadius: '75px',
}} onMouseEnter={{backgorund:'white'}}>
     

</TextField>
<Button variant='conatined' id='textbut'>Submit</Button>
</div>
    </div>


  )
}

export default Butfoot