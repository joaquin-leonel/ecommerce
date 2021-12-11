import react from 'react'
import './ItemDetail.css'
import Button from '@mui/material/Button';

export default function ItemDetail ({data}) {
    
    return(
        <div className="ItemDetailCard">
            <div className="ItemDetail">
                <img src={`../../assets/${data.img}`} alt="imagen del producto" />
                <div className="itemInfo">
                    <h2 className="nameItemDetail"> {data.name} </h2>
                    <p className="exPriceBox">$ {(data.price*data.discount/100)+data.price}</p>
                    
                    <div className="priceBox">
                        <p className="priceVal">$ {data.price}</p>
                        <p className="discountVal">20% OFF</p>
                    </div>
                    
                    <p className="stockBox"> {data.stock} unidades Disponibles</p>

                    <Button variant="contained" style={{
                        backgroundColor: "green",
                        color: "white",
                        marginBottom: "2rem"
                        }}>Agregar a Carrito
                    </Button>
                </div>
                
            </div>
        </div>
    )
}