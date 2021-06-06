import React from 'react';
import styles from "./Search.module.scss";

const Search = ()=> {
  const searchTerm = () => {
    console.log("yeah");
  }

  return (
    /* search component */
    <form className={styles.formSearch}>
        <input  className={styles.inputSearch} id="search" type="search" placeholder="Search..." autoFocus required />
        <button className={styles.buttonSearch} onClick={searchTerm}>Go</button>    
    </form>    
  );
}

export default Search;