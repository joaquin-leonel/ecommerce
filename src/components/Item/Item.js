import react, {useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import Button from '@mui/material/Button';
import './Item.css'

import { Link } from 'react-router-dom'

export default function Item({data}) {


    return(


        <div>
            <Link to={`/item/${data.id}`} style={{ textDecoration:'none' }}>
                <h2>{data.name}</h2>
                
                
                <img  className="itemImage" src={`../../assets/${data.img}`} alt="imagen del producto" />
                

                <div>Stock disponible: {data.stock}</div>

                <Button variant="contained" style={{
                        backgroundColor: "green",
                        color: "white",
                        marginBottom: "2rem"
                }}>Agregar a Carrito</Button>
            </Link>
        </div>
        
    )

}
