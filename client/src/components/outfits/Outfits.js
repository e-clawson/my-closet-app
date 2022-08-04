import React, {useContext} from 'react';
import { UserContext } from '../../context/user';
// import { MessageContext } from '../../context/message';
import { Redirect } from 'react-router-dom';
import OutfitContainer from '../../containers/OutfitContainer';
import styled from 'styled-components';
import { ItemFilter } from '../items/ItemFilter';

const Outfits = () => {
    const {user} = useContext(UserContext)
    console.log(user)
    if (!user?.data) return <Redirect to="/login" />
  
    return (
    <div> 
      <Wrapper>
        <h1>{user.data.attributes.first_name}'s Outfits</h1>
      </Wrapper>
      <OutfitContainer />
    </div>
  )
}
const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export default Outfits;