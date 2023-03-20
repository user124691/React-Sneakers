import { Card } from "../Card"


export function Favorite({favorites, onAddToFavorite}) {
    return (
        <div className="content">
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", marginBottom: "40px"}}>
          <h1 style={{padding: "0"}} >My Bookmarks</h1>
        </div>

        <div style={{display: "flex", flexWrap: "wrap"}}>
        {favorites.map((card, index) => {
            return <Card 
            key={index + 1}
            favorite={true}
            onClickFavorite={onAddToFavorite}
            {...card}
            />
          })}
        </div>
      </div> 
    )
}