import './style/navbar.css'
const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                bookslogo
            </div>
            <ul className="navlist">
                <li>Home </li>
                <li>selled books</li>
                <li>puchase</li>
                <li>books to sell</li>
                <li><input type="text" className="form-control" placeholder="Search users" /></li>
                <li className="profile">
                    <div>
                        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="" />
                    </div>
                </li>
                <li>
                <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Dropdown button
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    <a class="dropdown-item" href="#">Another action</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
                </li>
               
            </ul>
        </nav>
    )
}
export default Navbar;