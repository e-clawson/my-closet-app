import "./Item.css"
import {useState, useEffect, useContext} from "react"
import {useParams, useLocation, useHistory} from "react-router-dom"
// import ItemForm from './ItemForm'
// import ItemList from './ItemList'
import EditItemForm from "./EditItemForm"
import { UserContext } from "../../context/user"
import { MessageContext } from "../../context/message"

const ItemCard = ({item, handleError, reload}) => {
    const {id} = useParams()
    const location = useLocation()
    const [itemObj, setItemObj] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const history = useHistory()
    const {setMessage} = useContext(MessageContext);
    const {user} = useContext(UserContext)

    useEffect(() => {   
        if (!item) {
            fetch(`/api/v1/items/${id}`)
            .then(resp => resp.json())
            .then(item => {
              setItemObj(item)
            })
        }
    }, [item, id]);
    console.log(item)

    const handleUpdate = (updatedItemObj) => {
        // e.preventDefault()
        setEditMode(false)
        setItemObj(updatedItemObj)
      }

    const handleClick = (e) => { 
        if (e.target.name === "delete") {
          fetch(`http://localhost:4000/api/v1/items/${item.id}`, {    method: "DELETE"
          })
          .then(res => {
            if (res.status === 200)  {
                res.json()
                .then(data => {
                    setItemObj(null)
                    setMessage({message: data.message, status: "Item Successfully Deleted!", color: "green"})
                    console.log("item successfully deleted")
                    console.log(reload)
                    reload()
                    history.push("/profile")
                })
            }
            else {
                res.json()
                .then(data => {
                    setItemObj(null)
                    setMessage({message: data.error, status: "Item Not Deleted!", color: "red"})
                    console.log("item not deleted")
                })
            }
        })
        .catch(err => console.log(err))
        } else {
          setEditMode(true)
        }
      }

    const finalItem = itemObj ? itemObj : item
    if (!finalItem) return <h1>Loading...</h1>

    return (
        <div className= "item-card">
            {!editMode ? <>
              <h3>Name: {finalItem.name}</h3>
              <img src={finalItem.image} alt={finalItem.name} />
              <h4>Type: {finalItem.item_type}</h4>
              <h4>Size: {finalItem.size}</h4>
              <h4>Color: {finalItem.color}</h4>
              <h4>Description: {finalItem.description}</h4>
              {/* <h4>Image:   {item.image ? <img src={item.image} alt="Item Image" /> : null}</h4> */}
              {location.pathname !== "/items" ?  <>
                <button name="edit-mode" id="edit-btn" onClick={handleClick}>Edit</button>
                <button name="delete" id="delete-btn" onClick={handleClick}>Delete</button>
              </> : null}
              </> : <EditItemForm handleError={handleError} itemObj={finalItem} handleUpdate={handleUpdate}/>}
              {location.pathname !== "/items" ? (<>
              </>) : null } 
         </div>
      )
}

export default ItemCard
