import { Header } from "./components/Header";
import { Drawer } from "./components/Drawer";
import React, { useEffect, useState } from 'react'
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import { Home } from "./components/pages/Home";
import { Favorite } from "./components/pages/Favorite";

const AppContext = React.createContext({})

function App() {
  const [items, setItems] = useState([])
  const [favorites, setFavorites] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [cartItems, setCartItems] = useState([])
  const [cartOpened, setCardOpened] = useState(false)

  useEffect(() => {
    axios.get("https://63e61c657eef5b22337f12f7.mockapi.io/items").then(res => {setItems(res.data)})
    axios.get("https://63e61c657eef5b22337f12f7.mockapi.io/cart").then(res => {setCartItems(res.data)})
    axios.get("https://63e61cc683c0e85a868ce098.mockapi.io/favorites").then(res => {setFavorites(res.data)})
  }, [])
    
  const onRemoveCartItem = (id) => {
    axios.delete(`https://63e61c657eef5b22337f12f7.mockapi.io/cart/${id}`)
    setCartItems((prev) => prev.filter(item => item.id !== id))
  }

  const onAddToCart = (obj) => {
     try{
      if(cartItems.find((item) => Number(item.parentId) === Number(obj.parentId))){
        let temp = cartItems.filter(item => {
          return item.parentId !== obj.parentId
        })
        setCartItems([...temp])
        //axios.delete(`https://63e61c657eef5b22337f12f7.mockapi.io/cart`)
      }
      else{
        axios.post("https://63e61c657eef5b22337f12f7.mockapi.io/cart", obj).then(res => setCartItems(prev => [...prev, res.data]))
      }
     }
     catch(e){
      console.log("Error occured")
     }
  }
  

  const onAddToFavorite = async (obj) => {
    try{
      if(favorites.find((item) => Number(item.id) === Number(obj.id))){
        await axios.delete(`https://63e61cc683c0e85a868ce098.mockapi.io/favorites/${obj.id}`)
        //setFavorites((prev) => prev.filter(item => item.id !== obj.id))
      }
      else {
        axios.post("https://63e61cc683c0e85a868ce098.mockapi.io/favorites", obj).then(res => setFavorites(prev => [...prev, res.data]))
      }
    }
    catch(e){
      console.log(e)
    }
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return ( 
    <AppContext.Provider>
      <div className="wrapper clear">
      {cartOpened && <Drawer items={cartItems} closeButton={() => {setCardOpened(false)}} onRemove={onRemoveCartItem}/>}
      <Header onClickCart={() => {setCardOpened(true)}}/>       
        <Routes>
          <Route path="/" element={<Home 
          items={items} 
          favorites={favorites} 
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          onAddToCart={onAddToCart}
          onChangeSearchInput={onChangeSearchInput}
          onAddToFavorite={onAddToFavorite}
          />}></Route>
          <Route path="/favorite" element={<Favorite favorites={favorites} onAddToFavorite={onAddToFavorite}/>}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
