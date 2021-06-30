import React , {lazy,Suspense} from 'react';
import Spiiner  from './Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import { BrowserRouter as Router , Route,Switch, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {login, loginagain} from './Actions/index';
import { toast } from 'react-toastify';
import { Spinner } from 'react-spinners-css';

const Posts = lazy(()=> import('./Componants/Posts'));

const Createpost = lazy(()=> import('./Componants/Createpost'))
const Navbar = lazy(()=> import('./Componants/Navbar'));
const Login = lazy(()=> import('./Componants/Login'));
const Register =lazy(()=> import('./Componants/Register'));
const Profile = lazy(()=> import('./Componants/Profile'));


function App() {
  const history = useHistory();
  
   const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const authdata = useSelector(state=> state.AUTH.authdata);
  useEffect(()=>{
    console.log("apps called ", user, "authdata ", authdata);
    if(authdata== null  && user!= null){
    
      dispatch(loginagain(user, history, user.token))
    }
  },[])

  return (
    <Router>
      <Suspense fallback={<Spinner></Spinner>}>   
      <Switch>
        <Route exact path="/">
         
          <Navbar></Navbar>
          <Suspense fallback={<Spinner></Spinner>}>   
     
          <Posts></Posts>
         </Suspense>
        </Route>
        <Route exact path="/profile">
        <Navbar></Navbar>

          <Profile></Profile>
        </Route>
        <Route exact path="/login">
        <Navbar></Navbar>
          <Login></Login>
        </Route>
        <Route exact path="/register">
        <Navbar></Navbar>
         
          <Register></Register>
        </Route>
        <Route exact path="/createpost">
          <Navbar></Navbar>
          <Createpost></Createpost>

        </Route>


      </Switch>
      </Suspense>
      
    </Router>
    
    
  )
}

export default App;
