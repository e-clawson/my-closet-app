import "./Item.css"

const ItemCard = ({item}) => {
    console.log(item)
    return (
        <div className= "item-card">
            <h2>Item: {item.name}</h2>
            <h4>Type: {item.item_type}</h4>
            <h4>Size: {item.size}</h4>
            <h4>Color: {item.color}</h4>
            <h4>Description: {item.description}</h4>
            <button>Add to Outfit</button>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}

export default ItemCard