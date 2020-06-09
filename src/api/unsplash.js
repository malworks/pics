import axios from 'axios';

export default axios.create({ 
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID M4O5XNboGbfdL_3KsVM-26hCkniTNNSPmz7tIyZMmyQ'
    }
});
