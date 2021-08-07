import axios from 'axios'

const API_URL =  process.env.REACT_APP_BACKEND_URL + '/api/id/'


const create = (src,uuid_creds) => {
    return axios.post(API_URL, {
        src,
        uuid_creds
        });
};


// eslint-disable-next-line import/no-anonymous-default-export
export default {
create
};
