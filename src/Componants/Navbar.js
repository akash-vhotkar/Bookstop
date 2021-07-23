import './style/navbar.css'
import { Link,  useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const Navbar = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    function handellogout() {
        localStorage.clear()
        dispatch({ type: "LOGOUT" });
        
        toast("Log out successfully")
    }

    const user = useSelector(state => state.AUTH.authdata);
   
    return (
        <nav>
            <div className="logo">
                bookslogo
            </div>
            <ul className="navlist">
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/createpost">Sell books</Link></li>
                <li> <Link to="/purchase">Purchase</Link></li>
                {user?.result ? user?.result.name : ""}
                <li><input type="text" className="form-control" placeholder="Search users" /></li>
                <li className="profile">
                    <div class="dropdown">
                        {user?.result ? Array.isArray(user.result.imageUrl) ? <img src={user.result.imageUrl[0]} alt="" s /> : <img className="dropbtn" src={user.result.imageUrl} alt="" />
                            : <img className="dropbtn" src="https://www.w3schools.com/howto/img_avatar.png" alt="" />}


                        <div className="dropdown-content">
                            {user?.result ? <Link to="/profile">profile</Link> : <Link to="/login">login</Link>}
                            {user?.result ? <Link to="/createpost">createpost</Link> : <Link to="/register"> register</Link>}
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