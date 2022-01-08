import React, {useEffect,useState, useContext} from 'react'
import cartContext from '../../context/cartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom' 


export default function ModalCart({products}){

    const{clearCart,removeItem,totalFinal}=useContext(cartContext)

    return(
               
        <div className={`box-cart active'}`}>
            {products.length===0 ? (
                <h2>el carrito esta vacio</h2>
            ) :(
               <>
                {products.map((product) =>{
                return(
                      <div className='item-cart-list'>
                     <div>
                     <img className="cartImage" src={`../../assets/${product.image}`} alt="imagen del producto" />
                     </div>
                     <p className="infoCart">{product.nombre}</p>
                      <p className="infoCart"> Precio: ${product.price}</p>
                     
                     <p className="infoCart"> cantidad: {product.quantity}</p>
                     <DeleteIcon onClick={()=>{removeItem(product.id)}}/>
                     </div> 
                    
                     

                )
            })}
                     
                    
                     <div>
                         <p>Total</p>
                         <span>$ {totalFinal}</span>
                    </div>

                    <button onClick={()=>{clearCart()}}> Vaciar Carrito</button>
                     <Link to='/cart'><button>Finalizar Compra</button></Link>

               </> 
            )}
           
        </div> 
    )
    
}