//jshint esversion: 6

import React, {useState} from "react";
import Header from "./Header";
import Artist from "./Artist";
import Artists from "../Artists";
import Sort from "./Sort";
import Filter from "./Filter";
import Footer from "./Footer";
import artistArr from "../Clicked Artists";

function App() {
  const [artistsDisplay, setArtistsDisplay] = useState(Artists);
  
  function sortArtists(sortValue) {

    if (sortValue === "chronological") {
      setArtistsDisplay(() => {
        return artistsDisplay.sort((a, b) => {
          return (parseInt(a.years.substring(0, 4)) - parseInt(b.years.substring(0, 4)));
        });
      });
    }
    if (sortValue === "alphabetical") {
      setArtistsDisplay(() => {
        return artistsDisplay.sort((a, b) => {
          if (a.name < b.name) {
            return -1;
          }
          if (a.name > b.name) {
            return 1;
          }
          return 0;
        });
      });
    }
  }

  function filterArtists(filterName) {
    const clickedIndex = artistArr.findIndex(p => p === filterName);
    console.log(artistArr + " " + artistArr.length);
  
    if (artistArr.length === Artists.length) {
      artistArr.splice(0, Artists.length);
    } 
     setArtistsDisplay(() => {
      if (!artistArr.includes(filterName)) {
        artistArr.push(filterName);
       } else if (artistArr.includes(filterName)) {
          if (filterName === artistArr[0]) {
            for(let i = 0; i < Artists.length; i++){
              artistArr.push(Artists[i].artMovement)
            }
          }
        
          artistArr.splice(clickedIndex, 1);
       }
     
       return Artists.filter((artist) => {
        return artistArr.includes(artist.artMovement);
      });   
    });
  }

  return ( 
    <div>
      <Header/>
      
      <div className="main-content">
        
        <div className="menu box-shadow">
          <Sort sortArtists = {sortArtists}/>
          <Filter filterArtists = {filterArtists}/>
        </div>
          
          <div className="artists-cards">
            {artistsDisplay.map(Artists => {
                return ( 
                  <Artist
                    id = {Artists.id}
                    artistImg = {Artists.artistImg}
                    name = {Artists.name}
                    years = {Artists.years}
                    artMovement = {Artists.artMovement}
                    bio = {Artists.bio}
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
