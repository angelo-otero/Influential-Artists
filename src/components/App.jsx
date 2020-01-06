//jshint esversion: 6

import React, {useState} from "react";
import Artist from "./Artist";
import Artists from "../Artists";
import Filter from "./Filter";

function App () {
  const [artistsDisplay, setArtistsDisplay] = useState(Artists);


  function filterArtists (filterName) {

    setArtistsDisplay(() => {
      return Artists.filter((artist) => {
        return artist.artMovement === filterName;
      });
    });
  }

  function sortArtists(sortValue) {
    const birthYear = parseInt(Artists[0].years.substring(0,4));
    const birthYear2 = parseInt(Artists[1].years.substring(0,4));
    if (sortValue === "chronological") {
      setArtistsDisplay(() => {
        return Artists.sort((a, b) => {
          return (parseInt(a.years.substring(0,4)) - parseInt(b.years.substring(0,4)));
        });
      });
    } else if (sortValue === "alphabetical"){
      console.log("this is alphabetical");
      setArtistsDisplay(() => {
        return Artists.sort((a,b) => {
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

  return (
    <div>
      <h1>Influential Artists Throughout the Ages</h1>
      <Filter filterArtists={filterArtists} sortArtists={sortArtists}/>
      {artistsDisplay.map(Artists => {
        return (
          <Artist
          id={Artists.id}
          artistImg = {Artists.artistImg}
          name = {Artists.name}
          years = {Artists.years}
          artMovement = {Artists.artMovement}
          bio = {Artists.bio}
          />
        );
      })}
    </div>
  );
}

export default App;
