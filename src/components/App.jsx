//jshint esversion: 6

import React from "react";
import ReactDom from "react-dom";
import Artist from "./Artist";
import Artists from "../Artists.js";


function App () {
  return (
    <div>
      <h1>Influential Artists Throughout the Ages</h1>
      <Artist
      artistImg = {Artists.artistImg}
      name = {Artists.name}
      years = {Artists.years}
      artMovement = {Artists.artMovement}
      bio = {Artists.bio}
      />
    </div>
  );
}

export default App;
