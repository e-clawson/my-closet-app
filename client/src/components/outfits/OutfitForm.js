import { useState } from "react"
import { useHistory } from "react-router-dom"
import { Button, Input, FormField, Label } from "../../styles";
import Container from '@mui/material/Container';

const OutfitForm = () => {
  // const itemImageFile = React.createRef()

  const [outfit, setOutfit] = useState({
      name: "",
      description: "",
  });

  const history = useHistory()

  const handleChange = (e) => {
      setOutfit({
          ...outfit,
          [e.target.name]: e.target.value
      })
  }

  const handleSubmit = e => {
      e.preventDefault()
      if ([outfit.name, outfit.description ].some(val => val.trim() === "")) {
        alert("Please provide all the requested information")
      }
      history.push("/outfits")

  const newOutfit = {
      name: outfit.name,
      description: outfit.description,
  }

  fetch("api/v1/outfits", {
    method: "POST", 
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(newOutfit) 
  })
  
}

  return (
    <>
      <Container component="main" maxWidth="xs">  
      <h3>Add A New Outfit!</h3>
      <form onSubmit={handleSubmit}>
      <FormField>
        <Label htmlFor="name">Outfit Name</Label>
        <Input
          type="text"
          name="name"
          autoComplete="off"
          value={setOutfit.outfit_name}
          onChange={handleChange}
        />
        </FormField>
         <FormField>
        <Label htmlFor="description">Description</Label>
        <Input
          type="text"
          name="description"
          autoComplete="off"
          value={setOutfit.description}
          onChange={handleChange}
        />
         </FormField>
      <FormField>
        <Button type="submit">Submit Outfit</Button>
      </FormField>
    </form>
    </Container>
    </>
  )
}

export default OutfitForm;
