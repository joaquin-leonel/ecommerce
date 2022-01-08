
import React, {useContext} from 'react'
import cartContext from '../../context/cartContext'
import './CartPage.css'

export default function CartPage() {
const {products, totalPrice,totalFinal} = useContext(cartContext)
console.log("los productos desde cartpage: ", products)


    return(
      <>
        <h1>Contenido de Carrito</h1>

       {products.map((product) =>{
           return(
               <div className='cartContainer' key={product.id}>
                   <img className="cartImage" src={`../assets/${product.image}`} alt="imagen del producto" />
                    <p className='pCart'>{product.name}</p>
                    <p className='pCart'>{product.quantity} Unidades</p>
                    <p className='pCart'>precio: ${product.price}</p>
                  
               </div>
             )
       })}
       <h2>Subtotal: {totalFinal}</h2>
   </>
    )

    
}