import ItemList from "./ItemList"
import { Link } from "react-router-dom"


const Item = ({producto})=>{
    
    return(
        <div className="cardProduct">
            <h2>{producto.titulo}</h2>
            <img src={producto.imagen} alt="" />
            <div className="cardInfo">
                <p>Precio ${producto.precio}</p>
                <Link className="ver" to={`/item/${producto.id}`}>Ver</Link>
            </div>
        </div>
    )
}







export default Item 