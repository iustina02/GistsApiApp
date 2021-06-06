import React from 'react';
import styles from "./UserInfo.module.scss";
import PropTypes from 'prop-types';

/**
 * Component that display user info
 */

const UserInfo = ({userInfo})=> {

  return (
    /* gists user info result component */
    <div className={styles.userInfo}>
      {/* TODO:  check link to user git account */}
      {Object.keys(userInfo).length ? 
      (<>
      <img className={styles.avatarResult} alt="userAvatar" src={userInfo.avatar}/>
      <a className={styles.usernameResult} href={userInfo.accountUrl}>
        {userInfo.name}
      </a>
      </>): (<></>)}
    </div>
  );
}

UserInfo.propTypes = {
  userInfo: PropTypes.object
};

export default UserInfo;