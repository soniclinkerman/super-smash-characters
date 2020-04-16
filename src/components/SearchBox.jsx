import React from "react";
import "./SearchBox.css";
const SearchBox = ({searchfield, searchChange}) => {
    return(
        <div className="pa2">

            <input 
            className="pa3 searchbox"
            type="search" 
            placeholder="Search character here"
            onChange={searchChange}
            />

        </div>
    )
}

export default SearchBox