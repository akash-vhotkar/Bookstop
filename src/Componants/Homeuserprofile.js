import { useSelector} from 'react-redux'
const Profile = ()=>{
    const user = useSelector(state => state.AUTH.authdata);

    return (
        <div className="profile">
            {user ? (<div>
                        <div className="profileimage">
                        { Array.isArray(user.result.imageUrl) ?  <img src={user.result.imageUrl[0]} alt=""s />  :<img className="dropbtn" src={user.result.imageUrl} alt="" /> }
                    
                        </div>
                        <div className="">
                            <p >Hello {user.result.name} </p>
                        </div>
                    </div>) : null}

        </div>
    )
}
export default Profile;