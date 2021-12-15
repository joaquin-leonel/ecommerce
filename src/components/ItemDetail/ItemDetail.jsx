import {useState} from 'react'
import './ItemDetail.css'
import Button from '@mui/material/Button';
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom'

export default function ItemDetail ({data}) {
    
    const [quantityItem,setQuantityItem] = useState(0)
    const [itemCart,setItemCart]= useState(
        {
            id:data.id,
            nombre:data.name,
            quantity:0
        }
    )

    const onAdd =(value) =>{
        console.log("items add ",value)
        itemCart.quantity=value
    }

const sendItem =() => {
    console.log("itemcart: ",itemCart)
}

    return(
        <div className="ItemDetailCard">
            <div className="ItemDetail">
                <img  className="itemImage" src={`../../assets/${data.img}`} alt="imagen del producto" />
                <div className="itemInfo">
                    <h2 className="nameItemDetail"> {data.name} </h2>
                    <p className="exPriceBox">$ {(data.price*data.discount/100)+data.price}</p>
                    
                    <div className="priceBox">
                        <p className="priceVal">$ {data.price}</p>
                        <p className="discountVal">20% OFF</p>
                    </div>
                    
                    <ItemCount data={data} onAdd={onAdd}/>
                    <p className="stockBox"><strong>{data.stock} unidades Disponibles </strong></p>

                    <p>Detalles de producto</p>
                    <p className='descItem'>{data.description}</p>
                   
                    <Link to='/cart'  style={{textDecoration:'none' }}>
                    <Button onClick={sendItem}   variant="contained" style={{
                        backgroundColor: "green",
                        color: "white",
                        marginBottom: "2rem"
                        }}>  Agregar a Carrito
                    </Button>
                    </Link>
                </div>
                
            </div>
        </div>
    )
}