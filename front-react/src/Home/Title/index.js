import React from 'react';
import styles from "./Title.module.scss";

/**
 * Component that display the header, title of the main page
 */
const Title = ()=> {

  return (
    <div> 
        {/* title page */}
        <div className={styles.pageTitle}> Gists - App </div>
    </div>
  );
}

export default Title;