import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Input, FormField, Label } from "../../styles";
import Container from '@mui/material/Container';

const ItemForm = () => {
  // const item_image = React.createRef()

  const [item, setItem] = useState({
      name: "",
      item_type: "",
      size: "",
      color: "",
      description: "",
      image: "",
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
        alert("Please provide all the requested information")
      }
      history.push("/profile")

  const newItem = {
      name: item.name,
      type: item.item_type,
      size: item.size,
      color: item.color,
      description: item.description,
      image: item.image,
  }

  fetch("api/v1/items", {
    method: "POST", 
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newItem)
  })
  .then(resp => {
    if (resp.status === 201) {
        resp.json()
        .then(item => {
            setItem(item)
            console.log(item)
        })
    } else {
        resp.json()
        .then(errorObj => {
            alert(errorObj.error)
        })
    }
}) 
.catch(err => alert(err))
}

  return (
    <>
      <Container component="main" maxWidth="xs">  
      <h3>Add A New Item to Your Wardrobe!</h3>
      <form onSubmit={handleSubmit}>
        <FormField>
        <Label htmlFor="name">Item Name</Label>
        <Input
          type="text"
          name="name"
          autoComplete="off"
          value={setItem.item_name}
          onChange={handleChange}
        />
         </FormField>
         <FormField>
        <Label htmlFor="item_type">Item Type</Label>
        <Input
          type="text"
          name="item type"
          autoComplete="off"
          value={setItem.item_type}
          onChange={handleChange}
        />
        </FormField>
        <FormField>
        <Label htmlFor="size">Size</Label>
        <h5>(If the item is not a sized item, please enter NA)</h5>
        <Input
          type="text"
          name="size"
          autoComplete="off"
          value={setItem.size}
          onChange={handleChange}
        />
         </FormField>
         <FormField>
        <Label htmlFor="color">Color</Label>
        <Input
          type="text"
          name="color"
          autoComplete="off"
          value={setItem.color}
          onChange={handleChange}
        />
         </FormField>
         <FormField>
        <Label htmlFor="description">Item Description</Label>
        <Input
          type="text"
          name="description"
          autoComplete="off"
          value={setItem.description}
          onChange={handleChange}
        />
        </FormField>
        <FormField>
         <Label htmlFor="Item Image">Item Image</Label>
         <h5>(File type must be a .png, .jpeg, or .jpg and must be smaller than 1 MB)</h5>
        <Input
          className="formfield"
          type="file"
          name="image"
          // accept="image/*"
          // multiple={false}
          // ref={setItem.image}
          // ref={this.itemImageFile}
          // autoComplete="off"
          value={setItem.image}
          onChange={handleChange}
        />
        </FormField>
        <FormField>
        <Button type="submit" >Submit Item</Button>
        </FormField>
      </form>
    </Container>
    </>
  )
}

export default ItemForm;