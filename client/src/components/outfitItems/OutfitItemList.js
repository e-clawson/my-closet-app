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


const OutfitItemList = ({outfitItem, handleError}) => {
    const [outfitItemList, setOutfitItemList] = useState(null);
    // const [outfitItems, setOutfitItems] = useState(null);
    const [items, setItems] = useState([]);
    const {outfitId} = useParams()
    
    // useEffect(() => {
    //     if (!outfitItem) {
    //         fetch(`http://localhost:4000/api/v1/${outfitId}/outfititems`)
    //         .then(resp => resp.json())
    //         .then( outfitItems => {
    //             setOutfitItemList(outfitItems)
    //           })
    //       }
    //   }, [outfitItem, outfitId]);
    // console.log(outfitItem)

    // useEffect(() => {   
    //     if (!outfitItems) {
    //         fetch(`/api/v1/outfits/${outfitId}`)
    //         .then(resp => resp.json())
    //         .then(outfitItems => {
    //           setOutfitItemList(outfitItems)
    //         })
    //     }
    // }, [outfitItems]);
    // console.log(outfitItems)

    if (!outfitItem) return <h2>There are no items for this outfit!</h2>
    const finalOutfitItemList = outfitItem ? outfitItem : outfitItemList

    const renderOutfitItems = finalOutfitItemList?.map(outfitItem => <OutfitItemCard key={outfitItem.id} outfitItem={outfitItem}/>)
    
    
    return (
        <div style = {{display:'flex', flexWrap:'wrap'}}>{renderOutfitItems}</div>
        
    )
}

export default OutfitItemList;