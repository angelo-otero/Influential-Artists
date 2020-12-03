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
import SearchField from "./Search Field";

function App() {
  const [artistsDisplay, setArtistsDisplay] = useState(Artists);
  let [sortType, setSortType] = useState("chronological");
  let [displayedArtist, setDisplayedArtist] = useState({
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
    widthStyle: "",
    heightStyle: ""
    }
  );

  let [artistCardView, setArtistCardView] = useState(6); 

  let lessThanSixCards = false;
  let isSixCards = true;

  function sortArtists (sortName) {
    setSortType(sortName);
  }

  function emptyArr () {
    for(let i = 0; i < Artists.length; i++){
      artistArr.push(Artists[i].artMovement)
    }
    setArtistCardView(6);
  }

  function filterArtists(filterName) {
    const clickedIndex = artistArr.findIndex(p => p === filterName);

    //empties artistArr when it is longer than Artists
    if (artistArr.length >= Artists.length) {
      artistArr.splice(0, artistArr.length);
    }

     setArtistsDisplay(() => {   
      //adds art movement filter to artistsDisplay
      if (!artistArr.includes(filterName)) {
        artistArr.push(filterName);
       } else if (artistArr.includes(filterName)) { 
          artistArr.splice(clickedIndex, 1);
       }

       //resets artistsDisplay to default state when all filters are removed
      if (artistArr.length === 0) {
        emptyArr();
      }

      return Artists.filter((artist) => {
        return artistArr.includes(artist.artMovement);
      });    
    });
  }

  function handleClickedArtist (clickedArtist) {
    const artistIndex = Artists.findIndex(p => p.name === clickedArtist);
    const artWorkTitles = Artists[artistIndex].topWorks.map(topWork =>{
      return topWork.title;
    });
    const artWorkSrc = Artists[artistIndex].topWorks.map(topWork => {
      return topWork.workImg;
    });
    const artWorkYears = Artists[artistIndex].topWorks.map(topWork=>{
      return topWork.year;
    });

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
    setDisplayedArtist(() =>{
      return({
        display: {display: "none"},
        isVisible: false
      })
    });
  }

  function showFullScreen (fullImgSrc, fullImgTitle, fullImgYear, widthStyle, heightStyle) {
    console.log(isFullScreen.display)
    setIsFullScreen({
        display: {display: "flex"}, 
        isVisible: true,
        fullImgSrc: fullImgSrc,
        fullImgTitle: fullImgTitle,
        fullImgYear: fullImgYear,
        widthStyle: widthStyle,
        heightStyle: heightStyle
      }
    );
  }

  function closeFullScreen () {
    setIsFullScreen(
        {display: {display: "none"}, 
        isVisible: false}
    );
  }

  function clearCheckbox () {
    let checkboxes = document.getElementsByClassName("filter-checkbox");
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  }

  function showMoreArtists () {
    if (artistCardView < Artists.length) {
      setArtistCardView(prevArtistCardView => prevArtistCardView + 3);
    }
    console.log('more');
    console.log(artistCardView);
  }

  function showLessArtists () {
    if (artistCardView > 6) {
      setArtistCardView(prevArtistCardView => prevArtistCardView - 3);
    }
    console.log('less');
    console.log(artistCardView);
  }

  function updateSearch(searchInput) {
    setArtistCardView(6);
    emptyArr();
    clearCheckbox();
    setArtistsDisplay(Artists.filter(artist=>{
      return artist.name.toLowerCase().indexOf(searchInput.toLowerCase()) !== -1;
    }))
  }

  artistsDisplay.sort((a, b) => {
    if (sortType === 'alphabetical') {
      return ((a.name > b.name ? 1: -1));
    } else {
      return (parseInt(a.years.substring(0, 4)) - parseInt(b.years.substring(0, 4)));
    }
  });

  if (artistCardView < 6) {
    lessThanSixCards = true;
  } 
  if (artistCardView > 6){
    lessThanSixCards = false;
  } 
  if (artistCardView == 6) {
    isSixCards = true;
  } else {
    isSixCards = false;
  }

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
            widthStyle = {isFullScreen.widthStyle}
            heightStyle = {isFullScreen.heightStyle}
          />  
       : false }

      <Header/>
      
      <div className="main-content">

        {/* initially hidden */}
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
          <SearchField updateSearch = {updateSearch}/>
          <Sort sortArtists = {sortArtists}/>
          <Filter filterArtists = {filterArtists} emptyArr = {emptyArr}/>
        </div>
          
        <div className="artists-cards">
          {artistsDisplay.slice(0, artistCardView).map(Artists => {
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

      <div className="showButtons">
        {(!lessThanSixCards || isSixCards) ? <button onClick={showMoreArtists}>Show More...</button> : null}
        {(!lessThanSixCards && !isSixCards) ? <button onClick={showLessArtists}>Show Less...</button> : null}
      </div>
      
      <Footer/>
    </div>
  );
}

export default App;
