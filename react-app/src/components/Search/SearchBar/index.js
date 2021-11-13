import React from "react";
import styles from "./Search.module.css";

export default function SearchBar() {
    return (
        <div className={styles.searchWrapper}>
            <form>
                <input
                    placeholder="Search for a drink or distillery"
                    className={styles.searchInput}
                />
                <button className={styles.searchButton}>Search</button>
            </form>
        </div>
    );
}
//
