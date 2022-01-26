import React from "react";
import star from "../images/star.png"

export default function Card(props) {
  let badgeText
    if(props.openSpots === 0) {
      badgeText = "SOLD OUT"
    } else if(props.location === "Online") {
      badgeText = "ONLINE"
    }

  return(
    <div className="card">
      <img src={require(`../images/${props.img}`)} className="card--image" alt={props.title} />
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <div className="card--stats">
        <img src={star} className="card--star" alt="star"/>
        <span>{props.rating}</span>
        <span className="gray">({props.review}) •</span>
        <span className="gray">{props.location}</span>
      </div>
      <p>{props.title}</p>
      <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}
