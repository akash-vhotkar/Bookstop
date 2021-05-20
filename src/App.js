import Navbar  from './componants/navbar';
import Login from './componants/login';
import Register from './componants/register';
import Profile from './componants/Profile';
import Posts from './componants/Posts';
import Createpost from './componants/createpost';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  


import { BrowserRouter as Router , Route, Link,Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navbar></Navbar>
          <Posts></Posts>
        </Route>
        <Route exact path="/profile">
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
