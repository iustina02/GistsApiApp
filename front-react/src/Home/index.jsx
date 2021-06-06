import React from 'react';
import Content from "./Content";
import Title from "./Title";
import Search from "./Search";
import UserInfo from "./UserInfo";

const Home = ()=> {

  return (
    <div> 
        {/* title page */}
        <Title />
        {/* search component */}
        <Search />
        {/* gists user info result component */}
        <UserInfo />
        {/* gists result search component */}
        <Content />
    </div>
  );
}

export default Home;