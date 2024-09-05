import axios from 'axios';

const API = axios.create({ baseURL: "https://dummyjson.com" });

// API.interceptors.request.use((req) => {
//     if(localStorage.getItem('profile')) {
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }

//     return req;
// })

export const fetchPosts = () => API.get('/posts');

export const login = (formData) => API.post('/user/login', formData);
export const register = (formData) => API.post('/user/register', formData);