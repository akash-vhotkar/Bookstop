const Profile = ({authdata, user})=>{

    return (
        <div className="profile">
            {authdata ? (<div>
                        <div className="profileimage">
                        { Array.isArray(authdata.result.imageUrl) ?  <img src={user.result.imageUrl[0]} alt=""s />  :<img className="dropbtn" src={user.result.imageUrl} alt="" /> }
                    
                        </div>
                        <div className="">
                            <p >Hello {authdata.result.name} </p>
                        </div>
                    </div>) : null}

        </div>
    )
}
export default Profile;