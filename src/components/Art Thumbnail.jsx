import React from "react";

function ArtThumbnail (props) {
   
    function handleClick() {
        //sets portrait or landscape orientation 
        const artWorkImg = document.getElementsByClassName("img-thumbnail");
        let imgWidth = artWorkImg[props.index].naturalWidth;
        let imgHeight = artWorkImg[props.index].naturalHeight;
        let width = "";
        
        if (imgHeight > imgWidth) {
            width = "45%";
        } else {
            width = "90%";
        }

        props.showFullScreen(props.artWorkSrc, props.artWorkTitles, props.artWorkYears, width)
    }
    
    return (
        <img className = "img-thumbnail" src={props.artWorkSrc} alt={props.artWorkTitles} onClick={handleClick}/>
    )
}

export default ArtThumbnail;