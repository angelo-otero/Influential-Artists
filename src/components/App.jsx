//jshint esversion: 6

import React, {useState} from "react";
import Header from "./Header";
import Artist from "./Artist";
import Artists from "../Artists";
import Sort from "./Sort";
import Filter from "./Filter";
import Footer from "./Footer";
import artistArr from "../Clicked Artists";
import DisplayedArtist from "./Displayed Artist";

function App() {
  const [artistsDisplay, setArtistsDisplay] = useState(Artists);
  const [isArrEmpty, setIsArrEmpty] = useState(true);
  let   [displayedArtist, setDisplayedArtist] = useState({
    artistImg: "",
    name: "",
    years: "",
    artMovement: "",
    bio: "",
    display: {display: "none"}
  });
  
  // function sortArtists(sortValue) {

  //   if (sortValue === "chronological") {
  //     setArtistsDisplay(() => {
  //       return Artists.sort((a, b) => {
  //         return (parseInt(a.years.substring(0, 4)) - parseInt(b.years.substring(0, 4)));
  //       });
  //     });
  //   }
  //   if (sortValue === "alphabetical") {
  //     setArtistsDisplay(() => {
  //       return Artists.sort((a, b) => {
  //         if (a.name < b.name) {
  //           return -1;
  //         }
  //         if (a.name > b.name) {
  //           return 1;
  //         }
  //         return 0;
  //       });
  //     });
  //   }
  // }
  
  function filterArtists(filterName) {
    const clickedIndex = artistArr.findIndex(p => p === filterName);
  
    if (artistArr.length >= Artists.length) {
      artistArr.splice(0, artistArr.length);
      setIsArrEmpty(true);
    } 

    console.log(artistArr);

     setArtistsDisplay(() => {
      if (!artistArr.includes(filterName) && filterName !== "chronological" && filterName !== "alphabetical") {
        artistArr.push(filterName);
        setIsArrEmpty(false);
        console.log(filterName);
       } else if (artistArr.includes(filterName)) { 
          artistArr.splice(clickedIndex, 1);
          console.log(filterName);
       }

       if (artistArr.length === 0) {
        for(let i = 0; i < Artists.length; i++){
          artistArr.push(Artists[i].artMovement)
        }
      }

       if (filterName === "chronological") {
          console.log(filterName);
          return Artists.sort((a, b) => {
            return (parseInt(a.years.substring(0, 4)) - parseInt(b.years.substring(0, 4)));
        });
       }
       if (filterName === "alphabetical") {
          console.log(filterName);
          return Artists.sort((a, b) => {
            if (a.name < b.name) {
              return -1;
            }
            if (a.name > b.name) {
              return 1;
            }
            return 0;
          });
          
       }

       if (filterName !== "chronological" || filterName !== "alphabetical") {
        return Artists.filter((artist) => {
          return artistArr.includes(artist.artMovement);
        });   
       }
       
    });
  }

  function handleClickedArtist (clickedArtist) {
    let artistIndex = Artists.findIndex(p => p.name === clickedArtist);
    console.log(artistIndex);

    setDisplayedArtist(()=>{
      return({
        artistImg: Artists[artistIndex].artistImg,
        name: Artists[artistIndex].name,
        years: Artists[artistIndex].years,
        artMovement: Artists[artistIndex].artMovement,
        bio: Artists[artistIndex].bio,
        display: {display: "flex"}
      });
    });

  }

  return ( 
    <div>
      <Header/>
      
      <div className="main-content">
        <DisplayedArtist
          artistImg = {displayedArtist.artistImg}
          name = {displayedArtist.name}
          years = {displayedArtist.years}
          artMovement = {displayedArtist.artMovement}
          bio = {displayedArtist.bio}
          display = {displayedArtist.display}
          handleClickedArtist = {handleClickedArtist}
        />

        <div className="menu box-shadow">
          <Sort filterArtists = {filterArtists}/>
          <Filter filterArtists = {filterArtists}/>
        </div>
          
          <div className="artists-cards">
            {artistsDisplay.map(Artists => {
                return ( 
                  <Artist
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
