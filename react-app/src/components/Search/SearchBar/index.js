import React from "react";
import "./Search.css";

export default function SearchBar() {
  return (
    <div className="search-wrapper">
      <form>
        <input
          placeholder="Search for a drink or distillery"
          className="search-input"
        />
        <button className="search-button">Search</button>
      </form>
    </div>
  );
}
