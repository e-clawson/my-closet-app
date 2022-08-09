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
    const history = useHistory()
    const [items, setItems] = useState([]);
    
    useEffect(() => {   
        if (!outfitObj && outfitId) {
            fetch(`/api/v1/outfits/${outfitId}`)
            .then(resp => resp.json())
            .then(outfit => setOutfitObj(outfit))
            .catch(err => alert(err))
        }
    }, [outfitObj, outfitId]);
    console.log(outfitObj)

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
            <OutfitItemContainer finalOutfitId = {finalOutfit.id}/>
        </div>
   </>
  )

}

export default OutfitPage