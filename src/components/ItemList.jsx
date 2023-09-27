import React from "react";
import Item from "./Item";

const ItemList = ({productos}) => {
    console.log(productos)
    return(
        <div className="productos">
            { productos.map((products)  => 
            <Item producto={products} key = {products.id}/>)}
        </div>
    )
}

export default ItemList