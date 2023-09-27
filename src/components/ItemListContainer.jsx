import React from 'react';
import { pedirDatos } from '../data/pedirDatos';


import {useEffect,useState} from 'react'
import ItemList from './ItemList'




const ItemListContainer =() => {
    
    const[productos,setProductos] = useState([])
    useEffect(() =>{
        pedirDatos().
        then((res) =>{
            setProductos(res)
        })
    },[])

    return (
        <div className="item-list-container">
            
            <ItemList productos ={productos}/>
        
        </div>
    );
}


export default ItemListContainer;