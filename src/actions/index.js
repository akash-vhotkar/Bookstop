import { toast } from 'react-toastify';
import * as api from '../api/index'
toast.configure();
export const login = (formdata, history) => async (dispatch) => {
    try {
        
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
        const { data } = await api.register(formdata);
        if( data.err===0 ){
        
        dispatch({ type: "AUTH", data: data.data });
        history.push('/');
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


export const getposts =  () =>  async (dispatch)=>{
    try{
        const {data} = await api.getposts();
        if(data.err===0){
            toast("post fetch suucessfully")
            dispatch({type:"GETPOSTS", data : data.data})
        }
    }
    catch(err){
        if(err) console.log(err);
        toast("software error")
    }
    
}