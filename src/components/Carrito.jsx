import React, { useContext, useEffect } from 'react'
import { CartContext } from '../context/CartContex'

import { Link } from 'react-router-dom'

const Carrito = () => {
    const {carrito,setCarrito} = useContext(CartContext)
    console.log(carrito)

    const handleVaciar = () =>{
        setCarrito([])
    }

    
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]); 
    

    return (
    <div className='container'>
        <h1>carrito</h1>
        {
            carrito.map((prod)=>(
                <div className='detailProducto' key={prod.id}>
                    <h2>{prod.titulo}</h2>
                    <p>Precio producto:{prod.precio}</p>
                    <p>Precio total: {prod.precio * prod.cantidad}</p>
                    <p>Cantidad del producto: {prod.cantidad}</p>
                    <div className='actions'>
                        <button on onClick={handleVaciar}>Vaciar carrito</button>
                        <Link to='/checkout'>Finalizar compra</Link>
                    </div>
                </div>
            ))
        }
        
        
        
        {
            carrito.length !== 0 
            ? 
                <>
                    
                    
                </>
            : /* Aca se ejecuta cuando monta cuando esta vacio */
                <div>
                    
                    <h2>Todavia no has realizado ningua compra</h2>
                    <p>Ve a <Link to="/">Inicio</Link> para asi completar tu compra</p>
                </div>
            
            
        }
    </div>
    )
}

export default Carrito
