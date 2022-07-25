import "./Outfit.css"
import {useState, useEffect} from "react"
import {Link, useParams, useLocation, useHistory} from "react-router-dom"
import EditOutfitForm from "./EditOutfitForm"

const OutfitCard = ({outfit, handleError}) => {
    const {id} = useParams()
    const location = useLocation()
    const [outfitObj, setOutfitObj] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const history = useHistory()

    useEffect(() => {   
        if (!outfit) {
            fetch(`/api/v1/outfits/${id}`)
            .then(resp => resp.json())
            .then(outfit => {
              setOutfitObj(outfit)
            })
        }
    }, [outfit, id]);

    const handleUpdate = (updatedOutfitObj) => {
        // e.preventDefault()
        setEditMode(false)
        setOutfitObj(updatedOutfitObj)
      }

    const handleClick = (e) => { 
        if (e.target.name === "delete") {
          fetch(`http://localhost:4000/api/v1/outfits/${id}`, {    method: "DELETE"
          })
          .then(() => history.push("/outfits"))
        } else {
          setEditMode(true)
        }
       }

    const finalOutfit = outfit ? outfit : outfitObj
    if (!finalOutfit) return <h1>Loading...</h1>

    // return (
    //     <div className= "item-card">
    //         <h2>Item: {item.name}</h2>
    //         <h4>Type: {item.item_type}</h4>
    //         <h4>Size: {item.size}</h4>
    //         <h4>Color: {item.color}</h4>
    //         <h4>Description: {item.description}</h4>
    //         <button>Add to Outfit</button>
    //         <button>Edit</button>
    //         <button>Delete</button>
    //     </div>
    // )

    return (
      console.log(outfit),
        <div className= "outfit-card">
          {!editMode ? <>
            <h3>Name: <Link to={`/outfits/${finalOutfit.id}`}>{finalOutfit.name}</Link></h3>
            <h4>Description: {outfit.description}</h4>
            {location.pathname !== "/outfits" ? <>
              <button name="edit-mode" id="edit-btn" onClick={handleClick}>Edit</button>
              <button name="delete" id="delete-btn" onClick={handleClick}>Delete</button>
            </> : null}
            </> : <EditOutfitForm handleError={handleError} outfitObj={finalOutfit} handleUpdate={handleUpdate}/>}
            {/* <hr />
            <hr />
            {location.pathname !== "/items" ? (<>
              <br />
            <hr />
            <hr />
              <ItemList item={item} />
            </>) : null } */}
        </div>
      )
}

export default OutfitCard