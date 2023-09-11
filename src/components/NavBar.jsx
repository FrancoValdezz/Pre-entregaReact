import React from 'react';
//creacion del div del centro links clickleabes
const LinksExploration = ({text}) =>{
    return(
        <div className='links'>
            <ul>
                <li>
                    <a href="#">Inicio</a>
                    <a href="#">Productos</a>
                    <a href="#">Hombre</a>
                    <a href="#">Mujer</a>
                    <a href="#">Ayuda</a>
                </li>
            </ul>
        </div>
    )
}
//mi div cartwidget 
const CartWidget = ()=>{
    const contadorCarrito = 3;

    return (
        <div className="cart-widget">
            <i class="fa-regular fa-user"></i>
            <i className="fas fa-shopping-cart"></i> {/* Ícono del carrito */}
            <span className="numero-carrito">{contadorCarrito}</span> {/* Notificación */}
        </div>
);
}


function NavBar() {
    return (
    <nav className='navbar'>
        <img src="/src/assets/adidas.png" alt="Logo" />
        <LinksExploration/>
        <CartWidget/>
    </nav>
    );
}

export default NavBar;