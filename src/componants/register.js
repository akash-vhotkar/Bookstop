import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { GoogleLogin} from 'react-google-login';
import {register} from '../actions/index'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
const Register = () => {
    const [user, setuser ] = useState({username :"", password: "", confirm_password: "", name: ""})
    const history = useHistory();
    const dispatch = useDispatch();
    function handelregister(e){
        e.preventDefault();
        console.log("Register fucntion is called", user);

        dispatch(register(user, history));
    }

    function successgoogle(res){
        const token = res?.tokenObj;
        const result = res?.profileObj;
        localStorage.setItem("profile", JSON.stringify({result, token}))
        history.push("/");
        toast("login siccessfully");

    }

    function failgoogle(res){
        toast("Internal server error")

    }
    return (
        <div className="Register">
            <div className="container">
                <div className="row">
                    <div className="col-md-7 ">


                        <h1>Register here</h1>
                        <form onSubmit={handelregister}>

                            <div className="form-group">
                                <label htmlFor="">Enter your name</label>
                                <input type="text" placeholder="Enter your name" value={user.name} onChange={(e)=> setuser({...user, name: e.target.value})}  className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Enter your username</label>
                                <input type="text" className="form-control" placeholder="Enter your username" value={user.username} onChange={(e)=> setuser({...user, username:e.target.value})} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Enter your password</label>
                                <input type="password" className="form-control" value={user.password} onChange={(e)=>  setuser({...user, password: e.target.value})} />
                            </div>
                            <div className="form-group">
                                <label>Enter your confirm password</label>
                                <input type="password" className="form-control" value={user.confirm_password}  onChange={(e)=> setuser({...user, confirm_password: e.target.value})} />
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Register" className="btn btn-primary form-control" />
                            </div>
                        </form>
                        <div>already have account <Link to="/login"><a>login</a></Link></div>
                        <hr />
                        <div>
                            <input type="button" value="Register with google" className="btn btn-primary form-control" />

                            <GoogleLogin
    clientId="621875633743-1ht48ap6pqvpsl7v1v2hr4rfei5ektlo.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={successgoogle}
    onFailure={failgoogle}
    cookiePolicy={'single_host_origin'}
  />,

                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}
export default Register;