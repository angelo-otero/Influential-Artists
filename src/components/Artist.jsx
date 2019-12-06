import React from "react";

function Artist (props) {
  return(
    <div className="artist-card">
      <img src={props.artistImg}/>
      <h3>{props.name}</h3>
      <p>{props.years}</p>
      <p>{props.artMovement}</p>
      <p>{props.bio}</p>
    </div>
  );
}

export default Artist;
