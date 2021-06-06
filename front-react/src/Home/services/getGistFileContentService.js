import axios from 'axios';

/**
 * @param {getGistFileContentService} function (path) -> create the request at Gists Api to get the content of a gist's file 
 */
const getGistFileContentService = (path) => {
    return(axios.get(path));
}

export default getGistFileContentService;
