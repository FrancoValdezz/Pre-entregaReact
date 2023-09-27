import ItemList from "./ItemList"

const Item = ({producto})=>{
    
    return(
        <div className="CardProduct">
            <h2>{producto.titulo}</h2>
            <img src={producto.imagen} alt="" />
            <p>Precio ${producto.precio}</p>
            <a className="ver" href={`/item/${producto.id}`}>Ver</a>
        </div>
    )
}







export default Item 