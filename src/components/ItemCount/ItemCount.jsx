import react, { useEffect,useState } from 'react'
import Button from '@mui/material/Button';


export default function ItemCount({data}) {

   
console.log("la info",{data})
    const [itemCount,setItemCount]=useState(0);

 
    const updateItem=() => {
        
        if ( data.stock>0) {
        setItemCount(itemCount +1)
        data.stock--
        }
        
    }

    const removeItem=() => {
        if (itemCount >0) {
            setItemCount(itemCount -1)
            data.stock++
            }
    }


  

    return(


        <>

    

            <div className="stock-container">
                
            <Button variant="contained"  onClick={removeItem}> - </Button>
            <h3>{itemCount}</h3>
            
            <Button variant="contained" onClick={updateItem}> + </Button>
            </div>
            <div className="stockProduct">
            <span>Stock:{data.stock}</span>
            </div>
            
            

           
        </>
        
    )

}