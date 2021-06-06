import React from 'react';
import styles from "./Content.module.scss";

const Content = ()=> {

  return (
    <div> 
        {/* gists result search component */}
        <div>
        <ul className={styles.responsiveTable}>
          <li className={styles.tableHeader}>
            <div className={`${styles.col} ${styles.col1}`}>Description</div>
            <div className={`${styles.col} ${styles.col2}`}>Link</div>
            <div className={`${styles.col} ${styles.col3}`}>Create date</div>
            <div className={`${styles.col} ${styles.col4}`}>Updated date</div>
            <div className={`${styles.col} ${styles.col5}`}>Files</div>
            <div className={`${styles.col} ${styles.col6}`}>Forks</div>
          </li>
          <li className={styles.tableRow}>
            <div className={`${styles.col} ${styles.col1}`} data-label="Description">42235</div>
            <div className={`${styles.col} ${styles.col2}`} data-label="Link">John Doe</div>
            <div className={`${styles.col} ${styles.col3}`} data-label="Create date">$350</div>
            <div className={`${styles.col} ${styles.col4}`} data-label="Updated date">Pending</div>
            <div className={`${styles.col} ${styles.col5}`} data-label="Files">
              <div className={styles.list} >
                {/* TODO:  display content if click on file */}
                <div className={styles.tabelList} > 
                  <img className={styles.fileBagde} alt="userAvatar" src={process.env.PUBLIC_URL + '/fileTypes/javaScript.jpg'} />
                  <div  data-label="firstFile">javascr.js</div>
                </div>
                <div className={styles.tabelList}> 
                  <img className={styles.fileBagde} alt="userAvatar" src={process.env.PUBLIC_URL + '/fileTypes/javaScript.jpg'} />
                  <div data-label="firstFile">javascr.js</div>
                </div>
                <div className={styles.tabelList}> 
                  <img className={styles.fileBagde} alt="userAvatar" src={process.env.PUBLIC_URL + '/fileTypes/javaScript.jpg'} />
                  <div  data-label="firstFile">javascr.js</div>
                </div>
                <div className={styles.tabelList}> 
                  <img className={styles.fileBagde} alt="userAvatar" src={process.env.PUBLIC_URL + '/fileTypes/javaScript.jpg'} />
                  <div  data-label="firstFile">javascr.js</div>
                </div>
              </div>
            </div>
            <div className={`${styles.col} ${styles.col6}`} data-label="Forks">
            <div className={styles.list} >
                {/* TODO:  go to user github page if click */}
                <div className={styles.tabelList}> 
                  <img className={styles.fileBagde} alt="userAvatar" src="https://avatars.githubusercontent.com/u/302680?v=4"/>
                  <div  data-label="firstFile">Username</div>
                </div>
                <div className={styles.tabelList}> 
                  <img className={styles.fileBagde} alt="userAvatar" src="https://avatars.githubusercontent.com/u/302680?v=4"/>
                  <div  data-label="firstFile">Username</div>
                </div>
                <div className={styles.tabelList}> 
                  <img className={styles.fileBagde} alt="userAvatar" src="https://avatars.githubusercontent.com/u/302680?v=4"/>
                  <div  data-label="firstFile">Username</div>
                </div>   
                </div>            
            </div>
          </li>         
        </ul>
        </div>
    </div>
  );
}



export default Content;