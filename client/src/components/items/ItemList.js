import ItemCard from "./ItemCard.js"

const ItemList = ({items, reload}) => {
 const itemCards = items?.map(item => <ItemCard key={item.id} item={item} reload={reload}/>)
    
 return (
    <div>
      <div style = {{display:'flex', flexWrap:'wrap'}}>{itemCards}</div>
    </div>
  )
}

export default ItemList;