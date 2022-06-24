import React from 'react'
import '../styles/home.css'
import { Button, Typography,ButtonGroup,TextField } from '@mui/material'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Butfoot from './footer'
function Homefoot() {
  return (
    <div>


<div className="foot1">
            <Typography variant ="h5" gutterBottom  style={{
                position: 'absolute',
                width: '358px',
                height: '47px',
                left: 'calc(50% - 358px/2 + 2px)',
                top: '10px',
                
                /* SUB HEADER */
                fontFamily: 'Outfit',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '20px',
                lineHeight: '28px',
                
                /* or 138% */
                textAlign: 'center',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                
                color: '#000000'
                
                
            }}>Are you ready</Typography>

          
          <Typography variant='h3' id='footyp'>be a part of the next big thing</Typography>

            <Button variant="conatined" id="footbut">
              <label id='butlabel'>Get Started</label>
            </Button>


            
        </div>

        <Butfoot/>
    </div>
  )
}

export default Homefoot