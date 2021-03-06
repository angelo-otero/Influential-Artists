import React from "react";
import Gallery from "./Gallery";

function DisplayedArtist (props) {

    function handleClick() {
        props.closeDisplay();
    }

    return (
        <div className="displayed-artist-background" style={props.display}>
            <div className="displayed-artist-container box-shadow">
                <div className="displayed-artist">
                    <div className="displayed-image">
                        <img src={props.artistImg} alt={props.name}/>
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
                
                {props.isVisible ? <Gallery artWorkTitles = {props.artWorkTitles} artWorkSrc = {props.artWorkSrc} artWorkYears = {props.artWorkYears}  showFullScreen = {props.showFullScreen}/>  : false }
                
            </div>
        </div>
        
    )
}

export default DisplayedArtist;