import React, { useEffect,useState } from "react"
import { pedirId } from '../data/pedirDatos';


const ItemDetailContainer = ({itemId}) =>{

    const[item,setItem] = useState(null)
    console.log(item)
    useEffect(() =>{
        //ejecuto la funcion para comparar por id que esta en pedirDatos.js
        pedirId(itemId)
        .then((res) =>{
            setItem(res)
        })
    })


    return(
        
        <div className="container">
            { item &&
            <div className="producto">
                <h2>{item.titulo}</h2>
                <img src={item.imagen} alt="" />
                <p>Precio ${item.precio}</p>
                <p>{item.descripcion}</p>
            </div>    
            }
        </div>
    )
}



export default ItemDetailContainer