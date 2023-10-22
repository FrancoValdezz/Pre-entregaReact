import './App.css'

import NavBar from '/src/components/NavBar';
import ItemListContainer from '/src/components/ItemListContainer';
//details
import ItemDetailContainer from './components/ItemDetailContainer';


import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { useContext, useState } from 'react';

import { CartContext } from './context/CartContex';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout'






function App() {
  



  
  const [carrito,setCarrito] = useState([])
  
    

  
  /* cantidad en carrito */
  
  /* const cantidadEnCarrito = () => {
        return carrito.reduce((acc,prod)=> acc + prod.cantidad,0)
    } */
  
  
  
  

  return (
      <CartContext.Provider value={{carrito,setCarrito}}>
        <BrowserRouter>
          <NavBar  /* carrito={carrito} *//>

          <Routes>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/productos/:genero' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            {/* Ruta de contactos */}
            <Route path='/carrito' element={<Carrito/>}/>
            <Route path= '/checkout' element={<Checkout/>}/>
          </Routes>

        </BrowserRouter>
      </CartContext.Provider>
  )
}

export default App
