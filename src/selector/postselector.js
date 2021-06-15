import { post } from 'jquery';
import { createSelector } from 'reselect';
  const postselector = (state)=>{
    return state.posts;
}
const getbookname = (state)=>{
    return state.searchcredential.bookname;
}
const getminamount = (state)=>{
    return state.searchcredential.minamount;
}
const getmaxamount = (state)=>{
    return state.searchcredential.maxamount;
}
 const  poseSelector=  createSelector(
    [postselector, getbookname, getminamount, getmaxamount ],
    (posts, bookname, minamount , maxamount )=>{
        if(bookname != null  && minamount!= null && maxamount != null){
            return posts.filter(post=> post.bookname.includes(bookname) && post.amount> minamount && post.amount < maxamount)
        }
        else if(bookname != null && minamount == null && maxamount == null) {
            return posts.filter(post=> post.bookname.includes(bookname) );
        }
        else if( bookname == null && minamount != null && maxamount != null){
            return posts.filter(post=>  post.amount < minamount && post.amount< maxamount )
        }
        else return posts
        

        }

    
)
export default  postselector