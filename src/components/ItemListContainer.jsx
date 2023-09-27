import React from 'react';
import { pedirDatos } from '../data/pedirDatos';


import {useEffect,useState} from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom';




const ItemListContainer =() => {
    



    const[productos,setProductos] = useState([])

    const genero = useParams().genero
    console.log(genero)

    useEffect(() =>{
        pedirDatos().
        then((res) =>{
            if(genero){
                setProductos(res.filter((prod) => prod.genero === genero) )
            }else{
                setProductos(res)
            }
            
        })
    },[genero])

    return (
        <div className="item-list-container">
            
            <ItemList productos ={productos}/>
        
        </div>
    );
}


export default ItemListContainer;