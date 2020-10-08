import React from "react";

function DisplayedArtist (props) {

    return (
        <div className="displayed-artist box-shadow" style={props.display}>
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
             <i className="fas fa-window-close"></i>
        </div>
    )
}

export default DisplayedArtist;