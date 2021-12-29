import {createContext, useState} from 'react';

const cartContext = createContext();

const CartProvider =({children}) => {
const [products, setProducts] = useState([]);
const [totalPrice, setTotalPrice] = useState(0);

 const isInCart =id => products.some(product=>product.id ===id)


 const addProducts = (product,quantity) =>{
       if (isInCart(product.id)){
           const newAddProducts = products.map(currentElement=>{
               if(currentElement.id === product.id){
                   console.log("el current tiene",currentElement.quantity)
                   setTotalPrice(totalPrice+ product.price * product.quantity)
                   console.log("preciototal1 ",totalPrice+ product.price * product.quantity)
                return{...currentElement, quantity: currentElement.quantity + 1}
              
                }else return currentElement
               })
           setProducts(newAddProducts)
           setTotalPrice(totalPrice+ product.price * product.quantity)
           console.log("preciototal2 ",totalPrice+ product.price * product.quantity)
       }else{
        setProducts([...products,product])
        setTotalPrice(totalPrice+ product.price * product.quantity)
        console.log("preciototal3 ",totalPrice+ product.price * product.quantity)
     
      }
    }
   
const clearCart = () => setProducts([]) 
    const removeItem = (id) => setProducts(products.filter(product=>product.id !==id)); 
  

    const data= {
        products,addProducts,totalPrice,clearCart,removeItem,isInCart
    }

    return (
        <cartContext.Provider value={data}>
            {children}
        </cartContext.Provider>
    )

}

export default cartContext
export {CartProvider}
