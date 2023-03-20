import { Card } from '../Card/index'

export function Home({items, searchValue, setSearchValue, onChangeSearchInput, onAddToCart, onAddToFavorite}) {
    return (
        <div className="content">
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "40px"}}>
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : "Все Кроссовки"}</h1>
            <div className='search-block'>
              <img src="/img/magnifier.svg" alt="Magnifier" />
              <input onChange={onChangeSearchInput} value={searchValue} placeholder="Поиск..."></input>
              {searchValue && <img onClick={() => setSearchValue("")} className="clear" src="/img/btn-remove.svg" alt="Close" />}
            </div>
        </div>

        <div style={{display: "flex", flexWrap: "wrap"}}>
          {items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase())).map((card, index) => {
            return <Card 
            key={card.parentId}
            parentId={card.parentId}
            title={card.title} 
            price={card.price} 
            imageUrl={card.imageUrl}
            onClickFavorite={(obj) => onAddToFavorite(obj)}
            onClickPlus={(obj) => onAddToCart(obj)}
            />
          })}
        </div>
      </div> 
    )
}