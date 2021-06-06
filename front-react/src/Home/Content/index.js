import React from 'react';
import styles from "./Content.module.scss";
import PropTypes from 'prop-types';
import FileModal from "../FileModal/index";

/**
 * The main component where most of the data about gists are displayed
 */

const Content = ({userGistsData, gistForks})=> {

  return (
    <div> 
      <div>
        <ul className={styles.responsiveTable}>
          {userGistsData.length? (<> <li className={styles.tableHeader}>
            <div className={`${styles.col} ${styles.col1}`}>Description</div>
            <div className={`${styles.col} ${styles.col2}`}>Link</div>
            <div className={`${styles.col} ${styles.col3}`}>Create date</div>
            <div className={`${styles.col} ${styles.col4}`}>Updated date</div>
            <div className={`${styles.col} ${styles.col5}`}>Files<div style={{fontSize: "12px", textTransform:"capitalize", color:"green"}}>Click on the file</div></div>
            <div className={`${styles.col} ${styles.col6}`}>Forks</div>
          </li></>) : (<>There are no results! </>) }        
          {userGistsData.map((userGist, index) => {
            return(
            <li className={styles.tableRow} key={index}>
              <div className={`${styles.col} ${styles.col1}`} data-label="Description">{userGist.description !== "" ? userGist.description : "This gist has no description"}</div>
              <a className={`${styles.col} ${styles.col2}`} href={userGist.html_url} data-label="Link">Gist Github</a>
              <div className={`${styles.col} ${styles.col3}`} data-label="Create date">{userGist.created_at.split("T")[0]}</div>
              <div className={`${styles.col} ${styles.col4}`} data-label="Updated date">{userGist.updated_at.split("T")[0]}</div>
              <div className={`${styles.col} ${styles.col5}`} data-label="Files">
                <div className={styles.list} >
                  {Object.entries(userGist.files).map((file, index) => {
                      return(
                      <div className={styles.tabelList} key={index}> 
                        <FileModal imgData={process.env.PUBLIC_URL + `/fileTypes/${file[1].filename.split(".")[file[1].filename.split(".").length - 1]}.jpg`} fileName={file[1].filename} contentUrl={file[1].raw_url}/>
                      </div>);
                  })}
                </div>
              </div>
              <div className={`${styles.col} ${styles.col6}`} data-label="Forks">
                <div className={styles.list} >
                  {gistForks.map((fork, index) => {
                    return(
                      <div className={styles.tabelList} key={index}> 
                        <img className={styles.fileBagde} alt="userAvatar" src={fork.owner.avatar_url}/>
                        <a className={styles.userUrl} data-label="firstFile" href={fork.owner.html_url}>{fork.owner.login}</a>
                      </div>
                    );
                    })}
                </div>            
              </div>
            </li>);
          })}              
        </ul>
      </div>
    </div>
  );
}

Content.propTypes = {
  userGistsData: PropTypes.array,
  gistForks: PropTypes.array
};

export default Content;