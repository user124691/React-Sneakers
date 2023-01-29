

export function Drawer() {
    return (
        <div className="overlay">
        <div className="drawer">
          <h2 style={{display: "flex", justifyContent: "space-between", marginBottom: "30px"}}>Корзина <img style={{cursor: "pointer"}} src="/img/btn-remove.svg" alt="Pointer" /></h2>

          <div className="items">
            <div className="cartItem">
              <div style={{backgroundImage: 'url("/img/sneakers/boot1.jpg")'}} className="cartItemImg"></div>

              <div style={{marginRight: "30px", flex: "1"}}>
                <p style={{marginBottom: "5px"}}>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>
            
            <div className="cartItem">
              <div style={{backgroundImage: 'url("/img/sneakers/boot1.jpg")'}} className="cartItemImg"></div>

              <div style={{marginRight: "30px", flex: "1"}}>
                <p style={{marginBottom: "5px"}}>Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>
          </div>
          
          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="greenButton">Оформить заказ <img src="/img/pointer.svg" alt="Pointer"/></button>
          </div>
          </div>
        </div>
    )
}