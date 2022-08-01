import OutfitItemCard from "./OutfitItemCard.js"

const OutfitItemList = ({outfitItems}) => {
 const outfitItemCards = outfitItems?.map(outfitItem => <OutfitItemCard key={outfitItem.id} outfitItem={outfitItem}/>)
    
 return (
    <div>
      <div style = {{display:'flex', flexWrap:'wrap'}}>{outfitItemCards}</div>
    </div>
  )
}

export default OutfitItemList;