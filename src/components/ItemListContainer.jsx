import React from 'react';
import { pedirDatos } from '../data/pedirDatos';


import {useEffect,useState} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';



/* importar cosas firedatabase */

import { collection, getDocs,query, where} from "firebase/firestore"
import { db } from "../firebase/confing"



const ItemListContainer =() => {
    

    const[productos,setProductos] = useState([])

    const genero = useParams().genero
    console.log(genero)

    useEffect(() =>{   
        
        const productosRef = collection(db,'productos')

        /* como me voy a trabar un dia con estoooooooo la concha de su madre */
        const q = genero ? query(productosRef, where("genero","==", genero)) :productosRef

        getDocs(q)
            .then((respuesta)=>{
                
                setProductos(
                    respuesta.docs.map((doc)=>{
                        return {...doc.data(),id: doc.id}
                    })
                )
            })

        /* pedirDatos().
        then((res) =>{
            if(genero){
                setProductos(res.filter((prod) => prod.genero === genero) )
            }else{
                setProductos(res)
            }
            
        }) */
    },[genero])

    return (
        <div className="item-list-container">
            
            <ItemList productos ={productos}/>
        
        </div>
    );
}


export default ItemListContainer;