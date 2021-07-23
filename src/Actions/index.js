import { toast } from 'react-toastify'
import * as api from '../Api/index'
toast.configure()

export const login = (formdata, history) => async (dispatch) => {
    try {

        if (formdata?.googleId != undefined) {
            formdata = { password: formdata.googleId, name: formdata.name, }
        }
       

        const { data } = await api.login(formdata);
        if (data.err === 0) {
            dispatch({ type: "AUTH", data: data.data });
            history.push('/');
            toast(data.message);
        }
        else {
            dispatch({ type: "LOGOUT" });
            history.push("/");
            toast("Log out successfully")
        }


    }
    catch (err) {
        if (err) console.log(err);
    }
}
export const comment = (comment) => async (dispatch) => {
    try {
        const res = await api.comment(comment);
       
        if (res.data.err == 0) {
            dispatch({ type: "COMMENT", data: res.data})
            toast("commit successfull")
         
       
        }
        else {
            toast("comment done ")
        }

    }
    catch (err) {
        console.log(err);
        if (err) toast("Comment  error")
    }

}
export const logout = (history)=> async (dispatch)=>{
    try{
        

    }
    catch(err){
        if(err) console.log(err);
    }
}
export const register = (formdata, history) => async (dispatch) => {
    try {
        if (formdata?.googleId != undefined) {
            formdata = { password: formdata.googleId, email: formdata.email, confirm_password: formdata.googleId, name: formdata.name, imageUrl: formdata.imageUrl }
        }



        const { data } = await api.register(formdata);
        if (data.err === 0) {

            dispatch({ type: "AUTH", data: data.data });
            history.push('/');
            toast("Register successfull")
        }
        else {
            toast(data.message);
        }





    }
    catch (err) {
        if (err) console.log(err);
    }
}

export const loginagain = (localdata, history, token) => async (dispatch) => {
    try {
        const res = await api.loginagain(token)
        if (res.data.err === 0) {
            dispatch({ type: "LOGINAGRAIN", data: localdata });
        }
        else {
            dispatch({ type: "LOGOUT" })
            toast("Please login");
            history.push("/");

        }


    }
    catch (err) {
        if (err) toast(` software issue in the  ${err}`)
    }
}



export const createpost = (postdata, history, user) => async (dispatch) => {
    try {
        postdata ={...postdata, name:user.result.name, userimage: user.result.imageUrl, userid: user.result._id}
        const { data } = await api.createpost(postdata);
        if (data.err === 0) {
            toast("post created successfully");
            history.push("/");
            dispatch({ type: "GETPOSTS", data: data.data })

        }
        else {
            toast(data.message);
        }

    }
    catch (err) {
        console.log(err);
        toast("software issue")
    }
}

// global actions
export const getposts = () => async (dispatch) => {
    try {
        const { data } = await api.getposts();
        if (data.err === 0) {

            dispatch({ type: "GETPOSTS", data: data.data })
        }
    }
    catch (err) {
        if (err) console.log(err);
        console.log(err);
        toast("software error")
    }

}


// action of the post 
export const likepost = (username, postid, likes) => async (dispatch) => {
    try {

        const res = await api.likepost(username, postid, likes);
        if (res) {
            dispatch({ type: "LIKE", data: { username, postid, likes } })
        }
        else {
            toast("error")
        }


    } catch (err) {
        if (err) console.log(err);
        toast("software error")
    }

}

export const getbids = () => async (dispatch) => {
    try {
        const res = await api.getbids();
        console.log("res of the bids ", res);
        if (res.data.err === 0) {
            dispatch({ type: "GETBIDS", data: res.data.data })
        }
        else {
            toast("Software error")
        }

    }
    catch (err) {
        if (err) toast("Software error")
    }
}

export const Bid = (postid, bidamount, bookname, biddername, bidderemail) => async (dispatch) => {
    try {
        console.log("meila", bidderemail);
        const res = await api.bid(postid, bidamount, bookname, biddername, bidderemail);

        if (res.data.err == 0) {
            dispatch({
                type: "BID", postid: postid, data: {
                    postid: postid,
                    Bookname: bookname,
                    Biddername: biddername,
                    Bidamount: bidamount,
                    Bidderemail: bidderemail
                }
            })
            toast("Bid successfully done")

        } else {
            toast("action error")
        }

    }
    catch (err) {
        console.log("error ins the code ", err);
        if (err) toast("Error in programming  ");
    }
}

export const dislike = (username, postid, likes) => async (dispatch) => {
    try {
        const res = await api.dislikepost(username, postid, likes);
        if (res.data.err == 0) {
            dispatch({ type: "DISLIKE", data: { username, postid, likes } });

        }
        else {
            toast("error ");
        }


    }
    catch (err) {
        if (err) console.log(err);
    }
}

export const confirmbid = (data) => async (dispatch) => {
    try {
        const res = await api.confrimbid(data);
        if (res.data.err == 0) {
            const res = await api.getbids();
            console.log("res of the bids ", res);
            if (res.data.err === 0) {
                dispatch({ type: "GETBIDS", data: res.data.data })
            }
            else {
                toast("Software error")
            }

        }
        else {
            toast("Something went wront")
        }
    }
    catch (err) {
        if (err) toast("please login")

    }
}