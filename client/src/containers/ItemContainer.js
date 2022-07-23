import { useState, useEffect } from "react"
import ItemList from "../components/items/ItemList";
import styled from "styled-components";


const ItemContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/api/v1/items")
        .then(r => r.json())
        .then(data => setItems(data.data.map(p => p.attributes)))
        .catch(err => alert(err))  
    }, []);

  return (
    <>
        <Wrapper>
            <h2>My Items</h2>
        </Wrapper>
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