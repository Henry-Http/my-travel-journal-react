import React from "react";

export default function Body(props) {
  return (
    <div className="main-body">
      <img src={props.coverImg} className="contentImg"></img>
      <div className="location">
        <img src={props.locationImg} className="location-icon"></img>
        <p>{props.location.toUpperCase()}</p>
        <a href="https://www.google.com/maps">
          <p className="map-text">{props.maps}</p>
        </a>
      </div>
      <p className="item-title">{props.title}</p>
      <div className="date-info">
        <p className="item-date">{props.date}</p>
        <p className="item-info">{props.info}</p>
      </div>
    </div>
  );
}
