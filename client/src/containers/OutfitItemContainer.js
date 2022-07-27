import { useState, useEffect } from "react"
import OutfitItemList from "../components/outfitItems/OutfitItemList";
import styled from "styled-components";
// import { ItemFilter } from "../components/items/ItemFilter";


const OutfitItemContainer = () => {
    const [outfitItems, setOutfitItems] = useState([]);
    const [filteredOutfitItems, setFilteredOutfitItems] = useState(outfitItems)

    useEffect(() => {
        fetch("/api/v1/outfitItems")
        .then(r => r.json())
        .then(data => setOutfitItems(data.data.map(p => p.attributes)))
        .catch(err => alert(err))  
    }, []);

    const handleSearch = (searchValue) => {
        const filteredOutfitItems = outfitItems.filter(outfitItem => (outfitItem.name["name"] || outfitItem.name).toLowerCase().startsWith(searchValue.toLowerCase()))
        setFilteredOutfitItems(filteredOutfitItems)
    }

  return (
    <>
        <Wrapper>
            <h2>Outfit Items</h2>
        </Wrapper>
        <Wrapper>
        <ItemFilter handleSearch={handleSearch} />
        </Wrapper>
        <br/>
        <ItemList outfitItems={outfitItems} />
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