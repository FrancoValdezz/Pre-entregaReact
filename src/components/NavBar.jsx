import React from 'react';
import App from '../App';
import ItemListContainer from './ItemListContainer';
import { Link } from 'react-router-dom';
import CartWidget from './CardWidget';






function NavBar({name}) {
    return (
    <nav className='navbar'>
        <Link href="/"><img src="/src/assets/adidas.png" alt="Logo" /></Link>
        <div className='links'>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                    
                    <Link to="/productos/hombre">Hombre</Link>
                    <Link to="/productos/mujer">Mujer</Link>
                </li>
            </ul>
        </div>
        <CartWidget name = {name}/>
    </nav>
    );
}

export default NavBar;