import './App.css'

import NavBar from '/src/components/NavBar';
import ItemListContainer from '/src/components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';


function App() {
  

  return (
    <div>
      <NavBar/>
      <ItemListContainer greeting = "Esta es mi pre-entrega"/> */
      <ItemDetailContainer itemId ={2}/>
    </div>
  )
}

export default App
