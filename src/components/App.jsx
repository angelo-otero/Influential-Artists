//jshint esversion: 6

import React, {useState} from "react";
import Header from "./Header";
import ArtistCard from "./ArtistCard";
import Artists from "../Artists";
import Sort from "./Sort";
import Filter from "./Filter";
import Footer from "./Footer";
import artistArr from "../Clicked Artists";
import DisplayedArtist from "./Displayed Artist";
import FullImage from "./Full Image";

function App() {
  const [artistsDisplay, setArtistsDisplay] = useState(Artists);
  let [sortType, setSortType] = useState("chronological");
  let   [displayedArtist, setDisplayedArtist] = useState({
    artistImg: "",
    name: "",
    years: "",
    artMovement: "",
    bio: "",
    artWorkTitles: [],
    artWorkSrc: [],
    artWorkYears: [],
    artistIndex: "",
    display: {display: "none"},
    isVisible: false
  });
  
  let [isFullScreen, setIsFullScreen] = useState({
    display: {display: "none"}, 
    isVisible: false,
    fullImgSrc: "",
    fullImgTitle: "",
    fullImgYear: "",
    width: {width: ""}
    }
  );

  function sortArtists (sortName) {
    setSortType(sortName);
  }

  function filterArtists(filterName) {
    const clickedIndex = artistArr.findIndex(p => p === filterName);

    //empties artistArr when it is longer than Artists
    if (artistArr.length >= Artists.length) {
      artistArr.splice(0, artistArr.length);
    } 

     setArtistsDisplay(() => {
      // console.log(artistArr.length);
      // console.log(artistArr);
      console.log(filterName);
      
      //adds art movement filter to artistsDisplay
      if (!artistArr.includes(filterName)) {
        artistArr.push(filterName);
       } else if (artistArr.includes(filterName)) { 
          artistArr.splice(clickedIndex, 1);
       }

       //resets artistsDisplay to default state when all filters are removed
       if (artistArr.length === 0) {
         console.log("I'm emptying");
        for(let i = 0; i < Artists.length; i++){
          artistArr.push(Artists[i].artMovement)
        }
      }
        return Artists.filter((artist) => {
          return artistArr.includes(artist.artMovement);
        });   
    
       
    });
  }

  function handleClickedArtist (clickedArtist) {
    let artistIndex = Artists.findIndex(p => p.name === clickedArtist);
    let artWorkTitles = [
      Artists[artistIndex].topWorks[0].title,
      Artists[artistIndex].topWorks[1].title,
      Artists[artistIndex].topWorks[2].title,
      Artists[artistIndex].topWorks[3].title
    ]
    let artWorkSrc = [
      Artists[artistIndex].topWorks[0].workImg,
      Artists[artistIndex].topWorks[1].workImg,
      Artists[artistIndex].topWorks[2].workImg,
      Artists[artistIndex].topWorks[3].workImg
    ]
    let artWorkYears = [
      Artists[artistIndex].topWorks[0].year,
      Artists[artistIndex].topWorks[1].year,
      Artists[artistIndex].topWorks[2].year,
      Artists[artistIndex].topWorks[3].year
    ]


    setDisplayedArtist(()=>{
      return({
        artistImg: Artists[artistIndex].artistImg,
        name: Artists[artistIndex].name,
        years: Artists[artistIndex].years,
        artMovement: Artists[artistIndex].artMovement,
        bio: Artists[artistIndex].bio,
        artWorkTitles: artWorkTitles,
        artWorkSrc: artWorkSrc,
        artWorkYears: artWorkYears,
        artistIndex: artistIndex,
        display: {display: "flex"},
        isVisible: true
      });
    });
  }

  function closeDisplay () {
    console.log(displayedArtist.topWorks);
    setDisplayedArtist(() =>{
      return({
        display: {display: "none"},
        isVisible: false
      })
    });
  }

  function showFullScreen (fullImgSrc, fullImgTitle, fullImgYear, width) {
    console.log(isFullScreen.display)
    setIsFullScreen({
        display: {display: "flex"}, 
        isVisible: true,
        fullImgSrc: fullImgSrc,
        fullImgTitle: fullImgTitle,
        fullImgYear: fullImgYear,
        width: {width: width}
      }
    );
}

function closeFullScreen () {
    setIsFullScreen(
        {display: {display: "none"}, 
        isVisible: false}
    );
}

// if (sortType === 'alphabetical') {
//   return artistsDisplay.sort((a, b) => {
//     return (
//       (a.name > b.name ? 1: -1) 
//     ) 
//   });
// }

// if (sortType === 'chronological') {
//   return artistsDisplay.sort((a, b) => {
//     return (parseInt(a.years.substring(0, 4)) - parseInt(b.years.substring(0, 4)));
//   });
// }
artistsDisplay.sort((a, b) => {
    if (sortType === 'alphabetical') {
      return ((a.name > b.name ? 1: -1) )
    } else {
      return (parseInt(a.years.substring(0, 4)) - parseInt(b.years.substring(0, 4)));
    }
    });

  return ( 
    <div>
    {isFullScreen.isVisible ? 
                <FullImage 
                    artWorkTitles = {isFullScreen.fullImgTitle} 
                    artWorkSrc = {isFullScreen.fullImgSrc} 
                    artWorkYears = {isFullScreen.fullImgYear} 
                    showFullScreen = {showFullScreen}
                    closeFullScreen = {closeFullScreen}
                    display = {isFullScreen.display}
                    width = {isFullScreen.width}
                />  
            : false }

      <Header/>
      
      <div className="main-content">
        <DisplayedArtist
          artistImg = {displayedArtist.artistImg}
          name = {displayedArtist.name}
          years = {displayedArtist.years}
          artMovement = {displayedArtist.artMovement}
          bio = {displayedArtist.bio}
          artWorkTitles = {displayedArtist.artWorkTitles}
          artWorkSrc = {displayedArtist.artWorkSrc}
          artWorkYears = {displayedArtist.artWorkYears}
          display = {displayedArtist.display}
          isVisible = {displayedArtist.isVisible}
          handleClickedArtist = {handleClickedArtist}
          closeDisplay = {closeDisplay}
          showFullScreen = {showFullScreen}
        />

        

        <div className="menu box-shadow">
          <Sort sortArtists = {sortArtists}/>
          <Filter filterArtists = {filterArtists}/>
        </div>
          
          <div className="artists-cards">
            {artistsDisplay.map(Artists => {
                return ( 
                  <ArtistCard
                    key = {Artists.id}
                    artistImg = {Artists.artistImg}
                    name = {Artists.name}
                    years = {Artists.years}
                    handleClickedArtist = {handleClickedArtist}
                  />
                );
              })
            }
          </div>
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;
