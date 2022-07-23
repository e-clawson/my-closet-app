import React, {useContext} from 'react';
import { UserContext } from '../../context/user';
// import { MessageContext } from '../../context/message';
import { Redirect } from 'react-router-dom';
import ItemContainer from '../../containers/ItemContainer';
import styled from 'styled-components';

const Profile = () => {
    const {user} = useContext(UserContext)
    console.log(user)
    if (!user?.data) return <Redirect to="/login" />
  
    return (
    <div> 
      <Wrapper>
        <h1>Hello, {user.data.attributes.first_name} {user.data.attributes.last_name}!</h1>
      </Wrapper>
      <ItemContainer />
    </div>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export default Profile;