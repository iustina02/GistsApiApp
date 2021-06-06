import axios from 'axios';

 const getGistsForAUserService = (username) => {
    return(axios.get(`https://api.github.com/users/${username}/gists`));
}

export default getGistsForAUserService;
