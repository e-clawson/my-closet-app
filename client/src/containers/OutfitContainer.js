import { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom";
import styled from "styled-components";
// import { OutfitFilter } from "../components/outfits/OutfitFilter";
import OutfitList from "../components/outfits/OutfitList";
import { UserContext } from "../context/user"

const OutfitContainer = () => {
  const {userId} = useParams()
 
    const [outfits, setOutfits] = useState([]);
    // const [filteredOutfits, setFilteredOutfits] = useState(outfits)
    
    useEffect(() => {
        fetch(`/api/v1/${userId}/outfits`)
        .then(r => r.json())
        .then(outfit => setOutfits(outfit))
        .catch(err => alert(err))  
    }, []);
    

    // const handleSearch = (searchValue) => {
    //     const filteredItems = outfits.filter(outfit => (outfit.name["name"] || outfit.name).toLowerCase().startsWith(searchValue.toLowerCase()))
    //     setFilteredOutfits(filteredOutfits)
    // }

  return (
    <>
        <Wrapper>
            <h2>My Outfits</h2>
        </Wrapper>
        {/* <Wrapper>
        <OutfitFilter handleSearch={handleSearch} />
        </Wrapper> */}
        <br/>
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