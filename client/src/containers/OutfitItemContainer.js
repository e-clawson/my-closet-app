import { useState, useEffect, useContext} from "react"
import { useParams } from "react-router-dom";
import OutfitItemList from "../components/outfitItems/OutfitItemList";
import styled from "styled-components";
// import { ItemFilter } from "../components/items/ItemFilter";
import { UserContext } from "../context/user"

const OutfitItemContainer = ({outfitItems}) => {
    const {outfitId} = useParams
    // const [outfitItems, setOutfitItems] = useState([]);
    const [filteredOutfitItems, setFilteredOutfitItems] = useState(outfitItems)

    // useEffect(() => {
    //     fetch(`http://localhost:4000/api/v1/outfits/${outfitId}/`)
    //     .then(r => r.json())
    //     .then(data => setOutfitItems(data.data.map(p => p.attributes)))
    // }, []);
    // console.log(outfitItems)

    // const handleSearch = (searchValue) => {
    //     const filteredOutfitItems = outfitItems.filter(outfitItem => (outfitItem.name["name"] || outfitItem.name).toLowerCase().startsWith(searchValue.toLowerCase()))
    //     setFilteredOutfitItems(filteredOutfitItems)
    // }

  return (
    <>
        <Wrapper>
            <h2>Outfit Items</h2>
        </Wrapper>
        {/* <Wrapper>
        <ItemFilter handleSearch={handleSearch} />
        </Wrapper> */}
        <br/>
        <OutfitItemList outfitItems = {outfitItems} />
    </>

  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;


export default OutfitItemContainer;