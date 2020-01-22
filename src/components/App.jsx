//jshint esversion: 6

import React, {useState} from "react";
import Header from "./Header";
import Artist from "./Artist";
import Artists from "../Artists";
import Sort from "./Sort";
import Filter from "./Filter";
import Footer from "./Footer";

function App() {
  const [artistsDisplay, setArtistsDisplay] = useState(Artists);

  function sortArtists(sortValue) {

    if (sortValue === "chronological") {
      setArtistsDisplay(() => {
        return Artists.sort((a, b) => {
          return (parseInt(a.years.substring(0, 4)) - parseInt(b.years.substring(0, 4)));
        });
      });
    }
    if (sortValue === "alphabetical") {
      setArtistsDisplay(() => {
        return Artists.sort((a, b) => {
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

    setArtistsDisplay(() => {
      return Artists.filter((artist) => {
        return artist.artMovement === filterName;
      });
    });
    console.log("bleg");
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
