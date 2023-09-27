import React, { useEffect,useState } from "react"
import { pedirId } from '../data/pedirDatos';
import { useParams } from "react-router-dom";


const ItemDetailContainer = () =>{
    
    const[item,setItem] = useState(null)
    
    const id = useParams().id


    useEffect(() =>{
        //ejecuto la funcion para comparar por id que esta en pedirDatos.js
        pedirId(Number(id))
        .then((res) =>{
            setItem(res)
        })
    },[id])


    return(
        
        <div className="container">
            { item &&
            <div className="cardProduct">
                <h2>{item.titulo}</h2>
                <img src={item.imagen} alt="" />
                <div className="cardInfo">
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="precio">Precio ${item.precio}</p>
                    
                </div>
            </div>    
            }
        </div>
    )
}



export default ItemDetailContainer