import React, {useState} from "react";

function Sort (props) {

    const [sortValue, setSortValue] = useState('');

    function handleSort (event) {
        // const sortValue = event.target.value;
        setSortValue(event.target.value);
        console.log(sortValue);
    }

    return(
        <form className="sort">
            <div className="sort-by">
                <h3>Sort by:</h3>
                <select name="sort-options" onChange={handleSort} value={sortValue}>
                    
                    <option value="chronological">Least Recent</option>
                    <option value="alphabetical">A-Z</option>
                </select>
            </div>
        </form>
    )
}

export default Sort;