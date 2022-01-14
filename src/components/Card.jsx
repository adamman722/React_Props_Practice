import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card">
        <div className="top">
          <h2 className="name">{props.contact.name}</h2>
          <img
            src={props.contact.imgURL}
            alt="avatar_img"
            className="circle-img"
          />
        </div>
        <div className="bottom">
          <p className="info">{props.contact.phone}</p>
          <p className="info">{props.contact.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
