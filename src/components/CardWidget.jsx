import React, { useContext, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContex";

const CartWidget = ({name})=>{
    

    const{carrito} = useContext(CartContext)
    

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0)
    } 
    
    

    return (
        
        <div className="cart-widget">
            

            
            
            <Link to="/carrito"><i className="fas fa-shopping-cart"></i></Link> {/* Ícono del carrito */}
            <span className="numero-carrito">{cantidadEnCarrito}</span> 
            
        </div>
);
}


export default CartWidget