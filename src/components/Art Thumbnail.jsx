import React from "react";
import {useMediaQuery} from "react-responsive";

function ArtThumbnail (props) {
   
    const isSmallScreen = useMediaQuery({query: "(max-width:800px"}); 

    function handleClick() {
        //sets portrait or landscape orientation 
        const artWorkImg = document.getElementsByClassName("img-thumbnail");
        let imgWidth = artWorkImg[props.index].naturalWidth;
        let imgHeight = artWorkImg[props.index].naturalHeight;
        let widthStyle = "";
        let heightStyle = "";
        
        if (isSmallScreen) {
            widthStyle = "full-image-landscape";
            if (imgHeight > imgWidth) {
                heightStyle = "portrait-height";
            } else {
                heightStyle = "landscape-height";
            }
        }

        if (!isSmallScreen) {
            //portrait orientation
            if (imgHeight > imgWidth) {
                widthStyle = "full-image-portrait";
                heightStyle = "portrait-height";
            } else { //landscape orientation
                widthStyle = "full-image-landscape";
                heightStyle = "portrait-height";
            }
        }

        props.showFullScreen(props.artWorkSrc, props.artWorkTitles, props.artWorkYears, widthStyle, heightStyle)
    }
    
    return (
        <img className = "img-thumbnail" src={props.artWorkSrc} alt={props.artWorkTitles} onClick={handleClick} />
    )
}

export default ArtThumbnail;