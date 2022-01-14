import React from "react";
import Avatar from "./Avatar";
import Detail from "./Details";
function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.contact.name}</h2>
          <Avatar img={props.contact.imgURL} />
        </div>
        <div className="bottom">
          <Detail contactInfo={props.contact.phone} />
          <Detail contactInfo={props.contact.email} />
        </div>
      </div>
    </div>
  );
}

export default Card;
