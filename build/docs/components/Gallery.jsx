import React from "react";
import ArtThumbnail from "./Art Thumbnail"

function Gallery (props) {
    let i = -1;

    return (
        <div className="artwork-thumbnails">
            {props.artWorkTitles.map(()=>{
                i++;
                return (
                <ArtThumbnail
                key = {i}
                index = {i}
                showFullScreen = {props.showFullScreen} 
                artWorkSrc = {props.artWorkSrc[i]}
                artWorkYears = {props.artWorkYears[i]}  
                artWorkTitles = {props.artWorkTitles[i]}/>
                )
            })}
     
        </div>
    )
}

export default Gallery;