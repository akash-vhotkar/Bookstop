import './style/navbar.css'
import { Link ,useLocation,useHistory} from 'react-router-dom'
import {useState, useEffect}  from 'react'
import { useDispatch } from 'react-redux';
const Navbar = () => {
    const history = useHistory();
    const locatiion = useLocation();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('profile')))
    },[locatiion])
    function handellogout(){
        dispatch({type:"LOGOUT"});
       history.push("/")
        
    }
console.log("user of the navbar  ", user?.result.name);
    return (
        <nav>
            <div className="logo">
                bookslogo
            </div>
            <ul className="navlist">
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/createpost">Sell books</Link></li>
                <li> <Link to="/purchase">Purchase</Link></li>
                {user?.result ? user?.result.name: ""}
                <li><input type="text" className="form-control" placeholder="Search users" /></li>
                <li className="profile">
                    <div class="dropdown">
                    <img className="dropbtn" src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
    
                        <div class="dropdown-content">
                     {user?.result ? <Link to="/profile">profile</Link>:<Link to="/login">login</Link>} 
                     {user?.result ? <Link to="/createpost">createpost</Link>:  <Link to="/register"> register</Link>} 
                     <a className="text-dark" onClick={handellogout}>log out</a>
                        </div>
                    </div>
                </li>
                <li>

                </li>

            </ul>
        </nav>
    )
}
export default Navbar;