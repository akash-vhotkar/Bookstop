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
export const createpost = (postdata )=> API.post('/posts/createpost', postdata)
export const  searchbyname = (bookname)=> {return API.post('/searchbyname', {bookname: bookname});}
export const seachbyamount = (minamount, maxamount )=> API.post('/seachbyamount', {minamount, maxamount})
export const seachbynandm = (minamount , maxamount ,bookname) => API.post("/searchbynandm", {minamount, maxamount, bookname});

export const getposts  = () => API.get('/getposts');