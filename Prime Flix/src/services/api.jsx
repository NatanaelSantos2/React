//base URL https://api.themoviedb.org/3/
//URL da API movie/now_playing?api_key=c78cc8d0686b9e5a245dd6cb99798d35&language=pt-BR

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api