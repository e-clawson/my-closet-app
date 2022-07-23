import { useState, useEffect } from "react"
import ItemList from "../components/items/ItemList";


const ItemContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("/api/v1/items")
        .then(r => r.json())
        .then(data => setItems(data.data.map(p => p.attributes)))
        .catch(err => alert(err))  
    }, []);

  return (
    <>
        <h2>My Items</h2>
        <ItemList items={items} />
    </>

  )
}

export default ItemContainer;