import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { GoogleLogin} from 'react-google-login';
import {register} from '../actions/index'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import FileBase64 from 'react-file-base64'
import { useEffect } from 'react';
const Register = () => {
    const [user, setuser ] = useState({ password: "",email:"", confirm_password: "", name: "", imageUrl:[]})
    const history = useHistory();
    const dispatch = useDispatch();
    function handelregister(e){
        e.preventDefault();
        if(user.password !== user.confirm_password) toast("password and confirm password does not match")
        else if(user.name=== "") toast("please enter your name")
        else       dispatch(register(user, history));
    }
    



    function successgoogle(res){
        const token = res?.tokenObj;
        const result = res?.profileObj;
        dispatch(register(result, history));

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
                                <label htmlFor="">Enter your username</label>
                                <input type="text" className="form-control"  value={user.name} onChange={(e)=> setuser({...user, name:e.target.value})} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Enter your Email</label>
                                <input type="email" className="form-control" value={user.email} onChange={(e)=>  setuser({...user, email: e.target.value})} />
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
                                <label htmlFor="">selecte the image </label>
                                <FileBase64 className="btn btn-primary" type="file" multiple={false} onDone={({ base64 }) => setuser({...user, imageUrl: base64})} />

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