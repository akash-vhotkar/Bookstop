import * as api from '../api/index'
export const login  = (formdata, history)=> (dispatch)=>{
    const {data } = await api.login(formdata);
    dispatch({type:"AUTH", data})
    history.push('/');
}
export const register = (formdata ,history)=> (dispatch)=>{
    const {data } = await api.register(formdata);
    dispatch({type:"AUTH", data});
    history.push('/');
}