import React from "react";

function Sort (props) {


    function handleSort (event) {
        props.sortArtists(event.target.value);
    }

    return(
        <form className="sort">
            <div className="sort-by">
                <h3>Sort by:</h3>
                <select name="sort-options" onChange={handleSort}>
                    <option value="chronological">Least Recent</option>
                    <option value="alphabetical">A-Z</option>
                </select>
            </div>
        </form>
    )
}

export default Sort;