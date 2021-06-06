import axios from 'axios';

/**
 * @param {getGistsForAUserService} function (username) -> create the request at Gists Api to get all gists of a user  
 */
const getGistsForAUserService = (username) => {
    return(axios.get(`https://api.github.com/users/${username}/gists`));
}

export default getGistsForAUserService;
