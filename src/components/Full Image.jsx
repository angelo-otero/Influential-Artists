import React from "react";

function FullImage (props) {
    function handleClick () {
        props.closeFullScreen();
    }

    return(
        <div className="full-image-container" style={props.display}>
            <div className="full-image">
                <img src={props.artWorkSrc} alt={props.artWorkTitles}/>  
            </div>
            <div className="full-image-info">
                <h1>{props.artWorkTitles}</h1>
                <h2>{props.artWorkYears}</h2>
            </div>
            <i className="far fa-window-close" onClick={handleClick}></i>
        </div>
    )
}

export default FullImage;