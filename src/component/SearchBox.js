import React from "react";

const SearchBox= ({onSearchChange }) => {
    return(
        <div className="pa2">
            <input className="pa3 ba br3 b--green bg-lightest-blue" 
            type='search' 
            placeholder="Search" 
            onChange={ onSearchChange}
            />
        </div>
    );
}

export default SearchBox;