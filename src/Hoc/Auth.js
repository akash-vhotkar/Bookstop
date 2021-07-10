import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { loginagain } from "../Actions/index";
import { toast } from "react-toastify";
import { useEffect } from "react";
const hoc = (Componant, isredirect) => {
  return () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState(
      JSON.parse(localStorage.getItem("profile"))
    );
    const authdata = useSelector((state) => state.AUTH.authdata);
    const history = useHistory();
      if (user === null && authdata === null) {
          if(isredirect){
            history.push("/login");
            toast("please login");

          }
          
       
      } else if (user !== null && authdata === null) {
        dispatch(
          loginagain(user, history, user.token)
        );
      }
    
    return (
      <div>
        <Componant user={user}></Componant>
      </div>
    );
  };
};
export default hoc;
