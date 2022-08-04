import { useState, useEffect, useContext } from "react"
import ItemList from "../components/items/ItemList";
import styled from "styled-components";
// import { ItemFilter } from "../components/items/ItemFilter";\
import { UserContext } from "../context/user"

const ItemContainer = () => {
    const {user} = useContext(UserContext);
    const [items, setItems] = useState([]);
    // const [filteredItems, setFilteredItems] = useState(items)

    useEffect(() => {
        fetch(`/api/v1/${user.data.attributes.id}/items`)
        .then(r => r.json())
        .then(item => setItems(item))
        .catch(err => alert(err))
    }, []);

    // const handleSearch = (searchValue) => {
    //     const filteredItems = items.filter(item => (item.name["name"] || item.name).toLowerCase().startsWith(searchValue.toLowerCase()))
    //     setFilteredItems(filteredItems)
    // }


  return (
    <>
        <Wrapper>
            <h2>My Items</h2>
        </Wrapper>
        {/* <Wrapper>
        <ItemFilter handleSearch={handleSearch} />
        </Wrapper> */}
        <br/>
        <ItemList items={items} />
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