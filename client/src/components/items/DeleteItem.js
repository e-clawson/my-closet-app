import {  useState } from "react";
import { MessageContext } from "../../context/message";
import { useHistory } from "react-router-dom";


const DeleteItem = () => {
    const [item, setItem] = useState([]);
    const {setMessage} = useContext(MessageContext);
    const history = useHistory()

    useEffect(() => {
        fetch(`http://localhost:4000/api/v1/items/${item.id}`, {
           method: "DELETE",
        })
        .then(res => {
            if (res.status === 200)  {
                res.json()
                .then(data => {
                    setItem(null)
                    setMessage({message: data.message, status: "Item Successfully Deleted!"})
                    history.push("/profile")
                    console.log("item successfully deleted")
                })
            }
            else {
                res.json()
                .then(data => {
                    setItem(null)
                    setMessage({message: data.error, status: "Item Not Deleted!"})
                    console.log("item not deleted")
                })
            }
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div>Deleting Item...</div>
    )
}

export default DeleteItem;