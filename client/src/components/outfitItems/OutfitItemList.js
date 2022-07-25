import ItemCard from "../items/ItemCard"
import {useParams} from "react-router-dom"
import {useState, useEffect} from "react"

const OutfitItemList = ({items, handleError}) => {
    const {outfitId} = useParams()
    const [itemsList, setItemsList] = useState(null)
    
    useEffect(() => {
        if (!outfits) {
            fetch(`api/v1/${outfitId}/items`)
            .then(resp => {
                if (resp.status === 200) {
                    resp.json()
                    .then(items => setItemsList(items))
                } else {
                    resp.json()
                    .then(errorObj => handleError(errorObj.error))
                }
            })
            .catch(error => handleError(error))
        }
    }, [outfitId, items, handleError])

    // if (!comments) return <h2>The data you tried to access does not exist!</h2>
    const finalItemsList = items ? items : itemsList
    const renderItems = finalItemsList?.map(item => <ItemCard key={item.id} item={item}/>)
    return (
        <div>{renderItems}</div>
    )
}

export default OutfitItemList