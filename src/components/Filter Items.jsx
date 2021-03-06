import React from "react";

function FilterItems (props) {
    return (
        <section className={(props.filterDropDownSize && !props.isDropDown ) ? "hidden": "visible"}>
            <div>
                <input onClick={props.handleCheckbox} className="filter-checkbox" type="checkbox" name="Renaissance"></input>
                <label htmlFor="Renaissance">Renaissance</label>
            </div>
            <div>
                <input onClick={props.handleCheckbox} className="filter-checkbox" type="checkbox" name="Baroque"></input>
                <label htmlFor="Baroque">Baroque</label>
            </div>
            <div>
                <input onClick={props.handleCheckbox} className="filter-checkbox" type="checkbox" name="Romanticism"></input>
                <label htmlFor="Romanticism">Romanticism</label>
            </div>
            <div>
                <input onClick={props.handleCheckbox} className="filter-checkbox" type="checkbox" name="Neo-Classicism"></input>
                <label htmlFor="Neo-Classicism">Neo-Classicism</label>
            </div>
            <div>
                <input onClick={props.handleCheckbox} className="filter-checkbox" type="checkbox" name="Hudson River School"></input>
                <label htmlFor="Hudson River School">Hudson River School</label>
            </div>
            <div>
                <input onClick={props.handleCheckbox} className="filter-checkbox" type="checkbox" name="Impressionism"></input>
                <label htmlFor="Impressionism">Impressionism</label>
            </div>
            <div>
                <input onClick={props.handleCheckbox} className="filter-checkbox" type="checkbox" name="Realism"></input>
                <label htmlFor="Realism">Realism</label>
            </div>
            <div>
                <input onClick={props.handleCheckbox} className="filter-checkbox" type="checkbox" name="Post-Impressionism"></input>
                <label htmlFor="Post-Impressionism">Post-Impressionism</label>
            </div>
            <div>
                <input onClick={props.handleCheckbox} className="filter-checkbox" type="checkbox" name="Golden Age of Illustration"></input>
                <label htmlFor="Golden Age of Illustration">Golden Age of Illustration</label>
            </div>
            <div>
                <input onClick={props.handleCheckbox} className="filter-checkbox" type="checkbox" name="Early Modernism"></input>
                <label htmlFor="Early Modernism">Early Modernism</label>
            </div>
        </section>    
    )
}

export default FilterItems;