import React , {lazy,Suspense} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router , Route,Switch} from 'react-router-dom'
import { Spinner } from 'react-spinners-css';

const Posts = lazy(()=> import('./Componants/Posts'));

const Createpost = lazy(()=> import('./Componants/Createpost'))
const Navbar = lazy(()=> import('./Componants/Navbar'));
const Login = lazy(()=> import('./Componants/Login'));
const Register =lazy(()=> import('./Componants/Register'));
const Profile = lazy(()=> import('./Componants/Profile'));


function App() {
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
