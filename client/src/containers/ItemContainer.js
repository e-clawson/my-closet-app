import { useState, useEffect, useContext } from "react"
import {useHistory} from "react-router-dom"
import ItemList from "../components/items/ItemList";
import styled from "styled-components";
// import { ItemFilter } from "../components/items/ItemFilter";\
import { UserContext } from "../context/user"

const ItemContainer = () => {
    const {user} = useContext(UserContext);
    const [items, setItems] = useState([]);
    const history = useHistory()
    // const [filteredItems, setFilteredItems] = useState(items)

    useEffect(() => {
        fetch(`/api/v1/${user.id}/items`)
        .then(r => r.json())
        .then(item => setItems(item))
        .catch(err => alert(err))
    }, []);

    const reload = () => {
      fetch(`/api/v1/${user.id}/items`)
      .then(r => r.json())
      .then(item => setItems(item))
      .catch(err => alert(err))
  };

    // #this is where I need a callback function to update an item 
    // delete and update, vaidation handling, something new
    //try putting the history.push in the useEffect instead? " I did the redirect in the useEffect of my component instead of the async action and it seems to work now."

  return (
    <>
        <Wrapper>
            <h2>My Items</h2>
        </Wrapper>
        {/* <Wrapper>
        <ItemFilter handleSearch={handleSearch} />
        </Wrapper> */}
        <br/>
        <ItemList items={items} reload={reload}/>
    </>

  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;


export default ItemContainer;