import React, {useState, useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'
import cartContext from '../../context/cartContext';
import DeleteIcon from '@mui/icons-material/Delete';


import {Link} from 'react-router-dom' 


const CartWidget= () => {

    const [showCart, setShowCart]=useState (false)
    const{products,totalPrice,clearCart,removeItem,totalFinal}=useContext(cartContext)
    const openCart =()=>{
        setShowCart (!showCart)
    }

    return (

        <div className="cart-container">
            
            <ShoppingCartIcon onClick={openCart}/>


            {showCart ?
            <div className={`box-cart active'}`}>
            {products.length===0 ? (
                <h2>El carrito de compras esta vacio.</h2>
            ) :(
               <>
                {products.map((product) =>{
                return(
                      <div className='item-cart-list'>
                     <div>
                     <img  className="cartImage" src={`../../assets/${product.image}`} alt="imagen" />
                     </div>
                     <p  className="infoCart"> <strong> {product.name}  </strong> </p>
                     <p  className="infoCart">Precio:$ <strong> {product.price}  </strong></p>
                    <p  className="infoCart">Cantidad: <strong> {product.quantity} </strong></p>
                     <DeleteIcon  onClick={()=>{removeItem(product.id)}}/> 
                     </div> 
                    
                     

                )
            })}
                     
                    
             <div className='total-box'>
                 <div className='total-child'>
                <p>Total</p>
                </div>
                <div className='total-child'>
                 <span>$ {totalFinal}</span>
                 </div>
             </div>

                 <div className='btn-box'>
                    <div className='btn-child'>
                    <button className='btn-compra' onClick={()=> {clearCart() ; openCart()}}> Vaciar todo el Carrito</button>
                    </div>

                    <div className='btn-child'>
                    <Link to='/cart'><button onClick={openCart} className='btn-compra'>Finalizar Compra</button></Link>
                    </div>
                 </div>
               </> 
            )}
           
        </div> :null}
        </div> 
    )
    
}
export default CartWidget