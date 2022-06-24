import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Typography from '@mui/material/Typography'
function Boxcard() {
  return (

    <div>
      
        <div>
        <Typography align='left' variant='h4' color='text.secondary'style={{
                 position:'relative',
                left:'calc(50% - 40rem)',
                top:'63rem',
                color:'#FFF'


        }}>Live Auction</Typography> 
                
                <Typography align='left' variant='h4' color='text.secondary'style={{
                 position:'relative',
                left:'calc(50% + 40rem)',
                top:'61rem',
                color:'#FFF'


        }}>Explore</Typography>      
        </div>
        
        <div style={{
            position:'relative',
            width:'20rem',
            height:'12rem',
            backgroundColor:'black',
            left:'calc(50% - 40rem)',
            marginTop:'1040px'

        }} >
              

          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          
          </Typography>
          <Typography variant="body2" color="text.secondary">
                    NFT
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </div>

    <div style={{
            position:'relative',
            width:'20rem',
            height:'12rem',
            backgroundColor:'black',
            left:'calc(50% - 10rem)',
            marginTop:'-12rem'

        }} >
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          
          </Typography>
          <Typography variant="body2" color="text.secondary">
                    NFT
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </div>
    <div style={{
            position:'relative',
            width:'20rem',
            height:'12rem',
            backgroundColor:'black',
            left:'calc(50% + 20rem)',
            marginTop:'-12rem'

        }} >
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
      
      
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          
          </Typography>
          <Typography variant="body2" color="text.secondary">
                    NFT
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    </div>

    </div>
  )
}

export default Boxcard

  

