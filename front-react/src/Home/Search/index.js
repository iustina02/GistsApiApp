import React from 'react';
import styles from "./Search.module.scss";
import PropTypes from 'prop-types';

/**
 * The search component user to create a request
 */

const Search = ({childSetSearchUser})=> {
  /**
   * @param {searchTerm} function -> get the value of search input 
   */
  const searchTerm = () => {
    const input = document.getElementById("search").value.replace(/\s/g, '');
    childSetSearchUser(input);
  }

  return (
    /* search component */
    <div className={styles.formSearch}>
        <input  className={styles.inputSearch} id="search" type="search" placeholder="Search..." autoFocus required />
        <button className={styles.buttonSearch} onClick={searchTerm}>Go</button>    
    </div>    
  );
}

Search.propTypes = {
  childSetSearchUser: PropTypes.func
};

export default Search;