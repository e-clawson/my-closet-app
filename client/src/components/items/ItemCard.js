import "./Item.css"
import {useState, useEffect} from "react"
import {Link, useParams, useLocation, useHistory} from "react-router-dom"
// import ItemForm from './ItemForm'
// import ItemList from './ItemList'
import EditItemForm from "./EditItemForm"

const ItemCard = ({item, handleError}) => {
    const {id} = useParams()
    const location = useLocation()
    const [itemObj, setItemObj] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const history = useHistory()

    useEffect(() => {   
        if (!item) {
            fetch(`/api/v1/items/${id}`)
            .then(resp => resp.json())
            .then(item => {
              setItemObj(item)
            })
        }
    }, [item, id]);

    const handleUpdate = (updatedItemObj) => {
        // e.preventDefault()
        setEditMode(false)
        setItemObj(updatedItemObj)
      }

    const handleClick = (e) => { 
        if (e.target.name === "delete") {
          fetch(`http://localhost:4000/api/v1/items/${item.id}`, {    method: "DELETE"
          })
          .then(() => history.push("/profile"))
        } else {
          setEditMode(true)
        }
       }

    const finalItem = item ? item : itemObj
    if (!finalItem) return <h1>Loading...</h1>

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
      console.log(item),
        <div className= "item-card">
          {!editMode ? <>
            <h3>Name: {item.name}</h3>
            <h4>Type: {item.item_type}</h4>
            <h4>Size: {item.size}</h4>
            <h4>Color: {item.color}</h4>
            <h4>Description: {item.description}</h4>
            <h4>Image:   {item.item_image ? <img src={item.item_image} alt="Image Explanation Here" /> : null}</h4>
            {location.pathname !== "/items" ? <>
              <button name="edit-mode" id="edit-btn" onClick={handleClick}>Edit</button>
              <button name="delete" id="delete-btn" onClick={handleClick}>Delete</button>
            </> : null}
            </> : <EditItemForm handleError={handleError} itemObj={finalItem} handleUpdate={handleUpdate}/>}
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

export default ItemCard