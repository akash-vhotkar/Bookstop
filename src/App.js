import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar  from './componants/navbar';
import Login from './componants/login';
import Register from './componants/register';
import Profile from './componants/Profile';
import Posts from './componants/Posts';
import Createpost from './componants/createpost';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';
import { BrowserRouter as Router , Route,Switch, useHistory} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {loginagain} from './actions/index';
import { toast } from 'react-toastify';


function App() {
  const history = useHistory();
  
   const dispatch = useDispatch();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const authdata = useSelector(state=> state.AUTH.authdata);
  useEffect(()=>{
    console.log("apps called ");
    if(authdata== null  && user!= null){

      dispatch(loginagain(JSON.parse(localStorage.getItem('profile')), history) )
    }
  },[])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar></Navbar>
          <Posts></Posts>
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
    </Router>
    
  )
}

export default App;
