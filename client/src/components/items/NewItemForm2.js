import {useState} from 'react'
import {useHistory} from 'react-router-dom'
// import { Button, Input, FormField, Label } from "../../styles";

const NewItemForm2 = ({handleError}) => {
    const [item, setItem] = useState ({
        name: "", 
        itemType: "", 
        size: "", 
        color: "",
        description: "",
    });
    const history = useHistory()

    const handleChange = (e) => {
        setItem({
            ...item, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if ([item.name, item.itemType, item.size, item.color, item.description].some(val => val.trim() === "")) {
            alert("Please fill out all the fields, thank you!!!")
        }
   
        fetch("http://localhost:4000/api/v1/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({name: item.name, item_type: item.itemType, size: item.size, color: item.color, description: item.description})
        })
        .then((resp) => {
            if (resp.status === 201) {
                 history.push("/profile")
                 console.log(item)
            } else {
             resp.json().then(errorObj => handleError(errorObj.error))
            }
        })
        .catch(err => handleError(err.message))
    }

    return (
        <div>
            <h3> Create a New Closet Item </h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} type="text" name="name" id="name" value={item.name} required/><br /><br />
                <label htmlFor="itemType">Type</label>
                <input onChange={handleChange} type="text" name="itemType" id="itemType" value={item.itemType} required/><br /><br />
                <label htmlFor="size">Size</label>
                <input onChange={handleChange} type="text" name="size" id="size" value={item.size} required/><br /><br />
                <label htmlFor="color">Color</label>
                <input onChange={handleChange} type="text" name="color" id="color" value={item.color} required/><br /><br />
                <label htmlFor="description">Description</label>
                <input onChange={handleChange} type="text" name="description" id="description" value={item.description} required/><br /><br />
                {/* <label htmlFor="image_uri">image_uri</label> */}
                {/* <input onChange={handleChange} type="text" name="image" id="image" value={item.image} required/><br /><br /> */}
                <input type="submit" value="Create" />
            </form>
        </div>
    )
}

export default NewItemForm2;