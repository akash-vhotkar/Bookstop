import { toast } from 'react-toastify';
import * as api from '../api/index'
toast.configure();
export const login = (formdata, history) => async (dispatch) => {
    try {

        if(formdata?.googleId != undefined){
            formdata =  { password: formdata.googleId, name: formdata.name, }
        }
        
            const { data } = await api.login(formdata);
        if(data.err===0){
        dispatch({ type: "AUTH", data: data.data });
        history.push('/');
        toast(data.message);
        }
        else{
            
            toast(data.message);
        }

        
    }
    catch (err) {
        if (err) console.log(err);
    }
}
export const register = (formdata, history) => async (dispatch) => {
    try {
        if(formdata?.googleId != undefined){
            formdata =  { password: formdata.googleId,email:formdata.email, confirm_password: formdata.googleId, name: formdata.name, imageUrl:formdata.imageUrl}
        }
        

        
            const { data } = await api.register(formdata);
        if( data.err===0 ){
        
        dispatch({ type: "AUTH", data: data.data });
        history.push('/');
        toast("Register successfull")
        }
        else{
            toast(data.message);
        }




        
    }
    catch (err) {
        if (err) console.log(err);
    }
}
export const loginagain = (localdata, history )=> async (dispatch)=>{
    try{
        dispatch({type:"LOGINAGAIN", data : localdata })
       
        
    }
    catch(err){
        if(err) toast(` software issue in the  ${err}`)
    }
}



export const createpost  = (postdata, history)=> async (dispatch)=>{
    try{
        const {data} =  await api.createpost(postdata);
        if(data.err===0){
            toast("post created successfully");
            history.push("/");
            dispatch({type:"GETPOSTS", data : data.data})

        }
        else{
            toast(data.message);
        }

    }
    catch(err) {
        console.log(err);
        toast("software issue")
    }
}

// global actions
export const getposts =  () =>  async (dispatch)=>{
    try{
        const {data} = await api.getposts();
        if(data.err===0){
           
            dispatch({type:"GETPOSTS", data : data.data})
        }
    }
    catch(err){
        if(err) console.log(err);
        console.log(err);
        toast("software error")
    }
    
}


// action of the post 
export const likepost = (username, postid, likes)=> async (dispatch)=>{
    try{

        const res = await api.likepost(username, postid, likes);
        if(res){
            dispatch({type:"LIKE", data: {username, postid,likes}})
        }
        else {
            toast("error")
        }
    

    }catch(err){
        if(err) console.log(err);
        toast("software error")
    }

}
 
export const getbids = ()=> async(dispatch)=>{
    try{
        const  res = await  api.getbids();
        console.log("res of the bids ", res);
        if(res.data.err===0){
            dispatch({type: "GETBIDS", data: res.data.data})
        }
        else{
            toast("Software error")
        }

    }
    catch(err){
        if(err) toast("Software error")
    }
}

export const Bid =(postid, bidamount, bookname,biddername)=> async(dispatch)=>{
    try{
        const res = await api.bid(postid, bidamount, bookname,biddername);
        if(res.data.err==0){
            dispatch({type:"BID", postid: postid , data: { postid:postid,
                Bookname:bookname,
                Biddername:biddername,
               Bidamount:bidamount
                }})
            toast("Bid successfully done")
        
        }else{
            toast("action error")
        }

    }
    catch(err){
        console.log("error ins the code ",err);
        if(err) toast("Error in programming  ");
    }
}

export const dislike = (username, postid , likes )=> async(dispatch)=>{
    try{
        const res =   await api.dislikepost(username, postid, likes);
        if(res.data.err==0){
            dispatch({type:"DISLIKE", data :{username, postid, likes}});
        
        }
        else{
            toast("error ");
        }
    

    }
    catch(err){
        if(err) console.log(err);
    }
}