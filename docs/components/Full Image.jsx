import React from "react";

function FullImage (props) {

    function handleClick () {
        props.closeFullScreen();
    }

    return(
        <div className="full-image-container" style={props.display}>
            <div className={`full-image ${props.widthStyle}`}>
                <a href={props.artWorkSrc} target="_blank" rel="noopener noreferrer"><img className={props.heightStyle} src={props.artWorkSrc} alt={props.artWorkTitles}/></a>  
            </div>
            <div className="full-image-info">
                <h2>{props.artWorkTitles}</h2>
                <h3>{props.artWorkYears}</h3>
            </div>
            <i className="far fa-window-close" onClick={handleClick}></i>
        </div>
    )
}

export default FullImage;