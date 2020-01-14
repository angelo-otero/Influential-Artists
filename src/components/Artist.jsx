import React, {useState} from "react";

function Artist (props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick () {
    !isClicked ? setIsClicked(true) : setIsClicked(false);
  }

  return(
    <div className="artist-card" onClick = {handleClick}>
      <div className="artist-image">
        <img src={props.artistImg}/>
      </div>
      
      <div className="artist-info">
        <h3>{props.name}</h3>
        {isClicked && (<div><p>{props.years}</p>
        <p>{props.artMovement}</p>
        <p>{props.bio}</p></div>)}
      </div>
  
    </div>
  );
}

export default Artist;
