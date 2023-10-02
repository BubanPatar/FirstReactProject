import React from "react";
import './Card.css'

const Card=(props)=>
{
    const classes='card ' + props.className; //nested class component
    return <div className={classes}>{props.children}</div>
}

export default Card;