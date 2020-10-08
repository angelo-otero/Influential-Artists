import React from "react";



function Artist (props) {
  

  function handleClick () {
    props.handleClickedArtist(props.name);
  }

  return(
    <div className="artist-card" onClick = {handleClick}>
      <div className="artist-image">
        <img src={props.artistImg} alt="artist profile"/>
      </div>
      
      <div className="artist-info">
        <h3 className="artist-name">{props.name}</h3>
      </div>
  
    </div>
  );
}

export default Artist;
