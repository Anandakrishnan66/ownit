import React from 'react'
import '/home/ananda/Desktop/OWN IT/ownit/src/styles/home.css'

import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
//import Typography from '@mui/material/Typography';
//import Alert from '@mui/material/Alert';
import LinearProgress from '@mui/material/LinearProgress';
//import { View, Image, StyleSheet } from 'react-native';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
function Home() {
     
     const cir=()=>{
        <LinearProgress color="succes"/>
     }

    const sell=()=>{alert("conform to sell")}
  
return (
     <div className='desktop'  >
      
      <nav className='Nav'>
           <div className='el1'></div>
             <Button id='ows' style={{color:'white'}}   >OWNS ME</Button> 
             <Button id="ab">about</Button>
              <Button id="pric" onClick={cir} >Pricing</Button>
              <Button id="con" >Contact</Button>
       
<Tooltip title="Click to buy"> 
 
<Button onClick={()=>{alert("conform to buy")}} variant="outlined"  className='but'>
  buy Now

<div className='el'></div>
</Button>


</Tooltip>
               
            </nav >


     <div className='logos'>
        <Typography id='head'>NFT BASED DECENTRALIZED PROPERTY RAFFLE</Typography>
        <label id="subhead"> The most secure marketplace for buying and selling unique digital land</label>
        <div className='sblog'>
            <div id="sb1log"></div>
        </div>
         <Button variant="outlined" id='butown'>Owns</Button>
        
         <button id="butsell" onClick={sell} >Sell land</button>
      
      
      </div>
      
         
       

      <div id='el2'> </div>


      




      </div>
  )
}

export default Home