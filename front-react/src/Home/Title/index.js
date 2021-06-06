import React from 'react';
import styles from "./Title.module.scss";

const Title = ()=> {

  return (
    <div> 
        {/* title page */}
        <div className={styles.pageTitle}> Gists - App </div>
    </div>
  );
}

export default Title;