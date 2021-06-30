import { useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import { GoogleLogin} from 'react-google-login'
import './style/login.css';
import { toast } from 'react-toastify';
import {login} from '../Actions/index';
import { useDispatch } from 'react-redux';


const Login = ()=>{
    const [user  ,setuser] =  useState({name: "", password:""})
    const history = useHistory();
    const dispatch = useDispatch();
    function handelsubmit(e){
        
        e.preventDefault();
        dispatch(login(user, history));
    }
    function failgoogle(){
        toast("Internal server error")
        
    }
    function successgoogle(res){
        const token = res?.tokenObj;
        const result = res?.profileObj;
        dispatch(login(result, history));
           }

    
    return(
        <div className="login">
          <div className="logincontent">
              <h1 className="text-center">Sigh in here</h1>
              <form onSubmit={handelsubmit}>
                  <div className="form-group p-2">
                      <label className="w-100">Enter the username</label>
                      <input type="text" value={user.name} onChange={(e)=> setuser({...user, name:e.target.value}) }  className="form-control w-100"  />
                  </div>
                  <div className="form-group p-2">
                      <label htmlFor="" className="w-100">Enter your password</label>
                      <input type="password" value={user.password} onChange={(e)=>setuser({...user, password: e.target.value})} className="form-control w-100" />
                  </div>
                  <div className="form-group p-2">
                      <input type="submit" value="Submit" className="btn btn-primary w-100" />

                  </div>
              </form>
              <hr />
              <div>dont have account  <Link to="/register"><a>Register</a></Link> </div>
          <div className="googlesign p-2">

          <GoogleLogin
    clientId="621875633743-1ht48ap6pqvpsl7v1v2hr4rfei5ektlo.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={successgoogle}
    onFailure={failgoogle}
    cookiePolicy={'single_host_origin'}
  />,
              <button type="submit" className="btn btn-primary w-100">Sign With Google</button>
          </div>
          </div>
        </div>
    )
}
export default Login;