import React from "react";

function Sort (props) {
    function handleSort (event) {
        let sortValue = event.target.value;
        props.sortArtists(sortValue);
        console.log(sortValue);
    }

    return(
        <form className="sort">
            <div className="sort-by">
                <h3>Sort by:</h3>
                <select name="sort-options" onChange={handleSort}>
                    <option>---</option>
                    <option value="chronological">Chronological</option>
                    <option value="alphabetical">Alphabetical</option>
                </select>
            </div>
        </form>
    )
}

export default Sort;