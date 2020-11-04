import React, {useState} from "react";

function ArtThumbnail (props) {
   
    function handleClick() {
        props.showFullScreen(props.artWorkSrc, props.artWorkTitles, props.artWorkYears)
    }
    
    return (
        <img className = "img-thumbnail" src={props.artWorkSrc} alt={props.artWorkTitles} onClick={handleClick}/>
    )
}

export default ArtThumbnail;