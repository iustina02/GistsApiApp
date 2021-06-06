import axios from 'axios';

/**
 * @param {getForksForAGistService} function (path) -> create the request at Gists Api to get forks of a gist 
 */
const getForksForAGistService = (path) => {
    return(axios.get(path));
}

export default getForksForAGistService;
