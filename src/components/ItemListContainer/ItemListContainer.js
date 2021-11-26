import react from "react";
import './ItemListContainer.css'
import Product from '../Product/Product'

function ItemListContainer() {
    return(
        <>
        
         <h1>Productos</h1>
     <div className="itemCard">
     <Product nombreProducto={'placa de video'} stock={10}/> 
     </div>
     <div className="itemCard">
     <Product nombreProducto={'Memoria Ram '} stock={5}/>
     </div> 
     <Product nombreProducto={'Procesador'} stock={8}/> 
     <Product nombreProducto={'Motherboard'} stock={4}/> 

    </>
 
    )
}

export default ItemListContainer