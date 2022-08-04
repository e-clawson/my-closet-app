import OutfitItemCard from "./OutfitItemCard.js"
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

// const OutfitItemList = ({outfitItems, handleError}) => {
//  const outfitItemCards = outfitItems?.map(outfitItem => <OutfitItemCard key={outfitItem.id} outfitItem={outfitItem}/>)
    
//  return (
//     <div>
//       <div style = {{display:'flex', flexWrap:'wrap'}}>{outfitItemCards}</div>
//     </div>
//   )
// }

// export default OutfitItemList;


const OutfitItemList = ({outfitItems, handleError}) => {
    const [outfitItemList, setOutfitItemList] = useState(null)
    const {outfitId} = useParams
    
    useEffect(() => {
        if (!outfitItems) {
            fetch(`http://localhost:4000/api/v1/outfits/${outfitId}`)
            .then(resp => {
                if (resp.status === 200) {
                    resp.json()
                    .then(outfitItems => setOutfitItemList(outfitItems))
                } 
                // else {
                //     resp.json()
                //     .then(errorObj => handleError(errorObj.error))
                // }
            })
            .catch(error => handleError(error))
        }
    }, [outfitItems, handleError])
    console.log(outfitItems)

    if (!outfitItems) return <h2>There are no items for this outfit!</h2>
    const finalOutfitItemList = outfitItems ? outfitItems : outfitItemList
    const renderOutfitItems = finalOutfitItemList?.map(outfitItem => <OutfitItemCard key={outfitItem.id} outfitItem={outfitItem}/>)
    
    return (
        <div style = {{display:'flex', flexWrap:'wrap'}}>{renderOutfitItems}</div>
    )
}

export default OutfitItemList;