import React, {useContext} from 'react';
import { UserContext } from '../../context/user';
// import { MessageContext } from '../../context/message';
import { Redirect } from 'react-router-dom';

const Profile = () => {
    const {user} = useContext(UserContext)
    console.log(user)
    if (!user?.data) return <Redirect to="/login" />
  
    return (
    <div> 
        <h1>Hello, {user.data.attributes.first_name} {user.data.attributes.last_name}!</h1>
        <h2>My Items: </h2>

      
    </div>
  )
}

export default Profile;