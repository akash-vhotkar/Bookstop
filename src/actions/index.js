import * as api from '../api/index'
export const login = (formdata, history) => async (dispatch) => {
    try {
        const { data } = await api.login(formdata);
        dispatch({ type: "AUTH", data: data.data });
        history.push('/');
    }
    catch (err) {
        if (err) console.log(err);
    }
}
export const register = (formdata, history) => async (dispatch) => {
    try {
        const { data } = await api.register(formdata);
        console.log("thise is action data ",data);
        dispatch({ type: "AUTH", data: data.data });
        history.push('/');
    }
    catch (err) {
        if (err) console.log(err);
    }
}