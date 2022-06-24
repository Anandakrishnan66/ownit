import React from 'react'
import '../styles/home.css'


function Featured() {
  return (
    <div>
       <div style={{
        position:' absolute',
        width:' 10px',
        height: '28px',
        left: 'calc(50% - 168px/2 - 446px)',
        top: '730px',

/* SUB HEADER */
        fontFamily: 'Outfit',
        fontStyle: 'normal',
        fontWeight:' 600',
        fontSize: '20px',
        lineHeight: '28px',

/* identical to box height, or 138% */
        letterSpacing: '0.1em',
        textTransform: 'uppercase',

        color: '#FFFFFF'


            }}>
        Featured on
        </div>

    <div style={{
        position:'absolute',
        width:'1036px',
        height:'100px',
        left:'calc(50% - 1036px/2 + 1.5px)',
        top:'830px',
        background: 'rgba(99, 88, 189, 0.19)',
         borderRadius: '7px'
        }}>

        <div  className='T1'  >     </div>
        <div className="T2"></div>
        <div className="T3"></div>


            
          


        </div>

    </div>
  )
}

export default Featured