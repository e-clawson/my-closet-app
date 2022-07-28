import {useState} from "react"
import { useHistory } from "react-router-dom"

const EditItemForm = ({ handleUpdate, handleError}) => {
    const [item, setItem] = useState({
        name: "",
        item_type: "",
        size: "",
        color: "",
        description: "",
        image: null, 
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
        if ([item.name, item.item_type, item.size, item.color, item.description, item.image].some(val => val.trim() === "")) {
            alert("You must fill in all the information please!")
        }

       fetch(`http://localhost:4000/api/v1/items/${item.id}`, {
           method: "PATCH",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({name: item.name, item_type: item.item_type, size: item.size, color: item.color, description: item.description, image: item.image})
       })
       .then((resp) => {
            if (resp.status === 201) {
                resp.json()
                .then(data => handleUpdate(data))
                window.history.push("/profile")
            } else {
                resp.json()
                .then(errorObj => handleError(errorObj.error))
            }
        })
        .catch(err => handleError(err.message))
    }

//     const handleSubmit = event => {
//         event.preventDefault();
//         const formData = new FormData();
//         formData.append('title', this.state.title);
//         formData.append('body', this.state.body);
//         formData.append('featured_image', this.state.featured_image);
        
//         fetch('http://localhost:4000/api/v1/items/${item.id}', {
//           method: 'POST',
//           body: formData
//         })
//         .catch(error=>console.log(error));
//     }
    

//    const onImageChange = event => { 
//         this.setState({ featured_image: event.target.files[0] });
//       };

    return (
        <>
            <h3>Edit Item</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} type="text" name="name" value={item.name} required/><br />
                <label htmlFor="item-type">Item Type</label>
                <input onChange={handleChange} type="text" name="item_type" value={item.item_type} required/><br />
                <label htmlFor="size">Size</label>
                <input onChange={handleChange} type="text" name="size" value={item.size} required/><br />
                <label htmlFor="color">Color</label>
                <input onChange={handleChange} type="text" name="color" value={item.color} required/><br />
                <label htmlFor="description">Description</label>
                <input onChange={handleChange} type="text" name="description" value={item.description} required/><br />
                <label htmlFor="image">Image</label>
                <input onChange={handleChange} type="file" name="image" accept="image/png, image/jpeg" value={item.image} /><br />
                <input type="submit" value="Update Item" />
            </form>
        </>
    )
}

export default EditItemForm