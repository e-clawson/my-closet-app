import { useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Input, FormField, Label } from "../../styles";
import Container from '@mui/material/Container';

const ItemForm = () => {
  const [item, setItem] = useState({
      name: "",
      type: "",
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
      if ([item.name, item.type, item.size, item.color, item.description].some(val => val.trim() === "")) {
        alert("Please provide all the requested information")
      }
      history.push("/home")

  const newItem = {
      name: item.name,
      type: item.type,
      size: item.size,
      color: item.color,
      description: item.description,
  }

  fetch("api/v1/items", {
    method: "POST", 
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem) 
  })
  
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
          value={setItem.name}
          onChange={handleChange}
        />
         </FormField>
         <FormField>
        <Label htmlFor="type">Item Type</Label>
        <Input
          type="text"
          name="type"
          autoComplete="off"
          value={setItem.type}
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
        <Button type="submit">Submit Item</Button>
      </FormField>
    </form>
    </Container>
    </>
  )
}

export default ItemForm;