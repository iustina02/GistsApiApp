import React, { useState } from 'react';
import Content from "./Content";
import Title from "./Title";
import Search from "./Search";
import UserInfo from "./UserInfo";
import getGistsForAUserService from "./services/getGistsForAUserService";
import getForksForAGistService from "./services/getForksForAGistService";

/**
 * Main page componentn for the aplication
 */

const Home = ()=> {
  /**
   * @param {userGistsData} array -> in this state it is stored data about gists for a user
   */
  const [userGistsData, setUserGistsData] = useState([]);
  /**
   * @param {userInfo} object -> in this state it is stored data about user resulting from request
   */
  const [userInfo, setUserInfo] = useState({});
  /**
   * @param {gistForks} array -> in this state it is stored data about forks of a gist resulting from request
   */
  const [gistForks, setGistForks] = useState([]);


  /**
   * @param {getGistsForAUser} function -> use services to request gists for a user
   */
  const getGistsForAUser = (username) => {
    //function that request data for a user
    getGistsForAUserService(username).then((response)=> {

      //set user's gists in state
      setUserGistsData(response.data);

      //for each gist search for forks
      response.data.forEach(gist => {

        //function that request about one gist forks
        getForksForAGistService(gist.forks_url).then((response) => {
          //check for the most recent 3 forks
          if(response.data.length){
            if(response.data.length > 3){
              //set only 3 forks from gist in state
              setGistForks(response.data.slice(0, 3));

            }else{
              //set gist's forks in state
              setGistForks(response.data);
            }
          }
        }).catch((err) => console.log("Error getting forks for this git!", err))
      });

      //set user info [name, avatar] in state
      setUserInfo({name: response.data[0].owner.login, avatar: response.data[0].owner.avatar_url, accountUrl: response.data[0].owner.html_url })
    }).catch((err) => console.log("Error getting gists for this user!", err))
  }

  /**
   * @param {childSetSearchUser} function -> take the search input from search component and call getGistsForAUser
   */
  const childSetSearchUser = (searchInput) => {
    getGistsForAUser(searchInput);
  }

  return (
    <div> 
        {/* title page */}
        <Title />
        {/* search component */}
        <Search childSetSearchUser={childSetSearchUser}/>
        {/* user info component */}
        <UserInfo userInfo={userInfo}/>
        {/* gists display results from search component */}
        <Content userGistsData={userGistsData} gistForks={gistForks}/>
    </div>
  );
}

export default Home;