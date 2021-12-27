import {createContext, useState} from 'react';

const cartContext = createContext();

const CartProvider =({children}) => {
const [products, setProducts] = useState([]);

 const isInCart =id => products.some(product=>product.id ===id)


 const addProducts = (product,quantity) =>{
       if (isInCart(product.id)){
           const newAddProducts = products.map(currentElement=>{
               if(currentElement.id === product.id){
                   console.log("el current tiene",currentElement.quantity)
                return{...currentElement, quantity: currentElement.quantity + 1}
                }else return currentElement
               })
           setProducts(newAddProducts)
       }else{
        setProducts([...products,product])
      }
    }


    const clearCart = () => setProducts([]);
    const removeItem = (id) => setProducts(products.filter(product=>product.id !==id)); 
  

    const data= {
        products,addProducts,clearCart,removeItem,isInCart
    }

    return (
        <cartContext.Provider value={data}>
            {children}
        </cartContext.Provider>
    )

}

export default cartContext
export {CartProvider}
