

export function Card() {
    return (
        <div className="card">
          <div className="favorite">
            <img src="/img/heart-unliked.svg" alt="Unliked" />
          </div>
          <img width={133} height={112} src="/img/sneakers/boot1.jpg" alt="Boots"/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="card-info">
            <div style={{display: "flex", flexDirection: "column"}}>
              <span>Цена:</span>
              <b>12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="Plus"/>
            </button>
          </div>
        </div>
    )
}