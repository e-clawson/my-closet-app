import "./OutfitItem.css"
import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
// import EditOutfitForm from "./EditOutfitForm"

const OutfitItemCard = ({outfitItem, handleError}) => {
    const {outfitId} = useParams
    const [outfitItemObj, setOutfitItemObj] = useState(null);

    useEffect(() => {   
        if (!outfitItem) {
            fetch(`http://localhost:4000/api/v1/${outfitId}/outfititems`)
            .then(resp => resp.json())
            .then(outfitItemObj => {
              setOutfitItemObj(outfitItemObj)
            })
        }
    }, [outfitItem, outfitId]);
    console.log(outfitItem)


    // const handleUpdate = (updatedOutfitItemObj) => {
    //     // e.preventDefault()
    //     setEditMode(false)
    //     setOutfitItemObj(updatedOutfitItemObj)
    //   }

    // const handleClick = (e) => { 
    //     if (e.target.name === "delete") {
    //       fetch(`http://localhost:4000/api/v1/outfitItems`, {    method: "DELETE"
    //       })
    //       .then(() => history.push("/outfitItems"))
    //     } else {
    //       setEditMode(true)
    //     }
    //    }

    const finalOutfitItem = outfitItem ? outfitItem : outfitItemObj
    if (!finalOutfitItem) return <h1>Loading...</h1>

    return (
        <div className= "outfitItem-card">
            <h3>Item: {outfitItem.name}</h3>
            <h4>{outfitItem.image}</h4>
            <h4>Type: {outfitItem.item_type}</h4>
            <h4>Size: {outfitItem.size}</h4>
            <h4>Color: {outfitItem.color}</h4>
            <h4>Description: {outfitItem.description}</h4>
            {/* <h4>Type: {outfitItem.}</h4>
            <h4>Size: {outfitItem.}</h4>
            <h4>Color: {outfitItem.}</h4>
            <h4>Description: {outfitItem}</h4> */}
            {/* <button name="delete" id="delete-btn" onClick={handleClick}>Delete</button> */}
        </div>
    )

    // return (
    //     <div className= "outfitItem-card">
    //       {!editMode ? <>
    //         <h3>Name: {finalOutfitItem.name}</h3>
    //         <h4>Description: {outfitItem.description}</h4>
    //         {location.pathname !== "/outfitItems" ? <>
    //           <button name="edit-mode" id="edit-btn" onClick={handleClick}>Edit</button>
    //           <button name="delete" id="delete-btn" onClick={handleClick}>Delete</button>
    //         </> : null}
    //         </> : <EditOutfitItemForm handleError={handleError} outfitItemObj={finalOutfitItem} handleUpdate={handleUpdate}/>}
    //         {/* <hr />
    //         <hr />
    //         {location.pathname !== "/items" ? (<>
    //           <br />
    //         <hr />
    //         <hr />
    //           <ItemList item={item} />
    //         </>) : null } */}
    //     </div>
    //   )
}

export default OutfitItemCard;