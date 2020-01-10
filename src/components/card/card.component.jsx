import React from "react";
import './card.styles.css'

export const Card = (props)=>{
    return ( <div className="card-container">
       <img src={`https://robohash.org/${props.monster.id}?set=set4&size=150x150`} alt={props.monster.name}/>
       <h3>{props.monster.name}</h3>
       </div>)
  
}