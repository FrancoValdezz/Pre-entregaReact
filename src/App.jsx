import './App.css'

import NavBar from '/src/components/NavBar';
import ItemListContainer from '/src/components/ItemListContainer';
//details
import ItemDetailContainer from './components/ItemDetailContainer';

import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  

  return (
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/productos/:genero' element={<ItemListContainer/>}/>
          <Route path='/item/:id' element={<ItemDetailContainer />} />
        </Routes>

      </BrowserRouter>
  )
}

export default App
