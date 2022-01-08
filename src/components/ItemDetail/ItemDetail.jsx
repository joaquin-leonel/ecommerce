import {useState, useContext} from 'react'
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import cartContext from '../../context/cartContext';

export default function ItemDetail ({data}) {
    
    // const [quantityItem,setQuantityItem] = useState(0)
    const {addProducts, products} = useContext(cartContext)
  

const  itemCart={
    id:data.id,
   name:data.name,
   price:data.price,
   image:data.img,
   quantity:1,
}

const onAdd= (quantity) => {
    addProducts(itemCart,quantity)
 }


    return(
        <div className="ItemDetailCard">
            <div className="ItemDetail">
                <img  className="itemImage" src={`../../assets/${data.img}`} alt="imagen del producto" />
                <div className="itemInfo">
                    <h2 className="nameItemDetail"> {data.name} </h2>
                    <p className="exPriceBox">$ {(data.price*20/100)+data.price}</p>
                    
                    <div className="priceBox">
                        <p className="priceVal">$ {data.price}</p>
                        <p className="discountVal">20% OFF</p>
                    </div>
                    
                   
                    <p className="stockBox"><strong>{data.stock} unidades Disponibles </strong></p>

                    <p>Detalles de producto</p>
                    <p className='descItem'>{data.description}</p>
                   <ItemCount data={data} onAdd={onAdd}/>
                   
                   
                   
                </div>
                
            </div>
        </div>
    )
}