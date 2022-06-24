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
import Featured from '../components/Featured';
import Homefoot from '../components/homefoot.jsx'
import Boxcard from '../components/card ';
import Ellipse from '../components/elipse'
function Home() {
     
     const cir=()=>{
        <LinearProgress color="succes"/>
     }

    const sell=()=>{alert("conform to sell")}

    const pic1=require('../Images/Other 18.png')
  const pic2=require('../Images/Other 17.png')
  
  
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
        <Typography id='head' align='left'>NFT BASED DECENTRALIZED PROPERTY RAFFLE</Typography>
        <p align='left' id="subhead"> The most secure marketplace for buying and selling unique digital land</p>
        <div className='sblog'>
            <div id="sb1log"></div>
        </div>
         <Button variant="outlined" id='butown'>Owns</Button>
        
         <button id="butsell" onClick={sell} >Sell land</button>
      
      
      </div>
      
         
       

      <div id='el2'> </div>


      <Featured/>
    <div id="box">
      <Boxcard />  
       
     
      </div>
      
      <div className="analytics">
         <label  className='ana'>Analytics</label>


         <img src={pic1} alt="analytics" style={{
            width:'500px',
            height:'500px',
            position: 'absolute',
            left: 'calc(50% - 45rem)',
            right: '0%',
            top: '1380px',
            bottom: '0%'

         }}></img>
        <Typography className='typ' align='inherit' gutterBottom='true' variant='h3' >Built-in analytics to track your Nfts</Typography>
         <p className='para'>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</p>
         
         <Button id='viewprice'  variant='contained'>View our Pricing</Button>
          

    </div>


    <div className="smart">
         <label id="applabel">Get Our App</label>

         <p align ='left'id='Browse'>Browse NFTs from your smartphone</p>
         <p align='left'id='browpara'>Use our built-in analytics dashboard to pull valuable insights and monitor the value of your Krypto portfolio over time.</p>
          <Button id='viewprice2'variant='contained'>View Price</Button>
     <img  src={pic2} alt="mobile"  style={{
          width:'500px',
          height:'500px',
         position: 'absolute',
         left: 'calc(50% - 100px/4)',
         top: '2035px',
         bottom: '0%',
         boxShadow:'9px 9px 9px #8D8DDA',
         borderRadius:'3cm'
         

         
         
         

     }}></img>
      
    
    </div>

    <Ellipse/>

    <div className="foot">
         
         <label id="testi">Testimonials</label>
         <Typography id="others"gap={'10px'}> Read What Others Have To Say</Typography>

     <div className="boxx1"></div>
     <div className="boxx2"></div>
     <div className="boxx3"></div>


     

</div>


  <Homefoot/>
      </div>
  )
}

export default Home