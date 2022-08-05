import {useState, useEffect} from "react"
import {Link, useParams, useLocation, useHistory} from "react-router-dom"
import styled from "styled-components";
import "./Outfit.css"
import NewItemForm2 from "../items/NewItemForm2";
import OutfitItemList from "../outfitItems/OutfitItemList";
import OutfitItemContainer from "../../containers/OutfitItemContainer";

const OutfitPage = ({outfit, handleError}) => {
    const {outfitId} = useParams()
    const location = useLocation()
    const [outfitObj, setOutfitObj] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [outfitItems, setOutfitItems] = useState([]);
    const history = useHistory()
    
    useEffect(() => {   
        if (!outfit) {
            fetch(`/api/v1/outfits/${outfitId}`)
            .then(resp => resp.json())
            .then(outfit => setOutfitObj(outfit))
            .catch(err => alert(err))
        }
    }, [outfit, outfitId]);
    console.log(outfitItems)

    const finalOutfit = outfit ? outfit : outfitObj
    if (!finalOutfit) return <h1>Loading...</h1>

    const Wrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    `;
  
return (
   <>
        <Wrapper>
            <div className= "outfit-card">
                <h3>Outfit Name: {finalOutfit.name}</h3>
                <h4>Outfit Description: {finalOutfit.description}</h4>
            </div>
        </Wrapper>
        <div>
            <OutfitItemContainer outfitItems = {finalOutfit.outfit_items}/>
        </div>
   </>
  )

}

export default OutfitPage