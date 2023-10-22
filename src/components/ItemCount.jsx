import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContex'



export const ItemCount = ({item}) => { 

    const{carrito,setCarrito} = useContext(CartContext)

    const [cantidad,setCantidad] = useState(1)

    const handleSuma = ()=>{
        setCantidad(cantidad + 1)
    }

    const handleResta = ()=>{
        {cantidad > 1 && setCantidad(cantidad - 1)}
        
    }

    
    const handleAgregar = () =>{
        const itemAgregado = {...item, cantidad}
        const nuevoCarrito = [...carrito]
        const itemEnCarrito = nuevoCarrito.find((producto)=> producto.id === itemAgregado.id )
        
        /* Si esta en el carrito buscar la propiedad cantidad y la sumo */
        if(itemEnCarrito){
            itemEnCarrito.cantidad = itemEnCarrito.cantidad + cantidad
            /* seteo el carrito con el nuevo carrito ya que no va atener otro elemento mas si 
            no que cambiaria el valor de la propiedad cantidad */
            setCarrito (nuevoCarrito)
        }else{
            nuevoCarrito.push(itemAgregado)
            setCarrito(nuevoCarrito)
        }
        
        
        
        
    }
    


    return (
        <div className='botones'>
            
            <p>Cantidad {cantidad}</p>
            <button className='buttonResta' onClick={handleResta}>--</button>
            <button className='buttonSuma' onClick={handleSuma}>+</button>
            <button className='buttonAdd' onClick={handleAgregar}>Agregar</button>
        </div>
    )
}


export default ItemCount