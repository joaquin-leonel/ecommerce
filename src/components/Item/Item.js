import react, { useEffect,useState } from 'react'
import Button from '@mui/material/Button';
import './Item.css'


export default function Item({data}) {

    const [itemCount,setItemCount]=useState(1);

    const updateItem=() => {
        if (itemCount < data.stock) {
        setItemCount(itemCount +1)
        }

    }

    const removeItem=() => {
        if (itemCount >1) {
            setItemCount(itemCount -1)
            }
    }


   

    return(


        <div>

            <h2>{data.name}</h2>
            
            <div className="itemImage">
            <img src={`../../assets/${data.img}`} alt="imagen del producto" />
            </div>

            <div className="stock-container">
            <Button variant="contained"  onClick={removeItem}> - </Button>
            <h3>{itemCount}</h3>
            
            <Button variant="contained" onClick={updateItem}> + </Button>
            </div>
            <div className="stockProduct">
            <span>Stock:{data.stock}</span>
            </div>
            
            

            <Button variant="contained" style={{
                    backgroundColor: "green",
                    color: "white",
                    marginBottom: "2rem"
                }}>Agregar a Carrito</Button>
        </div>
        
    )

}
