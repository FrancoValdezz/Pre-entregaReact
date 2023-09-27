import React from 'react';
import App from '../App';
import ItemListContainer from './ItemListContainer';
import { Link } from 'react-router-dom';


//creacion del div del centro links clickleabes
const LinksExploration = ({text}) =>{
    return(
        <div className='links'>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                    <Link to="/">Productos</Link>
                    <Link to="/productos/hombre">Hombre</Link>
                    <Link to="/productos/mujer">Mujer</Link>
                    <Link to="/">Ayuda</Link>
                </li>
            </ul>
        </div>
    )
}


//mi div cartwidget 
const CartWidget = ()=>{
    
    return (
        
        <div className="cart-widget">
            <i class="fa-regular fa-user"></i>
            <i className="fas fa-shopping-cart"></i> {/* Ícono del carrito */}
            <span className="numero-carrito">0</span> 
            
        </div>
);
}



function NavBar() {
    return (
    <nav className='navbar'>
        <Link href="/"><img src="/src/assets/adidas.png" alt="Logo" /></Link>
        <LinksExploration/>
        <CartWidget/>
    </nav>
    );
}

export default NavBar;