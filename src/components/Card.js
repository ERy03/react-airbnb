import React from "react";
import star from "../images/star.png"

export default function Card(props) {
  return(
    <div className="card">
      <img src={require(`../images/${props.img}`)} className="card--image" alt={props.title} />
      {props.status && <span className="status">{props.status}</span>}
      <div className="card--stats">
        <img src={star} className="card--star" alt="star"/>
        <span>{props.rating}</span>
        <span className="gray">({props.review}) •</span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}
