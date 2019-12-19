import axios from 'axios';

const getClient = () => {

    const client = axios.create({
    baseURL: 'https://api.github.com/',
});

return client;
} 

export default getClient;