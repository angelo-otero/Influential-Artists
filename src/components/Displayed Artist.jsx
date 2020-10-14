import React, {useState} from "react";

function DisplayedArtist (props) {

    // const [isClicked, setIsClicked] = useState(false);
    // const [display, setDisplay] = useState({display: {display: "none"}});

    function handleClick() {
        props.closeDisplay();
    }

    return (
        <div className="displayed-artist box-shadow" style={props.display} >
            <div className="displayed-image">
                <img src={props.artistImg} alt="artist profile"/>
            </div>
            <div className="displayed-info">
                <h3 className="artist-name">{props.name}</h3>
                <div>
                    <p className="artist-year">{props.years}</p>
                    <p className="artist-movement">{props.artMovement}</p>
                    <p className="artist-bio">{props.bio}</p>
                </div>
             </div>
             <i className="far fa-window-close" onClick={handleClick}></i>
        </div>
    )
}

export default DisplayedArtist;