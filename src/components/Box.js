import React from 'react';
import './Box.css'


const Box = (props) => {
    
        return(
        
        <div className= {'box '+ props.color + (props.active === true ? " active" : '')} 
        onClick = {props.click}
       >

        </div>
        )
    
}

export default Box