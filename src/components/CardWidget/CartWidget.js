import React, {useEffect,useState, useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'
import cartContext from '../../context/cartContext';


const CardWidget= () => {

    const [showCart, setShowCart]= useState(false)
    
    useEffect(() => {

    })

    const{products}=useContext(cartContext)

    const openCart = () => {
        
        setShowCart(!showCart)
    }

console.log("prod agreg al carrit",products)

    return(
        <div className="cart-container">
           <ShoppingCartIcon onClick={openCart}/>
          
           {showCart ? 
           <div className={`box-cart ${showCart && 'active'}`}>
               {products.map((product) =>{
                   return(
                    <div className='item-cart-list'>
                        <div>
                        <img className="cartImage" src={`../../assets/${product.image}`} alt="imagen del producto" />
                        </div>
                        <p className="infoCart">{product.nombre}</p>
                         <p className="infoCart"> Precio: ${product.price}</p>
                        
                        <p className="infoCart"> Stock: {product.quantity}</p>
                        </div> 
                   )
               })}
                        
            
           </div> :null}
       
        </div>
    )
}

export default CardWidget;