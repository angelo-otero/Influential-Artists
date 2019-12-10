//jshint esversion: 6

import React, {useState} from "react";
import Artist from "./Artist";
import Artists from "../Artists";
import Filter from "./Filter";

function App () {
  const [artistsDisplay, setArtistsDisplay] = useState(Artists);

  function filterArtists () {
    // setArtistsDisplay(() => {
    //   return ()
    // });
    console.log("I work!");
  }

  return (
    <div>
      <h1>Influential Artists Throughout the Ages</h1>
      <Filter filterArtists={filterArtists}/>
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
