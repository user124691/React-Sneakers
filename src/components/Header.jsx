import { Link } from "react-router-dom"

export function Header({onClickCart}) {
    return (
      <header>
        <div className="headerLeft">
          <Link to="/"><img width="40px" height="40px" src="/img/logo.png" alt="Logo"/></Link>
          <div>
            <h3 style={{textTransform: "uppercase"}}>React Sneakers</h3>
            <p style={{opacity: "0.5"}}>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li className="cartLi">
            <img onClick={() => {onClickCart()}} style={{cursor: "pointer", marginRight: "20px"}} width={18} height={18} src="/img/cart.svg" alt="Cart"/>
            <span>1205 руб.</span>
          </li>
          <li style={{cursor: "pointer", marginRight: "20px"}}>
            <Link to="/favorite"><img width={18} height={18} src="/img/page-bookmarks.svg" alt="Heart"/></Link>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="User" />
          </li>
        </ul>
      </header> 
    )
}