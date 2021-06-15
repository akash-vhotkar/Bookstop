const Profile = ({authdata, user})=>{
    return (
        <div className="profile">
            {authdata ? (<div>
                        <div className="profileimage">
                        {user?.result ? <img src={user.result.imageUrl[0]} alt="" />  :<img className="dropbtn" src="https://www.w3schools.com/howto/img_avatar.png" alt="" /> }
                    
                        </div>
                        <div className="">
                            <p >Hello {authdata.result.name} </p>
                            <p>followers</p>
                            <p>selled books</p>
                            <p>sell book </p>
                        </div>
                    </div>) : null}

        </div>
    )
}
export default Profile;