import React from "react";
import './SearchBar.css'

function SearchBar() {
    return (
        <div class="search-bar-container">
            <h3>Search</h3>
            <form>
                <input type="text" />
            </form>
            <button>Search!</button>
        </div>
    )
}
export default SearchBar;