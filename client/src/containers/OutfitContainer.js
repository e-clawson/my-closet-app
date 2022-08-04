import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom";
import styled from "styled-components";
// import { OutfitFilter } from "../components/outfits/OutfitFilter";
import OutfitList from "../components/outfits/OutfitList";
import { UserContext } from "../context/user"

const OutfitContainer = () => {
    const {user} = useContext(UserContext);
    const [outfits, setOutfits] = useState([]);
    // const [filteredOutfits, setFilteredOutfits] = useState(outfits)
   
    useEffect(() => {
      fetch(`/api/v1/${user.data.attributes.id}/outfits`)
      .then(r => r.json())
      .then(outfit => setOutfits(outfit))
      .catch(err => alert(err))
  }, []);
  console.log(outfits)

    // const handleSearch = (searchValue) => {
    //     const filteredItems = outfits.filter(outfit => (outfit.name["name"] || outfit.name).toLowerCase().startsWith(searchValue.toLowerCase()))
    //     setFilteredOutfits(filteredOutfits)
    // }

  return (
    <>
        <OutfitList outfits={outfits} />
    </>
  )
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;


export default OutfitContainer;