import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContex'
import { useForm } from 'react-hook-form'

import { collection,addDoc } from 'firebase/firestore'
import { db } from '../firebase/confing'

const Checkout = () => {

    /* manejar ultimo id */
    const [pedidoId,setPedidoId] = useState('')
    
    const{carrito} = useContext(CartContext)
    const{register,handleSubmit} = useForm()

    const total = () =>{
        return carrito.reduce((acc,producto) => acc + producto.precio * producto.cantidad,0)
    }

    const enviar = (data) =>{
        const pedido = {
            cliente:data,
            productos : carrito,
            total: total()
        }
        console.log(pedido)
        const pedidosRef = collection(db,'pedidos')

        addDoc(pedidosRef,pedido)
            .then((doc)=>{
                setPedidoId(doc.id)
                
            })
    }
    if(pedidoId){
        return(
            <div className='container'>
                
                <h2>Gracias por su compra, su id de seguimiento es: {pedidoId}</h2>
            </div>
        )
    }

    return (


    <div className='container'>
        <div className='containerForm'>
            <h1>Checkout</h1>
            <form className='form' onSubmit={handleSubmit(enviar)}>
                <h2>Ingrese sus datos</h2>
                <input type="text" placeholder='Ingrese su nombre'{...register('nombre')} />
                <input type="email" placeholder='Ingrese su mail'{...register('email')} />
                <input type="telefono" placeholder='Ingrese su numero de telefono '{...register('telefono')} />

                <button type='submit'> Enviar</button>
            </form>
        </div>
    </div>
    ) 
}

export default Checkout