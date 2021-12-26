import {createContext, useState} from 'react';

const cartContext = createContext();

const CartProvider =({children}) => {
    const [products, setProducts] = useState([]);

    const addProducts = (product) =>{
      setProducts([...products,product])
    }

    const data= {
        products,addProducts
    }

    return (
        <cartContext.Provider value={data}>
            {children}
        </cartContext.Provider>
    )

}

export default cartContext
export {CartProvider}
