import React, {useState} from "react";

function Filter(props) {

    const [isClicked, setIsClicked] = useState(false);

    function handleCheckbox(event) {
        const filterName = event.target.name;
        !isClicked ? setIsClicked(true) : setIsClicked(false);
        
        if (isClicked === true) {
            props.filterArtists(filterName);
        }
    }

    return (
        <form className="filter">
            
            <div className="filter-by">
            <h3>Filter by Art Movement:</h3>
                <div>
                    <input onClick={handleCheckbox} type="checkbox" name="Renaissance"></input>
                    <label for="Renaissance">Renaissance</label>
                </div>
                <div>
                    <input onClick={handleCheckbox} type="checkbox" name="Baroque"></input>
                    <label for="Baroque">Baroque</label>
                </div>
                <div>
                    <input onClick={handleCheckbox} type="checkbox" name="Romanticism"></input>
                    <label for="Romanticism">Romanticism</label>
                </div>
                <div>
                    <input onClick={handleCheckbox} type="checkbox" name="Neo-Classicism"></input>
                    <label for="Neo-Classicism">Neo-Classicism</label>
                </div>
                <div>
                    <input onClick={handleCheckbox} type="checkbox" name="Hudson River School"></input>
                    <label for="Hudson River School">Hudson River School</label>
                </div>
                <div>
                    <input onClick={handleCheckbox} type="checkbox" name="Impressionism"></input>
                    <label for="Impressionism">Impressionism</label>
                </div>
                <div>
                    <input onClick={handleCheckbox} type="checkbox" name="Realism"></input>
                    <label for="Realism">Realism</label>
                </div>
                <div>
                    <input onClick={handleCheckbox} type="checkbox" name="Post-Impressionism"></input>
                    <label for="Post-Impressionism">Post-Impressionism</label>
                </div>
                <div>
                    <input onClick={handleCheckbox} type="checkbox" name="Golden Age of Illustration"></input>
                    <label for="Golden Age of Illustration">Golden Age of Illustration</label>
                </div>
                <div>
                    <input onClick={handleCheckbox} type="checkbox" name="Early Modernism"></input>
                    <label for="Early Modernism">Early Modernism</label>
                </div>
            </div>
        </form>
    )
}

export default Filter;
