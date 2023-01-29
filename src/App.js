import { Card } from "./components/Card";
import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";

function App() {
  return (
    <div className="wrapper clear">
      {/* <Drawer /> */}
      <Header />       
      <div className="content">
        <div style={{display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "40px"}}>
          <h1>Все кроссовки</h1>
            <div className='search-block'>
              <img src="/img/magnifier.svg" alt="Magnifier" />
              <input placeholder="Поиск..."></input>
            </div>
        </div>
        {/* ----------------------------------------------------------------------------------------------------- */}
        <div style={{display: "flex"}}>
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

      </div> 
    </div>
  );
}

export default App;
