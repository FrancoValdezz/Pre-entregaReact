import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import NavBar from '/src/components/NavBar';
import ItemListContainer from '/src/components/ItemListContainer';


function App() {

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting = "Esta es mi pre-entrega"/> 
    </div>
  )
}

export default App
