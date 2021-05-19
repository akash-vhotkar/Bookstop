import {userState, useState} from 'react';
import {Link} from 'react-router-dom';
import { GoogleLogin} from 'react-google-login'
import './style/login.css'
const Login = ()=>{
    const [user  ,setuser] =  useState({userrname: "", password:""})
    function handelsubmit(e){
    
        console.log(user);
        e.preventDefault();
        
        

    }
    function failgoogle(){
        
    }


    function successgoogle(){
        
    }


    
    return(
        <div className="login">
          <div className="logincontent">
              <h1 className="text-center">Sigh in here</h1>
              <form onSubmit={handelsubmit}>
                  <div className="form-group p-2">
                      <label className="w-100">Enter the username</label>
                      <input type="text" value={user.userrname} onChange={(e)=> setuser({...user, username:e.target.value}) }  className="form-control w-100"  />
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