import react, {useState,useEffect} from 'react'
import Button from '@mui/material/Button';
import './Product.css'

export default function Product({stock,nombreProducto}) {

const [itemCount,setItemCount]=useState(1);

const updateItem=() => {
    if (itemCount < stock) {
    setItemCount(itemCount +1)
    }

}

const removeItem=() => {
    if (itemCount >1) {
        setItemCount(itemCount -1)
        }
}


return(
   

    <div >

        <h2>{nombreProducto}</h2>
        
        <div className="stock-container">
        <Button variant="contained" onClick={removeItem}> - </Button>
        <h3>{itemCount}</h3>
        <Button variant="contained" onClick={updateItem}> + </Button>
        </div>
        <div className="stockProduct">
        <span>Stock:{stock}</span>
        </div>
        <Button variant="contained" style={{
                backgroundColor: "green",
                color: "white",
                marginBottom: "2rem"
              }}>Agregar a Carrito</Button>
    </div>


)

}