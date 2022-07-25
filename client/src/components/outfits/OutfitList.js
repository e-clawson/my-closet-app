import OutfitCard from "./OutfitCard.js"

const OutfitList = ({outfits}) => {
 const outfitCards = outfits?.map(outfit => <OutfitCard key={outfit.id} outfit={outfit}/>)
    
 return (
    <div>
      <div style = {{display:'flex', flexWrap:'wrap'}}>{outfitCards}</div>
    </div>
  )
}

export default OutfitList;