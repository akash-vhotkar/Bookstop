import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { loginagain } from "../Actions/index";
import { toast } from "react-toastify";
import { useEffect } from "react";
const hoc = (Componant, isredirect) => {
  return () => {
    const dispatch = useDispatch();
    
    const user = JSON.parse(localStorage.getItem("profile"));

    const authdata = useSelector((state) => state.AUTH.authdata);
    const history = useHistory();
   


 
    if (user === null && authdata === null) {
      if(isredirect){
        dispatch({ type: "LOGOUT" }); 
      }
    } else if (user !== null && authdata === null) {
      console.log("higher order function of the page ",user,"  and authdata  ",authdata);
      dispatch(loginagain(user, history, user.token));
    }
    
    return (
      <div>
        <Componant user={user}></Componant>
      </div>
    );
  };
};
export default hoc;
