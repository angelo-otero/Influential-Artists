import React, {useState} from "react";
import { useMediaQuery } from "react-responsive";
import FilterItems from "./Filter Items"

function Filter(props) {

    const filterDropDownSize = useMediaQuery({query: '(max-width: 1000px)'});
    const [isDropDown, setIsDropDown] = useState(false);

    function handleCheckbox(event) {
        const filterName = event.target.name;
        props.filterArtists(filterName);
    }  

    function handleClick () {
        if(filterDropDownSize) {
            setIsDropDown(!isDropDown ? true: false);
        }
    }

    return (
        <form className={`filter ${(filterDropDownSize && isDropDown) ? "filter-height-toggle" : ""}`}>
            <div className="filter-by">
                <div className={`filter-arrow ${filterDropDownSize ? "hover" : ""}`} onClick={handleClick}>
                    <h3>Filter by Art Movement:</h3>
                    {filterDropDownSize ? <i className={`fas fa-caret-up ${isDropDown ? "rotated-down": "rotated-up"}`}></i> : null}
                </div>
                <FilterItems filterDropDownSize = {filterDropDownSize} isDropDown = {isDropDown} handleCheckbox = {handleCheckbox} />
            </div>
        </form>
    )
}

export default Filter;
