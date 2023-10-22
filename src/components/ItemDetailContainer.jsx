import React, { useEffect,useState } from "react"
import { pedirId } from '../data/pedirDatos';
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

import {doc,getDoc} from "firebase/firestore"
import {db} from "../firebase/confing" 

const ItemDetailContainer = () =>{
    
    const[item,setItem] = useState(null)
    
    const id = useParams().id
    

    useEffect(() =>{
        const docRef = doc(db,"productos",id)

        getDoc(docRef)
            .then((resp)=>{
                setItem(
                    ({...resp.data(),id: resp.id  
                    }))
                
            })

    },[id])

    
    

    
    return(
        
        <div className="container">
            <h2>Detalles del producto</h2>
            { item &&
            
            <div className="cardProduct">
                
                <h2>{item.titulo}</h2>
                <img src={item.imagen} alt="" />
                <div className="cardInfo">
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="precio">Precio ${item.precio}</p>

                    <ItemCount item={item}/>
                </div>
            </div>    
            }
        </div>
    )
}



export default ItemDetailContainer