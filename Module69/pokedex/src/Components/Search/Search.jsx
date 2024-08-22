import './Search.css'

function Search(){
    return (
        <div className='search-wrapper'>
            <input
                id='pokename-name-search'
                type="text"
                placeholder="Pokedex..."
            />
        </div>
    )
}

export default Search;