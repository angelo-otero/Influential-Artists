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
        <h3 className="artist-name">{props.name}</h3>
        {isClicked && (
          <div>
            <p className="artist-year">{props.years}</p>
            <p className="artist-movement">{props.artMovement}</p>
            <p className="artist-bio">{props.bio}</p>
          </div>
        )}
      </div>
  
    </div>
  );
}

export default Artist;
