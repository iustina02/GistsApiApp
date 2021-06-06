import React from 'react';
import styles from "./UserInfo.module.scss";

const UserInfo = ()=> {

  return (
    /* gists user info result component */
    <div className={styles.userInfo}>
      {/* TODO:  add link to user git account */}
      <img className={styles.avatarResult} alt="userAvatar" src="https://avatars.githubusercontent.com/u/302680?v=4"/>
      <div className={styles.usernameResult}>
        Username
      </div>
    </div>
  );
}

export default UserInfo;