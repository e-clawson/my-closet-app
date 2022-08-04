import {useState, useEffect} from "react"
import {Link, useParams, useLocation, useHistory} from "react-router-dom"
import OutfitList from "../outfits/OutfitList"
import styled from "styled-components";
import "./Outfit.css"
import NewItemForm2 from "../items/NewItemForm2";
import OutfitItemList from "../outfitItems/OutfitItemList";

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
            .then(outfit => {
              setOutfitObj(outfit)
              setOutfitItems(outfitItems)
            })
        }
    }, [outfit, outfitId]);

    const addNewItem = (itemObj) => {
      setOutfitItems(currentItems => [itemObj, ...currentItems])
    }

    const handleUpdate = (updatedOutfitObj) => {
    //   e.preventDefault()
      setEditMode(false)
      setOutfitObj(updatedOutfitObj)
    }

    const handleClick = (e) => { 
      if (e.target.name === "delete") {
        fetch(`http://localhost:4000/api/v1/outfits/${outfitObj.id}`, 
        {    method: "DELETE"})
        .then(() => history.push("/outfits"))
      } else {
        setEditMode(true)
      }
     }

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
                <h4>OUtfit Description: {finalOutfit.description}</h4>
            </div>
        </Wrapper>
        <br />
        <div>
            <OutfitItemList outfitItems={outfitItems} />
        </div>
        <Wrapper>
        <div>
            <hr />
            {location.pathname !== "/outfits" ? (<>
            <NewItemForm2 addNewItem={addNewItem} outfitId={finalOutfit.id} />
            <hr />
            </>) : null }
        </div>
        </Wrapper>
   </>
  )

}

export default OutfitPage