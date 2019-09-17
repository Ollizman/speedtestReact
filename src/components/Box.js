import React from 'react'
import './Box.css'

function Box(props) {
   
    return(
        <div className="box" onClick={props.click}>
            
        <h4>Active: {props.active} </h4>
        </div>
    )
}

export default Box