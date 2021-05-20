import axios from 'axios'
const API=  axios.create({baseURL: "http://localhost:7600"})
API.interceptors.request.use((req)=>{
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
      }
    
      return req;
})

export const login  =  (formdata)=> API.post('/auth/login', formdata);
export const register = (formdata)=> API.post('/auth/register', formdata);