

export function Header() {
    return (
      <header>
        <div className="headerLeft">
          <img width="40px" height="40px" src="/img/logo.png" alt="Logo"/>
          <div>
            <h3 style={{textTransform: "uppercase"}}>React Sneakers</h3>
            <p style={{opacity: "0.5"}}>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight">
          <li className="cartLi">
            <img width={18} height={18} src="/img/cart.svg" alt="Cart"/>
            <span>1205 руб.</span>
          </li>
          <li>
          <img width={18} height={18} src="/img/user.svg" alt="User" />
          </li>
        </ul>
      </header> 
    )
}