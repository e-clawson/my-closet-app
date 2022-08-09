import React, {useContext} from 'react';
import { UserContext } from '../../context/user';
// import { MessageContext } from '../../context/message';
import { Redirect } from 'react-router-dom';
import OutfitContainer from '../../containers/OutfitContainer';
import styled from 'styled-components';
import { ItemFilter } from '../items/ItemFilter';
import OutfitPage from '../outfits/OutfitPage';

const OutfitItemPage = () => {
    // const {user} = useContext(UserContext)
    // if (!user?.data) return <Redirect to="/login" />
  
    return (
    <div> 
      <OutfitPage />
    </div>
  )
}
const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

export default OutfitItemPage;