import {useState} from "react"

const EditItemForm = ({itemObj, handleUpdate, handleError}) => {
    const [item, setItem] = useState({
        name: "",
        item_type: "",
        size: "",
        color: "",
        description: "",
        item_image: "", 
    });

    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        })
    }
    // history.push("/profile") - eslint error message - no global restrictions? 

    const handleSubmit = e => {
        e.preventDefault()
        if ([item.name, item.item_type, item.size, item.color, item.description, item.item_image].some(val => val.trim() === "")) {
            alert("You must fill in all the information please!")
        }
        // history.push("/profile")

       fetch(`http://localhost:4000/api/v1/items/${itemObj.id}`, {
           method: "PATCH",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({name: item.name, item_type: item.item_type, size: item.size, color: item.color, description: item.description, item_image: item.item_image})
       })
       .then((resp) => {
            if (resp.status === 201) {
                resp.json()
                .then(data => handleUpdate(data))
            } else {
                resp.json()
                .then(errorObj => handleError(errorObj.error))
            }
        })
        .catch(err => handleError(err.message))
        
    }

    return (
        <>
            <h3>Edit Item</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} type="text" name="name" value={item.name} required/><br />
                <label htmlFor="item_type">Item Type</label>
                <input onChange={handleChange} type="text" name="item_type" value={item.item_type} required/><br />
                <label htmlFor="size">Size</label>
                <input onChange={handleChange} type="text" name="size" value={item.size} required/><br />
                <label htmlFor="color">Color</label>
                <input onChange={handleChange} type="text" name="color" value={item.color} required/><br />
                <label htmlFor="item_type">Item Type</label>
                <input onChange={handleChange} type="text" name="description" value={item.description} required/><br />
                <label htmlFor="attachment">Item Image</label>
                <input onChange={handleChange} type="file" name="item image" value={item.item_image}/><br />
                <input type="submit" value="Update Item" />
            </form>
        </>
    )
}

export default EditItemForm