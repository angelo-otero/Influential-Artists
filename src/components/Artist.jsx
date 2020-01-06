import React, {useState} from "react";

function Artist (props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick () {
    !isClicked ? setIsClicked(true) : setIsClicked(false);
  }

  return(
    <div className="artist-card" onClick = {handleClick}>
      <img src={props.artistImg}/>
      <h3>{props.name}</h3>
      {isClicked && (<div><p>{props.years}</p>
      <p>{props.artMovement}</p>
      <p>{props.bio}</p></div>)}
    </div>
  );
}

export default Artist;
