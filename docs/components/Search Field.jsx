import React from "react";

function SearchField (props) {

    function handleSearch (event) {
        props.updateSearch(event.target.value);
    }

    return (
        <div className="searchInput box-shadow">
          <input type="text" onChange={handleSearch} placeholder="Search artists..."></input>
          <i className="fas fa-search"></i>
        </div>
    )
}

export default SearchField;