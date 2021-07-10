import axios from 'axios'
const API=  axios.create({baseURL: "http://localhost:7770"})
API.interceptors.request.use((req)=>{
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
      }
      return req;
})

export const login  =  (formdata)=> API.post('/auth/login', formdata);
export const loginagain = (token)=> API.post('/verifytoken', {token});
export const register = (formdata)=> API.post('/auth/register', formdata);
export const createpost = (postdata )=> API.post('/posts/createpost', postdata)
export const  searchbyname = (bookname)=> {return API.post('/searchbyname', {bookname: bookname});}
export const seachbyamount = (minamount, maxamount )=> API.post('/seachbyamount', {minamount, maxamount})
export const seachbynandm = (minamount , maxamount ,bookname) => API.post("/searchbynandm", {minamount, maxamount, bookname});
export const likepost  = (username , postid, likes)=> API.post("/posts/likepost", {username, postid, likes});
export const getposts  = () => API.get('/getposts');
export const bid =( postid, bidamount, bookname,biddername, bidderemail)=> API.post("/posts/bid", { postid, bidamount, bookname,biddername,bidderemail})
export const dislikepost  = (username, postid , likes)=> API.post("/posts/dislikepost", {username , postid, likes})
export const getbids = ()=>  API.get("/posts/getbids");
export const confrimbid = (data)=> API.post("/posts/confirm", data)
export const Follow = (data)=> API.post("/posts/follow", data);
export const comment = (data)=> API.post("/posts/comment",  data);




