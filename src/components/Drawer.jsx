

export function Drawer({closeButton, onRemove, items = []}) {
    return (
        <div className="overlay">
        <div className="drawer">
          <h2 style={{display: "flex", justifyContent: "space-between", marginBottom: "30px"}}>Корзина <img onClick={closeButton} style={{cursor: "pointer"}} src="/img/btn-remove.svg" alt="Close" /></h2>

            {
              items.length > 0 ? 
              <>
                <div className="items">
                  {items.map((item, index) => 
                    <div key={index + 1} className="cartItem">
                      <div style={{backgroundImage: `url(${item.imageUrl})`}} className="cartItemImg"></div>
                      <div style={{marginRight: "30px", flex: "1"}}>
                        <p style={{marginBottom: "5px"}}>{item.title}</p>
                        <b>{item.price} руб.</b>
                      </div>
                    <img onClick={() => onRemove(item.id)} className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
                    </div>)}
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
              </>
            
            :
            <div className="empty_cart">
            <img width={120} height={120} style={{marginBottom: "20px"}} src="/img/empty_cart.jpg" alt="Empty_Box"/>
            <h3>Корзина Пустая</h3>
            <p style={{textAlign: "center", opacity: "0.6"}}>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button onClick={closeButton} width={12} height={12} className="greenButton"><img src="/img/reversed_pointer.svg" alt="Reversed_Pointer"/> Вернутся назад</button>
          </div> 
            }

          
          
          
          </div>
        </div>
    )
}