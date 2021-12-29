import React, {useEffect,useState, useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'
import cartContext from '../../context/cartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import ModalCart from '../ModalCart/ModalCart';

const CardWidget= () => {

    const [showCart, setShowCart]= useState(false)
    
    useEffect(() => {

    })

    const{products,totalPrice,clearCart,removeItem}=useContext(cartContext)

    const openCart = () => {
        
        setShowCart(!showCart)
    }



const deleteProduct = () =>{
    console.log("producto para borrar: ",products.name)
    
}

console.log("prod agreg al carrit",products)

    return(
        <div className="cart-container">
           <ShoppingCartIcon onClick={openCart}/>
           {showCart && <ModalCart products={products} total={totalPrice}/>}
           
        </div>
    )
}

export default CardWidget;