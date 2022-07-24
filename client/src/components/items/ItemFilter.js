export const ItemFilter = ({handleSearch}) => {
    
    return (
        <div>
            <input type="text" placeholder="Search by Item"
            onChange={e => handleSearch(e.target.value)}/>
        </div>
    )
}