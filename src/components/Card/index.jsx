import cl from './Card.module.scss'
import ContentLoader from "react-content-loader"
import { useState, useEffect } from 'react'

export function Card({parentId, title, price, imageUrl, onClickFavorite, onClickPlus, added = false, favorite = false, loading = false}) {
    const [isAdded, setIsAdded] = useState(added)
    const [isFavorite, setIsFavorite] = useState(favorite)

    function plusClick() {
      setIsAdded(!isAdded)
      onClickPlus({parentId, title, price, imageUrl})
    }

    function heartClick() {
      setIsFavorite(!isFavorite)
      onClickFavorite({parentId, title, price, imageUrl})
    }

    useEffect(() => {

    }, [isAdded])

    return (
        <div className={cl.card}>
          {loading ?  
            <ContentLoader 
            speed={2}
            width={150}
            height={187}
            viewBox="0 0 150 187"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <rect x="0" y="0" rx="10" ry="10" width="150" height="91" /> 
            <rect x="-1" y="106" rx="3" ry="3" width="150" height="15" /> 
            <rect x="0" y="125" rx="3" ry="3" width="93" height="15" /> 
            <rect x="0" y="162" rx="8" ry="8" width="80" height="24" /> 
            <rect x="117" y="154" rx="8" ry="8" width="32" height="32" />
          </ContentLoader>
          : <div><div className={cl.favorite}>
          <img onClick={heartClick} src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="Like" />
        </div>
        <img width={133} height={112} src={imageUrl} alt="Boots"/>
        <h5>{title}</h5>
        <div className={cl.cardInfo}>
          <div style={{display: "flex", flexDirection: "column"}}>
            <span>Цена:</span>
            <b>{price} руб.</b>
          </div>
            <img onClick={plusClick} style={{cursor: "pointer"}} src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"} alt="Plus"/>
        </div></div>}
          
        </div>
    )
}