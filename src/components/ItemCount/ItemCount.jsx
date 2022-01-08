import React, { useState} from "react";
import Button from '@mui/material/Button';

export default function ItemCount({data, onAdd}) {

    const [itemCount, setItemCount] = useState(1)


    const updateItem=() => {
    if (itemCount===data.stock){
        return;
    }
       setItemCount(itemCount+1)
       
   }


 
   const removeItem=() => {
    if (itemCount===1){
        return;
    }
       setItemCount(itemCount-1)
       
   }


    return (
        <div className="card-item-product">

                       
            <div className="stock-container">
                          
                       <Button variant="contained"  onClick={removeItem}> - </Button>
                           <h3>{itemCount}</h3>
                           <Button variant="contained" onClick={updateItem}> + </Button>
                       </div>
                      
                   
                       <Button  onClick={()=>onAdd(itemCount)}  variant="contained" style={{
                        backgroundColor: "green",
                        color: "white",
                        marginBottom: "2rem"
                        }}>  Agregar a Carrito
                    </Button>
           
            </div>
    )
}