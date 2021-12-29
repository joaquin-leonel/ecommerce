
import React, {useContext} from 'react'
import cartContext from '../../context/cartContext'

export default function CartPage() {
const {products, totalPrice} = useContext(cartContext)
console.log("los productos desde cartpage: ", products)

    return(
      <>
        <h1>Contenido de Carrito</h1>

       {products.map((product) =>{
           return(
               <div key={product.id}>
                    <p>nombre:{product.nombre}</p>
                    <p>precio:{product.price}</p>
                    <p>cantidad:{product.quantity}</p>
                    <img className="cartImage" src={`../assets/${product.image}`} alt="imagen del producto" />
               </div>
             )
       })}
       <h2>Subtotal: {totalPrice}</h2>
   </>
    )

    
}