import React from 'react'
import "./Search.css"

export default function SearchBar() {
    return (
      <div className="search-wrapper">
        <input className="search-input" />
        <button className="search-button">Search</button>
      </div>
    );
}
