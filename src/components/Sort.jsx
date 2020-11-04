import React, {useState} from "react";

function Sort (props) {

    const [sortValue, setSortValue] = useState({value: 'chronological'});

    function handleSort (event) {
        setSortValue({value: event.target.value});
        props.filterArtists(sortValue.value);
    }

    return(
        <form className="sort">
            <div className="sort-by">
                <h3>Sort by:</h3>
                <select name="sort-options" onChange={handleSort} value={sortValue.value}>
                    <option value="chronological">Least Recent</option>
                    <option value="alphabetical">A-Z</option>
                </select>
            </div>
        </form>
    )
}

export default Sort;